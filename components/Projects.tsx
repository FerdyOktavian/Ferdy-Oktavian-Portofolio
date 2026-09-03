import { projects } from "@/data/portofolio";
import ProjectImage from "@/components/ProjectImage";
import SectionHeader from "@/components/SectionHeader";

export default function Projects() {
  const featuredProject = projects[0];
  const beyondProject = projects[1];
  const smokingProject = projects[2];
  const clinicProject = projects[3];
  const yoloProject = projects[4];

  return (
    <section
      id="work"
      className="border-t border-black/10 bg-[#dde3d5] text-ink"
    >
      {/* ====================================================== */}
      {/* SECTION HEADER */}
      {/* ====================================================== */}

      <SectionHeader
        number="02"
        title="Selected Work"
        description="A selection of projects I've built while exploring machine learning, computer vision, websites, games, and software development."
        tone="sage"
      />

      <div className="mx-auto max-w-[1240px] px-6 pb-28 pt-16 md:px-10 md:pb-40 md:pt-24">
        {/* ====================================================== */}
        {/* 01 — SAWITVISION / FEATURED PROJECT */}
        {/* ====================================================== */}

        <article>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">
                  {featuredProject.number}
                </span>

                <span className="text-sm text-[#65705f]">Featured Project</span>
              </div>

              <h3 className="mt-5 max-w-2xl text-5xl leading-[0.95] font-medium tracking-[-0.05em] md:text-7xl">
                {featuredProject.title}
              </h3>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-8 text-[#586052]">
                {featuredProject.description}
              </p>

              <p className="mt-6 text-sm leading-7 text-[#40483d]">
                {featuredProject.technologies.join(" · ")}
              </p>

              <div className="mt-8 flex flex-wrap gap-7">
                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                  >
                    View repository ↗
                  </a>
                )}

                {featuredProject.demo && (
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                  >
                    Live project ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* MAIN SCREENSHOT */}
          <div className="mx-auto mt-14 max-w-[1080px]">
            <ProjectImage
              src={featuredProject.images[0]}
              alt={`${featuredProject.title} main screen`}
              className="bg-[#c8d2c0]"
              imageClassName="aspect-[16/9] object-cover object-top"
            />
          </div>

          {/* OPTIONAL SCREENSHOTS */}
          {featuredProject.images.length > 1 && (
            <details className="group mx-auto mt-7 max-w-[1080px]">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm">
                <span className="text-[#586052]">View more screens</span>

                <span className="text-xl transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {featuredProject.images.slice(1).map((image, index) => (
                  <ProjectImage
                    key={image}
                    src={image}
                    alt={`${featuredProject.title} screen ${index + 2}`}
                    width={1000}
                    height={800}
                    imageClassName="aspect-[16/10] object-cover object-top"
                  />
                ))}
              </div>
            </details>
          )}
        </article>

        {/* ====================================================== */}
        {/* 02 — BEYOND THE RIDDLE */}
        {/* ====================================================== */}

        <article className="mt-20 md:mt-36 lg:mt-44">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* IMAGE */}
            <div>
              <ProjectImage
                src={beyondProject.images[0]}
                alt={`${beyondProject.title} gameplay`}
                imageClassName="aspect-[16/9] object-cover"
              />

              {beyondProject.images.length > 1 && (
                <details className="group mt-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm">
                    <span className="text-[#586052]">View another screen</span>

                    <span className="text-xl transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="mt-4 max-w-[520px]">
                    <ProjectImage
                      src={beyondProject.images[1]}
                      alt={`${beyondProject.title} main menu`}
                      imageClassName="aspect-[16/9] object-cover"
                    />
                  </div>
                </details>
              )}
            </div>

            {/* TEXT */}
            <div className="lg:pl-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">
                  {beyondProject.number}
                </span>

                <span className="text-sm text-[#65705f]">
                  {beyondProject.shortTitle}
                </span>
              </div>

              <h3 className="mt-5 text-4xl leading-[1] font-medium tracking-[-0.045em] md:text-6xl">
                {beyondProject.title}
              </h3>

              <p className="mt-7 max-w-lg text-lg leading-8 text-[#586052]">
                {beyondProject.description}
              </p>

              <p className="mt-6 text-sm leading-7">
                {beyondProject.technologies.join(" · ")}
              </p>

              <div className="mt-8 flex flex-wrap gap-7">
                {beyondProject.github && (
                  <a
                    href={beyondProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                  >
                    View repository ↗
                  </a>
                )}

                {beyondProject.demo && (
                  <a
                    href={beyondProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                  >
                    Live project ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* ====================================================== */}
        {/* 03 — BERHENTISEKARANG */}
        {/* ====================================================== */}

        <article className="mt-20 md:mt-36 lg:mt-44">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* TEXT */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">
                  {smokingProject.number}
                </span>

                <span className="text-sm text-[#65705f]">
                  {smokingProject.shortTitle}
                </span>
              </div>

              <h3 className="mt-5 text-4xl leading-[1] font-medium tracking-[-0.045em] md:text-6xl">
                {smokingProject.title}
              </h3>

              <p className="mt-7 max-w-lg text-lg leading-8 text-[#586052]">
                {smokingProject.description}
              </p>

              <p className="mt-6 text-sm leading-7">
                {smokingProject.technologies.join(" · ")}
              </p>

              <div className="mt-8 flex flex-wrap gap-7">
                {smokingProject.github && (
                  <a
                    href={smokingProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                  >
                    View repository ↗
                  </a>
                )}

                {smokingProject.demo && (
                  <a
                    href={smokingProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                  >
                    Live project ↗
                  </a>
                )}
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-1 lg:order-2">
              <ProjectImage
                src={smokingProject.images[0]}
                alt={`${smokingProject.title} homepage`}
                className="bg-[#d8d1c8]"
                imageClassName="aspect-[16/10] object-cover object-top"
              />
            </div>
          </div>
        </article>

        {/* ====================================================== */}
        {/* MORE PROJECTS */}
        {/* ====================================================== */}

        <div className="mt-20 md:mt-36 lg:mt-44">
          <div className="mb-12 max-w-xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[#65705f]">
              More work
            </p>

            <h3 className="mt-4 text-4xl leading-tight font-medium tracking-[-0.04em] md:text-5xl">
              A couple more things I&apos;ve worked on.
            </h3>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
            {/* ================================================== */}
            {/* 04 — CLINIC */}
            {/* ================================================== */}

            <article>
              <ProjectImage
                src={clinicProject.images[0]}
                alt={clinicProject.title}
                imageClassName="aspect-[4/3] object-cover object-top"
              />

              <div className="mt-7">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">
                    {clinicProject.number}
                  </span>

                  <span className="text-sm text-[#65705f]">
                    {clinicProject.shortTitle}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  {clinicProject.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#586052]">
                  {clinicProject.description}
                </p>

                <p className="mt-5 text-sm leading-7">
                  {clinicProject.technologies.join(" · ")}
                </p>

                <div className="mt-7 flex flex-wrap gap-7">
                  {clinicProject.github && (
                    <a
                      href={clinicProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                    >
                      View repository ↗
                    </a>
                  )}

                  {clinicProject.demo && (
                    <a
                      href={clinicProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                    >
                      Live project ↗
                    </a>
                  )}
                </div>
              </div>
            </article>

            {/* ================================================== */}
            {/* 05 — YOLO */}
            {/* ================================================== */}

            <article className="lg:pt-16">
              <ProjectImage
                src={yoloProject.images[0]}
                alt={yoloProject.title}
                className="bg-[#cbd2c5]"
                imageClassName="aspect-[4/3] bg-[#22221f] object-contain p-5 md:p-8"
              />

              <div className="mt-7">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">
                    {yoloProject.number}
                  </span>

                  <span className="text-sm text-[#65705f]">
                    {yoloProject.shortTitle}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] md:text-4xl">
                  {yoloProject.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-7 text-[#586052]">
                  {yoloProject.description}
                </p>

                <p className="mt-5 text-sm leading-7">
                  {yoloProject.technologies.join(" · ")}
                </p>

                <div className="mt-7 flex flex-wrap gap-7">
                  {yoloProject.github && (
                    <a
                      href={yoloProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                    >
                      View repository ↗
                    </a>
                  )}

                  {yoloProject.demo && (
                    <a
                      href={yoloProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                    >
                      Live project ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
