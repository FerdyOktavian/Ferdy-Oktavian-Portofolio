export default function Footer() {
  return (
    <footer className="bg-[#22221f] text-[#f3f0e8]">
      <div className="mx-auto max-w-[1240px] px-6 pb-10 md:px-10 md:pb-12">
        <div className="flex flex-col gap-5 text-sm text-[#77756f] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[#aaa79f]">Muhammad Ferdy Oktavian</p>

            <p className="mt-1">Jakarta, Indonesia</p>
          </div>

          <div className="sm:text-right">
            <p>Portfolio · 2026</p>

            <p className="mt-1">Built with Next.js & TypeScript</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
