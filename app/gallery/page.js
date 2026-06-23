'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import artworks from '@/data/artworks';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="gallery" />

      {selected && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
    onClick={() => setSelected(null)}
  >
    <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => setSelected(null)}
        className="absolute -top-10 right-0 text-white text-3xl hover:opacity-70 w-10 h-10 flex items-center justify-center"
      >
        ✕
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full rounded-2xl object-contain max-h-[80vh]"
            />
      <div className="mt-4 text-center text-white">
        <h3 className="text-xl font-bold">{selected.title}</h3>
        <p className="text-gray-400">{selected.medium}</p>
        <p className="text-gray-400 text-sm">{selected.year}</p>
      </div>
    </div>
  </div>
)}


      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Gallery</h2>
        <p className="text-center mb-10" style={{ color: '#6b6b6b' }}>A collection of original works</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {artworks.map((art) => (
            <div key={art.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelected(art)}
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full object-contain bg-gray-50"
              />
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-sm md:text-lg">{art.title}</h3>
                <p className="text-xs md:text-sm" style={{ color: '#6b6b6b' }}>{art.medium}</p>
                <p className="text-xs mt-1" style={{ color: '#c9a84c' }}>{art.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}