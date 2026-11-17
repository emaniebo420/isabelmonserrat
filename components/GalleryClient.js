'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import artworks from '@/data/artworks';
import BackToTop from '@/components/BackToTop';

const FILTERS = ['All', 'Available', 'Sold'];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');
  const touchStart = useRef(null);

  const filtered = useMemo(() => artworks.filter((art) => {
    if (filter === 'Available') return art.available;
    if (filter === 'Sold') return !art.available;
    return true;
  }), [filter]);

  const selectedIndex = selected ? filtered.findIndex((a) => a.id === selected.id) : -1;

  const goPrev = (e) => {
    e.stopPropagation();
    if (selectedIndex < 0) return;
    setSelected(filtered[(selectedIndex - 1 + filtered.length) % filtered.length]);
  };

  const goNext = (e) => {
    e.stopPropagation();
    if (selectedIndex < 0) return;
    setSelected(filtered[(selectedIndex + 1) % filtered.length]);
  };

  const onTouchStart = (e) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || selectedIndex < 0 || filtered.length < 2) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Horizontal swipe only: ignore short moves and mostly-vertical scrolls.
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const step = dx < 0 ? 1 : -1;
    setSelected(filtered[(selectedIndex + step + filtered.length) % filtered.length]);
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
      if (e.key === 'ArrowLeft') {
        const idx = filtered.findIndex((a) => a.id === selected.id);
        setSelected(filtered[(idx - 1 + filtered.length) % filtered.length]);
      }
      if (e.key === 'ArrowRight') {
        const idx = filtered.findIndex((a) => a.id === selected.id);
        setSelected(filtered[(idx + 1) % filtered.length]);
      }
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [selected, filtered]);

  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="gallery" />

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto"
          onClick={() => {
            // Backdrop tap closes only with a mouse. On touch screens a missed
            // arrow tap used to close the popup; use the X button there.
            if (window.matchMedia('(pointer: fine)').matches) setSelected(null);
          }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={() => setSelected(null)}
            className="fixed right-3 top-3 z-[60] text-white text-xl hover:opacity-70 bg-black/60 rounded-full w-11 h-11 flex items-center justify-center"
            style={{ marginTop: 'env(safe-area-inset-top, 0px)' }}
            aria-label="Close"
          >
            ✕
          </button>

          <div className="min-h-full flex items-center justify-center px-2 py-12 sm:px-4">
            <div className="w-full max-w-3xl min-w-0 m-auto" onClick={(e) => e.stopPropagation()}>
              <img
                src={selected.image}
                alt={selected.title}
                className="mx-auto block h-auto w-auto max-w-full rounded-2xl max-h-[calc(100dvh-19rem)]"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-lg sm:text-xl font-bold">{selected.title}</h3>
                <p className="text-gray-400 mt-1 text-sm sm:text-base">{selected.medium}</p>
                <p className="text-gray-400 text-sm">{selected.size} &nbsp;·&nbsp; {selected.year}</p>

                {/* Prev / next under the details (same on phone and laptop) */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <button
                    onClick={goPrev}
                    className="w-16 h-12 rounded-full bg-white/15 text-white text-xl flex items-center justify-center"
                    aria-label="Previous artwork"
                  >
                    ←
                  </button>
                  <span className="text-sm min-w-[4.5rem]" style={{ color: '#999' }}>
                    {selectedIndex + 1} / {filtered.length}
                  </span>
                  <button
                    onClick={goNext}
                    className="w-16 h-12 rounded-full bg-white/15 text-white text-xl flex items-center justify-center"
                    aria-label="Next artwork"
                  >
                    →
                  </button>
                </div>
                <p className="text-xs mt-2 sm:hidden" style={{ color: '#666' }}>or swipe the painting</p>
                <p className="text-xs mt-2 hidden sm:block" style={{ color: '#666' }}>or use the ← → keys</p>
              </div>
            </div>

          </div>
        </div>
      )}

      <section className="px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Gallery</h2>
        <p className="text-center mb-8" style={{ color: '#6b6b6b' }}>A collection of original works</p>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-5 py-2 rounded-full text-sm font-medium transition"
              style={
                filter === f
                  ? { background: '#6b1e2e', color: '#fff' }
                  : { background: '#fff', color: '#1a1a1a', border: '1px solid #e8e0d5' }
              }
            >
              {f}
            </button>
          ))}
        </div>

        <p className="text-center text-sm mb-8" style={{ color: '#6b6b6b' }}>
          {filtered.length} {filtered.length === 1 ? 'work' : 'works'}
        </p>

        {filtered.length === 0 ? (
          <p className="text-center py-16" style={{ color: '#6b6b6b' }}>No artworks in this category.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {filtered.map((art) => (
              <div
                key={art.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
                onClick={() => setSelected(art)}
              >
                <div className="w-full bg-gray-50 relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={art.thumb}
                    alt={art.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }}
                  >
                    <p className="text-white font-semibold text-sm leading-tight">{art.title}</p>
                    <p className="text-white text-xs" style={{ opacity: 0.75 }}>{art.year}</p>
                  </div>
                  {!art.available && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ background: '#6b1e2e' }}>
                      Sold
                    </div>
                  )}
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-sm md:text-base line-clamp-2">{art.title}</h3>
                  <p className="text-xs md:text-sm truncate" style={{ color: '#6b6b6b' }}>{art.medium}</p>
                  <p className="text-xs" style={{ color: '#6b6b6b' }}>{art.size}</p>
                  <p className="text-xs mt-1" style={{ color: '#c9a84c' }}>{art.year}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <BackToTop />
      <Footer />
    </main>
  );
}
