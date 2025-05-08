import mysql from 'mysql2/promise';


export async function POST(req) {
  try {
    const body = await req.json();

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    // 1. Insert ke tabel ayah
    const [ayahResult] = await connection.execute(
      `INSERT INTO ayah (nama,  tempat_lahir, tanggal_lahir, agama, kewarganegaraan, pekerjaan, pendidikan, status_dalam_keluarga)
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

    // 2. Insert ke tabel ibu
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

    // 3. Insert ke tabel anak, sertakan ayah_id dan ibu_id
    await connection.execute(
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

    await connection.end();

    return new Response(JSON.stringify({ message: 'Pendaftaran berhasil!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
