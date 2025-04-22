// app/api/check-connection/route.js
import mysql from 'mysql2/promise';

export async function GET() {
  try {
    // Koneksi ke AWS RDS menggunakan kredensial dari environment variables
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,   // Pastikan ini terisi dengan benar
      user: process.env.DB_USER,   // Pastikan ini terisi dengan benar
      password: process.env.DB_PASS, // Pastikan ini terisi dengan benar
      database: process.env.DB_NAME, // Pastikan ini terisi dengan benar
    });

    // Cek koneksi dengan query sederhana
    await connection.execute('SELECT 1');

    // Tutup koneksi setelah berhasil
    await connection.end();

    return new Response(JSON.stringify({ message: 'Koneksi ke database berhasil!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Gagal terhubung ke database: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}