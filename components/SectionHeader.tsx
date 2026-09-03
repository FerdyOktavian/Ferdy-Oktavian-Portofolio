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
    <div className="mx-auto max-w-[1240px] px-5 pt-14 sm:px-6 md:px-10 md:pt-28">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <div
            className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] ${mutedClasses[tone]}`}
          >
            <span>Section</span>

            <span className="h-px w-8 bg-current opacity-40" />

            <span>{number}</span>
          </div>

          <h2 className="mt-5 text-5xl leading-[0.92] font-semibold tracking-[-0.045em] md:mt-7 md:text-7xl md:leading-[0.88] lg:text-[7rem]">
            {title}
          </h2>

          <p
            className={`mt-5 max-w-xl text-base leading-7 md:mt-8 md:text-xl md:leading-8 ${mutedClasses[tone]}`}
          >
            {description}
          </p>
        </div>

        <div
          className="hidden text-[9rem] leading-none font-semibold tracking-[-0.08em] opacity-[0.08] md:block lg:text-[12rem]"
          aria-hidden="true"
        >
          {number}
        </div>
      </div>
    </div>
  );
}
