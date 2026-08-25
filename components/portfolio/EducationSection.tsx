"use client";

import Image from "next/image";
import { useState } from "react";

export function EducationSection() {
  const [collegeImgError, setCollegeImgError] = useState(false);
  const coursework = [
    "Data Structures",
    "Algorithms",
    "Operating Systems",
    "Database Systems",
    "Computer Networks",
    "Artificial Intelligence",
    "Machine Learning",
  ];

  return (
    <section id="education" className="scroll-mt-24 space-y-10">
      {/* Section heading */}
      <div className="flex flex-col items-start border-b border-[#1B2F2A]/20 pb-6">
        <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#E26546]">
          08 / Education
        </div>

        <h2 className="font-serif text-4xl font-black tracking-tighter text-[#1B2F2A] sm:text-5xl md:text-6xl">
          Education
        </h2>
      </div>

      {/* Education card */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 p-5 shadow-[0_12px_40px_rgba(27,47,42,0.06)] backdrop-blur-xl sm:p-7 md:p-8">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#E26546]/7 blur-3xl"
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#FDEAA8]/15 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid gap-7 md:grid-cols-[auto_1fr] md:gap-8">
          {/* College logo */}
          <div className="flex items-start">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/80 p-2 shadow-[0_6px_20px_rgba(27,47,42,0.05)] sm:h-24 sm:w-24">
              {collegeImgError ? (
                <div
                  className="flex h-full w-full items-center justify-center rounded-xl bg-[#FDEAA8]/35"
                  aria-label="College logo unavailable"
                >
                  <span className="font-serif text-2xl font-black text-[#1B2F2A]/70">
                    MIET
                  </span>
                </div>
              ) : (
                <Image
                  src="/college.png"
                  alt="Meerut Institute of Engineering and Technology logo"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain"
                  onError={() => setCollegeImgError(true)}
                />
              )}
            </div>
          </div>

          {/* Education content */}
          <div className="min-w-0">
            {/* Date / status */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#E26546]/15 bg-[#E26546]/8 px-3 py-1 text-[9px] font-black uppercase tracking-[0.22em] text-[#E26546]">
                2023 — 2027
              </span>

              <span className="rounded-full border border-emerald-500/15 bg-emerald-500/8 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                B.Tech
              </span>
            </div>

            {/* Degree */}
            <h3 className="mt-4 max-w-4xl font-serif text-2xl font-black leading-tight tracking-tight text-[#1B2F2A] sm:text-3xl md:text-4xl">
              Computer Science and Engineering
              <span className="block text-[#E26546]">
                (AI &amp; ML)
              </span>
            </h3>

            {/* College */}
            <p className="mt-3 text-base font-bold text-[#1B2F2A]/75 sm:text-lg">
              Meerut Institute of Engineering and Technology
            </p>

            {/* Academic information */}
            <div className="mt-6 grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-4">
              {/* CGPA */}
              <div className="rounded-xl border border-[#1B2F2A]/10 bg-[#FDEAA8]/25 px-4 py-3">
                <div className="text-[9px] font-black uppercase tracking-[0.22em] text-[#1B2F2A]/45">
                  CGPA
                </div>

                <div className="mt-1 font-serif text-xl font-black text-[#1B2F2A]">
                  7.2 / 10
                </div>
              </div>

              {/* Coursework */}
              <div className="rounded-xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 px-4 py-3">
                <div className="text-[9px] font-black uppercase tracking-[0.22em] text-[#1B2F2A]/45">
                  Relevant Coursework
                </div>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#1B2F2A]/75"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}