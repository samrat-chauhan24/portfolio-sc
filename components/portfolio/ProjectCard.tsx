"use client";

import Image from "next/image";

import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
  onDeepDive: (projectId: string) => void;
};

export function ProjectCard({
  project,
  index,
  onDeepDive,
}: ProjectCardProps) {
  const techChips = project.tech.split(", ").slice(0, 4);
  const isAlternate = index % 2 === 1;

  return (
    <article className="group relative grid overflow-hidden rounded-[1.75rem] border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 shadow-[0_12px_40px_rgba(27,47,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E26546]/25 hover:shadow-[0_18px_45px_rgba(226,101,70,0.09)] md:grid-cols-12">
      {/* Soft card glow */}
      <div
        className="pointer-events-none absolute -inset-20 -z-10 bg-[#FFFDF6]/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Project image */}
      <div
        className={`relative p-3 sm:p-5 md:col-span-7 ${
          isAlternate ? "md:order-2" : ""
        }`}
      >
        <div
          className={`overflow-hidden rounded-[1.25rem] border border-[#1B2F2A]/10 bg-[#111827] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] ${
            project.id === "educatory"
              ? "aspect-16/10"
              : "aspect-16/11"
          }`}
        >
          {/* Browser chrome */}
          <div className="relative flex items-center justify-between border-b border-white/10 bg-[#0F1720]/95 px-3 py-2.5 sm:px-4 sm:py-3">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]"
                aria-hidden="true"
              />
              <span
                className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]"
                aria-hidden="true"
              />
              <span
                className="h-2.5 w-2.5 rounded-full bg-[#28C840]"
                aria-hidden="true"
              />
            </div>

            <div className="pointer-events-none absolute left-1/2 max-w-[42%] -translate-x-1/2 truncate text-[9px] font-bold uppercase tracking-[0.12em] text-[#FDEAA8]/90 sm:text-xs sm:tracking-[0.2em]">
              {project.title}
            </div>

            <span className="max-w-[42%] truncate rounded-full border border-[#E26546]/20 bg-[#E26546]/10 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#E26546] sm:px-3 sm:text-[9px] sm:tracking-[0.2em]">
              {project.id === "educatory" ? "Full Stack" : project.badge}
            </span>
          </div>

          {/* Screenshot */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#1B2F2A] bg-[linear-gradient(#FFFDF60D_1px,transparent_1px),linear-gradient(90deg,#FFFDF60D_1px,transparent_1px)] bg-size-[1.5rem_1.5rem] p-3 sm:p-5 lg:p-7">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(226,101,70,0.12),transparent_60%)]"
              aria-hidden="true"
            />

            <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.025]">
              <Image
                src={project.image}
                alt={project.title}
                width={860}
                height={560}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 860px"
                className="mx-auto max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project information */}
      <div
        className={`flex h-full flex-col justify-center px-5 pb-6 pt-4 sm:px-8 sm:py-8 md:col-span-5 ${
          isAlternate ? "md:order-1" : ""
        }`}
      >
        {/* Project heading */}
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3 border-b border-[#1B2F2A]/10 pb-3">
            <span className="text-[10px] font-black uppercase tracking-[0.24em] text-[#E26546]">
              0{index + 1} / {project.badge}
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#1B2F2A]/45">
              Selected Work
            </span>
          </div>

          <h3 className="min-w-0 max-w-xl font-serif text-3xl font-black leading-[0.95] tracking-tight text-[#1B2F2A] sm:text-4xl">
            {project.title}
          </h3>

          <p className="max-w-xl text-sm font-medium leading-relaxed text-[#1B2F2A]/70">
            {project.shortDesc}
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-5 space-y-2.5">
          <div className="text-[10px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]/50">
            Highlights
          </div>

          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6]/50 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1B2F2A] backdrop-blur-sm"
              >
                <span
                  className="mr-1.5 text-[#E26546]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 flex min-h-8 flex-wrap gap-2">
          {project.meta.metrics.map((metric) => (
            <span
              key={metric}
              className="inline-flex items-center rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6]/35 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1B2F2A]/70 backdrop-blur-sm"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Technologies */}
        <div className="mt-3 flex min-h-8 flex-wrap gap-2">
          {techChips.map((tech) => (
            <span
              key={tech}
              className="inline-flex max-w-full items-center rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/25 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#1B2F2A]/75 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E26546]/20 hover:bg-[#FDEAA8]/45"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-1 min-[391px]:flex-nowrap">
          <button
            onClick={() => onDeepDive(project.id)}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#E26546] px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FFFDF6] shadow-[0_7px_18px_rgba(226,101,70,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B2F2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] max-[390px]:w-full sm:px-5 sm:text-[11px]"
          >
            Deep Dive
            <span aria-hidden="true">→</span>
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1B2F2A] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1B2F2A]/20 hover:bg-[#1B2F2A] hover:text-[#FFFDF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] max-[390px]:w-full sm:px-5 sm:text-[11px]"
            >
              View Source →
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 px-4 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1B2F2A] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1B2F2A]/20 hover:bg-[#1B2F2A] hover:text-[#FFFDF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] max-[390px]:w-full sm:px-5 sm:text-[11px]"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}