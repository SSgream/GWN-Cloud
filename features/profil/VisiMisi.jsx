export default function VisiMisi() {
    return (
      <section className="w-full min-h-screen py-16 bg-white pt-46">
        <h2 className="mb-12 text-3xl font-bold text-center text-black md:text-4xl">Visi Misi</h2>
  
        <div className="flex flex-col items-center justify-center md:flex-row gap-72 md:gap-71">
          {/* Kartu Visi */}
          <div className="bg-gradient-to-br from-[#80C904]  via-[#80C904] to-[#3F6302] text-white rounded-2xl p-8 w-[300px] md:w-[350px] h-[400px] flex flex-col justify-between text-center shadow-lg">
            <div>
              <h3 className="mb-8 text-2xl font-bold">Visi</h3>
              <p className="text-xl leading-relaxed">
                Terwujudnya peserta didik yang mengedepankan karakter profil pelajar pancasila
              </p>
            </div>
            <button className="px-5 py-2 mt-6 transition border border-white rounded-full hover:bg-white hover:text-green-700">
              Lihat Detail
            </button>
          </div>
  
          {/* Kartu Misi */}
          <div className="bg-gradient-to-br from-[#80C904]  via-[#80C904] to-[#3F6302] text-white rounded-2xl p-8 w-[300px] md:w-[350px] h-[400px] flex flex-col justify-between text-center shadow-lg">
            <div>
              <h3 className="mb-8 text-2xl font-bold">Misi</h3>
              <p className="text-xl leading-relaxed">
                Mengintegrasikan nilai-nilai luhur pancasila dalam setiap aspek pembelajaran dan kegiatan di satuan pendidikan
                ...
              </p>
            </div>
            <button className="px-5 py-2 mt-6 transition border border-white rounded-full hover:bg-white hover:text-green-700">
              Lihat Detail
            </button>
          </div>
        </div>
      </section>
    );
  }
  