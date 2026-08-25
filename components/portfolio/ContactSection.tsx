export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden rounded-[1.75rem] border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 px-5 py-12 shadow-[0_12px_40px_rgba(27,47,42,0.06)] backdrop-blur-xl sm:px-8 sm:py-16 md:px-12 md:py-20"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E26546]/8 blur-3xl"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#FDEAA8]/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#E26546]">
            09 / Contact
          </div>

          <h2 className="font-serif text-4xl font-black tracking-tighter text-[#1B2F2A] sm:text-5xl md:text-6xl">
            Let&apos;s Connect.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-[#1B2F2A]/65 sm:text-lg">
            Whether it is a product idea, an engineering challenge, or a
            conversation about building something useful, I am always open to
            connecting.
          </p>
        </div>

        {/* Contact options */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 sm:gap-4">
          <a
            href="mailto:chauhansamrat835@gmail.com"
            className="group flex min-h-20 items-center justify-between rounded-2xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/60 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E26546]/25 hover:bg-[#FFFDF6] hover:shadow-[0_10px_30px_rgba(226,101,70,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546]"
          >
            <div className="min-w-0">
              <div className="text-[9px] font-black uppercase tracking-[0.24em] text-[#E26546]">
                Email
              </div>

              <div className="mt-1 break-all text-sm font-bold text-[#1B2F2A] sm:text-base">
                chauhansamrat835@gmail.com
              </div>
            </div>

            <span
              className="ml-4 shrink-0 text-lg text-[#E26546] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>

          <a
            href="tel:+917668795490"
            className="group flex min-h-20 items-center justify-between rounded-2xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/60 px-5 py-4 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E26546]/25 hover:bg-[#FFFDF6] hover:shadow-[0_10px_30px_rgba(226,101,70,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546]"
          >
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.24em] text-[#E26546]">
                Phone
              </div>

              <div className="mt-1 text-sm font-bold text-[#1B2F2A] sm:text-base">
                +91 7668795490
              </div>
            </div>

            <span
              className="ml-4 shrink-0 text-lg text-[#E26546] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        {/* Closing line */}
        <div className="mt-8 flex items-center justify-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#1B2F2A]/45">
          <span className="h-px w-10 bg-[#1B2F2A]/15" />
          Open to meaningful conversations
          <span className="h-px w-10 bg-[#1B2F2A]/15" />
        </div>
      </div>
    </section>
  );
}