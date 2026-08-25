export type Project = {
  id: string;
  title: string;
  badge: string;
  image: string;
  tech: string;
  github: string;
  live: string | null;
  shortDesc: string;
  overview: string;
  features: string[];
  highlights: string[];
  meta: {
    status: string;
    metrics: string[];
    architecture: string[];
    challenges: string[];
    roadmap: string[];
  };
};