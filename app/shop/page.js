'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import artworks from '@/data/artworks';
import BackToTop from '@/components/BackToTop';

export default function Shop() {
  const available = artworks;
  const [selected, setSelected] = useState(null);
  const router = useRouter();

  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="shop" />

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
              {selected.available && (
                <button
                  onClick={() => router.push('/contact')}
                  className="mt-4 inline-block px-8 py-3 rounded-full font-medium transition hover:opacity-90"
                  style={{ background: '#c9a84c', color: '#1a1a1a' }}>
                  Inquire About This Piece
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      {available.map((product) => (
            <div key={product.id}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer flex flex-col"
      onClick={() => setSelected(product)}
    >
          <div className="w-full bg-gray-50 relative" style={{ aspectRatio: '3/4' }}>
          <img
            src={product.image}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-contain"
          />
        {!product.available && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{ background: '#6b1e2e' }}>
            Sold
          </div>
        )}
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2">{product.title}</h3>
        <p className="text-xs md:text-sm truncate" style={{ color: '#6b6b6b' }}>{product.medium}</p>
        <p className="text-xs" style={{ color: '#6b6b6b' }}>{product.size}</p>
        <p className="text-xs mt-1" style={{ color: '#c9a84c' }}>{product.year}</p>
        <div className="mt-auto pt-3">
          {product.available ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push('/contact');
              }}
              className="w-full text-white py-2 rounded-full transition hover:opacity-90 font-medium text-sm"
              style={{ background: '#6b1e2e' }}>
              Inquire
            </button>
          ) : (
            <button
              disabled
              className="w-full py-2 rounded-full font-medium text-sm cursor-not-allowed"
              style={{ background: '#e8e0d5', color: '#6b6b6b' }}>
              Sold
            </button>
          )}
        </div>
      </div>
    </div>
      ))}
    </div>
      </section>

      <section className="px-6 py-12 text-center" style={{ background: '#faf7f2' }}>
        <h2 className="text-2xl font-bold mb-3">Want something custom?</h2>
        <p className="mb-6" style={{ color: '#6b6b6b' }}>Commission a painting made just for you</p>
        <a href="/contact"
          className="px-8 py-3 rounded-full font-medium transition hover:opacity-90 inline-block text-white"
          style={{ background: '#6b1e2e' }}>
          Request a Commission
        </a>
      </section>

      <BackToTop />
      <Footer />
    </main>
  );
}