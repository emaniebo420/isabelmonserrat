import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CopyLinkButton from '@/components/CopyLinkButton';
import WorkImg from '@/components/WorkImg';
import artworks from '@/data/artworks';

const SITE = 'https://isabelmonserrat.com';

export const dynamicParams = false;

export function generateStaticParams() {
  return artworks.map((a) => ({ slug: a.slug }));
}

async function getArtwork(params) {
  const { slug } = await params;
  return artworks.find((a) => a.slug === slug) ?? null;
}

export async function generateMetadata({ params }) {
  const art = await getArtwork(params);
  if (!art) return {};
  const description = `${art.title} (${art.year}), ${art.medium}, ${art.size.trim()}. Original painting by Isabel Monserrat.`;
  return {
    title: art.title,
    description,
    alternates: { canonical: `/gallery/${art.slug}` },
    openGraph: {
      title: `${art.title} | Isabel Monserrat`,
      description,
      url: `/gallery/${art.slug}`,
      images: [{ url: `${SITE}${art.image}`, alt: art.title }],
    },
  };
}

export default async function PaintingPage({ params }) {
  const art = await getArtwork(params);
  if (!art) notFound();

  const sameYear = artworks.filter((a) => a.year === art.year && a.id !== art.id);
  const url = `${SITE}/gallery/${art.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: art.title,
    creator: { '@type': 'Person', name: 'Isabel Monserrat', url: SITE },
    dateCreated: art.year,
    artMedium: art.medium,
    image: `${SITE}${art.image}`,
    url,
  };

  return (
    <main className="min-h-screen" style={{ background: '#faf7f2' }}>
      <Navbar active="gallery" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <section className="max-w-5xl mx-auto px-6 py-10 md:py-16">
        <Link href="/gallery" className="text-sm underline" style={{ color: '#6b6b6b' }}>
          ← Back to gallery
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <WorkImg
            src={art.image}
            wmSrc={art.wm}
            alt={art.title}
            fetchPriority="high"
            wrapperClassName="mx-auto block w-fit max-w-full"
            className="mx-auto block h-auto w-auto max-w-full rounded-2xl md:max-h-[80vh]"
            style={{ boxShadow: '0 18px 40px rgba(50,30,35,0.22)' }}
          />

          <div>
            <p className="text-xs font-medium uppercase tracking-widest" style={{ color: '#c9a84c' }}>
              {art.year} &nbsp;·&nbsp; {art.available ? 'Available' : 'Sold'}
            </p>
            <h1 className="mt-3 mb-4 text-3xl md:text-4xl font-bold leading-tight">{art.title}</h1>
            <p style={{ color: '#6b6b6b' }}>{art.medium}</p>
            <p className="mt-1 text-sm" style={{ color: '#6b6b6b' }}>{art.size.trim()}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {art.available ? (
                <Link
                  href={`/contact?piece=${art.id}`}
                  className="px-8 py-3 rounded-full text-sm font-medium text-white transition hover:opacity-90"
                  style={{ background: '#6b1e2e' }}
                >
                  Inquire about this piece
                </Link>
              ) : (
                <p className="text-sm" style={{ color: '#888' }}>This piece has found its home.</p>
              )}
              <CopyLinkButton url={url} />
            </div>
          </div>
        </div>

        {sameYear.length > 0 && (
          <div className="mt-16">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest" style={{ color: '#c9a84c' }}>
              More from {art.year}
            </p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {sameYear.map((a) => (
                <Link key={a.id} href={`/gallery/${a.slug}`} className="block overflow-hidden rounded-xl shadow-sm">
                  <img
                    src={a.thumb}
                    alt={a.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
