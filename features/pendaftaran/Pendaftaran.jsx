"use client"

export default function Pendaftaran() {
  return (
    <div className="bg-white min-h-screen pt-48 py-12 px-6 md:px-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Formulir Pendaftaran Calon Siswa Baru
      </h1>

      <form className="space-y-12">
        {/* DATA SISWA */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Siswa</h2>
          <div className="grid md:grid-cols-2 gap-4 ">
            {[
              'Nama Lengkap', 'Nama Panggilan', 'Tempat Lahir', 'Tanggal Lahir',
              'Jenis Kelamin', 'Anak ke-', 'Jumlah Saudara', 'Agama',
              'Status dalam keluarga', 'Kewarganegaraan'
            ].map((label, idx) => (
              <div className=" pt-4 flex flex-col" key={idx}>
                <label className="text-sm font-medium mb-1">{label}</label>
                <input className="input" name={label.toLowerCase().replace(/ /g, '_')} />
              </div>
            ))}
          </div>
        </section>

        {/* DATA AYAH */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Ayah</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Nama', 'Status Ayah', 'Tempat Lahir', 'Tanggal Lahir', 'Pekerjaan', 'Agama', 'Pendidikan', 'Kewarganegaraan'].map((label, idx) => (
              <div className="pt-4 flex flex-col" key={idx}>
                <label className="text-sm font-medium mb-1">{label}</label>
                <input className="input" name={`ayah_${label.toLowerCase().replace(/ /g, '_')}`} />
              </div>
            ))}
          </div>
        </section>

        {/* DATA IBU */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Ibu</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Nama', 'Status Ibu', 'Tempat Lahir', 'Tanggal Lahir', 'Pekerjaan', 'Agama', 'Pendidikan', 'Kewarganegaraan'].map((label, idx) => (
              <div className="pt-4 flex flex-col" key={idx}>
                <label className="text-sm font-medium mb-1">{label}</label>
                <input className="input" name={`ibu_${label.toLowerCase().replace(/ /g, '_')}`} />
              </div>
            ))}
          </div>
        </section>

        {/* BERKAS */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Berkas Pendaftaran</h2>
          <p className="text-sm text-gray-600 mb-2">
            Kartu Keluarga, Akta Kelahiran, Kartu JKN/ BPJS, Buku KIA (Kesehatan Ibu dan Anak)
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded p-6 mx-72 text-center">
            <label className="text-sm font-medium mb-1">Unggah Berkas</label>
            <input type="file" className="mx-auto" name="berkas" />
          </div>
        </section>

        {/* SUBMIT */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white py-6 px-100 rounded"
          >
            SUBMIT
          </button>
        </div>
      </form>

      <style jsx>{`
        .input {
          padding: 0.75rem;
          border: none;
          background-color: #f7f8fa;
          border-radius: 0.375rem;
          outline: none;
          width: 100%;
        }
      `}</style>
    </div>
  );
}