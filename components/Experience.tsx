import { experiences } from "@/data/portofolio";
import SectionHeader from "@/components/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="bg-paper">
      <SectionHeader
        number="03"
        title="Experience"
        description="The place where I've had the opportunity to teach, help others learn, and gain practical experience."
        variant="experience"
      />

      <div className="mx-auto max-w-[1240px] px-5 pb-20 pt-10 sm:px-6 md:px-10 md:pb-24 md:pt-12">
        {experiences.map((experience) => (
          <article
            key={experience.role}
            className="grid gap-8 md:grid-cols-[220px_1fr]"
          >
            <div>
              <p className="text-sm text-muted">{experience.place}</p>
            </div>

            <div>
              <h3 className="max-w-2xl text-3xl leading-tight font-medium tracking-[-0.03em] md:text-5xl">
                {experience.role}
              </h3>

              <p className="mt-4 text-lg">{experience.institution}</p>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
