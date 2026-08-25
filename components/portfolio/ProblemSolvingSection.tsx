export function ProblemSolvingSection() {
  return (
    <section id="problem-solving" className="scroll-mt-24 space-y-10">
      {/* Section heading */}
      <div className="flex flex-col items-start border-b border-[#1B2F2A]/20 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div>
          <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#E26546]">
            05 / Practice Log
          </div>

          <h2 className="font-serif text-4xl font-black tracking-tighter text-[#1B2F2A] md:text-5xl">
            Problem Solving Profile
          </h2>
        </div>

        <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-[#1B2F2A]/60 sm:mt-0 sm:mb-1">
          A steady routine of data structures, algorithms, and practical
          implementation.
        </p>
      </div>

      {/* Profile card */}
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 p-5 shadow-[0_12px_40px_rgba(27,47,42,0.06)] backdrop-blur-xl sm:p-7 md:p-8">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#E26546]/7 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#FDEAA8]/15 blur-3xl"
          aria-hidden="true"
        />

        {/* Profile header */}
        <div className="relative flex items-center justify-between gap-4 border-b border-[#1B2F2A]/10 pb-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/70 shadow-sm sm:h-16 sm:w-16 sm:rounded-2xl">
              <svg
                className="h-7 w-7 text-[#E26546] sm:h-8 sm:w-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.939 5.939 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114l5.313-5.693a.522.522 0 01.744-.012l.012.012 6.32 6.196a1.38 1.38 0 001.954-.002 1.377 1.377 0 000-1.95l-6.321-6.196A1.372 1.372 0 0013.483 0zm4.512 11.23a1.377 1.377 0 00-1.374 1.378 1.376 1.376 0 001.374 1.374h5.275a1.376 1.376 0 001.374-1.374 1.377 1.377 0 00-1.374-1.378h-5.275z" />
              </svg>
            </div>

            <div className="min-w-0">
              <h3 className="font-serif text-2xl font-black tracking-tight text-[#1B2F2A] sm:text-3xl">
                LeetCode
              </h3>

              <p className="mt-1 break-all text-sm font-medium tracking-wide text-[#1B2F2A]/55 sm:text-base">
                @samrat-chauhan24
              </p>
            </div>
          </div>

          <a
            href="https://leetcode.com/u/samrat-chauhan24/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LeetCode profile"
            className="group flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1B2F2A]/10 bg-[#FDEAA8]/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E26546]/20 hover:bg-[#FDEAA8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] sm:h-12 sm:w-12 sm:rounded-full"
          >
            <svg
              className="h-5 w-5 text-[#1B2F2A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="relative mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#1B2F2A]/10 bg-[#1B2F2A]/10 md:grid-cols-4">
          <div className="bg-[#FFFDF6]/75 p-4 sm:p-5 md:p-6">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1B2F2A]/50">
              Questions Solved
            </span>

            <span className="mt-3 block font-serif text-3xl font-black tracking-tight text-[#1B2F2A] sm:text-4xl">
              120+
            </span>
          </div>

          <div className="bg-[#FFFDF6]/75 p-4 sm:p-5 md:p-6">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1B2F2A]/50">
              Focus
            </span>

            <span className="mt-3 block font-serif text-3xl font-black tracking-tight text-[#1B2F2A] sm:text-4xl">
              Java
            </span>
          </div>

          <div className="bg-[#FFFDF6]/75 p-4 sm:p-5 md:p-6">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1B2F2A]/50">
              Practice
            </span>

            <span className="mt-3 block break-words font-serif text-2xl font-black leading-tight tracking-tight text-[#1B2F2A] sm:text-3xl">
              Problem Solving
            </span>
          </div>

          <div className="bg-[#FFFDF6]/75 p-4 sm:p-5 md:p-6">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#1B2F2A]/50">
              Approach
            </span>

            <span className="mt-3 block break-words font-serif text-2xl font-black leading-tight tracking-tight text-[#1B2F2A] sm:text-3xl">
              Consistent DSA Practice
            </span>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="relative mt-5 flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E26546]" />
          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#1B2F2A]/40">
            Consistency over intensity
          </span>
        </div>
      </div>
    </section>
  );
}