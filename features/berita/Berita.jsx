"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Berita() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/list-image");
        const data = await res.json();

        // Filter gambar hanya yang dari folder "berita"
        const filteredImages = data.filter(img => img.folder === "berita");
        setImages(filteredImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
    const interval = setInterval(fetchImages, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Galeri Berita</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {images.length > 0 ? (
          images.map((img, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={img.url}
                alt={img.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
                unoptimized
              />
              <div className="p-4">
                <p className="text-gray-600">{img.name}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Memuat gambar...</p>
        )}
      </div>
    </div>
  );
}
