import { education } from "@/data/portofolio";
import SectionHeader from "@/components/SectionHeader";

export default function Education() {
  return (
    <section id="education" className="bg-[#e8ded3] text-ink">
      <SectionHeader
        number="04"
        title="Education"
        description="My academic background and the place where I studied Informatics."
        tone="warm"
        variant="education"
      />

      <div className="mx-auto max-w-[1240px] px-5 pb-20 pt-10 sm:px-6 md:px-10 md:pb-15 md:pt-10">
        {education.map((item) => (
          <article
            key={item.institution}
            className="grid gap-8 md:grid-cols-[220px_1fr]"
          >
            <p className="text-sm text-muted">{item.period}</p>

            <div>
              <h3 className="text-3xl font-medium tracking-[-0.035em] md:text-5xl">
                {item.institution}
              </h3>

              <p className="mt-4 text-xl text-muted">{item.degree}</p>

              <p className="mt-8 text-sm text-muted">{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
