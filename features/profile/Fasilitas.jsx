import Image from "next/image";

export default function Fasilitas() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="relative w-full h-[500px] bg-black">
        <img
          src="/images/banner.png"
          alt="Visi dan Misi"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
          Fasilitas TK AZIZAH 2
        </div>
      </div>

      {/* Gambar Fasilitas dengan Deskripsi */}
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Kelas A */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/images/fasilitas-1.jpg" 
              alt="Kelas A" 
              width={400} 
              height={250} 
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-500 text-white text-center py-3 font-semibold">
              Kelas A
            </div>
            <p className="text-gray-600 text-sm p-4 text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius quibusdam doloribus, cupiditate dolorum voluptatum velit magnam! Architecto alias explicabo, culpa recusandae ad quas quis? Vitae incidunt sint commodi aspernatur esse?
            </p>
          </div>

          {/* Kelas B */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/images/fasilitas-2.jpg" 
              alt="Kelas B" 
              width={400} 
              height={250} 
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-500 text-white text-center py-3 font-semibold">
              Kelas B
            </div>
            <p className="text-gray-600 text-sm p-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores corporis error veniam nihil voluptates sunt omnis deserunt, id distinctio aperiam quasi a aspernatur dolore non nesciunt. Ab, eius voluptate!.
            </p>
          </div>

          {/* Kantor */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src="/images/fasilitas-3.jpg" 
              alt="Kantor" 
              width={400} 
              height={250} 
              className="w-full h-48 object-cover"
            />
            <div className="bg-blue-500 text-white text-center py-3 font-semibold">
              Kantor
            </div>
            <p className="text-gray-600 text-sm p-4 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vitae aspernatur quaerat placeat, saepe omnis reprehenderit, quasi iure id, quia inventore soluta? Dicta ab similique incidunt ea laudantium eaque modi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
