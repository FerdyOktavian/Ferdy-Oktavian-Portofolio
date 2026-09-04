import { contact } from "@/data/portofolio";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#22221f] text-[#f3f0e8]">
      <SectionHeader
        number="07"
        title="Contact"
        description="Have something you want to talk about? You can reach me through email, GitHub, or LinkedIn."
        tone="dark"
        variant="contact"
      />

      <div className="mx-auto max-w-[1240px] px-5 pb-20 pt-10 sm:px-6 md:px-10 md:pb-24 md:pt-12">
        <div className="grid gap-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          {/* LEFT SIDE */}
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#aaa79f]">
              Get in touch
            </p>

            <h3 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] md:text-6xl">
              Have something interesting in mind?
            </h3>

            <p className="mt-8 max-w-lg text-lg leading-8 text-[#aaa79f]">
              I&apos;m always open to talking about technology, projects,
              opportunities, or simply exchanging ideas.
            </p>

            {/* EMAIL */}
            <div className="mt-14 md:mt-20">
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[#77756f]">
                Email
              </p>

              <a
                href={`mailto:${contact.email}`}
                className="block max-w-fit break-all text-lg leading-tight tracking-[-0.02em] transition-opacity hover:opacity-60 sm:text-xl md:text-2xl lg:text-3xl"
              >
                {contact.email}
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:pt-10">
            <p className="text-xs uppercase tracking-[0.18em] text-[#aaa79f]">
              Elsewhere
            </p>

            <div className="mt-8 space-y-10">
              {contact.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm text-[#77756f]">{social.name}</p>

                      <p className="mt-2 text-xl tracking-[-0.025em] transition-opacity group-hover:opacity-60 md:text-2xl">
                        {social.username}
                      </p>
                    </div>

                    <span
                      className="mt-1 text-lg text-[#aaa79f] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-20">
              <p className="text-xs uppercase tracking-[0.18em] text-[#77756f]">
                Based in
              </p>

              <p className="mt-3 text-xl tracking-[-0.025em] md:text-2xl">
                {contact.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
