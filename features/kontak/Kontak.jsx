"use client";
import { useState } from "react";

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    no_telpon: "",
    isi_pesan: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/kontak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Testimoni berhasil dikirim!");
        setFormData({
          nama: "",
          email: "",
          no_telpon: "",
          isi_pesan: "",
        });
      } else {
        setMessage(`❌ Gagal: ${result.message}`);
      }
    } catch (error) {
      setMessage("❌ Terjadi kesalahan saat mengirim.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-44 py-12 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Kontak</h2>
        <p className="text-sm text-gray-700">
          Jika Memiliki Pertanyaan dan Testimoni Bisa Langsung Isi Form Dibawah Ini
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm">Nama</label>
            <input
              name="nama"
              type="text"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Nama kamu"
              className="w-full border-none bg-gray-100 p-3 rounded focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="emailkamu@gmail.com"
              className="w-full border-none bg-gray-100 p-3 rounded focus:outline-none"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-sm">No Telp</label>
          <input
            name="no_telpon"
            type="tel"
            value={formData.no_telpon}
            onChange={handleChange}
            placeholder="+62"
            className="w-full border-none bg-gray-100 p-3 rounded focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Isi Pesan</label>
          <textarea
            name="isi_pesan"
            rows="5"
            value={formData.isi_pesan}
            onChange={handleChange}
            placeholder="Pesan kamu"
            className="w-full border-none bg-gray-100 p-3 rounded resize-none focus:outline-none"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-700 hover:bg-green-800 text-white py-2 px-28 rounded font-semibold"
          >
            {isSubmitting ? "Mengirim..." : "Kirim"}
          </button>
        </div>
        {message && (
          <div className="text-center mt-4 text-sm text-green-700">{message}</div>
        )}
      </form>

      {/* Map + Info Sekolah */}
      <div className="flex justify-center mt-16">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1745336816116!6m8!1m7!1sEB1BSrhpBj9DfI2xhTtbcw!2m2!1d-5.434271380496616!2d120.1921382510666!3f287.16800968573915!4f-3.9108326870948247!5f0.7820865974627469"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
