import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

const SELECTED_PIECES = [
  { id: 2,  title: "Strength",   year: "2024", image: "/images/art2.webp"  },
  { id: 3,  title: "This is the start of how it all ends",      year: "2026", image: "/images/art3.webp"  },
  { id: 13, title: "Forbidden Fruit", year: "2024", image: "/images/art13.webp" },
];

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="home" />

      {/* Hero — two column */}
      <section className="px-6 py-20 md:py-0 md:min-h-[90vh] flex items-center" style={{ background: '#faf7f2' }}>
        <FadeIn className="w-full">
          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#c9a84c' }}>
                Original Art by Isabel Monserrat
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#1a1a1a' }}>
                Art That Speaks<br />to the Soul
              </h1>
              <p className="text-base md:text-lg mb-10" style={{ color: '#6b6b6b' }}>
                Original paintings and commissions by a Filipino artist — rooted in femininity, nature, and healing.
              </p>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Link href="/gallery"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium text-white transition hover:opacity-90 text-center"
                  style={{ background: '#6b1e2e' }}>
                  View Gallery
                </Link>
                <Link href="/shop"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition hover:opacity-90 text-center"
                  style={{ border: '2px solid #6b1e2e', color: '#6b1e2e' }}>
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ width: '340px', aspectRatio: '3/4' }}>
                <img
                  src="/images/art1.webp"
                  alt="Oasis by Isabel Monserrat"
                  className="w-full h-full object-cover"
                  style={{ background: '#faf7f2' }}
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-white">
        <FadeIn>
          <h2 className="text-2xl font-bold text-center mb-10">Why collectors love Isabel's work</h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center p-6 rounded-2xl border" style={{ background: '#faf7f2', borderColor: '#e8e0d5' }}>
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Authentic</p>
              <p className="font-semibold mb-1">100% Original</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Every piece is one of a kind — no prints, no reproductions.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center p-6 rounded-2xl border" style={{ background: '#faf7f2', borderColor: '#e8e0d5' }}>
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Worldwide</p>
              <p className="font-semibold mb-1">Ships Internationally</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Carefully packed and delivered worldwide.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center p-6 rounded-2xl border" style={{ background: '#faf7f2', borderColor: '#e8e0d5' }}>
              <div className="flex justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </div>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Bespoke</p>
              <p className="font-semibold mb-1">Custom Commissions</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Your vision brought to life through her brushstroke.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Artist Quote */}
      <section className="px-6 py-20 text-center" style={{ background: '#f0e8dc' }}>
        <FadeIn>
          <svg className="mx-auto mb-6" style={{ opacity: 0.25 }} width="52" height="52" viewBox="0 0 24 24" fill="#6b1e2e">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <blockquote className="text-2xl md:text-4xl font-bold italic leading-snug max-w-3xl mx-auto" style={{ color: '#6b1e2e' }}>
            I want my art to be able to heal the soul with themes of mental health awareness, beauty, and nature.
          </blockquote>
          <p className="mt-6 text-sm tracking-widest uppercase" style={{ color: '#c9a84c' }}>— Isabel Monserrat</p>
        </FadeIn>
      </section>

      {/* Selected Works */}
      <section className="px-6 py-16 bg-white">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-center mb-4" style={{ color: '#c9a84c' }}>
            Selected Works
          </p>
          <h2 className="text-2xl font-bold text-center mb-10">A Glimpse of Her Art</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {SELECTED_PIECES.map((art) => (
              <Link href="/gallery" key={art.id} className="group block rounded-2xl overflow-hidden shadow-md">
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ background: '#faf7f2' }}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-semibold text-sm">{art.title}</p>
                    <p className="text-xs" style={{ opacity: 0.75 }}>{art.year}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery"
              className="px-8 py-3 rounded-full font-medium transition hover:opacity-90 inline-block text-white"
              style={{ background: '#6b1e2e' }}>
              View Full Gallery
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Notable exhibitions */}
      <section className="px-6 py-16" style={{ background: '#faf7f2' }}>
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-center mb-4" style={{ color: '#c9a84c' }}>
            Exhibitions
          </p>
          <h2 className="text-2xl font-bold text-center mb-10">Shown Internationally</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: '#e8e0d5' }}>
              <div>
                <a href="https://www.facebook.com/ACCES.organization/posts/pfbid0sM61zynJE2bEqUzj2dSfkRhPxwheBAFBdpCaD1wKuwpb6ceP93c1hktq5YgnmQDbl" target="_blank" rel="noopener noreferrer"
                  className="font-semibold transition hover:opacity-70 underline underline-offset-2"
                  style={{ color: '#c9a84c' }}>
                  Art Capital — Let's Flourish
                </a>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>Grand Palais, Paris, France</p>
              </div>
              <p className="text-sm font-medium" style={{ color: '#6b1e2e' }}>2026</p>
            </div>
            <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: '#e8e0d5' }}>
              <div>
                <a href="https://www.facebook.com/ACCES.organization/posts/pfbid0sM61zynJE2bEqUzj2dSfkRhPxwheBAFBdpCaD1wKuwpb6ceP93c1hktq5YgnmQDbl" target="_blank" rel="noopener noreferrer"
                  className="font-semibold transition hover:opacity-70 underline underline-offset-2"
                  style={{ color: '#c9a84c' }}>
                  United Nations — Let's Flourish
                </a>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>Vienna, Austria</p>
              </div>
              <p className="text-sm font-medium" style={{ color: '#6b1e2e' }}>2026</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <a href="https://vienna101.com/tara-lets-contemporary-filipino-art-exhibit/?fbclid=IwY2xjawLGA9BleHRuA2FlbQIxMQBicmlkETFqRHZXSDVWYklubjRYd09sAR7LFK3B8S-dMiVakTAZuII8APX9nU4S5fg-ogmdStqbxyxLsGcJ2O-nf9F3IQ_aem_OmtXQpyLDQi_M3Aw6Qhymw" target="_blank" rel="noopener noreferrer"
                  className="font-semibold transition hover:opacity-70 underline underline-offset-2"
                  style={{ color: '#c9a84c' }}>
                  Tara Let's! Contemporary Filipino Art
                </a>
                <p className="text-sm" style={{ color: '#6b6b6b' }}>Philippine Embassy, Vienna, Austria</p>
              </div>
              <p className="text-sm font-medium" style={{ color: '#6b1e2e' }}>2025</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Commission CTA */}
      <section className="px-6 py-12 text-center text-white" style={{ background: '#6b1e2e' }}>
        <FadeIn>
          <h2 className="text-2xl font-bold mb-3">Commission a Painting</h2>
          <p className="mb-6" style={{ color: '#f9d4da' }}>
            A piece made just for you — your story, her brushstroke.
          </p>
          <Link href="/contact"
            className="px-8 py-3 rounded-full font-medium transition hover:opacity-90 inline-block"
            style={{ background: '#c9a84c', color: '#1a1a1a' }}>
            Get in Touch
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
