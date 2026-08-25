import Link from "next/link";

const navItems = [
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#tech" },
  { label: "Journey", href: "#journey" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2">
      {/* Ambient navbar glow */}
      <div
        className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10 rounded-[3rem] bg-[#FDEAA8]/20 blur-2xl"
        aria-hidden="true"
      />

      <nav
        className="
          relative flex min-h-14 items-center
          gap-3 overflow-hidden rounded-full
          border border-[#1B2F2A]/10
          bg-[#FDEAA8]/45
          px-3 py-2
          shadow-[0_8px_30px_rgba(27,47,42,0.10)]
          backdrop-blur-xl
          backdrop-saturate-150
          supports-[backdrop-filter]:bg-[#FDEAA8]/40
          sm:gap-5 sm:px-5 sm:py-2.5
        "
      >
        {/* Brand */}
        <Link
          href="#"
          className="
            shrink-0 rounded-full px-2 py-2
            font-serif text-xl font-black tracking-tighter
            text-[#1B2F2A]
            transition-colors hover:text-[#E26546]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#E26546]
            sm:text-2xl
          "
          aria-label="Home"
        >
          <span className="hidden sm:inline">Samrat Chauhan</span>

          <span className="sm:hidden" aria-hidden="true">
            Samrat
          </span>
        </Link>

        {/* Scrollable navigation */}
        <div
          className="
            min-w-0 flex-1
            overflow-x-auto overflow-y-hidden
            overscroll-x-contain
            scroll-smooth
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div
            className="
              flex w-max min-w-full
              items-center justify-end
              gap-1 whitespace-nowrap
              text-[9px] font-bold uppercase
              tracking-wider text-[#1B2F2A]/80
              sm:justify-end sm:gap-3
              sm:text-sm sm:tracking-widest
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  shrink-0 rounded-full
                  px-2.5 py-2
                  transition-colors
                  hover:bg-[#FFFDF6]/60
                  hover:text-[#E26546]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#E26546]
                  min-[380px]:px-3
                  sm:px-3
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}