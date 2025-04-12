export default function VisiMisi() {
    return (
      <section className="w-full min-h-screen bg-white py-16 pt-46">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Visi Misi</h2>
  
        <div className="flex flex-col md:flex-row justify-center items-center gap-72 md:gap-71">
          {/* Kartu Visi */}
          <div className="bg-gradient-to-br from-lime-300 to-green-600 text-white rounded-2xl p-8 w-[300px] md:w-[350px] h-[400px] flex flex-col justify-between text-center shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-8">Visi</h3>
              <p className="leading-relaxed text-xl">
                Terwujudnya peserta didik yang mengedepankan karakter profil pelajar pancasila
              </p>
            </div>
            <button className="mt-6 border border-white px-5 py-2 rounded-full hover:bg-white hover:text-green-700 transition">
              Lihat Detail
            </button>
          </div>
  
          {/* Kartu Misi */}
          <div className="bg-gradient-to-br from-lime-300 to-green-600 text-white rounded-2xl p-8 w-[300px] md:w-[350px] h-[400px] flex flex-col justify-between text-center shadow-lg">
            <div>
              <h3 className="text-2xl font-bold mb-8">Misi</h3>
              <p className="leading-relaxed text-xl">
                Mengintegrasikan nilai-nilai luhur pancasila dalam setiap aspek pembelajaran dan kegiatan di satuan pendidikan
                ...
              </p>
            </div>
            <button className="mt-6 border border-white px-5 py-2 rounded-full hover:bg-white hover:text-green-700 transition">
              Lihat Detail
            </button>
          </div>
        </div>
      </section>
    );
  }
  