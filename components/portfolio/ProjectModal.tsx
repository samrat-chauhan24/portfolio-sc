"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import type { Project } from "@/types/project";

type ProjectModalProps = {
  project: Project | null;
  isVisible: boolean;
  onClose: () => void;
};

export function ProjectModal({
  project,
  isVisible,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && modalRef.current) {
      const closeBtn = modalRef.current.querySelector("button");

      if (closeBtn instanceof HTMLButtonElement) {
        closeBtn.focus();
      }
    }
  }, [isVisible]);

  if (!project) return null;

  const techChips = project.tech.split(", ");

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#1B2F2A]/55 p-3 backdrop-blur-md transition-all duration-300 sm:p-5 md:p-6 ${
        isVisible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Soft warm backdrop glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,101,70,0.10),transparent_55%)]"
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
        className={`relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-[1.75rem] border border-[#E26546]/15 bg-[#FFF7DF]/95 shadow-[0_25px_80px_rgba(0,0,0,0.25)] outline-none backdrop-blur-2xl transition-all duration-300 sm:rounded-[2rem] ${
          isVisible
            ? "translate-y-0 scale-100"
            : "translate-y-4 scale-[0.98]"
        }`}
      >
        {/* Modal Header */}
        <div className="relative flex shrink-0 items-center justify-between gap-3 border-b border-[#1B2F2A]/10 bg-[#FFFDF6]/70 px-4 py-3 backdrop-blur-xl sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#E26546]"
              aria-hidden="true"
            />

            <div className="truncate text-[10px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]/60 sm:text-xs sm:tracking-[0.3em]">
              Project Details
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/45 text-[#1B2F2A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E26546] hover:text-[#FFFDF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546]"
            aria-label="Close project details"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="min-h-0 overflow-y-auto overscroll-contain">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Project Preview */}
            <div className="overflow-hidden rounded-[1.5rem] border border-[#1B2F2A]/10 bg-[#111827] shadow-[0_12px_35px_rgba(27,47,42,0.10)]">
              {/* Browser Chrome */}
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

                <div className="pointer-events-none absolute left-1/2 max-w-[38%] -translate-x-1/2 truncate text-[9px] font-bold uppercase tracking-[0.12em] text-[#FDEAA8]/90 sm:text-xs sm:tracking-[0.2em]">
                  {project.title}
                </div>

                <span className="max-w-[38%] truncate rounded-full border border-[#E26546]/20 bg-[#E26546]/10 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-[#E26546] sm:px-3 sm:text-[9px] sm:tracking-[0.2em]">
                  {project.badge}
                </span>
              </div>

              {/* Screenshot */}
              <div className="relative flex items-center justify-center overflow-hidden bg-[#111827] bg-[linear-gradient(#FFFDF60D_1px,transparent_1px),linear-gradient(90deg,#FFFDF60D_1px,transparent_1px)] bg-size-[1.5rem_1.5rem] p-3 sm:p-5 lg:p-7">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(226,101,70,0.12),transparent_60%)]"
                  aria-hidden="true"
                />

                <div className="relative w-full max-w-5xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={860}
                    height={560}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 860px"
                    className="mx-auto max-h-[55vh] w-auto max-w-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="mt-6 space-y-7 sm:mt-8">
              {/* Title + Actions */}
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#E26546]/15 bg-[#E26546]/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.22em] text-[#E26546]">
                      {project.badge}
                    </span>

                    <span className="rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 px-3 py-1 text-[9px] font-black uppercase tracking-[0.22em] text-[#1B2F2A]/60">
                      Software Product
                    </span>
                  </div>

                  <h3
                    id="project-modal-title"
                    className="max-w-3xl font-serif text-3xl font-black leading-[0.95] tracking-tight text-[#1B2F2A] sm:text-4xl lg:text-5xl"
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Actions */}
                <div className="flex shrink-0 flex-wrap gap-2.5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#E26546] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FFFDF6] shadow-[0_7px_18px_rgba(226,101,70,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B2F2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] sm:px-5 sm:text-[11px]"
                    >
                      View Source →
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1B2F2A] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1B2F2A]/20 hover:bg-[#1B2F2A] hover:text-[#FFFDF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] sm:px-5 sm:text-[11px]"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Main Content */}
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                {/* Overview + Highlights */}
                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">
                      Overview
                    </h4>

                    <p className="max-w-3xl text-sm font-medium leading-relaxed text-[#1B2F2A]/75">
                      {project.overview}
                    </p>
                  </div>

                  {/* Engineering Highlights */}
                  <div>
                    <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">
                      Engineering Highlights
                    </h4>

                    <div className="space-y-2">
                      {project.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-3 rounded-2xl border border-[#1B2F2A]/10 bg-[#FFFDF6]/55 p-3.5 backdrop-blur-sm"
                        >
                          <span
                            className="mt-0.5 shrink-0 font-bold text-[#E26546]"
                            aria-hidden="true"
                          >
                            ✓
                          </span>

                          <span className="text-sm font-medium leading-relaxed text-[#1B2F2A]/75">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technology / Focus */}
                <div className="space-y-6 rounded-[1.5rem] border border-[#E26546]/10 bg-[#FDEAA8]/25 p-4 backdrop-blur-md sm:p-5">
                  {/* Technology */}
                  <div>
                    <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">
                      Technology
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {techChips.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6]/60 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1B2F2A]/75 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Focus */}
                  <div>
                    <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">
                      Focus
                    </h4>

                    <p className="text-sm font-medium leading-relaxed text-[#1B2F2A]/75">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}