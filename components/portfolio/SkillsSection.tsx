import {
  technologyGroups,
  TechnologyIcon,
} from "@/components/portfolio/technology-icons";

export function SkillsSection() {
  return (
    <section
      id="tech"
      className="scroll-mt-24 border-y border-[#FFFDF6]/15 bg-[#1B2F2A] bg-[linear-gradient(#FFFDF60D_1px,transparent_1px),linear-gradient(90deg,#FFFDF60D_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] px-5 py-10 text-[#FFFDF6] sm:px-8 sm:py-12 md:py-14"
    >
      {/* Section heading */}
      <div className="flex flex-col items-start border-b border-[#FFFDF6]/20 pb-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div>
          <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#FDEAA8]">
            04 / Technical Index
          </div>

          <h2 className="font-serif text-4xl font-black tracking-tighter text-[#FFFDF6] sm:text-5xl md:text-6xl">
            Technical Skills
          </h2>
        </div>

        <p className="mt-4 max-w-xl text-left text-sm font-medium leading-relaxed text-[#FFFDF6]/60 sm:mb-1 sm:mt-0 sm:text-right">
          The tools and frameworks I use to build practical products.
        </p>
      </div>

      {/* Technology groups */}
      <div className="mt-7">
        {technologyGroups.map((group, index) => (
          <div
            key={group.title}
            className={`py-6 sm:py-7 ${
              index !== technologyGroups.length - 1
                ? "border-b border-[#FFFDF6]/10"
                : ""
            }`}
          >
            {/* Group heading */}
            <div className="mb-4 flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#E26546]"
                aria-hidden="true"
              />

              <h3 className="font-serif text-lg font-bold text-[#FDEAA8] sm:text-xl">
                {group.title}
              </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="group flex min-h-10 max-w-full cursor-default items-center gap-2 rounded-lg border border-[#FFFDF6]/15 bg-[#FFFDF6]/5 px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FDEAA8]/30 hover:bg-[#FFFDF6]/10"
                >
                  <span
                    className="flex shrink-0 items-center justify-center text-[#FDEAA8]"
                    aria-hidden="true"
                  >
                    <TechnologyIcon name={skill} />
                  </span>

                  <span className="text-[11px] font-semibold tracking-wide text-[#FFFDF6]/90 sm:text-xs">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}