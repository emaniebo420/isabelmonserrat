import Image from 'next/image';

const PAINTINGS = {
  oasis: { src: '/images/art1.webp', alt: 'Oasis by Isabel Monserrat', width: 1348, height: 2048 },
  strength: { src: '/images/art2.webp', alt: 'Strength by Isabel Monserrat', width: 1200, height: 1721 },
  fruit: { src: '/images/art13.webp', alt: 'Forbidden Fruit by Isabel Monserrat', width: 1200, height: 1575 },
};

function Frame({ painting, sizes, eager = false, className }) {
  return (
    <div
      className={`absolute box-border bg-[#fffdf9] p-1 shadow-[0_18px_32px_rgba(50,30,35,0.28)] ring-1 ring-[#e8e0d5] lg:p-1.5 ${className}`}
    >
      <Image
        src={painting.src}
        alt={painting.alt}
        width={painting.width}
        height={painting.height}
        sizes={sizes}
        loading={eager ? 'eager' : 'lazy'}
        className="block h-auto w-full"
      />
    </div>
  );
}

export default function HeroWall() {
  return (
    <div className="relative order-first -mx-6 aspect-[372/352] w-[calc(100%+3rem)] overflow-hidden md:mx-auto md:mt-12 md:w-full md:max-w-[460px] md:overflow-visible lg:order-none lg:mt-0 lg:aspect-[600/620] lg:max-w-[600px] lg:overflow-hidden lg:rounded-3xl lg:bg-[#f0e8dc] lg:shadow-[inset_0_0_0_1px_#e8e0d5]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(ellipse_60%_50%_at_40%_30%,rgba(255,255,255,0.7),rgba(255,255,255,0))] lg:block"
      />

      {/* Back to front: Forbidden Fruit, Strength, Oasis */}
      <Frame
        painting={PAINTINGS.fruit}
        sizes="(min-width: 1024px) 170px, 130px"
        className="right-[-9.7%] top-[21.2%] w-[31.7%] lg:bottom-[9%] lg:right-[5.67%] lg:top-auto lg:w-[27%]"
      />
      <Frame
        painting={PAINTINGS.strength}
        sizes="(min-width: 1024px) 200px, 130px"
        className="left-[-9.7%] top-[13.9%] w-[31.7%] lg:left-auto lg:right-[7.67%] lg:top-[5%] lg:w-[33%]"
      />
      <Frame
        painting={PAINTINGS.oasis}
        sizes="(min-width: 1024px) 290px, 220px"
        eager
        className="left-[22.6%] top-0 w-[54.8%] lg:left-[7.33%] lg:top-[11%] lg:w-[48%]"
      />

      <p className="absolute bottom-[4%] left-[7.33%] hidden text-xs text-[#4a3f42] lg:block">
        <span
          className="text-[15px] text-[#1a1a1a]"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          Oasis
        </span>{' '}
        · oil on canvas
      </p>
      <p className="absolute bottom-[4%] right-[5.67%] hidden text-[11px] text-[#6b6b6b] lg:block">
        Forbidden Fruit · 2024
      </p>
    </div>
  );
}
