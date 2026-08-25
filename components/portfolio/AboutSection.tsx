export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 space-y-10">
      {/* Section heading */}
      <div className="flex flex-col items-start border-b border-[#1B2F2A]/20 pb-6">
        <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#E26546]">
          07 / About
        </div>

        <h2 className="font-serif text-4xl font-black tracking-tighter text-[#1B2F2A] sm:text-5xl md:text-6xl">
          About Me
        </h2>
      </div>

      {/* About card */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 p-6 shadow-[0_12px_40px_rgba(27,47,42,0.06)] backdrop-blur-xl sm:p-8 md:p-10">
        {/* Soft background glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#E26546]/8 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#FDEAA8]/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Intro */}
          <div className="lg:border-r lg:border-[#1B2F2A]/10 lg:pr-10">
            <div className="text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">
              Software Engineer
            </div>

            <h3 className="mt-4 max-w-md font-serif text-3xl font-black leading-tight tracking-tight text-[#1B2F2A] sm:text-4xl">
              Building useful software from complex ideas.
            </h3>

            <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-[#1B2F2A]/65">
              Full-stack applications, AI systems, automation platforms, and
              developer tools designed around real-world usability.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Full Stack",
                "AI Engineering",
                "Developer Tools",
                "Automation",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/25 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#1B2F2A]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Story */}
          <div className="max-w-3xl space-y-5 text-base font-medium leading-[1.75] text-[#1B2F2A]/75 sm:text-lg">
            <p>
              I started programming because I enjoyed turning ideas into
              working software. Over time, that curiosity evolved into a
              deeper interest in how complex systems are designed, how good
              architecture enables long-term maintainability, and how
              technology can solve real-world problems.
            </p>

            <p>
              Today, I enjoy building full-stack applications where frontend,
              backend, and AI work together seamlessly. My projects range from
              intelligent automation platforms and multi-agent AI systems to
              developer tools that simplify complex workflows. I find the most
              satisfaction in building software that is practical, reliable,
              and genuinely useful.
            </p>

            <p>
              What excites me most about AI isn&apos;t just the models—it&apos;s
              how thoughtful engineering can transform them into products that
              people trust and enjoy using. That&apos;s why I focus on clean
              architecture, scalable design, and creating experiences that
              remain simple, even when the underlying systems are complex.
            </p>

            <p>
              I believe great software is built with clarity, maintainability,
              and attention to detail. Whether I&apos;m developing an
              AI-powered application, an automation platform, or an open-source
              developer tool, my goal is always the same: build solutions that
              solve meaningful problems and continue to improve over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}