import { about } from "@/data/portofolio";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="bg-paper">
      <SectionHeader
        number="01"
        title="About"
        description="A little bit about who I am, what I enjoy building, and the areas of technology I'm curious about."
        variant="about"
      />

      <div className="mx-auto max-w-[1240px] px-5 pb-20 pt-10 sm:px-6 md:px-10 md:pb-24 md:pt-12">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-20">
          <p className="text-sm leading-6 text-muted">
            Muhammad Ferdy Oktavian
            <br />
            Jakarta, Indonesia
          </p>

          <div className="max-w-2xl space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg leading-8 text-muted md:text-xl md:leading-9"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
