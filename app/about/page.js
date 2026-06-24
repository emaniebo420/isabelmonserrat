import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="about" />

      <section className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Her real photo */}
        <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-8 shadow-lg">
          <img
            src="/images/isabel.jpg"
            alt="Isabel Monserrat"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-4xl font-bold text-center mb-2">Isabel Monserrat</h2>
        <p className="text-center text-lg mb-10 tracking-widest uppercase text-sm"
          style={{ color: '#c9a84c' }}>
          Painter · Sculptor · Storyteller
        </p>

        <div className="space-y-5 text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
          <p>
            Isabel Monserrat is a painter and sculptor born in December 1997. A dedicated creator, she completed her Bachelor's degree in Painting at the University of Santo Tomas and currently pursuing her Master's in Fine Arts there.
          </p>
          <p>
            Isabel has participated in over 50 local and international exhibitions, focusing on women often in dreamy themes of nature — embracing imperfections and healing.
          </p>
          <p>
            My work invites the viewer into a world where femininity, nature, and emotion intertwine — each brushstroke a quiet act of courage, each piece a conversation between the self and the sacred.
          </p>
        </div>

        {/* Divider */}
        <div className="my-12 border-t" style={{ borderColor: '#e8e0d5' }} />

        {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
            <div className="rounded-2xl p-6 border" style={{ background: '#ffffff', borderColor: '#e8e0d5' }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Education</p>
              <p className="font-bold text-lg mb-1">University of Santo Tomas</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Bachelor's in Painting</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Master's in Fine Arts</p>
            </div>
            <div className="rounded-2xl p-6 border" style={{ background: '#ffffff', borderColor: '#e8e0d5' }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Exhibitions</p>
              <p className="font-bold text-lg mb-1">50+ Shows</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Local & International</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Group</p>
            </div>
            <div className="rounded-2xl p-6 border" style={{ background: '#ffffff', borderColor: '#e8e0d5' }}>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Discipline</p>
              <p className="font-bold text-lg mb-1">Painting & Sculpture</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Mixed Media</p>
              <p className="text-sm" style={{ color: '#6b6b6b' }}>Oil · Acrylic · Texture</p>
            </div>
          </div>

          {/* Notable Exhibitions */}
          <div className="rounded-2xl p-8 border mb-12" style={{ background: '#ffffff', borderColor: '#e8e0d5' }}>
            <p className="text-xs tracking-widest uppercase mb-6 text-center" style={{ color: '#c9a84c' }}>
              Notable Exhibitions
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: '#e8e0d5' }}>
                <div>
                  <a href="https://www.facebook.com/ACCES.organization" target="_blank"
                    className="font-semibold transition hover:opacity-70 underline underline-offset-2"
                    style={{ color: '#6b1e2e' }}>
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
                    style={{ color: '#6b1e2e' }}>
                    United Nations — Let's Flourish
                  </a>
                  <p className="text-sm" style={{ color: '#6b6b6b' }}>Vienna, Austria</p>
                </div>
                <p className="text-sm font-medium" style={{ color: '#6b1e2e' }}>2026</p>
              </div>
              <div className="flex justify-between items-center border-b pb-4" style={{ borderColor: '#e8e0d5' }}>
                <div>
                  <a href="https://vienna101.com/tara-lets-contemporary-filipino-art-exhibit/?fbclid=IwY2xjawLGA9BleHRuA2FlbQIxMQBicmlkETFqRHZXSDVWYklubjRYd09sAR7LFK3B8S-dMiVakTAZuII8APX9nU4S5fg-ogmdStqbxyxLsGcJ2O-nf9F3IQ_aem_OmtXQpyLDQi_M3Aw6Qhymw" target="_blank"
                    className="font-semibold transition hover:opacity-70 underline underline-offset-2"
                    style={{ color: '#6b1e2e' }}>
                    Tara Let's! Contemporary Filipino Art
                  </a>
                  <p className="text-sm" style={{ color: '#6b6b6b' }}>Philippine Embassy, Vienna, Austria</p>
                </div>
                <p className="text-sm font-medium" style={{ color: '#6b1e2e' }}>2025</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Various Group Exhibitions</p>
                  <p className="text-sm" style={{ color: '#6b6b6b' }}>Philippines</p>
                </div>
                <p className="text-sm font-medium" style={{ color: '#6b1e2e' }}>2015 — Present</p>
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}