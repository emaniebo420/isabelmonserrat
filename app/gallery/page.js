'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import artworks from '@/data/artworks';
import BackToTop from '@/components/BackToTop';

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
              className="absolute top-2 right-2 text-white text-2xl hover:opacity-70 bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center z-10"
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
              <p className="text-gray-400 text-sm">{selected.size}</p>
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
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col"
            onClick={() => setSelected(art)}
          >
            <div className="w-full bg-gray-50 relative" style={{ aspectRatio: '3/4' }}>
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-contain"
              />
              {!art.available && (
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white"
                  style={{ background: '#6b1e2e' }}>
                  Sold
                </div>
              )}
            </div>
            <div className="p-3 md:p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-sm md:text-base">{art.title}</h3>
              <p className="text-xs md:text-sm truncate" style={{ color: '#6b6b6b' }}>{art.medium}</p>
              <p className="text-xs" style={{ color: '#6b6b6b' }}>{art.size}</p>
              <p className="text-xs mt-1" style={{ color: '#c9a84c' }}>{art.year}</p>
            </div>
          </div>
          ))}
        </div>
      </section>

      <BackToTop />
      <Footer />
    </main>
  );
}