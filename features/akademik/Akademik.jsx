import Image from "next/image";
export default function Akademik() {
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
        <div className="bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-3xl font-bold">Data Siswa</h1>
          <p className="text-sm">
            Data Siswa SMP Negeri 1 Cibadak Kelas IX 2020
          </p>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="container mx-auto py-10 px-6 bg-white shadow-lg mt-12 rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Jadwal Siswa Kelas IX A
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-400 text-white">
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Nama</th>
                <th className="border border-gray-300 px-4 py-2">NIS</th>
                <th className="border border-gray-300 px-4 py-2">Gender</th>
                <th className="border border-gray-300 px-4 py-2">Kelas</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  no: 1,
                  nama: "ADELA PUTRI PRATIWI",
                  nis: "161707001",
                  gender: "P",
                  kelas: "IX A",
                },
                {
                  no: 2,
                  nama: "AKMAL MAHARDIKA",
                  nis: "161707002",
                  gender: "L",
                  kelas: "IX A",
                },
                {
                  no: 3,
                  nama: "ANASTIANURSYAFAAT",
                  nis: "161707003",
                  gender: "P",
                  kelas: "IX A",
                },
                {
                  no: 4,
                  nama: "ANDHIERA MAULIAFANY",
                  nis: "161707004",
                  gender: "P",
                  kelas: "IX A",
                },
                {
                  no: 5,
                  nama: "ANNISA HERYANI PUTRI",
                  nis: "161707005",
                  gender: "P",
                  kelas: "IX A",
                },
              ].map((siswa) => (
                <tr key={siswa.no} className="even:bg-blue-100">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {siswa.no}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {siswa.nama}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {siswa.nis}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {siswa.gender}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {siswa.kelas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
