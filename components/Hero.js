import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

const FRAME =
  'absolute box-border bg-[#fffdf9] p-[0.3cqw] shadow-[0_18px_32px_rgba(50,30,35,0.28)] ring-1 ring-[#e8e0d5]';

/*
 * Laptop (lg+): a fixed 1.56:1 stage so every element keeps the same placement
 * and fade as the approved mockup. Sizes use cqw (percent of stage width).
 * Phone and tablet: Strength banner on top with an overlapping white text card.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#faf7f2' }}>
      <div className="relative lg:mx-auto lg:aspect-[1.56] lg:max-w-[1280px] lg:[container-type:inline-size]">
        {/* Backdrop: Strength. On wide screens it runs on to the right edge of the window. */}
        <div className="relative h-[390px] w-full md:h-[460px] lg:absolute lg:left-[40.6%] lg:top-0 lg:h-full lg:w-[calc(59.4%+(100vw-100%)/2)]">
          <Image
            src="/images/art2.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[center_32%] lg:object-[center_30%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,247,242,0)_60%,#faf7f2_100%)] lg:bg-[linear-gradient(90deg,#faf7f2_0%,rgba(250,247,242,0.9)_6%,rgba(250,247,242,0.5)_22%,rgba(250,247,242,0)_46%),linear-gradient(180deg,rgba(250,247,242,0)_88%,rgba(250,247,242,0.75)_100%)]"
          />
        </div>

        <FadeIn className="relative z-10 -mt-12 px-4 pb-14 lg:absolute lg:inset-0 lg:mt-0 lg:p-0">
          <div className="relative mx-auto lg:mx-0 lg:h-full">
            <div className="rounded-[22px] bg-white p-6 shadow-[0_22px_44px_rgba(50,30,35,0.2)] md:mx-auto md:max-w-xl md:p-8 lg:absolute lg:left-[6.9%] lg:top-1/2 lg:mx-0 lg:w-[36%] lg:max-w-none lg:-translate-y-1/2 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none">
              <p
                className="mb-3 text-xs font-medium uppercase tracking-widest lg:mb-[1.2cqw] lg:text-[1.05cqw]"
                style={{ color: '#c9a84c' }}
              >
                Original Art by Isabel Monserrat
              </p>
              <h1
                className="mb-4 text-[33px] font-bold leading-tight md:text-5xl lg:mb-[1.6cqw] lg:whitespace-nowrap lg:text-[4.3cqw]"
                style={{ color: '#1a1a1a' }}
              >
                Art That Speaks<br />to the Soul
              </h1>
              <p className="text-base lg:text-[1.45cqw] lg:leading-[1.6]" style={{ color: '#6b6b6b' }}>
                Original paintings and commissions by a Filipino-Spanish artist rooted in femininity, nature, and healing.
              </p>
              <Image
                src="/images/signature.png"
                alt="Isabel Monserrat's signature"
                width={520}
                height={212}
                className="mt-5 h-auto w-[150px] opacity-90 lg:mt-[2.2cqw] lg:w-[19cqw]"
              />
            </div>

            {/* Small framed work overlapping the card (phones and tablets) */}
            <div className={`${FRAME} -top-[92px] right-2 w-[72px] rotate-3 !p-1 md:right-[calc(50%-18rem)] lg:hidden`}>
              <Image
                src="/images/art17.webp"
                alt="2 of diamonds by Isabel Monserrat"
                width={1200}
                height={1699}
                sizes="72px"
                className="block h-auto w-full"
              />
            </div>

            {/* Framed works overlapping the backdrop (laptops) */}
            <div className={`${FRAME} hidden lg:block lg:bottom-[8%] lg:left-[53.7%] lg:w-[16.2cqw] lg:-rotate-2`}>
              <Image
                src="/images/art17.webp"
                alt="2 of diamonds by Isabel Monserrat"
                width={1200}
                height={1699}
                sizes="(min-width: 1280px) 210px, 16vw"
                className="block h-auto w-full"
              />
            </div>
            <div className={`${FRAME} hidden lg:block lg:left-[80%] lg:top-[6.5%] lg:w-[12.3cqw] lg:rotate-3`}>
              <Image
                src="/images/art1.webp"
                alt="Oasis by Isabel Monserrat"
                width={1348}
                height={2048}
                sizes="(min-width: 1280px) 160px, 13vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
