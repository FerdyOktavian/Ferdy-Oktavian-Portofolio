import { certifications } from "@/data/portofolio";
import SectionHeader from "@/components/SectionHeader";

export default function Certifications() {
  const featuredCertifications = certifications.slice(0, 4);
  const otherCertifications = certifications.slice(4);

  return (
    <section id="certifications" className="bg-paper text-ink">
      <SectionHeader
        number="06"
        title="Certifications"
        description="Courses and training programs I've completed while learning and exploring different areas of computing and software development."
      />

      <div className="mx-auto max-w-[1240px] px-6 pb-28 pt-16 md:px-10 md:pb-36 md:pt-24">
        {/* FEATURED CERTIFICATIONS */}
        <div className="grid gap-5 md:grid-cols-2">
          {featuredCertifications.map((certificate, index) => (
            <article
              key={`${certificate.title}-${index}`}
              className="flex min-h-[260px] flex-col justify-between rounded-[20px] bg-[#ebe7dd] p-7 md:min-h-[300px] md:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  Certification
                </p>

                <span className="font-serif text-3xl text-[#b2ada2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-14">
                <h3 className="max-w-lg text-2xl leading-tight font-medium tracking-[-0.03em] md:text-3xl">
                  {certificate.title}
                </h3>

                {certificate.subtitle && (
                  <p className="mt-4 max-w-md text-sm leading-6 text-muted">
                    {certificate.subtitle}
                  </p>
                )}

                {certificate.issuer && (
                  <p className="mt-4 max-w-md text-sm leading-6 text-muted">
                    {certificate.issuer}
                  </p>
                )}

                {(certificate.year || certificate.credentialUrl) && (
                  <div className="mt-7 flex flex-wrap items-center gap-6">
                    {certificate.year && (
                      <p className="text-sm text-muted">{certificate.year}</p>
                    )}

                    {certificate.credentialUrl && (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                      >
                        View credential ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* OTHER CERTIFICATIONS */}
        {otherCertifications.length > 0 && (
          <details className="group mt-12 rounded-[20px] bg-[#e5e1d7]">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-6 md:px-9">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  Archive
                </p>

                <p className="mt-2 text-xl font-medium tracking-[-0.02em]">
                  View all certifications
                </p>
              </div>

              <span className="text-2xl font-light transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="grid gap-x-12 gap-y-10 px-7 pb-9 pt-5 md:grid-cols-2 md:px-9">
              {otherCertifications.map((certificate, index) => (
                <article
                  key={`${certificate.title}-${index}`}
                  className="grid grid-cols-[40px_1fr] gap-4"
                >
                  <span className="pt-1 text-xs text-muted">
                    {String(index + 5).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-lg leading-7 font-medium">
                      {certificate.title}
                    </h3>

                    {certificate.subtitle && (
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {certificate.subtitle}
                      </p>
                    )}

                    {certificate.issuer && (
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {certificate.issuer}
                      </p>
                    )}

                    {certificate.credentialUrl && (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-block border-b border-ink pb-1 text-sm transition-opacity hover:opacity-50"
                      >
                        View credential ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
