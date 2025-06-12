import mysql from 'mysql2/promise';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const bucketName = process.env.AWS_BUCKET_NAME;

export async function POST(req) {
  let connection;
  try {
    const form = await req.formData();

    // Ambil field non-file dari formData
    const body = {};
    for (const [key, value] of form.entries()) {
      if (typeof value === 'string') {
        body[key] = value;
      }
    }

    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // Insert data ayah
    const [ayahResult] = await connection.execute(
      `INSERT INTO ayah (nama, tempat_lahir, tanggal_lahir, agama, kewarganegaraan, pekerjaan, pendidikan, status_dalam_keluarga, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
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
      `INSERT INTO ibu (nama, tempat_lahir, tanggal_lahir, agama, kewarganegaraan, pekerjaan, pendidikan, status_dalam_keluarga, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
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

    // Insert data pendaftar_siswa
    const [pendaftarResult] = await connection.execute(
      `INSERT INTO pendaftar_siswa
        (nama_lengkap, nama_panggilan, tempat_lahir, tanggal_lahir, jenis_kelamin, anak_ke, jumlah_saudara, agama, status_dalam_keluarga, kewarganegaraan, id_ayah, id_ibu, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())`,
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
    const files = form.getAll('berkas');
    const uploadedFilePaths = [];

    for (const file of files) {
      if (typeof file.name !== 'string' || typeof file.arrayBuffer !== 'function') continue;

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

      const s3Url = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${uniqueFileName}`;
      uploadedFilePaths.push(s3Url);
    }

    // Tambahkan URL file ke kolom file_path
    const filePathValue = JSON.stringify(','); // Bisa juga pakai .join(', ') kalau hanya string biasa
    await connection.execute(
      `UPDATE pendaftar_siswa SET file_path = ? WHERE id_siswa = ?`,
      [filePathValue, pendaftarId]
    );

    return NextResponse.json({
      message: 'Pendaftaran berhasil!',
      id_pendaftar_siswa: pendaftarId,
      files: uploadedFilePaths,
    }, { status: 200 });

  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    if (connection) await connection.end();
  }
}
