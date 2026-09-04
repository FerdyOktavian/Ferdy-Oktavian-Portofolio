import { interests, skillGroups } from "@/data/portofolio";
import SectionHeader from "@/components/SectionHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-black/10 bg-[#dfe5d8] text-ink"
    >
      <SectionHeader
        number="05"
        title="Skills"
        description="Programming languages, technologies, and tools I've worked with while turning ideas into actual projects."
        tone="sage"
        variant="skills"
      />

      <div className="mx-auto max-w-[1240px] px-6 pb-28 pt-16 md:px-10 md:pb-36 md:pt-24">
        {/* MAIN SKILLS */}
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {skillGroups.map((group, index) => (
            <article key={group.title}>
              <div className="mb-8 flex items-center gap-3">
                <span className="text-xs text-[#725f52]">0{index + 1}</span>

                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#725f52]">
                  {group.title}
                </p>
              </div>

              <div className="space-y-2">
                {group.items.map((item) => (
                  <p
                    key={item}
                    className="text-3xl leading-tight tracking-[-0.01em] md:text-4xl"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CURRENTLY EXPLORING */}
        <div className="mt-24 md:mt-32">
          <div className="rounded-[24px] bg-[#22221f] px-7 py-10 text-[#f3f0e8] md:px-12 md:py-14">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#aaa79f]">
                  Currently exploring
                </p>

                <h3 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
                  Things I&apos;m curious about next.
                </h3>
              </div>

              <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {interests.map((interest, index) => (
                  <div key={interest} className="flex items-baseline gap-4">
                    <span className="text-xs text-[#77756f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-xl tracking-[-0.02em] md:text-2xl">
                      {interest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
