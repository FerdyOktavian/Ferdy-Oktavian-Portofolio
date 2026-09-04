import Image from "next/image";
import { contact } from "@/data/portofolio";

export default function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-12 sm:px-6 md:px-10 md:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          {/* LEFT — TEXT */}
          <div>
            <p className="text-sm text-muted">Jakarta, Indonesia</p>

            <h1 className="mt-5 text-5xl leading-[0.9] font-semibold tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              I&apos;m
              <br />
              Ferdy.
            </h1>

            <p className="mt-8 max-w-lg text-xl leading-8 tracking-[-0.02em] md:text-2xl">
              I like making things with computers.
            </p>

            <p className="mt-4 max-w-lg text-base leading-7 text-muted md:text-lg">
              Sometimes it&apos;s a website, sometimes a machine learning
              experiment, a game, or simply something I&apos;m curious enough to
              build.
            </p>

            <div className="mt-9 flex flex-wrap gap-8">
              <a
                href="#work"
                className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
              >
                See my work ↓
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="text-sm transition-opacity hover:opacity-50"
              >
                Send me an email ↗
              </a>
            </div>
          </div>

          {/* RIGHT — PHOTO */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[300px] border border-line bg-[#ebe7dd] p-2.5 sm:max-w-[340px] md:max-w-[370px] lg:max-w-[390px] lg:p-3">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/projects/ferdy.jpeg"
                  alt="Muhammad Ferdy Oktavian"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 340px, 390px"
                  className="object-cover"
                />
              </div>

              <div className="flex items-end justify-between gap-5 px-1 pt-3">
                <div>
                  <p className="text-sm font-medium">Muhammad Ferdy Oktavian</p>

                  <p className="mt-1 text-xs text-muted">
                    Informatics Graduate
                  </p>
                </div>

                <p className="text-xs text-muted">Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
