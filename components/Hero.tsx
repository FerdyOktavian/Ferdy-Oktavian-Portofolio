import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 md:px-10">
      <div className="grid min-h-[calc(100vh-77px)] items-center gap-10 py-10 md:gap-16 md:py-20">
        {/* LEFT */}
        <div className="order-2 md:order-1">
          <p className="mb-7 text-sm text-muted">Jakarta, Indonesia</p>

          <h1 className="max-w-[650px] text-5xl leading-[0.92] font-semibold tracking-[-0.045em] md:text-7xl md:leading-[0.9] lg:text-[7rem]">
            I&apos;m
            <br />
            Ferdy.
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-[1.5] tracking-[-0.015em] md:mt-10 md:text-2xl">
            I like making things with computers.
          </p>

          <p className="mt-4 max-w-lg text-[15px] leading-7 text-muted md:mt-5 md:text-lg">
            Sometimes it&apos;s a website, sometimes a machine learning
            experiment, a game, or simply something I&apos;m curious enough to
            build.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#work"
              className="border-b border-ink pb-1 text-sm font-medium transition-opacity hover:opacity-50"
            >
              See my work ↓
            </a>

            <a
              href="mailto:muhammadferdisp33@gmail.com"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Send me an email ↗
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="w-full max-w-[300px] border border-line bg-[#ebe7dd] p-2.5 sm:max-w-[340px] md:max-w-[430px] md:p-4">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="public/projects/ferdy.jpeg"
                alt="Muhammad Ferdy Oktavian"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 430px"
                className="object-cover"
              />
            </div>

            <div className="flex items-end justify-between gap-5 px-1 pt-4">
              <div>
                <p className="text-sm font-medium">Muhammad Ferdy Oktavian</p>

                <p className="mt-1 text-xs text-muted">Informatics Graduate</p>
              </div>

              <p className="text-xs text-muted">Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
