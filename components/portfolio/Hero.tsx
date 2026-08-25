"use client";

import Image from "next/image";

import { secondaryBtnClass } from "@/components/portfolio/constants";
import { Typewriter } from "@/components/portfolio/Typewriter";
import { ResumeModal } from "@/components/portfolio/ResumeModal";
import { useEffect, useState } from "react";

const heroTags = [
  "Full Stack Development",
  "AI Engineering",
  "Developer Tools",
  "Automation",
];

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isResumeModalVisible, setIsResumeModalVisible] = useState(false);

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
    requestAnimationFrame(() => setIsResumeModalVisible(true));
  };

  const closeResumeModal = () => {
    setIsResumeModalVisible(false);
  };

  useEffect(() => {
    if (!isResumeModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeResumeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isResumeModalOpen]);

  useEffect(() => {
    if (!isResumeModalOpen || isResumeModalVisible) return;

    const timer = window.setTimeout(() => {
      setIsResumeModalOpen(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [isResumeModalOpen, isResumeModalVisible]);
  return (
    <section
      id="hero"
      className="relative border-b border-[#1B2F2A]/20 pb-12 pt-12 sm:pb-16 sm:pt-14 md:pb-20 md:pt-16"
    >
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 lg:gap-16">
        {/* Profile */}
        <div className="relative order-first mx-auto shrink-0 md:order-last md:mx-0">
          {/* Subtle image glow */}
          <div
            className="absolute inset-5 rounded-full bg-[#E26546]/10 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-[#FFFDF6] bg-[#FFFDF6] shadow-[0_10px_40px_rgba(226,101,70,0.14)] sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72">
            <Image
              src="/profile.jpg"
              alt="Samrat Chauhan"
              width={288}
              height={288}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 min-w-0">
          {/* Section heading */}
          <div className="mb-5 flex flex-col items-start border-b border-[#1B2F2A]/20 pb-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div>
              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#E26546]">
                01 / Building Software
              </div>
            </div>

            <p className="hidden max-w-sm text-right text-[10px] font-medium leading-relaxed text-[#1B2F2A]/55 sm:block">
              Building systems people actually use through thoughtful
              engineering and practical design.
            </p>
          </div>

          {/* Main heading */}
          <div className="relative">
            {/* Invisible sizing reference */}
            <h1
              aria-hidden="true"
              className="invisible text-4xl font-serif font-black leading-[0.92] tracking-tighter text-[#1B2F2A] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              <span className="inline-block max-w-full text-[#E26546]">
                Full Stack Developer
              </span>
            </h1>

            {/* Visible typewriter */}
            <h1 className="absolute inset-0 text-4xl font-serif font-black leading-[0.92] tracking-tighter text-[#1B2F2A] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="inline-block max-w-full text-[#E26546]">
                <Typewriter />
              </span>
            </h1>
          </div>

          {/* Capability tags */}
          <div className="mt-6 flex flex-wrap gap-2 border-t border-[#1B2F2A]/10 pt-4">
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="border border-[#1B2F2A]/15 bg-[#FFFDF6]/70 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#1B2F2A] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E26546]/25 hover:bg-[#FFFDF6] sm:px-4 sm:text-xs sm:tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Introduction */}
          <div className="mt-7 max-w-2xl border-l-2 border-[#E26546] py-1 pl-4 text-base font-medium leading-relaxed text-[#1B2F2A]/80 sm:mt-8 sm:pl-5 sm:text-lg">
            <p>
              I build AI-powered developer tools, automation platforms, and
              full-stack applications with a focus on clean architecture and
              real-world usability.
            </p>
          </div>

          {/* Availability */}
          <div
            className="mt-6 inline-flex max-w-full items-center gap-2 border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-700 sm:px-4 sm:text-[10px] sm:tracking-[0.18em]"
            role="status"
          >
            <span
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"
              aria-hidden="true"
            />

            Available for Full Stack & AI Engineering Opportunities
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-7 sm:gap-4">
            <button
              onClick={openResumeModal}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#E26546] px-6 py-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-[#FFFDF6] shadow-[0_8px_20px_rgba(226,101,70,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B2F2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FDEAA8] sm:px-8 sm:text-sm sm:tracking-widest"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View Resume
            </button>

            <a
              href="https://leetcode.com/u/samrat-chauhan24/"
              target="_blank"
              rel="noreferrer"
              className={secondaryBtnClass}
            >
              LeetCode
            </a>

            <a
              href="https://github.com/samrat-chauhan24"
              target="_blank"
              rel="noreferrer"
              className={secondaryBtnClass}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/samratchauhan/"
              target="_blank"
              rel="noreferrer"
              className={secondaryBtnClass}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      {isResumeModalOpen && (
        <ResumeModal
          isVisible={isResumeModalVisible}
          onClose={closeResumeModal}
        />
      )}

    </section>
  );
}