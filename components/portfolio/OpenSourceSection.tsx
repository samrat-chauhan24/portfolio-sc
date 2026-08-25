import { openSourceStats } from "@/data/portfolio";

export function OpenSourceSection() {
  return (
    <section id="opensource" className="scroll-mt-24 space-y-8">
      {/* Section heading */}
      <div className="flex flex-col items-start border-b border-[#1B2F2A]/20 pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div>
          <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#E26546]">
            03 / Public Systems
          </div>

          <h2 className="font-serif text-4xl font-black tracking-tighter text-[#1B2F2A] sm:text-5xl md:text-6xl">
            Open Source
          </h2>
        </div>

        <p className="mt-4 max-w-xl text-left text-sm font-medium leading-relaxed text-[#1B2F2A]/60 sm:mb-1 sm:mt-0 sm:text-right">
          A small portfolio of public work that emphasizes reusable systems,
          developer workflow, and practical engineering.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {openSourceStats.map((stat, index) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden rounded-2xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E26546]/20 hover:bg-[#FFFDF6] hover:shadow-[0_10px_30px_rgba(226,101,70,0.07)] sm:p-6"
          >
            {/* Accent */}
            <div
              className="absolute left-0 top-0 h-full w-1 bg-[#E26546]/70 transition-all duration-300 group-hover:bg-[#E26546]"
              aria-hidden="true"
            />

            <div className="flex items-start justify-between gap-3">
              <span className="text-[9px] font-black uppercase tracking-[0.24em] text-[#E26546]">
                0{index + 1}
              </span>

              <span
                className="text-[#1B2F2A]/20 transition-colors duration-300 group-hover:text-[#E26546]/40"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>

            <div className="mt-5 font-serif text-3xl font-black tracking-tight text-[#1B2F2A] sm:text-4xl">
              {stat.value}
            </div>

            <div className="mt-2 text-[9px] font-black uppercase tracking-[0.22em] text-[#1B2F2A]/55">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}