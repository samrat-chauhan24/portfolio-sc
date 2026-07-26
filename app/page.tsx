"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [collegeImgError, setCollegeImgError] = useState(false); // New state to safely handle missing college image

  // Typewriter Effect Logic
  const [typewriterText, setTypewriterText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const projectBadgeMap: Record<string, string> = {
    gitstream: "OPEN SOURCE",
    juryai: "AI",
    leeto: "ANALYTICS",
    jobhunter: "AUTOMATION",
    salesbot: "MULTI AGENT",
    pickmyphone: "AI"
  };

  const projectHighlightsMap: Record<string, string[]> = {
    gitstream: ["Browser Runtime", "Open Source", "Developer Tooling"],
    juryai: ["Multi-Agent AI", "Legal Workflows", "Cross Platform"],
    leeto: ["Interview Prep", "Analytics", "Progress Tracking"],
    jobhunter: ["Automation", "Resume Matching", "Browser Workflows"],
    salesbot: ["Multi-Agent AI", "Sales Intelligence", "Contextual Insights"],
    pickmyphone: ["RAG", "Recommendation Engine", "Catalog Updates"]
  };

  const projectMetaMap: Record<string, { status: string; metrics: string[]; architecture: string[]; challenges: string[]; roadmap: string[] }> = {
    gitstream: {
      status: "🟢 Active Development",
      metrics: ["⭐ Open Source", "📦 8 Packages", "⚡ Browser Runtime"],
      architecture: ["Virtual File System", "Static analyzer pipeline", "Dependency-aware import resolution", "Package-based runtime architecture"],
      challenges: ["Reconstruct repository structure", "Resolve imports across modules", "Enable browser-native execution", "Keep the runtime modular and extensible"],
      roadmap: ["Runtime execution improvements", "Plugin system", "Dependency graph tooling", "Compiler and diagnostics upgrades"]
    },
    juryai: {
      status: "🟢 Production Ready",
      metrics: ["🤖 Multi-Agent AI", "📈 RAG", "📱 Cross Platform"],
      architecture: ["Shared web and mobile architecture", "LangGraph workflow orchestration", "Persistent session memory", "Jurisdiction-aware response layer"],
      challenges: ["Share logic across mobile and web", "Coordinate multi-agent responses", "Maintain context over long conversations", "Keep legal guidance grounded and structured"],
      roadmap: ["Better retrieval quality", "More domain-specific agents", "Offline-ready experience", "Expanded legal coverage"]
    },
    leeto: {
      status: "🟢 Production Ready",
      metrics: ["📊 Analytics", "🧠 AI Prep", "⚙ Automation"],
      architecture: ["FastAPI analytics services", "PostgreSQL-based insight layer", "Workflow automation with n8n", "Personalized revision engine"],
      challenges: ["Turn coding practice into useful feedback", "Balance personalization with clarity", "Connect learning data to actionable insight", "Keep the experience lightweight"],
      roadmap: ["Stronger recommendation models", "Revision scheduling improvements", "Expanded interview simulations", "More actionable dashboards"]
    },
    jobhunter: {
      status: "🟢 Active Development",
      metrics: ["⚙ Automation", "📈 ATS Scoring", "🧭 Resume Matching"],
      architecture: ["Streaming job ingestion pipeline", "LLM-powered resume matching", "Automated browser workflows", "Structured data layer for candidate queueing"],
      challenges: ["Multi-platform scraping", "Duplicate detection and normalization", "ATS scoring reliability", "Browser automation stability"],
      roadmap: ["LinkedIn integration", "Better ATS scoring", "Resume optimization coaching", "Wider portal support"]
    },
    salesbot: {
      status: "🟡 Research",
      metrics: ["🤖 Multi-Agent AI", "📉 Sales Insights", "⚡ Conversational Workflows"],
      architecture: ["Supervisor router design", "Specialized follow-up and reporting agents", "Firestore-backed data access", "FastAPI integration layer"],
      challenges: ["Route queries to the right agent", "Keep outputs grounded in live sales data", "Prevent unsupported recommendations", "Design for future product integration"],
      roadmap: ["Expanded analytics agents", "Deeper CRM integrations", "Better real-time summarization", "More explainable decisions"]
    },
    pickmyphone: {
      status: "🟢 Production Ready",
      metrics: ["📱 Cross Platform", "⚖ RAG", "🧠 Recommendation Engine"],
      architecture: ["Rule-based recommendation engine", "FastAPI recommendation services", "Automated catalog refresh flow", "Explainable ranking layer"],
      challenges: ["Balance transparency with personalization", "Keep catalog updates reliable", "Explain recommendations clearly", "Handle noisy product data"],
      roadmap: ["More nuanced scoring rules", "Expanded product coverage", "Smarter natural-language search", "Better weekly update automation"]
    }
  };

  const openSourceStats = [
    { label: "Repositories", value: "10+" },
    { label: "Major Projects", value: "6" },
    { label: "Languages", value: "5" },
    { label: "Open Source Packages", value: "8" }
  ];

  const journeySteps = [
    { year: "2023", title: "Started Web Development", detail: "Built my first practical products and sharpened frontend fundamentals." },
    { year: "2024", title: "Built JuryAI", detail: "Explored AI systems, shared architecture, and cross-platform product thinking." },
    { year: "2025", title: "Built JobHunter", detail: "Focused on automation, workflow design, and real-world reliability." },
    { year: "2025", title: "Built GitStream", detail: "Moved into developer tools, runtime architecture, and open-source engineering." },
    { year: "Now", title: "Building Open Source Developer Tools", detail: "Creating systems that feel useful, extensible, and grounded in real engineering needs." }
  ];

  useEffect(() => {
    const words = ["Software Engineer", "AI Engineer", "Full Stack Developer"];
    let timer: NodeJS.Timeout;
    
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setTypewriterText(
        isDeleting
          ? fullText.substring(0, typewriterText.length - 1)
          : fullText.substring(0, typewriterText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && typewriterText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typewriterText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        timer = setTimeout(handleType, typingSpeed);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    if (!activeProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalVisible(false);
        setActiveProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

  const openProjectDetails = (projectId: string) => {
    setActiveProject(projectId);
    setIsModalVisible(true);
  };

  const closeProjectDetails = () => {
    setIsModalVisible(false);
    setActiveProject(null);
  };

  const projects = [
    {
      id: "gitstream",
      title: "GitStream",
      image: "/gitStream.png",
      tech: "TypeScript, PNPM, Vitest, GitHub REST API, TypeScript Compiler API",
      github: "https://github.com/samrat-chauhan24/GitStream",
      live: null,

      shortDesc:
        "An open-source browser-native execution engine that loads, analyzes, and executes GitHub repositories without requiring local setup.",

      overview:
        "GitStream is a modular developer toolkit that reconstructs GitHub repositories into a virtual file system, performs static code analysis, resolves project dependencies, and prepares code for browser-native execution. Built as a package-based ecosystem, each module is independently reusable and designed for extensibility.",

      features: [
        "GitHub repository loader",
        "Virtual File System",
        "Static code analysis",
        "Dependency & import resolution",
        "TypeScript Compiler API integration",
        "Modular npm package architecture",
        "Browser-native execution pipeline",
        "Comprehensive testing with Vitest"
      ]
    },
    {
      id: "juryai",
      title: "JuryAI",
      image: "/juryai.jpeg",
      tech: "React Native, React, FastAPI, LangGraph, RAG",
      github: "https://github.com/samrat-chauhan24/JuryAi",
      live: null,

      shortDesc:
        "An AI-powered legal assistant that delivers structured legal guidance across web and mobile platforms.",

      overview:
        "JuryAI combines React Native, React, FastAPI, LangGraph, and Retrieval-Augmented Generation (RAG) to provide jurisdiction-aware legal assistance. It supports persistent conversations, structured legal responses, and a shared architecture that powers both mobile and web experiences.",

      features: [
        "Cross-platform web & mobile app",
        "LangGraph multi-agent workflows",
        "RAG-powered legal assistance",
        "Jurisdiction-aware responses",
        "Persistent chat history",
        "Structured legal explanations",
        "Shared backend architecture",
        "Modern React Native interface"
      ]
    },
    {
      id: "leeto",
      title: "Leet'O Tracker AI",
      image: "/leeto.png",
      tech: "React, FastAPI, LangGraph, PostgreSQL, n8n",
      github: "https://github.com/samrat-chauhan24/leet-o-tracker",
      live: null,

      shortDesc:
        "An AI-powered coding analytics platform that helps developers track progress and prepare for technical interviews.",

      overview:
        "Leet'O Tracker AI transforms coding practice into actionable insights by combining performance analytics, AI-generated recommendations, revision planning, and automated progress tracking. The platform integrates FastAPI, PostgreSQL, LangGraph, and n8n to deliver personalized interview preparation.",

      features: [
        "Coding performance dashboard",
        "AI-powered progress analytics",
        "Personalized revision planning",
        "Interview preparation insights",
        "PostgreSQL data management",
        "Workflow automation with n8n",
        "FastAPI backend services",
        "Modern React dashboard"
      ]
    },
    {
      id: "jobhunter",
      title: "JobHunter",
      image: "/jobhunter.jpeg",
      tech: "Python, FastAPI, Playwright, n8n, Groq, Google Sheets",
      github: "https://github.com/samrat-chauhan24/JobHunter",
      live: null,

      shortDesc:
        "An AI-powered job automation platform that aggregates opportunities from multiple job portals, ranks them against a candidate's resume, and automatically applies to the most relevant positions.",

      overview:
        "JobHunter is an end-to-end job automation platform that streamlines the entire job application process. It collects opportunities from multiple job portals, normalizes and filters listings, evaluates each role using LLM-powered resume matching, generates ATS compatibility scores, and automatically submits applications through browser automation. Built with FastAPI, Playwright, Groq, and n8n, the platform combines intelligent job analysis with workflow automation to help candidates discover and apply to the most relevant opportunities efficiently.",

      features: [
        "Multi-platform job aggregation from Wellfound, Naukri, Hirist, and Internshala",
        "AI-powered resume matching using Groq LLMs",
        "Automatic resume parsing and skill extraction",
        "ATS compatibility scoring for every job listing",
        "Job normalization, duplicate removal, and freshness filtering",
        "Google Sheets-powered job database and candidate queue management",
        "Automated job applications using Playwright browser automation",
        "Workflow orchestration and scheduling with n8n",
        "FastAPI backend for automation services",
        "Modular pipeline designed for scalable job automation"
      ]
    },
    {
      id: "salesbot",
      title: "SalesBot.AI",
      image: "/sales.png",
      tech: "Python, FastAPI, LangGraph, LangChain, Groq, Firestore",
      github: "https://github.com/samrat-chauhan24/SalesBot.AI",
      live: null,

      shortDesc:
        "A multi-agent AI sales intelligence assistant that analyzes real sales data, prioritizes follow-ups, generates performance insights, and delivers contextual recommendations through a conversational chatbot.",

      overview:
        "SalesBot.AI is an agentic AI backend designed to assist sales representatives with data-driven decision making. Built using LangGraph, FastAPI, Groq, and Firestore, it routes user queries through specialized AI agents that analyze daily visits, pending follow-ups, weekly performance, and customer opportunities. Instead of relying on a single LLM, the system intelligently delegates requests to dedicated agents, enabling accurate, contextual, and actionable sales insights for integration with mobile or web applications.",

      features: [
        "Multi-agent AI workflow built with LangGraph",
        "Supervisor router for intelligent query routing",
        "Daily sales summary agent",
        "Follow-up prioritization agent",
        "Weekly performance analysis agent",
        "General sales intelligence assistant",
        "Real-time Firestore sales data integration",
        "FastAPI REST API for frontend integration",
        "CLI mode for rapid testing and development",
        "Guardrails to prevent unsupported or unrelated responses"
      ]
    },
    {
      id: "pickmyphone",
      title: "PickMyPhone AI",
      image: "/pickmyphone.png",
      tech: "React, FastAPI, PostgreSQL (Supabase), n8n, Groq, Python",

      github: "https://github.com/samrat-chauhan24/pick-my-phone-ai",
      live: null,

      shortDesc:
        "An AI-powered smartphone recommendation platform that analyzes user preferences, ranks devices using a transparent recommendation engine, and keeps its catalog updated automatically.",

      overview:
        "PickMyPhone AI helps users discover the best smartphone based on their budget and priorities. It combines a rule-based recommendation engine, a FastAPI backend, automated weekly catalog updates with n8n, and Groq-powered explanations to deliver fast, transparent, and explainable recommendations.",

      features: [
        "AI-powered smartphone recommendations",
        "Transparent weighted scoring engine",
        "Knowledge-based hardware analysis",
        "Natural language phone search",
        "Weekly catalog & price updates with n8n",
        "FastAPI + PostgreSQL (Supabase) backend",
        "Groq-generated recommendation explanations",
        "Built for scalable smartphone discovery"
      ]
    }
  ];

  // SVG Icons for Skills
  const icons: Record<string, React.JSX.Element> = {
    // Languages
    "Python": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3776AB]" fill="currentColor"><path d="M14.25.18c.9.15 1.92.34 2.55.5 2.14.54 3.03 1.5 3.32 3.12.14.77.16 2.37.04 3.1-.1.54-.25.86-.54 1.15-.3.3-.65.45-1.12.45h-3.4v-2.35c0-1.84-1.3-3.15-3.14-3.15H7.72V1.6C7.72.6 8.52.12 9.57.06c1.17-.06 3.73-.04 4.68.12zm-3.8 2.05c-.46 0-.82.35-.82.8s.36.8.82.8c.45 0 .8-.35.8-.8s-.35-.8-.8-.8zM4.1 6.54c-.6.1-1.2.25-1.74.5-1.8.82-2.3 2.12-2.3 4.2 0 1.9.36 2.8 1.48 3.52.4.25 1.05.42 1.83.5H6.8v2.36c0 1.83 1.3 3.14 3.13 3.14h4.25v1.4c0 1-.8 1.47-1.85 1.53-1.17.06-3.73.04-4.68-.13-.9-.15-1.92-.34-2.55-.5-2.14-.54-3.03-1.5-3.32-3.12-.14-.77-.16-2.37-.04-3.1.1-.54.25-.86.54-1.15.3-.3.65-.45 1.12-.45h3.4v2.35c0 1.84 1.3 3.15 3.14 3.15h4.25V17.5H9.95c-1.83 0-3.14-1.3-3.14-3.14V8.56c0-1.07.64-1.78 1.85-1.93l-4.56-.09zM13.55 19.8c.45 0 .8.35.8.8s-.35.8-.8.8c-.46 0-.82-.35-.82-.8s.36-.8.82-.8z"/></svg>,
    "JavaScript": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F7DF1E]" fill="currentColor"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.494.555-.66 1.14-.66.81 0 1.245.345 1.485 1.02l2.355-.84c-.496-1.545-1.845-2.22-3.84-2.22-2.16 0-3.66 1.05-3.66 2.925 0 1.515 1.05 2.37 3.39 3.09 1.185.39 1.545.72 1.605 1.29.045.435-.12.87-1.08.87-1.17 0-1.875-.525-2.1-1.395l-2.43.915c.495 1.935 2.385 2.76 4.605 2.76 2.355 0 3.825-1.095 3.825-3.09 0-.015 0-.03-.015-.045zM9.464 12.016v-6.9H6.434v8.835c0 1.935 1.155 3.015 3.42 3.015 1.635 0 2.505-.525 2.97-1.425l-2.055-1.38c-.285.525-.705.795-1.14.795-.69 0-.96-.405-.96-1.56v-4.14h.015z"/></svg>,
    "TypeScript": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#3178C6]" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 23.875 0H1.125zM12 18.062V15.22h-3.938v-5.626h4.313v5.625h2.437v2.843H12zm5.813-10.312c1.781 0 3.187.984 3.562 2.625h-2.437c-.188-.656-.656-.984-1.219-.984-.75 0-1.219.469-1.219 1.031 0 .656.469.844 1.5 1.125 1.594.375 2.625 1.125 2.625 2.625 0 1.688-1.406 2.813-3.188 2.813-2.062 0-3.562-1.031-3.937-2.813h2.437c.281.844.844 1.219 1.5 1.219.844 0 1.312-.469 1.312-1.125 0-.75-.469-.938-1.594-1.219-1.594-.469-2.531-1.125-2.531-2.531 0-1.5 1.313-2.766 3.188-2.766z"/></svg>,
    "Java": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#5382A1]" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z M6 1v3M10 1v3M14 1v3"/></svg>,
    "React": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#61DAFB]" fill="currentColor"><path d="M11.854 22.251c-4.482 0-8.236-2.187-9.52-5.187.643-1.63 2.215-3.033 4.298-3.999 1.488-.691 3.235-1.111 5.093-1.218v-.002c1.944.092 3.766.52 5.312 1.233 2.05.944 3.6 2.316 4.26 3.916-1.246 3.056-5.068 5.257-9.443 5.257zm-5.69-2.09c1.558 1.011 3.528 1.59 5.69 1.59 1.948 0 3.73-.497 5.202-1.365a7.994 7.994 0 0 1-5.202 1.866 7.994 7.994 0 0 1-5.69-2.091zm10.748-4.996c-1.362-.647-3.003-1.054-4.793-1.166v-.002c-1.895.101-3.627.525-5.061 1.196-1.748.816-3.053 2.001-3.606 3.324a7.994 7.994 0 0 0 3.606 1.859c1.558 1.011 3.528 1.59 5.69 1.59 1.948 0 3.73-.497 5.202-1.365a7.994 7.994 0 0 0-1.038-6.636zM11.854 1.749c4.482 0 8.236 2.187 9.52 5.187-.643 1.63-2.215 3.033-4.298 3.999-1.488.691-3.235 1.111-5.093 1.218v.002c-1.944-.092-3.766-.52-5.312-1.233-2.05-.944-3.6-2.316-4.26-3.916 1.246-3.056 5.068-5.257 9.443-5.257zm5.69 2.09c-1.558-1.011-3.528-1.59-5.69-1.59-1.948 0-3.73.497-5.202 1.365a7.994 7.994 0 0 1 5.202-1.866 7.994 7.994 0 0 1 5.69 2.091zm-10.748 4.996c1.362.647 3.003 1.054 4.793 1.166v.002c1.895-.101 3.627-.525 5.061-1.196 1.748-.816 3.053-2.001 3.606-3.324a7.994 7.994 0 0 0-3.606-1.859c-1.558-1.011-3.528-1.59-5.69-1.59-1.948 0-3.73.497-5.202 1.365a7.994 7.994 0 0 0 1.038 6.636zM5.525 6.03c.532-1.22 1.7-2.327 3.23-3.09 1.488-.737 3.235-1.157 5.099-1.233.15-.005.3-.008.451-.008 4.453 0 8.243 2.187 9.53 5.187.633 1.455.512 3.076-.328 4.61-1.328 2.42-4.04 4.14-7.53 4.908a8.03 8.03 0 0 1-1.077 4.147c-1.246 3.056-5.068 5.257-9.443 5.257-.655 0-1.294-.06-1.91-.173A7.99 7.99 0 0 1 5.525 6.03zm12.95 5.97c1.328-2.42 1.449-4.041.816-5.496-1.246-3.056-5.068-5.257-9.443-5.257a7.99 7.99 0 0 0-3.921 1.017c-1.53.763-2.698 1.87-3.23 3.09-.633 1.455-.512 3.076.328 4.61 1.328 2.42 4.04 4.14 7.53 4.908a8.03 8.03 0 0 0 1.077-4.147c1.246-3.056 5.068-5.257 9.443-5.257a7.99 7.99 0 0 0 3.921-1.017c1.53-.763 2.698-1.87 3.23-3.09-.633-1.455-.512-3.076.328-4.61-1.328-2.42-4.04-4.14-7.53-4.9z"/></svg>,
    "React Native": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#61DAFB]" fill="currentColor"><path d="M12 2.5c-1.5 0-2.8.9-3.5 2.2L4.2 8.5c-.7 1.2-.7 2.7 0 3.9l4.3 3.8c.7 1.3 2 2.2 3.5 2.2s2.8-.9 3.5-2.2l4.3-3.8c.7-1.2.7-2.7 0-3.9l-4.3-3.8C14.8 3.4 13.5 2.5 12 2.5z"/></svg>,
    "TailwindCSS": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#38B2AC]" fill="currentColor"><path d="M12.001,4.8c-3.208,0-5.455,1.561-6.741,4.683c1.286-2.081,2.889-2.731,4.814-1.949 c1.114,0.453,1.909,1.267,2.784,2.164c1.332,1.365,2.81,2.881,6.386,2.881c3.208,0,5.455-1.561,6.741-4.683 c-1.286,2.081-2.889,2.731-4.814,1.949c-1.114-0.453-1.909-1.267-2.784-2.164C17.054,6.316,15.576,4.8,12.001,4.8z M5.259,11.378 c-3.208,0-5.455,1.561-6.741,4.683c1.286-2.081,2.889-2.731,4.814-1.949c1.114,0.453,1.909,1.267,2.784,2.164 c1.332,1.365,2.81,2.881,6.386,2.881c3.208,0,5.455-1.561,6.741-4.683c-1.286,2.081-2.889,2.731-4.814,1.949 c-1.114-0.453-1.909-1.267-2.784-2.164C10.312,12.894,8.834,11.378,5.259,11.378z"/></svg>,
    "HTML": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E34F26]" fill="currentColor"><path d="M1.5 0l1.8 20.3L12 24l8.7-3.7L22.5 0H1.5zm16.9 4.4H5.6l.2 2.3h12.4l-.6 6.8H8.8l.2 2.3h6.3l-.6 6.7-4.9 1.4-4.9-1.4-.3-3.6h-2.3l.6 7.1 8.9 3.1 8.9-3.1.9-10.6H9.7l-.2-2.4h10.7l-.2-2.3z"/></svg>,
    "CSS": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#1572B6]" fill="currentColor"><path d="M1.5 0l1.8 20.3L12 24l8.7-3.7L22.5 0H1.5zm16.9 4.4H5.6l.2 2.3h12.4l-.6 6.8H8.8l.2 2.3h6.3l-.6 6.7-4.9 1.4-4.9-1.4-.3-3.6h-2.3l.6 7.1 8.9 3.1 8.9-3.1.9-10.6H9.7l-.2-2.4h10.7l-.2-2.3z"/></svg>,
    "SQL": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#336791]" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z"/></svg>,
    "Firebase": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FFCA28]" fill="currentColor"><path d="M3.7 16.4L12 2.4l4.4 7.4L3.7 16.4zm16.6 1.2L12 21.6 3.7 17.6l2.5-4.6 10.1 4.6zM12 2.4L3.7 16.4l4.3-8.7 4.0 7.9 4.2-7.9L12 2.4z"/></svg>,
    "Vector Databases": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#6D28D9]" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16"/></svg>,
    "VS Code": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#007ACC]" fill="currentColor"><path d="M17.2 2.4L10.8 9.2 5.8 5.3 3.4 6.2v11.6l2.4.9 5-3.9 6.4 6.8 3.4-1.5V3.9l-3.4-1.5zM5.8 14.7V9.3l3.2 2.7-3.2 2.7zm11.4-2.7l-3.4 2.7V9.3l3.4 2.7z"/></svg>,
    "GitHub": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#181717]" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.35 1.09 2.92.84.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.67 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0112 6.84c.85 0 1.71.11 2.51.33 1.92-1.29 2.75-1.02 2.75-1.02.56 1.39.21 2.42.1 2.67.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>,

    // GenAI & Agentic AI
    "LangChain": <svg className="w-5 h-5 text-[#3178C6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>,
    "LangGraph": <svg className="w-5 h-5 text-[#E26546]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path></svg>,
    "RAG": <svg className="w-5 h-5 text-[#E05D3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>,
    "Multi-Agent System": <svg className="w-5 h-5 text-[#D63AFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>,
    "Hugging Face": <svg className="w-5 h-5 text-[#FFD21E]" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#000" strokeWidth="2" strokeLinecap="round" fill="none"/><circle cx="9" cy="9" r="1.5" fill="#000"/><circle cx="15" cy="9" r="1.5" fill="#000"/></svg>,
    "FAISS": <svg className="w-5 h-5 text-[#4E89C6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>,
    "Memory Management": <svg className="w-5 h-5 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>,

    // Frontend
    "React.js": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#61DAFB]" fill="currentColor"><path d="M11.854 22.251c-4.482 0-8.236-2.187-9.52-5.187.643-1.63 2.215-3.033 4.298-3.999 1.488-.691 3.235-1.111 5.093-1.218v-.002c1.944.092 3.766.52 5.312 1.233 2.05.944 3.6 2.316 4.26 3.916-1.246 3.056-5.068 5.257-9.443 5.257zm-5.69-2.09c1.558 1.011 3.528 1.59 5.69 1.59 1.948 0 3.73-.497 5.202-1.365a7.994 7.994 0 0 1-5.202 1.866 7.994 7.994 0 0 1-5.69-2.091zm10.748-4.996c-1.362-.647-3.003-1.054-4.793-1.166v-.002c-1.895.101-3.627.525-5.061 1.196-1.748.816-3.053 2.001-3.606 3.324a7.994 7.994 0 0 0 3.606 1.859c1.558 1.011 3.528 1.59 5.69 1.59 1.948 0 3.73-.497 5.202-1.365a7.994 7.994 0 0 0-1.038-6.636zM11.854 1.749c4.482 0 8.236 2.187 9.52 5.187-.643 1.63-2.215 3.033-4.298 3.999-1.488.691-3.235 1.111-5.093 1.218v.002c-1.944-.092-3.766-.52-5.312-1.233-2.05-.944-3.6-2.316-4.26-3.916 1.246-3.056 5.068-5.257 9.443-5.257zm5.69 2.09c-1.558-1.011-3.528-1.59-5.69-1.59-1.948 0-3.73.497-5.202 1.365a7.994 7.994 0 0 1 5.202-1.866 7.994 7.994 0 0 1 5.69 2.091zm-10.748 4.996c1.362.647 3.003 1.054 4.793 1.166v.002c1.895-.101 3.627-.525 5.061-1.196 1.748-.816 3.053-2.001 3.606-3.324a7.994 7.994 0 0 0-3.606-1.859c-1.558-1.011-3.528-1.59-5.69-1.59-1.948 0-3.73.497-5.202 1.365a7.994 7.994 0 0 0 1.038 6.636zM5.525 6.03c.532-1.22 1.7-2.327 3.23-3.09 1.488-.737 3.235-1.157 5.099-1.233.15-.005.3-.008.451-.008 4.453 0 8.243 2.187 9.53 5.187.633 1.455.512 3.076-.328 4.61-1.328 2.42-4.04 4.14-7.53 4.908a8.03 8.03 0 0 1-1.077 4.147c-1.246 3.056-5.068 5.257-9.443 5.257-.655 0-1.294-.06-1.91-.173A7.99 7.99 0 0 1 5.525 6.03zm12.95 5.97c1.328-2.42 1.449-4.041.816-5.496-1.246-3.056-5.068-5.257-9.443-5.257a7.99 7.99 0 0 0-3.921 1.017c-1.53.763-2.698 1.87-3.23 3.09-.633 1.455-.512 3.076.328 4.61 1.328 2.42 4.04 4.14 7.53 4.908a8.03 8.03 0 0 0 1.077-4.147c1.246-3.056 5.068-5.257 9.443-5.257a7.99 7.99 0 0 0 3.921-1.017c1.53-.763 2.698-1.87 3.23-3.09-.633-1.455-.512-3.076.328-4.61-1.328-2.42-4.04-4.14-7.53-4.908z"/></svg>,
    "Next.js": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#000000]" fill="currentColor"><path d="M11.983 23.955c6.623 0 11.983-5.36 11.983-11.977C23.966 5.358 18.606 0 11.983 0 5.36 0 0 5.358 0 11.978c0 6.617 5.36 11.977 11.983 11.977zm-.59-16.744h1.705l6.452 9.946-1.42 1.054-5.032-7.753v7.753h-1.705V7.21zm-2.073 7.753H7.615v-1.761h1.705v1.761zm0-3.064H7.615V10.14h1.705v1.759zm0-3.065H7.615V7.21h1.705v1.625z"/></svg>,
    "Tailwind CSS": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#38B2AC]" fill="currentColor"><path d="M12.001,4.8c-3.208,0-5.455,1.561-6.741,4.683c1.286-2.081,2.889-2.731,4.814-1.949 c1.114,0.453,1.909,1.267,2.784,2.164c1.332,1.365,2.81,2.881,6.386,2.881c3.208,0,5.455-1.561,6.741-4.683 c-1.286,2.081-2.889,2.731-4.814,1.949c-1.114-0.453-1.909-1.267-2.784-2.164C17.054,6.316,15.576,4.8,12.001,4.8z M5.259,11.378 c-3.208,0-5.455,1.561-6.741,4.683c1.286-2.081,2.889-2.731,4.814-1.949c1.114,0.453,1.909,1.267,2.784,2.164 c1.332,1.365,2.81,2.881,6.386,2.881c3.208,0,5.455-1.561,6.741-4.683c-1.286,2.081-2.889,2.731-4.814,1.949 c-1.114-0.453-1.909-1.267-2.784-2.164C10.312,12.894,8.834,11.378,5.259,11.378z"/></svg>,
    "ShadCN UI": <svg className="w-5 h-5 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>,
    "Zustand": <svg className="w-5 h-5 text-[#A55F55]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10a4 4 0 108 0 4 4 0 00-8 0zm12 4a4 4 0 100-8 4 4 0 000 8zm-8 4a4 4 0 100-8 4 4 0 000 8z"></path></svg>,
    "Redux": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#764ABC]" fill="currentColor"><path d="M18.847 13.923c.361-1.391.801-3.081 1.054-4.444.606-3.238.169-4.846-1.597-5.59-1.599-.67-3.69-.172-6.529 1.34a26.69 26.69 0 0 0-4.004 2.593c-.636-.502-1.258-1.026-1.848-1.564 1.309-1.464 2.951-2.923 4.965-4.103 2.656-1.554 4.887-2.146 6.55-1.455 1.831.758 2.502 2.68 1.956 5.626-.299 1.62-.835 3.65-1.282 5.305a41.87 41.87 0 0 1-.725 2.292zM8.995 14.821c.582.529 1.189 1.036 1.802 1.517-.504 1.35-.916 2.825-1.216 4.195-.563 2.544-1.206 4.316-2.616 4.908-1.536.643-3.666-.231-6.195-2.457-2.227-1.955-3.321-4.053-3.313-5.696.008-1.503 1.01-2.463 2.924-2.82 1.557-.288 3.513-.357 5.257-.291 1.253.048 2.416.143 3.357.644zm11.96-1.03c-1.854.298-3.791.31-5.467.243-.701-.027-1.365-.084-1.99-.166.425-1.218.775-2.527 1.05-3.774 2.115-.494 4.545-.733 6.945-.635 2.655.109 4.67.928 5.619 2.14.883 1.132.893 2.852-.395 5.093-1.401 2.433-3.653 4.417-6.262 5.512-1.272.532-2.392.833-3.415.939l1.915-1.637zm-9.08 3.195a28.056 28.056 0 0 1-1.85-1.564c-.604.536-1.196 1.047-1.765 1.534.254 1.353.649 3.01 1.047 4.567.876 3.407 1.639 5.378 3.498 5.864 1.951.512 4.128-.616 6.321-3.149a17.842 17.842 0 0 0 2.96-3.957c-1.205-.121-2.436-.453-3.805-1.036-1.488-.636-2.73-1.493-3.69-2.397a26.241 26.241 0 0 1-2.716 2.138zM6.541 7.426C4.013 9.426 2.052 11.238 1.493 12.833c-.482 1.385-.347 2.812.569 3.738 1.002 1.007 2.84 1.258 5.433.684.582-.128 1.189-.313 1.824-.54-1.111-1.325-2.039-2.825-2.775-4.444z"/></svg>,
    "Zod Validation": <svg className="w-5 h-5 text-[#3068B7]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,

    // Backend
    "Node.js": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#339933]" fill="currentColor"><path d="M11.87 0a1.134 1.134 0 0 0-.585.16L1.13 6.02A1.187 1.187 0 0 0 .546 7.03v10a1.168 1.187 0 0 0 .584 1.01l10.155 5.86a1.134 1.134 0 0 0 1.17 0l10.155-5.86a1.168 1.187 0 0 0 .584-1.01v-10a1.168 1.187 0 0 0-.584-1.01L12.455.16A1.134 1.134 0 0 0 11.87 0zm.116 3.65c.343 0 .61.272.61.615 0 .343-.267.615-.61.615a.616.616 0 0 1-.615-.615c0-.343.272-.615.615-.615zm-2.457.77a.616.616 0 0 1 .614.615c0 .343-.271.615-.614.615a.616.616 0 0 1-.615-.615c0-.343.272-.615.615-.615zm4.896 0c.343 0 .615.272.615.615 0 .343-.272.615-.615.615a.616.616 0 0 1-.615-.615c0-.343.272-.615.615-.615zM7.054 5.96a.616.616 0 0 1 .615.615c0 .343-.272.615-.615.615A.616.616 0 0 1 6.44 6.575c0-.343.272-.615.614-.615zm9.658 0a.616.616 0 0 1 .614.615c0 .343-.271.615-.614.615a.616.616 0 0 1-.615-.615c0-.343.272-.615.615-.615zM4.58 7.502a.616.616 0 0 1 .614.615c0 .343-.271.615-.614.615a.616.616 0 0 1-.615-.615c0-.343.272-.615.615-.615zM19.186 7.5a.616.616 0 0 1 .614.615c0 .343-.271.615-.614.615a.616.616 0 0 1-.614-.615c0-.343.271-.615.614-.615zM2.87 9.878a.616.616 0 0 1 .615.615c0 .343-.272.615-.615.615a.616.616 0 0 1-.614-.615c0-.343.271-.615.614-.615zm17.962 0c.343 0 .614.272.614.615 0 .343-.271.615-.614.615a.616.616 0 0 1-.615-.615c0-.343.272-.615.615-.615z"/></svg>,
    "Express.js": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#000000]" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zM8.4 14.4h-2.4v-4.8h2.4c1.325 0 2.4 1.075 2.4 2.4s-1.075 2.4-2.4 2.4zm0-3.6h-1.2v2.4h1.2c.663 0 1.2-.537 1.2-1.2s-.537-1.2-1.2-1.2zm6.6 3.6h-1.2l-1.2-2.4h-.6v2.4h-1.2v-4.8h1.8c1.325 0 2.4 1.075 2.4 2.4 0 .93-.526 1.733-1.31 2.15l1.31 2.65zm-1.8-3.6h-.6v1.2h.6c.331 0 .6-.269.6-.6s-.269-.6-.6-.6z"/></svg>,
    "FastAPI": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#009688]" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z"/></svg>,
    "REST APIs": <svg className="w-5 h-5 text-[#4E89C6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v4H4zm0 6h16v4H4zm0 6h16v4H4z"></path></svg>,
    "MongoDB": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#47A248]" fill="currentColor"><path d="M12 0C7.2 0 5 4.3 5 8c0 4 3 6.5 4.5 10-.5 1-1.5 2-1.5 2h2c1.5 0 3-1 3-3 0 2 1.5 3 3 3h2s-1-1-1.5-2c1.5-3.5 4.5-6 4.5-10 0-3.7-2.2-8-7-8z"/></svg>,
    "PostgreSQL": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#336791]" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v2h2V7zm0 4h-2v6h2v-6z"/></svg>,
    "Redis": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#DC382D]" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-4-9h8v2H8v-2z"/></svg>,
    "JWT Authentication": <svg className="w-5 h-5 text-[#D63AFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L1.5 5.5l.385 11.23L12 24l10.115-7.27L22.5 5.5 12 0zm0 2.6l8.5 4.5-.3 9.4-8.2 5.9-8.2-5.9-.3-9.4L12 2.6z"/></svg>,

    // Tools & Ops
    "n8n Automation": <svg className="w-5 h-5 text-[#FF6D5A]" fill="currentColor" viewBox="0 0 24 24"><path d="M6 12a6 6 0 1112 0 6 6 0 01-12 0zm6-4a4 4 0 100 8 4 4 0 000-8z"/></svg>,
    "Playwright": <svg className="w-5 h-5 text-[#2EAD33]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
    "Git": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#F05032]" fill="currentColor"><path d="M23.546 10.93L13.067.452a1.458 1.458 0 0 0-2.062 0L8.528 2.929l3.053 3.053a2.155 2.155 0 0 1 1.764 1.107 2.164 2.164 0 0 1-1.077 2.912l.628 3.542a2.16 2.16 0 0 1 2.378 1.472 2.16 2.16 0 0 1-2.909 2.584 2.156 2.156 0 0 1-1.393-2.31l-.647-3.66a2.16 2.16 0 0 1-2.278-1.579L5.05 7.153 1.452 10.93a1.458 1.458 0 0 0 0 2.062l10.478 10.478a1.458 1.458 0 0 0 2.062 0l9.554-9.554a1.458 1.458 0 0 0 0-2.062z"/></svg>,
    "Docker": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#2496ED]" fill="currentColor"><path d="M11.968 0C5.36 0 0 5.36 0 11.968s5.36 11.968 11.968 11.968 11.968-5.36 11.968-11.968S18.576 0 11.968 0zm-3.3 16.5c-1.32 0-2.4-.44-3.19-1.32-.79-.88-1.18-1.98-1.18-3.3s.39-2.42 1.18-3.3c.79-.88 1.87-1.32 3.19-1.32 1.32 0 2.4.44 3.19 1.32.79.88 1.18 1.98 1.18 3.3s-.39 2.42-1.18 3.3c-.79.88-1.87 1.32-3.19 1.32zm8.58-1.32c-.79.88-1.87 1.32-3.19 1.32s-2.4-.44-3.19-1.32c-.79-.88-1.18-1.98-1.18-3.3s.39-2.42 1.18-3.3c.79-.88 1.87-1.32 3.19-1.32 1.32 0 2.4.44 3.19 1.32.79.88 1.18 1.98 1.18 3.3s-.39 2.42-1.18 3.3z"/></svg>,
    "Vercel": <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#000000]" fill="currentColor"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
  };

  const secondaryBtnClass = "flex items-center justify-center gap-2.5 px-6 py-3 bg-transparent text-[#1B2F2A] border-2 border-[#1B2F2A] text-sm font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-[#1B2F2A] hover:text-[#FDEAA8] hover:-translate-y-1 shadow-[4px_4px_0px_rgba(27,47,42,0.1)]";

  return (
    <div className="min-h-screen bg-[#FDEAA8] text-[#1B2F2A] font-sans selection:bg-[#E26546] selection:text-[#FFFDF6] scroll-smooth">
      
      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-[#FDEAA8]/90 backdrop-blur-md border-b-2 border-[#1B2F2A]/10 transition-all">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center overflow-x-auto no-scrollbar">
          <a href="#" className="font-serif font-black text-2xl text-[#1B2F2A] tracking-tighter shrink-0">
            Samrat Chauhan
          </a>
          <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest text-[#1B2F2A]/80 whitespace-nowrap px-4">
            <a href="#projects" className="hover:text-[#E26546] transition-colors">Work</a>
            <a href="#tech" className="hover:text-[#E26546] transition-colors">Skills</a>
            <a href="#problem-solving" className="hover:text-[#E26546] transition-colors">Stats</a>
            <a href="#about" className="hover:text-[#E26546] transition-colors">About</a>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-40">
        
        {/* 1. Hero Section */}
        <section id="hero" className="flex flex-col-reverse md:flex-row items-start justify-between gap-16 pt-10">
          <div className="space-y-10 flex-1 text-left relative z-10">
            
            <div className="inline-block bg-[#E26546]/10 border-2 border-[#E26546]/20 px-4 py-2 text-xs font-black tracking-[0.2em] uppercase text-[#E26546] rounded-full">
              Building systems people actually use
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-serif font-black text-[#1B2F2A] leading-[0.9] tracking-tighter">
                <span className="text-[#E26546] font-serif font-black inline-block min-w-75">
                  {typewriterText}
                  <span className="animate-pulse border-r-4 border-[#E26546] ml-1"></span>
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {['Full Stack Development', 'AI Engineering', 'Developer Tools', 'Automation'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#FFFDF6] border-2 border-[#1B2F2A]/10 text-[#1B2F2A] text-xs font-bold uppercase tracking-widest rounded-xl shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-[#E26546] pl-6 py-2 text-lg text-[#1B2F2A]/80 leading-relaxed max-w-2xl font-medium">
              <p>
                I build AI-powered developer tools, automation platforms, and full-stack applications with a focus on clean architecture and real-world usability.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6]/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]/80 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Available for Full Stack & AI Engineering Opportunities
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <button 
                onClick={() => setIsResumeModalOpen(true)} 
                className="flex items-center justify-center gap-2 px-8 py-3 bg-[#E26546] text-[#FFFDF6] font-black uppercase tracking-widest text-sm rounded-2xl hover:bg-[#1B2F2A] hover:-translate-y-1 transition-all shadow-[4px_4px_0px_rgba(27,47,42,0.1)]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                View Resume
              </button>
              
              <a href="https://leetcode.com/u/samrat-chauhan24/" target="_blank" rel="noreferrer" className={secondaryBtnClass}>
                LeetCode
              </a>
              <a href="https://github.com/samrat-chauhan24" target="_blank" rel="noreferrer" className={secondaryBtnClass}>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/samratchauhan/" target="_blank" rel="noreferrer" className={secondaryBtnClass}>
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="shrink-0 relative md:block hidden pt-4">
            <div className="w-72 h-72 overflow-hidden rounded-full border-4 border-[#FFFDF6] shadow-[0_10px_40px_rgba(226,101,70,0.2)]">
              <Image 
                src="/profile.jpg" 
                alt="Samrat Chauhan" 
                width={288} 
                height={288} 
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </section>

        <section id="building" className="-mt-8 rounded-4xl border border-[#1B2F2A]/10 bg-[#FFFDF6] p-6 shadow-[0_10px_35px_rgba(27,47,42,0.06)] md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-green-600">
                <span className="relative mr-2 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </span>
                Active Development
              </div>
              <h2 className="mt-3 text-3xl font-serif font-black tracking-tighter text-[#1B2F2A] sm:text-4xl">Currently Building</h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#1B2F2A]/70">Focused on open-source developer tooling and browser-native execution experiences.</p>
            </div>
            <div className="rounded-[1.4rem] border border-[#1B2F2A]/10 bg-[#FDEAA8]/30 px-5 py-4 text-sm font-medium text-[#1B2F2A]/80">
              GitStream · Open-source browser-native GitHub runtime
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.4rem] border border-[#1B2F2A]/10 bg-[#FFFDF6] p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">GitStream</div>
              <p className="mt-3 text-xl font-serif font-black leading-tight text-[#1B2F2A]">Open-source browser-native GitHub runtime.</p>
            </div>
            <div className="rounded-[1.4rem] border border-[#1B2F2A]/10 bg-[#FDEAA8]/25 p-5">
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-[#1B2F2A]/60">Current Focus</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Virtual File System', 'Static Analyzer', 'Import Resolver', 'Browser Runtime', 'Package Ecosystem'].map((item) => (
                  <span key={item} className="rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B2F2A]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. Featured Projects */}
        <section id="projects" className="space-y-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1B2F2A] tracking-tighter">Selected Work</h2>
            <p className="text-[#1B2F2A]/60 font-medium mt-4 max-w-2xl">Production-grade applications and AI systems engineered for real-world impact.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, idx) => {
              const badge = projectBadgeMap[project.id] ?? 'PRODUCT';
              const meta = projectMetaMap[project.id] ?? { status: '🟢 Active Development', metrics: ['⚙ Product'], architecture: [], challenges: [], roadmap: [] };
              const highlights = projectHighlightsMap[project.id] ?? ['Product Design', 'Workflow Automation', 'Modern UX'];
              const techChips = project.tech.split(', ').slice(0, 4);
              const isActive = activeProject === project.id;

              return (
                <article
                  key={project.id}
                  className={`group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-[#1B2F2A]/10 bg-[#FFFDF6] shadow-[0_10px_35px_rgba(27,47,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#E26546]/20 hover:shadow-[0_18px_45px_rgba(27,47,42,0.12)] ${project.id === 'gitstream' ? 'border-[#E26546]/20 shadow-[0_16px_40px_rgba(226,101,70,0.12)] lg:col-span-2' : ''}`}
                >
                  <div className="relative p-3 sm:p-4">
                    <div className={`overflow-hidden rounded-[1.35rem] border border-[#1B2F2A]/10 bg-[#111827] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ${project.id === 'gitstream' ? 'sm:h-100 h-65' : 'sm:h-80 h-55'}`}>
                      <div className="flex items-center justify-between border-b border-white/10 bg-[#0F1720]/95 px-3 py-2.5 sm:px-4 sm:py-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.25em] text-[#FDEAA8]/90 sm:text-xs">
                          {project.title}
                        </div>
                        <span className="rounded-full border border-[#E26546]/20 bg-[#E26546]/10 px-3 py-1 text-[9px] font-black uppercase tracking-[0.24em] text-[#E26546]">
                          {project.id === "gitstream"
                            ? "FEATURED • OPEN SOURCE"
                            : badge}
                        </span>
                      </div>
                      <div className="relative flex h-full items-center justify-center overflow-hidden bg-linear-to-b from-[#1B2435] to-[#0D1524] p-3 sm:p-5 lg:p-7">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
                        <div className="relative flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={860}
                            height={560}
                            priority={idx < 3}
                            className="
                            max-h-full
                            max-w-full
                            object-contain
                            mx-auto
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex h-full flex-col px-5 pb-5 pt-3 sm:px-7 sm:pb-7 sm:pt-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className={`font-serif font-black leading-tight text-[#1B2F2A] ${project.id === 'gitstream' ? 'text-[1.55rem] sm:text-[1.8rem]' : 'text-[1.3rem] sm:text-[1.45rem]'}`}>
                          {project.title}
                        </h3>
                        <span className="rounded-full border border-[#E26546]/15 bg-[#E26546]/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.22em] text-[#E26546]">
                          {badge}
                        </span>
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-[#1B2F2A]/70">{project.shortDesc}</p>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div className="text-[10px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]/55">Highlights</div>
                      <div className="flex flex-wrap gap-2">
                        {highlights.map((highlight) => (
                          <span key={highlight} className="inline-flex items-center rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/35 px-2.25 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1B2F2A]">
                            <span className="mr-1 text-[#E26546]">✓</span>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex min-h-8 flex-wrap gap-2">
                      {meta.metrics.map((metric) => (
                        <span key={metric} className="inline-flex items-center rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6] px-2.25 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1B2F2A]">
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex min-h-8 flex-wrap gap-2">
                      {techChips.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6] px-2.25 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#1B2F2A] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FDEAA8]/50">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-1">
                      <button
                        onClick={() => openProjectDetails(project.id)}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#E26546] px-5 text-[11px] font-black uppercase tracking-[0.24em] text-[#FFFDF6] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B2F2A]"
                      >
                        Deep Dive <span aria-hidden="true">→</span>
                      </button>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6] px-5 text-[11px] font-black uppercase tracking-[0.24em] text-[#1B2F2A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B2F2A] hover:text-[#FFFDF6]">
                          View Source →
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6] px-5 text-[11px] font-black uppercase tracking-[0.24em] text-[#1B2F2A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B2F2A] hover:text-[#FFFDF6]">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="opensource" className="space-y-8 rounded-4xl border border-[#1B2F2A]/10 bg-[#FFFDF6] p-6 shadow-[0_10px_35px_rgba(27,47,42,0.06)] md:p-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1B2F2A] tracking-tighter">Open Source</h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-[#1B2F2A]/70">A small portfolio of public work that emphasizes reusable systems, developer workflow, and practical engineering.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {openSourceStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.4rem] border border-[#1B2F2A]/10 bg-[#FDEAA8]/25 p-5 text-center">
                <div className="text-3xl font-black text-[#1B2F2A]">{stat.value}</div>
                <div className="mt-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Tech Stack */}
        <section id="tech" className="space-y-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1B2F2A] tracking-tighter">Technical Skills</h2>
            <p className="mt-4 max-w-2xl text-[#1B2F2A]/60 font-medium">The tools and frameworks I use to build practical products.</p>
          </div>

          <div className="space-y-10">
            {[
              { title: "Languages", skills: [{ name: "Java", icon: icons["Java"] }, { name: "TypeScript", icon: icons["TypeScript"] }, { name: "JavaScript", icon: icons["JavaScript"] }, { name: "Python", icon: icons["Python"] }, { name: "SQL", icon: icons["SQL"] }] },
              { title: "Frontend", skills: [{ name: "React", icon: icons["React"] }, { name: "React Native", icon: icons["React Native"] }, { name: "TailwindCSS", icon: icons["TailwindCSS"] }, { name: "HTML", icon: icons["HTML"] }, { name: "CSS", icon: icons["CSS"] }] },
              { title: "Backend", skills: [{ name: "FastAPI", icon: icons["FastAPI"] }, { name: "Node.js", icon: icons["Node.js"] }, { name: "REST APIs", icon: icons["REST APIs"] }] },
              { title: "AI", skills: [{ name: "LangChain", icon: icons["LangChain"] }, { name: "LangGraph", icon: icons["LangGraph"] }, { name: "RAG", icon: icons["RAG"] }, { name: "Vector Databases", icon: icons["Vector Databases"] }] },
              { title: "Automation", skills: [{ name: "Playwright", icon: icons["Playwright"] }, { name: "n8n", icon: icons["n8n Automation"] } ] },
              { title: "Developer Tools", skills: [{ name: "Git", icon: icons["Git"] }, { name: "GitHub", icon: icons["GitHub"] }, { name: "VS Code", icon: icons["VS Code"] }, ] },
              { title: "Databases", skills: [{ name: "PostgreSQL", icon: icons["PostgreSQL"] }, { name: "MongoDB", icon: icons["MongoDB"] }, { name: "Firebase", icon: icons["Firebase"] }, { name: "Redis", icon: icons["Redis"] }] },
              { title: "Cloud", skills: [{ name: "Vercel", icon: icons["Vercel"] }, { name: "Docker", icon: icons["Docker"] }] }
            ].map((group) => (
              <div key={group.title}>
                <h3 className="mb-6 font-serif text-xl font-bold text-[#1B2F2A]">{group.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 rounded-2xl border border-[#1B2F2A]/5 bg-[#FFFDF6] px-6 py-4 shadow-[0_4px_15px_rgba(0,0,0,0.03)] transition-transform duration-200 hover:-translate-y-1 cursor-default">
                      {skill.icon}
                      <span className="font-semibold text-[#1B2F2A]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Problem Solving */}
        <section id="problem-solving" className="space-y-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-black text-[#1B2F2A] tracking-tighter">Problem Solving Profile</h2>
            <p className="text-[#1B2F2A]/60 font-medium mt-4 max-w-2xl">A steady routine of data structures, algorithms, and practical implementation.</p>
          </div>

          <div className="w-full max-w-4xl mx-auto">
            <div className="p-8 md:p-10 bg-[#FFFDF6] rounded-4xl border border-[#1B2F2A]/10 shadow-[0_8px_30px_rgb(0,0,0,0.05)] relative overflow-hidden">
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-[#FFFDF6] rounded-2xl flex items-center justify-center shadow-sm border border-[#1B2F2A]/5">
                    <svg className="w-8 h-8 text-[#E26546]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.313-5.693a.522.522 0 0 1 .744-.012l.012.012l6.32 6.196a1.38 1.38 0 0 0 1.954-.002 1.377 1.377 0 0 0 0-1.95l-6.321-6.196A1.372 1.372 0 0 0 13.483 0zm4.512 11.23a1.377 1.377 0 0 0-1.374 1.378 1.376 1.376 0 0 0 1.374 1.374h5.275a1.376 1.376 0 0 0 1.374-1.374 1.377 1.377 0 0 0-1.374-1.378h-5.275z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-[#1B2F2A]">LeetCode</h3>
                    <p className="text-[#1B2F2A]/60 font-medium tracking-wide mt-1 text-lg">@samrat-chauhan24</p>
                  </div>
                </div>
                
                <a href="https://leetcode.com/u/samrat-chauhan24/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/30 flex items-center justify-center hover:bg-[#FDEAA8] transition-colors">
                  <svg className="w-6 h-6 text-[#1B2F2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                <div className="bg-[#FDEAA8]/40 p-6 rounded-2xl border border-[#1B2F2A]/5">
                  <div className="flex items-center gap-2 mb-3 text-[#1B2F2A]/70">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2"></circle><circle cx="12" cy="12" r="4" strokeWidth="2"></circle></svg>
                    <span className="text-xs font-black uppercase tracking-widest">Questions Solved</span>
                  </div>
                  <span className="text-3xl font-black text-[#1B2F2A]">120+</span>
                </div>

                <div className="bg-[#FDEAA8]/40 p-6 rounded-2xl border border-[#1B2F2A]/5">
                  <div className="flex items-center gap-2 mb-3 text-[#1B2F2A]/70">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                    <span className="text-xs font-black uppercase tracking-widest">Focus</span>
                  </div>
                  <span className="text-3xl font-black text-[#1B2F2A]">Java</span>
                </div>

                <div className="bg-[#FDEAA8]/40 p-6 rounded-2xl border border-[#1B2F2A]/5">
                  <div className="flex items-center gap-2 mb-3 text-[#1B2F2A]/70">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                    <span className="text-xs font-black uppercase tracking-widest">Practice</span>
                  </div>
                  <span className="text-3xl font-black text-[#1B2F2A]">Problem Solving</span>
                </div>

                <div className="bg-[#FDEAA8]/40 p-6 rounded-2xl border border-[#1B2F2A]/5">
                  <div className="flex items-center gap-2 mb-3 text-[#1B2F2A]/70">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    <span className="text-xs font-black uppercase tracking-widest">Approach</span>
                  </div>
                  <span className="text-3xl font-black text-[#1B2F2A]">Consistent DSA Practice</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Journey section removed */}

        {/* 5. About */}
        <section id="about" className="space-y-12">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-serif font-black text-[#1B2F2A] tracking-tighter uppercase">About Me</h2>
            <div className="h-1 w-full bg-[#1B2F2A] mt-4"></div>
          </div>
          
          <div className="space-y-6 text-lg text-[#1B2F2A]/80 leading-relaxed font-medium max-w-4xl">
            <p>
              I started programming because I enjoyed turning ideas into working software. Over time, that curiosity evolved into a deeper interest in how complex systems are designed, how good architecture enables long-term maintainability, and how technology can solve real-world problems.
            </p>
            <p>
              Today, I enjoy building full-stack applications where frontend, backend, and AI work together seamlessly. My projects range from intelligent automation platforms and multi-agent AI systems to developer tools that simplify complex workflows. I find the most satisfaction in building software that is practical, reliable, and genuinely useful.
            </p>
            <p>
              What excites me most about AI isn't just the models—it's how thoughtful engineering can transform them into products that people trust and enjoy using. That's why I focus on clean architecture, scalable design, and creating experiences that remain simple, even when the underlying systems are complex.
            </p>
            <p>
              I believe great software is built with clarity, maintainability, and attention to detail. Whether I'm developing an AI-powered application, an automation platform, or an open-source developer tool, my goal is always the same: build solutions that solve meaningful problems and continue to improve over time.
            </p>
          </div>
        </section>

       {/* 6. Education */}
        <section id="education" className="space-y-12">
          <div className="flex flex-col items-start">
            <h2 className="text-4xl font-serif font-black text-[#1B2F2A] tracking-tighter uppercase">Education</h2>
            <div className="h-1 w-full bg-[#1B2F2A] mt-4"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start max-w-4xl">
            {/* College Logo */}
            <div className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-[#E26546]/20 bg-white overflow-hidden shadow-sm flex items-center justify-center mt-1">
              {collegeImgError ? (
                <span className="text-3xl font-black text-[#1B2F2A]">🎓</span>
              ) : (
                <Image 
                  src="/college.png" 
                  alt="College Logo" 
                  width={96} 
                  height={96} 
                  className="object-contain p-2"
                  onError={() => setCollegeImgError(true)}
                />
              )}
            </div>
            
            {/* Education Details - Simple layout matching About section */}
            <div className="space-y-4">
              <div>
                <span className="text-[#E26546] font-black text-sm uppercase tracking-widest">2023 — 2027</span>
                <h3 className="text-3xl md:text-4xl font-serif font-black text-[#1B2F2A] mt-2 leading-tight">B.Tech Computer Science and Engineering (AI & ML)</h3>
                <p className="text-xl font-bold text-[#1B2F2A]/80 mt-2">Meerut Institute of Engineering and Technology</p>
              </div>
              
              <div className="text-lg text-[#1B2F2A]/80 leading-relaxed font-medium space-y-3 pt-2">
                <p><span className="font-bold text-[#1B2F2A]">CGPA:</span> 7.0/10</p>
                <p><span className="font-bold text-[#1B2F2A]">Relevant Coursework:</span> Data Structures, Algorithms, Operating Systems, Database Systems, Computer Networks, Artificial Intelligence, Machine Learning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Contact */}
        <section id="contact" className="py-24 border-t-2 border-b-2 border-[#1B2F2A]/10 flex flex-col items-center text-center space-y-8 bg-[#FFFDF6] rounded-[3rem] shadow-sm">
          <h2 className="text-5xl font-serif font-black tracking-tighter uppercase text-[#1B2F2A]">Let's Connect.</h2>
          <p className="text-lg max-w-xl font-medium text-[#1B2F2A]/70">
            Whether it is a product idea, an engineering challenge, or a conversation about building something useful, I am always open to connecting.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <a href="mailto:chauhansamrat835@gmail.com" className="px-8 py-4 bg-[#E26546] text-[#FFFDF6] text-sm font-black  tracking-widest rounded-2xl transition-all hover:bg-[#1B2F2A] hover:-translate-y-1 shadow-[4px_4px_0px_rgba(27,47,42,0.1)]">
              chauhansamrat835@gmail.com
            </a>
            <a href="tel:+917668795490" className="px-8 py-4 bg-transparent text-[#1B2F2A] border-2 border-[#1B2F2A] text-sm font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-[#1B2F2A] hover:text-[#FFFDF6] hover:-translate-y-1 shadow-[4px_4px_0px_rgba(27,47,42,0.1)]">
              +91 7668795490
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-serif font-black tracking-tighter uppercase text-[#1B2F2A]">Samrat Chauhan.</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#1B2F2A]/60">Built with Next.js • TypeScript • Tailwind CSS</p>
          </div>
          <div className="flex gap-8">
            <a href="https://github.com/samrat-chauhan24" className="text-xs font-bold uppercase tracking-widest text-[#1B2F2A] hover:text-[#E26546] transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/samratchauhan" className="text-xs font-bold uppercase tracking-widest text-[#1B2F2A] hover:text-[#E26546] transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/u/samrat-chauhan24/" className="text-xs font-bold uppercase tracking-widest text-[#1B2F2A] hover:text-[#E26546] transition-colors">LeetCode</a>
          </div>
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#1B2F2A]/60">Designed & Developed by Samrat Chauhan</p>
        </div>
      </footer>

      {activeProject && (
        <div className={`fixed inset-0 z-100 flex items-center justify-center bg-[#1B2F2A]/70 p-3 backdrop-blur-sm transition-all duration-300 sm:p-6 ${isModalVisible ? 'opacity-100' : 'opacity-0'}`} onClick={closeProjectDetails}>
          <div className={`w-full max-w-5xl overflow-hidden rounded-4xl border border-[#1B2F2A]/10 bg-[#FFFDF6] shadow-[0_20px_65px_rgba(0,0,0,0.32)] transition-all duration-300 ${isModalVisible ? 'translate-y-0 scale-100' : 'translate-y-4 scale-[0.98]'}`} onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-[#1B2F2A]/10 bg-[#FFFDF6] px-4 py-4 sm:px-6 sm:py-5">
              <div className="text-sm font-black uppercase tracking-[0.3em] text-[#1B2F2A]/60">Project Details</div>
              <button onClick={closeProjectDetails} className="rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/50 p-2 text-[#1B2F2A] transition-colors hover:bg-[#E26546] hover:text-[#FFFDF6]" aria-label="Close project details">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {projects.filter((project) => project.id === activeProject).map((project) => {
              const badge = projectBadgeMap[project.id] ?? 'PRODUCT';
              const techChips = project.tech.split(', ');

              return (
                <div key={project.id} className="max-h-[85vh] overflow-y-auto">
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="overflow-hidden rounded-[1.6rem] border border-[#1B2F2A]/10 bg-[#182233] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className="flex items-center justify-between border-b border-white/10 bg-[#0F1720]/95 px-3 py-2.5 sm:px-4 sm:py-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.24em] text-[#FDEAA8]/90 sm:text-xs">
                          {project.title}
                        </div>
                        <span className="rounded-full border border-[#E26546]/20 bg-[#E26546]/10 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.24em] text-[#E26546] sm:px-3">
                          {badge}
                        </span>
                      </div>
                      <div className="relative flex items-center justify-center overflow-hidden bg-[#111827] p-4 sm:p-6 lg:p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
                        <div className="relative w-full max-w-180">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={860}
                            height={560}
                            className="max-h-full max-w-full object-contain drop-shadow-2xl"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 space-y-7">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-2">
                            <span className="rounded-full border border-[#1B2F2A]/10 bg-[#FDEAA8]/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]">{badge}</span>
                            <span className="rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6] px-3 py-1 text-[10px] font-black uppercase tracking-[0.24em] text-[#1B2F2A]/70">Software Product</span>
                          </div>
                          <h3 className="text-3xl font-serif font-black leading-tight text-[#1B2F2A] sm:text-4xl">{project.title}</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-[#E26546] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.24em] text-[#FFFDF6] transition-all hover:bg-[#1B2F2A]">
                              View Source →
                            </a>
                          )}
                          {project.live && (
                            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.24em] text-[#1B2F2A] transition-all hover:bg-[#1B2F2A] hover:text-[#FFFDF6]">
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="space-y-5">
                          <div>
                            <h4 className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">Overview</h4>
                            <p className="text-sm font-medium leading-relaxed text-[#1B2F2A]/80">{project.overview}</p>
                          </div>
                          <div>
                            <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">Engineering Highlights</h4>
                            <div className="space-y-2">
                              {project.features.slice(0, 4).map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-2 rounded-2xl border border-[#1B2F2A]/10 bg-[#FFFDF6] p-3">
                                  <span className="mt-0.5 text-[#E26546]">✓</span>
                                  <span className="text-sm font-medium leading-relaxed text-[#1B2F2A]/80">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-5 rounded-[1.6rem] border border-[#1B2F2A]/10 bg-[#FDEAA8]/20 p-5 sm:p-6">
                          <div>
                            <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">Technology</h4>
                            <div className="flex flex-wrap gap-2">
                              {techChips.map((tech) => (
                                <span key={tech} className="rounded-full border border-[#1B2F2A]/10 bg-[#FFFDF6] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1B2F2A]">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-[#E26546]">Focus</h4>
                            <p className="text-sm font-medium leading-relaxed text-[#1B2F2A]/80">{project.shortDesc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Resume Viewer Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#1B2F2A]/80 p-4 sm:p-8 backdrop-blur-sm">
          <div className="bg-[#FDEAA8] w-full max-w-5xl h-full max-h-[90vh] flex flex-col border-2 border-[#1B2F2A] rounded-4xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b-2 border-[#1B2F2A] bg-[#FFFDF6]">
              <h3 className="font-serif font-black text-2xl text-[#1B2F2A]">Resume</h3>
              <div className="flex gap-4">
                <a 
                  href="/Samrat_Chauhan_Resume.pdf" 
                  download 
                  className="px-6 py-2 bg-[#E26546] text-[#FFFDF6] text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#1B2F2A] transition-colors"
                >
                  Download
                </a>
                <button 
                  onClick={() => setIsResumeModalOpen(false)} 
                  className="px-6 py-2 bg-transparent text-[#1B2F2A] border-2 border-[#1B2F2A] text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#1B2F2A] hover:text-[#FFFDF6] transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
            
            {/* Modal Body / PDF Viewer */}
            <div className="grow w-full h-full p-4 bg-[#1B2F2A]/5">
               <iframe 
                 src="/Samrat_Chauhan_Resume.pdf" 
                 className="w-full h-full border-2 border-[#1B2F2A]/10 rounded-xl bg-white" 
                 title="Resume PDF"
               ></iframe>
            </div>

          </div>
        </div>
      )}
      
    </div>
  );
}  