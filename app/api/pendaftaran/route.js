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

    await connection.execute(`
      INSERT INTO ayah 
        (nama, status_dalam_keluarga, tempat_lahir, tanggal_lahir, pekerjaan, agama, pendidikan, kewarganegaraan)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      body.ayah_nama,
      body.ayah_status_ayah,
      body.ayah_tempat_lahir,
      body.ayah_tanggal_lahir,
      body.ayah_pekerjaan,
      body.ayah_agama,
      body.ayah_pendidikan,
      body.ayah_kewarganegaraan,
    ]);

    await connection.end();

    return new Response(JSON.stringify({ message: 'Data ayah berhasil disimpan' }), {
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
