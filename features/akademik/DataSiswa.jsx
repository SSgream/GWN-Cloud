import Image from 'next/image';

export default function DataSiswa() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] bg-black">
        <Image
                  src="/images/banner.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Taman Kanak-Kanak Azizah 2"
                  className="opacity-50"
                />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">Data TK AZIZAH 2</h1>
        </div>
      </div>

      {/* Data Siswa */}
      <div className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Jumlah Siswa</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4">Kelas</th>
                <th className="py-2 px-4">Laki-Laki</th>
                <th className="py-2 px-4">Perempuan</th>
                <th className="py-2 px-4">Jumlah Rombel</th>
              </tr>
            </thead>
            <tbody>
              {[
                { kelas: 'VII', laki: 140, perempuan: 196, rombel: 8 },
                { kelas: 'VIII', laki: 140, perempuan: 196, rombel: 8 },
                { kelas: 'IX', laki: 140, perempuan: 196, rombel: 8 },
              ].map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 text-center">{row.kelas}</td>
                  <td className="py-2 px-4 text-center">{row.laki}</td>
                  <td className="py-2 px-4 text-center">{row.perempuan}</td>
                  <td className="py-2 px-4 text-center">{row.rombel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
