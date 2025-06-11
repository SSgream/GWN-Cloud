import mysql from "mysql2/promise";

export async function POST(request) {
  try {
    const body = await request.json();
    const { nama, email, no_telpon, isi_pesan } = body;

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });

    await connection.execute(
      "INSERT INTO testimoni (nama, no_telpon, isi_pesan, tampilkan, created_at) VALUES (?, ?, ?, ?, NOW())",
      [nama, no_telpon, isi_pesan, 0]
    );

    await connection.end();

    return new Response(JSON.stringify({ message: "Data berhasil disimpan." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Gagal menyimpan", error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
