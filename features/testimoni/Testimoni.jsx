'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'John Doe',
    image: '/images/hero.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat.',
  },
  {
    name: 'John Doe',
    image: '/images/hero.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat.',
  },
  {
    name: 'John Do',
    image: '/images/hero.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat.',
  },
  {
    name: 'John D',
    image: '/images/hero.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat.',
  },
  {
    name: 'anjay',
    image: '/images/hero.png',
    text: 'Lorem ipsum dolor sit amet consectetur. Senectus tellus eget nunc posuere quis at vitae consequat.',
  },
];

export default function Testimoni() {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 3 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white pt-44 py-10 px-4 min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold">Testimoni Orang Tua</h2>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <button onClick={handlePrev} className="bg-green-100 hover:bg-green-300 p-2 rounded text-2xl text-white font-bold">
          {'<'}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 h-100 gap-4 flex-1 px-4">
          {testimonials.slice(startIndex, startIndex + 3).map((t, i) => (
            <div
              key={i}
              className="border rounded-xl p-12 shadow-sm flex flex-col justify-between pb-16"
            >
              <p className="text-sm mb-6 font-bold">{t.text}</p>
              <div className="flex justify-center items-center gap-3 mt-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="font-semibold text-gray-800">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="bg-green-100 hover:bg-green-300 p-2 rounded text-white text-2xl font-bold">
          {'>'}
        </button>
      </div>
    </div>
  );
}
