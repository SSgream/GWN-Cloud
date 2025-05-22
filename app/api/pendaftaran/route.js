import mysql from 'mysql2/promise';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const bucketName = process.env.AWS_BUCKET_NAME;

export async function POST(req) {
  try {
    const form = await req.formData();

    // Ambil field non-file dari formData
    const body = {};
    for (const [key, value] of form.entries()) {
      if (typeof value === 'string') {
        body[key] = value;
      }
    }

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Insert data ayah
    const [ayahResult] = await connection.execute(
      `INSERT INTO ayah (nama, tempat_lahir, tanggal_lahir, agama, kewarganegaraan, pekerjaan, pendidikan, status_dalam_keluarga)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        body.ayah_nama,
        body.ayah_tempat_lahir,
        body.ayah_tanggal_lahir,
        body.ayah_agama,
        body.ayah_kewarganegaraan,
        body.ayah_pekerjaan,
        body.ayah_pendidikan,
        body.ayah_status_ayah,
      ]
    );
    const ayahId = ayahResult.insertId;

    // Insert data ibu
    const [ibuResult] = await connection.execute(
      `INSERT INTO ibu (nama, tempat_lahir, tanggal_lahir, agama, kewarganegaraan, pekerjaan, pendidikan, status_dalam_keluarga)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        body.ibu_nama,
        body.ibu_tempat_lahir,
        body.ibu_tanggal_lahir,
        body.ibu_agama,
        body.ibu_kewarganegaraan,
        body.ibu_pekerjaan,
        body.ibu_pendidikan,
        body.ibu_status_ibu,
      ]
    );
    const ibuId = ibuResult.insertId;

    // Insert data pendaftar_siswa tanpa file_paths dulu
    const [pendaftarResult] = await connection.execute(
      `INSERT INTO pendaftar_siswa
        (nama_lengkap, nama_panggilan, tempat_lahir, tanggal_lahir, jenis_kelamin, anak_ke, jumlah_saudara, agama, status_dalam_keluarga, kewarganegaraan, id_ayah, id_ibu)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        body.nama_lengkap,
        body.nama_panggilan,
        body.tempat_lahir,
        body.tanggal_lahir,
        body.jenis_kelamin,
        body.anak_ke,
        body.jumlah_saudara,
        body.agama,
        body.status_dalam_keluarga,
        body.kewarganegaraan,
        ayahId,
        ibuId,
      ]
    );

    const pendaftarId = pendaftarResult.insertId;

    // Ambil semua file dengan key 'berkas' dari formData
    const files = form.getAll('berkas');
    const uploadedFilePaths = [];

    for (const file of files) {
      if (!(file instanceof File)) continue; // Pastikan ini file

      const fileExtension = file.name.split('.').pop();
      const uniqueFileName = `pendaftaran/${pendaftarId}/${uuidv4()}.${fileExtension}`;

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadParams = {
        Bucket: bucketName,
        Key: uniqueFileName,
        Body: buffer,
        ContentType: file.type,
      };

      await s3.send(new PutObjectCommand(uploadParams));

      uploadedFilePaths.push(uniqueFileName);
    }

    // Update file_paths di database (JSON array string)
    if (uploadedFilePaths.length > 0) {
      await connection.execute(
        `UPDATE pendaftar_siswa SET file_path = ? WHERE id_siswa = ?`,
        [JSON.stringify(uploadedFilePaths), pendaftarId]
      );
    }

    await connection.end();

    return new Response(
      JSON.stringify({
        message: 'Pendaftaran berhasil!',
        id_pendaftar_siswa: pendaftarId,
        files: uploadedFilePaths,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
