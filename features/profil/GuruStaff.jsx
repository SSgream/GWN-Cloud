import Image from "next/image";

export default function GuruStaffpage() {
  const staffList = [
    {
      name: "Rahmi Annisa, S.Pd., Gr",
      role: "Kepala Sekolah",
      image: "/images/rahmi.png",
    },
    {
      name: "A. Jumriana, S.Pd",
      role: "Guru TK A",
      image: "/images/jumriana.png",
    },
    {
      name: "Ihwana, S.Pd.I",
      role: "Guru TK B",
      image: "/images/ihwana.png",
    },
    {
      name: "Megawati, S.Pd.I",
      role: "Guru PAI",
      image: "/images/megawati.png",
    },
  ];

  return (
    <div className="min-h-screen mx-auto px-4 pt-44 py-12">
      <h1 className="text-3xl font-bold text-center mb-4">Guru dan Staff</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae
        consequat. At nulla erat nisi nunc. Sit risus sagittis pellentesque eget convallis commodo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-10">
        {staffList.map((staff, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-white shadow-md"
          >
            <div className="bg-gray-100 h-80 flex items-center justify-center">
              <img
                src={staff.image}
                alt={staff.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gradient-to-r from-lime-300 to-lime-100 px-4 py-8 rounded-b-2xl ">
              <h3 className="font-bold text-center text-md text-black">{staff.name}</h3>
              <p className="text-sm text-center text-gray-700">{staff.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
