import type { ThemeName } from "@/lib/theme";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
  theme: ThemeName;
}

export const PROJECTS: Project[] = [
  {
    title: "Digital Twin",
    description:
      "An AI-powered digital twin chatbot that provides information about my background, skills, and experiences using RAG technology.",
    image: "/images/digitaltwin.png",
    tags: ["AI", "RAG", "Chatbot"],
    repoUrl: "https://github.com/elijah-alonzo/digital-twin.git",
    theme: "cyan",
  },
  {
    title: "Equal Learn",
    description:
      "An educational video hosting website designed for kids and teachers to access and share learning content.",
    image: "/images/equallearn.png",
    tags: ["Education", "Video Hosting", "Learning Platform"],
    repoUrl: "https://github.com/elijah-alonzo/EqualLearn.git",
    theme: "blue",
  },
  {
    title: "Paulinian Student Government E-Portfolio and Ranking System",
    description:
      "A comprehensive system for managing student portfolios and rankings within the student government.",
    image: "/images/e-portfolio.png",
    tags: ["Laravel", "Portfolio", "Management"],
    repoUrl: "https://github.com/elijah-alonzo/app.git",
    theme: "emerald",
  },
  {
    title: "Gem Catcher",
    description:
      "A 2D arcade-style game where players catch gems to gain points and achieve high scores.",
    image: "/images/gemcatcher.png",
    tags: ["Game", "2D", "Arcade"],
    repoUrl: "https://github.com/elijah-alonzo/GemCathcer.git",
    theme: "purple",
  },
];
