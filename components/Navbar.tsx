const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-[1240px] px-6 py-5 md:px-10">
        <div className="flex items-center justify-between">
          <a href="#" className="text-[17px] font-semibold tracking-[-0.02em]">
            Ferdy Oktavian
          </a>

          <span className="text-sm text-muted sm:hidden">Portfolio</span>

          <nav className="hidden items-center gap-8 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] text-muted transition-colors duration-200 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <nav className="mt-5 flex gap-6 overflow-x-auto border-t border-line pt-4 sm:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="shrink-0 text-sm text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
