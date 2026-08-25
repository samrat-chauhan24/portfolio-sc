export function CurrentlyBuilding() {
  const focusAreas = [
    "Virtual File System",
    "Static Analyzer",
    "Import Resolver",
    "Browser Runtime",
    "Package Ecosystem",
  ];

  const runtimeFlow = [
    "Load",
    "Analyze",
    "Resolve",
    "Compile",
    "Execute",
  ];

  return (
    <section
      id="building"
      aria-labelledby="currently-building-title"
      className="relative -mt-2 overflow-hidden rounded-[1.75rem] border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 px-5 py-6 shadow-[0_12px_40px_rgba(27,47,42,0.06)] backdrop-blur-xl sm:px-7 sm:py-7 md:px-8 md:py-8"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#E26546]/7 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#FDEAA8]/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Header */}
      <div className="relative flex flex-col gap-5 border-b border-[#1B2F2A]/10 pb-6 md:flex-row md:items-end md:justify-between md:gap-8">
        <div className="min-w-0">
          <div
            className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-emerald-600"
            role="status"
          >
            <span
              className="relative mr-2 flex h-2.5 w-2.5"
              aria-hidden="true"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Active Development
          </div>

          <h2
            id="currently-building-title"
            className="mt-4 font-serif text-3xl font-black tracking-tighter text-[#1B2F2A] sm:text-4xl"
          >
            Currently Building
          </h2>

          <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-[#1B2F2A]/65">
            Focused on open-source developer tooling and browser-native
            execution experiences.
          </p>
        </div>

        <div className="shrink-0 self-start rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/35 px-4 py-2.5 text-xs font-bold leading-relaxed text-[#1B2F2A]/75 backdrop-blur-md md:self-auto">
          GitStream · Open-source browser runtime
        </div>
      </div>

      {/* Main content */}
      <div className="relative mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        {/* GitStream */}
        <div className="rounded-[1.4rem] border border-[#1B2F2A]/10 bg-[#FFFDF6]/65 p-5 shadow-[0_8px_24px_rgba(27,47,42,0.04)] backdrop-blur-md sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">
              GitStream
            </div>

            <span className="rounded-full border border-emerald-500/15 bg-emerald-500/8 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-600">
              In Progress
            </span>
          </div>

          <h3 className="mt-4 max-w-xl font-serif text-2xl font-black leading-tight tracking-tight text-[#1B2F2A] sm:text-3xl">
            Open-source browser-native GitHub runtime.
          </h3>

          <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-[#1B2F2A]/65">
            Load, analyze, resolve, compile, and execute repository code
            directly in the browser.
          </p>

          {/* Runtime pipeline */}
          <div className="mt-6">
            <div className="mb-2.5 text-[9px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]/40">
              Runtime Pipeline
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {runtimeFlow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-1.5"
                >
                  <span className="rounded-lg border border-[#1B2F2A]/10 bg-[#FDEAA8]/30 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#1B2F2A]">
                    {step}
                  </span>

                  {index < runtimeFlow.length - 1 && (
                    <span
                      className="text-[10px] font-bold text-[#E26546]/50"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current focus */}
        <div className="rounded-[1.4rem] border border-[#1B2F2A]/10 bg-[#FDEAA8]/20 p-5 shadow-[0_8px_24px_rgba(27,47,42,0.03)] backdrop-blur-md sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-[#1B2F2A]/55">
              Current Focus
            </div>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#E26546]">
              05 Areas
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {focusAreas.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6]/65 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#1B2F2A] backdrop-blur-sm transition-colors duration-200 hover:border-[#E26546]/20 hover:bg-[#FFFDF6]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 border-t border-[#1B2F2A]/10 pt-4">
            <div className="text-[9px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]/40">
              Direction
            </div>

            <p className="mt-2 text-sm font-medium leading-relaxed text-[#1B2F2A]/65">
              Building a modular runtime designed to grow into an open-source
              developer tooling ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}