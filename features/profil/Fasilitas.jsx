"use client"

import { useState } from 'react';
import Image from 'next/image';

const fasilitas = [
  {
    title: 'Kantor',
    image: '/images/Kantor.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: {
      age: '4-6 yrs',
      days: '6 days',
      period: '3.30 hrs'
    },
    color: 'bg-teal-400'
  },
  {
    title: 'Kelas A',
    image: '/images/Kelas_A.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: {
      age: '4-5 yrs',
      days: '6 days',
      period: '3.30 hrs'
    },
    color: 'bg-orange-300'
  },
  {
    title: 'Kelas B',
    image: '/images/Kelas_B.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: {
      age: '5-6 yrs',
      days: '6 days',
      period: '3.30 hrs'
    },
    color: 'bg-pink-400'
  },
  {
    title: 'Kelas C',
    image: '/images/Kelas-B.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    info: {
      age: '5-7 yrs',
      days: '6 days',
      period: '3.30 hrs'
    },
    color: 'bg-purple-400'
  }
];

export default function FasilitasPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? fasilitas.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 3 >= fasilitas.length ? 0 : prev + 1));
  };

  const visibleFasilitas = fasilitas.slice(currentIndex, currentIndex + 3);

  return (
    <div className="pt-44 py-12 px-4 md:px-16 lg:px-24 relative bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-12">Fasilitas</h2>

      <div className="flex justify-center items-center relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-green-100 hover:bg-green-200 p-2 rounded-full text-2xl"
        >
          ❮
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
          {visibleFasilitas.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="rounded-xl overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <div
                className={`w-70 rounded-xl text-white p-4 flex justify-between text-sm ${item.color}`}
              >
                <div className="text-center">
                  <div className="font-bold">{item.info.age}</div>
                  <div className="text-xs">age</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{item.info.days}</div>
                  <div className="text-xs">weekly</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">{item.info.period}</div>
                  <div className="text-xs">period</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 bg-green-100 hover:bg-green-200 p-2 rounded-full text-2xl"
        >
          ❯
        </button>
      </div>
    </div>
  );
}