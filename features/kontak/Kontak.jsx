import Image from 'next/image';

export default function Kontak() {
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
      <form className=" mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm">Nama</label>
            <input
              type="text"
              placeholder="Nama kamu"
              className="w-full border-none bg-gray-100 p-3 rounded focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="emailkamu@gmail.com"
              className="w-full border-none bg-gray-100 p-3 rounded focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 text-sm">No Telp</label>
          <input
            type="tel"
            placeholder="+62"
            className="w-full border-none bg-gray-100 p-3 rounded focus:outline-none"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm">Isi Pesan</label>
          <textarea
            rows="5"
            placeholder="Pesan kamu"
            className="w-full border-none bg-gray-100 p-3 rounded resize-none focus:outline-none"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white py-2 px-28 rounded font-semibold"
          >
            Kirim
          </button>
        </div>
      </form>

      {/* Map + Info Sekolah */}
      <div className="flex justify-center mt-16">
        <div className="w-full max-w-2xl rounded overflow-hidden shadow-md">
          <Image
            src="/map-preview.png" // Ubah ke gambar peta kamu
            alt="Peta Lokasi TK Azizah 2"
            width={800}
            height={400}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}
