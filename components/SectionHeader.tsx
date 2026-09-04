type SectionHeaderProps = {
  number: string;
  title: string;
  description: string;

  variant:
    | "about"
    | "work"
    | "experience"
    | "education"
    | "skills"
    | "certifications"
    | "contact";

  // Dibiarin sementara supaya file lama yang masih
  // memakai tone="" tidak error.
  tone?: "paper" | "sage" | "warm" | "dark";
};

export default function SectionHeader({
  number,
  title,
  description,
  variant,
}: SectionHeaderProps) {
  const styles = {
    about: {
      card: "bg-[#ebe6dc] border-[#d8d1c5]",
      muted: "text-[#716d64]",
      number: "border-[#cec6b8] bg-[#f2eee6] text-[#6d685f]",
    },

    work: {
      card: "bg-[#ccd7c5] border-[#b8c5b0]",
      muted: "text-[#596553]",
      number: "border-[#b4c1ac] bg-[#dbe3d5] text-[#566151]",
    },

    experience: {
      card: "bg-[#e8e3d9] border-[#d7d0c4]",
      muted: "text-[#706b62]",
      number: "border-[#d0c8ba] bg-[#f0ece4] text-[#6d685f]",
    },

    education: {
      card: "bg-[#dfd2c5] border-[#cab9a9]",
      muted: "text-[#715f52]",
      number: "border-[#c7b5a5] bg-[#eadfd4] text-[#6c594c]",
    },

    skills: {
      card: "bg-[#ced8c8] border-[#bbc7b5]",
      muted: "text-[#5b6657]",
      number: "border-[#b5c2af] bg-[#dce4d7] text-[#566151]",
    },

    certifications: {
      card: "bg-[#e7e2d8] border-[#d5cec2]",
      muted: "text-[#706b62]",
      number: "border-[#cec6b9] bg-[#f0ece4] text-[#6b675f]",
    },

    contact: {
      card: "bg-[#2b2b27] border-white/10",
      muted: "text-[#aaa79f]",
      number: "border-white/10 bg-white/[0.04] text-[#d2cfc6]",
    },
  };

  const current = styles[variant];
  const isDark = variant === "contact";

  return (
    <div className="mx-auto max-w-[1240px] px-5 pt-10 sm:px-6 md:px-10 md:pt-14">
      <div
        className={`
          rounded-[22px]
          border
          px-6
          py-7
          shadow-[0_8px_25px_rgba(34,34,31,0.035)]
          sm:px-8
          sm:py-8
          md:rounded-[26px]
          md:px-10
          md:py-10
          ${current.card}
          ${isDark ? "text-[#f3f0e8]" : "text-ink"}
        `}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          {/* LEFT */}
          <div className="max-w-3xl">
            {/* SECTION LABEL */}
            <div
              className={`
                flex
                items-center
                gap-2.5
                text-[11px]
                font-medium
                uppercase
                tracking-[0.16em]
                sm:text-xs
                ${current.muted}
              `}
            >
              <span>Section</span>

              <span className="h-px w-6 bg-current opacity-40" />

              <span>{number}</span>
            </div>

            {/* TITLE */}
            <h2 className="mt-4 text-4xl leading-[1] font-semibold tracking-[-0.04em] sm:text-5xl md:mt-5 md:text-[3.75rem]">
              {title}
            </h2>

            {/* DESCRIPTION */}
            <p
              className={`
                mt-4
                max-w-2xl
                text-[15px]
                leading-7
                sm:text-base
                md:mt-5
                md:text-[17px]
                ${current.muted}
              `}
            >
              {description}
            </p>
          </div>

          {/* NUMBER BOX */}
          <div
            className={`
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-[16px]
              border
              text-xl
              font-medium
              tracking-[-0.03em]
              md:h-20
              md:w-20
              md:rounded-[18px]
              md:text-2xl
              ${current.number}
            `}
            aria-hidden="true"
          >
            {number}
          </div>
        </div>
      </div>
    </div>
  );
}
