import Image from "next/image";
import Link from "next/link";

export default function Berita() {
  const newsArticles = [
    {
      id: 1,
      title: "Penerimaan Rapot",
      description:
        "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.",
      image: "/images/news1.jpg",
      link: "/news/1",
    },
    {
      id : 2,
      title: "Kegiatan Belajar Mengajar",
      description:
        "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.",
      image: "/images/news2.jpg",
      link: "/news/2",
    },
    {
      id : 3,
      title: "Pemberian Makanan Tambahan",
      description:
        "Lorem ipsum dolor sit amet adipiscing ipsum dolor sit amet adipiscing aqua lorem.",
      image: "/images/news3.jpg",
      link: "/news/3",
    },
  ];

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
          <h1 className="text-4xl font-bold">Berita</h1>
        </div>
      </header>

      {/* News Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {newsArticles.map((news) => (
            <div
              key={news.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={news.image}
                alt={news.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.description}</p>
                <Link
                  href={news.link}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Read More...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
