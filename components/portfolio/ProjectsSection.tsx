"use client";

import { useEffect, useState } from "react";
import { projects as projectData } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectModal } from "@/components/portfolio/ProjectModal";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openProjectDetails = (projectId: string) => {
    setActiveProject(projectId);
    requestAnimationFrame(() => setIsModalVisible(true));
  };

  const closeProjectDetails = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProjectDetails();
    };

    window.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  useEffect(() => {
    if (!activeProject || isModalVisible) return;

    const timer = window.setTimeout(() => {
      setActiveProject(null);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [activeProject, isModalVisible]);
  return (
    <section
      id="projects"
      className="scroll-mt-24 space-y-10 sm:space-y-12"
    >
      {/* Section Header */}
      <div className="flex flex-col items-start border-b border-[#1B2F2A]/20 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <div>
          <div className="mb-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#E26546]">
            02 / Case Studies
          </div>

          <h2 className="font-serif text-4xl font-black tracking-tighter text-[#1B2F2A] md:text-6xl">
            Selected Work
          </h2>
        </div>

        <p className="mt-4 max-w-sm text-left text-sm font-medium leading-relaxed text-[#1B2F2A]/60 sm:mb-1 sm:mt-0">
          Production-grade applications and AI systems engineered for
          real-world impact.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {projectData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onDeepDive={openProjectDetails}
          />
        ))}
      </div>
      <ProjectModal
        project={
          projectData.find((project) => project.id === activeProject) ?? null
        }
        isVisible={isModalVisible}
        onClose={closeProjectDetails}
      />

    </section>
  );
}