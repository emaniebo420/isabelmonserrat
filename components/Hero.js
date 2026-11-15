import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

const FRAME =
  'absolute box-border bg-[#fffdf9] p-1 shadow-[0_18px_32px_rgba(50,30,35,0.28)] ring-1 ring-[#e8e0d5]';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden lg:flex lg:min-h-[90vh] lg:items-center"
      style={{ background: '#faf7f2' }}
    >
      {/* Backdrop: Strength. Top banner on phones and tablets, right side on laptops. */}
      <div className="relative h-[390px] w-full md:h-[460px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[60%]">
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
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,247,242,0)_60%,#faf7f2_100%)] lg:bg-[linear-gradient(90deg,#faf7f2_0%,#faf7f2_36%,rgba(250,247,242,0.72)_52%,rgba(250,247,242,0)_78%),linear-gradient(180deg,rgba(250,247,242,0)_78%,rgba(250,247,242,0.9)_100%)]"
        />
      </div>

      <div className="relative z-10 -mt-12 px-4 pb-14 lg:mt-0 lg:w-full lg:px-6 lg:py-20">
        <FadeIn>
          <div className="relative mx-auto lg:flex lg:h-[520px] lg:max-w-5xl lg:items-center">
            <div className="rounded-[22px] bg-white p-6 shadow-[0_22px_44px_rgba(50,30,35,0.2)] md:mx-auto md:max-w-xl md:p-8 lg:mx-0 lg:w-[50%] lg:max-w-none lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest lg:mb-4" style={{ color: '#c9a84c' }}>
                Original Art by Isabel Monserrat
              </p>
              <h1 className="mb-4 text-[33px] font-bold leading-tight md:text-5xl lg:mb-6 lg:text-[52px]" style={{ color: '#1a1a1a' }}>
                Art That Speaks<br />to the Soul
              </h1>
              <p className="text-base lg:text-lg" style={{ color: '#6b6b6b' }}>
                Original paintings and commissions by a Filipino-Spanish artist rooted in femininity, nature, and healing.
              </p>
              <Image
                src="/images/signature.png"
                alt="Isabel Monserrat's signature"
                width={520}
                height={212}
                className="mt-5 h-auto w-[150px] opacity-90 lg:mt-7 lg:w-[200px]"
              />
            </div>

            {/* Small framed work overlapping the card (phones and tablets) */}
            <div className={`${FRAME} -top-[92px] right-2 w-[72px] rotate-3 md:right-[calc(50%-18rem)] lg:hidden`}>
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
            <div className={`${FRAME} bottom-[6%] left-[52%] hidden w-[150px] -rotate-2 lg:block`}>
              <Image
                src="/images/art13.webp"
                alt="Forbidden Fruit by Isabel Monserrat"
                width={1200}
                height={1575}
                sizes="150px"
                className="block h-auto w-full"
              />
            </div>
            <div className={`${FRAME} right-[10%] top-[4%] hidden w-[112px] rotate-3 lg:block`}>
              <Image
                src="/images/art1.webp"
                alt="Oasis by Isabel Monserrat"
                width={1348}
                height={2048}
                sizes="112px"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
