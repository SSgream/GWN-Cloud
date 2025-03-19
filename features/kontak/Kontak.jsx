import Image from "next/image";

export default function Kontak() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header className="relative w-full h-[500px] bg-black">
        <Image
          src="/images/banner.png"
          layout="fill"
          objectFit="cover"
          alt="Taman Kanak-Kanak Azizah 2"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Kontak Kami</h1>
          <p className="mt-2">
            Jika Memiliki Pertanyaan? Langsung isi Form Dibawah Ini
          </p>
        </div>
      </header>

      {/* Contact Form */}
      <div className="container mx-auto mt-12 py-12 px-4 max-w-4xl bg-white shadow-md rounded-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold">Nama</label>
              <input
                type="text"
                placeholder="Masukkan nama"
                className="w-full p-3 bg-gray-100 rounded-lg"
              />
            </div>
            <div>
              <label className="block font-semibold">Email</label>
              <input
                type="email"
                placeholder="emailkamu@gmail.com"
                className="w-full p-3 bg-gray-100 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold">No Telp</label>
            <input
              type="text"
              placeholder="+62"
              className="w-full p-3 bg-gray-100 rounded-lg"
            />
          </div>
          <div>
            <label className="block font-semibold">Isi Pesan</label>
            <textarea
              placeholder="Pesan kamu"
              className="w-full p-3 rounded-lg bg-gray-100 h-32"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="w-75 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Kirim
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="container mx-auto py-12 px-4">
        <iframe
          className="w-full h-[400px] rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
