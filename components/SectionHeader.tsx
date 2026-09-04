type SectionHeaderProps = {
  number: string;
  title: string;
  description: string;
  tone?: "paper" | "sage" | "warm" | "dark";
};

export default function SectionHeader({
  number,
  title,
  description,
  tone = "paper",
}: SectionHeaderProps) {
  const mutedClasses = {
    paper: "text-muted",
    sage: "text-[#65705f]",
    warm: "text-[#725f52]",
    dark: "text-[#aaa79f]",
  };

  return (
    <div className="mx-auto max-w-[1240px] px-5 pt-12 sm:px-6 md:px-10 md:pt-16 lg:pt-20">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-10">
        <div>
          {/* SECTION LABEL */}
          <div
            className={`flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.16em] sm:text-xs ${mutedClasses[tone]}`}
          >
            <span>Section</span>

            <span className="h-px w-6 bg-current opacity-40" />

            <span>{number}</span>
          </div>

          {/* TITLE */}
          <h2 className="mt-4 max-w-4xl text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.045em] sm:text-5xl md:mt-5 md:text-6xl lg:text-[4.5rem]">
            {title}
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`mt-4 max-w-2xl text-[15px] leading-7 sm:text-base md:mt-5 md:text-lg md:leading-8 ${mutedClasses[tone]}`}
          >
            {description}
          </p>
        </div>

        {/* DECORATIVE NUMBER */}
        <div
          className="hidden select-none text-[6rem] leading-[0.8] font-semibold tracking-[-0.07em] opacity-[0.055] md:block lg:text-[7.5rem]"
          aria-hidden="true"
        >
          {number}
        </div>
      </div>
    </div>
  );
}
