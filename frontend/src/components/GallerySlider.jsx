import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySlider({ images }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div className="relative mb-6">
      <div className="h-72 md:h-96 w-full overflow-hidden rounded-xl bg-gray-900 relative">
        <img src={images[currentIdx]} alt="Camping gallery" className="w-full h-full object-cover transition-all duration-300" />
        <button
          onClick={() => setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="flex gap-2 mt-2 justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt="thumb"
            onClick={() => setCurrentIdx(idx)}
            className={`w-16 h-12 object-cover rounded-lg cursor-pointer border-2 ${currentIdx === idx ? 'border-teal-600 scale-105' : 'border-transparent opacity-60'}`}
          />
        ))}
      </div>
    </div>
  );
}