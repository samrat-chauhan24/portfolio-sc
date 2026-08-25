import { journeySteps } from "@/data/portfolio";

export function JourneySection() {
  return (
    <section id="journey" className="scroll-mt-24 space-y-10">
      {/* Section heading */}
      <div className="flex flex-col items-start border-b border-[#1B2F2A]/20 pb-6">
        <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#E26546]">
          06 / Journey
        </div>

        <h2 className="font-serif text-4xl font-black tracking-tighter text-[#1B2F2A] sm:text-5xl md:text-6xl">
          Journey
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute bottom-3 left-[11px] top-3 w-px bg-[#1B2F2A]/15 md:bottom-auto md:left-0 md:right-0 md:top-[11px] md:h-px md:w-auto"
          aria-hidden="true"
        />

        <div className="relative grid items-stretch gap-7 md:grid-cols-5 md:gap-4">
          {journeySteps.map((step, index) => (
            <article
              key={`${step.year}-${step.title}`}
              className="relative min-w-0 pl-8 md:flex md:pl-0 md:pt-9"
            >
              {/* Timeline dot */}
              <span
                className="absolute left-0 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#FFFDF6] bg-[#E26546] shadow-[0_0_0_1px_rgba(226,101,70,0.2)] md:left-0 md:top-0"
                aria-hidden="true"
              />

              {/* Milestone card */}
              <div className="group flex w-full flex-col rounded-[1.35rem] border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E26546]/20 hover:bg-[#FFFDF6] hover:shadow-[0_10px_30px_rgba(27,47,42,0.06)] sm:p-5 md:min-h-[250px]">
                {/* Number + year */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[9px] font-black uppercase tracking-[0.22em] text-[#E26546]">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1B2F2A]/60">
                    {step.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <h3 className="mt-4 font-serif text-lg font-black leading-tight tracking-tight text-[#1B2F2A] sm:text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#1B2F2A]/65">
                    {step.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}