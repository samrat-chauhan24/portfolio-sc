"use client";

import { useEffect, useRef } from "react";

export function ResumeModal({ isVisible, onClose }: { isVisible: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && modalRef.current) {
      const closeBtn = modalRef.current.querySelector('button');
      if (closeBtn) closeBtn.focus();
    }
  }, [isVisible]);

  return (
    <div 
      className={`fixed inset-0 z-100 flex items-center justify-center bg-[#1B2F2A]/80 p-2 backdrop-blur-sm transition-all duration-300 sm:p-6 ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div ref={modalRef} tabIndex={-1} className={`flex h-full max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[#1B2F2A]/20 bg-[#FDEAA8] shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-all duration-300 outline-none sm:max-h-[90vh] sm:rounded-[1.75rem] ${isVisible ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.98]"}`} onClick={(event) => event.stopPropagation()}>
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-[#1B2F2A]/15 bg-[#FFFDF6] p-4 sm:p-6">
          <h3 className="font-serif text-2xl font-black text-[#1B2F2A]">Resume</h3>
          <div className="flex flex-wrap gap-2">
            <a href="/Samrat_Chauhan_Resume.pdf" download className="inline-flex min-h-11 items-center rounded-xl bg-[#E26546] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#FFFDF6] transition-colors hover:bg-[#1B2F2A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] sm:px-6">Download</a>
            <button onClick={onClose} className="inline-flex min-h-11 items-center rounded-xl border border-[#1B2F2A] bg-transparent px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#1B2F2A] transition-colors hover:bg-[#1B2F2A] hover:text-[#FFFDF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E26546] sm:px-6">Close</button>
          </div>
        </div>
        <div className="min-h-0 w-full grow bg-[#1B2F2A]/5 p-2 sm:p-4">
          <iframe src="/Samrat_Chauhan_Resume.pdf" className="h-full w-full rounded-xl border border-[#1B2F2A]/10 bg-white" title="Resume PDF"></iframe>
        </div>
      </div>
    </div>
  );
}