import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="home" />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6"
        style={{ background: '#faf7f2' }}>
        <FadeIn>
          <p className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: '#c9a84c' }}>
            Original Art by Isabel Monserrat
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#1a1a1a' }}>
            Art That Speaks<br />to the Soul
          </h1>
          <p className="text-base md:text-lg mb-10 max-w-md mx-auto"
            style={{ color: '#6b6b6b' }}>
            Original paintings and commissions by a Filipino artist — rooted in femininity, nature, and healing.
          </p>
          <div className="flex flex-col items-center gap-3 w-full sm:flex-row sm:justify-center">
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
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Authentic</p>
              <p className="font-semibold mb-1">100% Original</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Every piece is one of a kind — no prints, no reproductions.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center p-6 rounded-2xl border" style={{ background: '#faf7f2', borderColor: '#e8e0d5' }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Worldwide</p>
              <p className="font-semibold mb-1">Ships Internationally</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Carefully packed and delivered worldwide.</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="text-center p-6 rounded-2xl border" style={{ background: '#faf7f2', borderColor: '#e8e0d5' }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Bespoke</p>
              <p className="font-semibold mb-1">Custom Commissions</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Your vision brought to life through her brushstroke.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured artwork */}
      <section className="px-6 py-16" style={{ background: '#f0e8dc' }}>
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-center mb-4" style={{ color: '#c9a84c' }}>
            Featured Work
          </p>
          <h2 className="text-2xl font-bold text-center mb-10">Oasis, 2024</h2>
          <div className="max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/art1.webp"
              alt="Oasis by Isabel Monserrat"
              className="w-full object-contain"
              style={{ background: '#faf7f2' }}
            />
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: '#6b6b6b' }}>
            Oil on Canvas
          </p>
          <div className="text-center mt-6">
            <Link href="/gallery"
              className="px-8 py-3 rounded-full font-medium transition hover:opacity-90 inline-block text-white"
              style={{ background: '#6b1e2e' }}>
              View Full Gallery
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Notable exhibitions */}
      <section className="px-6 py-16 bg-white">
        <FadeIn>
          <p className="text-xs tracking-widest uppercase text-center mb-4" style={{ color: '#c9a84c' }}>
            Exhibitions
          </p>
          <h2 className="text-2xl font-bold text-center mb-10">Shown Internationally</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: '#e8e0d5' }}>
              <div>
                <a href="https://www.facebook.com/ACCES.organization/posts/pfbid0sM61zynJE2bEqUzj2dSfkRhPxwheBAFBdpCaD1wKuwpb6ceP93c1hktq5YgnmQDbl" target="_blank"
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
                <a href="https://www.facebook.com/ACCES.organization" target="_blank"
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
                <a href="https://vienna101.com/tara-lets-contemporary-filipino-art-exhibit/?fbclid=IwY2xjawLGA9BleHRuA2FlbQIxMQBicmlkETFqRHZXSDVWYklubjRYd09sAR7LFK3B8S-dMiVakTAZuII8APX9nU4S5fg-ogmdStqbxyxLsGcJ2O-nf9F3IQ_aem_OmtXQpyLDQi_M3Aw6Qhymw" target="_blank"
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
      <section className="px-6 py-12 text-center text-white"
        style={{ background: '#6b1e2e' }}>
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