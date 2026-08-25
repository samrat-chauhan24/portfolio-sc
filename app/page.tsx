import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { CurrentlyBuilding } from "@/components/portfolio/CurrentlyBuilding";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { OpenSourceSection } from "@/components/portfolio/OpenSourceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProblemSolvingSection } from "@/components/portfolio/ProblemSolvingSection";
import { JourneySection } from "@/components/portfolio/JourneySection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-[#FDEAA8] bg-[linear-gradient(#1B2F2A12_1px,transparent_1px),linear-gradient(90deg,#1B2F2A12_1px,transparent_1px)] bg-size-[2.5rem_2.5rem] font-sans text-[#1B2F2A] selection:bg-[#E26546] selection:text-[#FFFDF6]">
      <Navigation />

      <main className="mx-auto max-w-7xl space-y-24 px-4 py-12 sm:space-y-32 sm:px-6 sm:py-16 lg:space-y-40 lg:px-8 lg:py-20">
        <Hero />
        <CurrentlyBuilding />
        <ProjectsSection />
        <OpenSourceSection />
        <SkillsSection />
        <ProblemSolvingSection />
        <JourneySection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}