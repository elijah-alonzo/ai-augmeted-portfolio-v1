import { Award, Brush, Palette, Video, Wrench, type LucideIcon } from "lucide-react";
import type { ThemeName } from "@/lib/theme";

interface BaseCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  theme: ThemeName;
}

export type SkillCategory =
  | (BaseCategory & { kind: "chips"; items: string[] })
  | (BaseCategory & { kind: "levels"; items: { name: string; level: string }[] })
  | (BaseCategory & { kind: "groups"; groups: { label: string; items: string[] }[] });

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    kind: "chips",
    title: "Web Development",
    description:
      "Full-stack development capabilities with modern frameworks and responsive design principles.",
    icon: Wrench,
    theme: "blue",
    items: ["Frontend & Backend", "REST APIs", "Responsive UI/UX"],
  },
  {
    kind: "levels",
    title: "Programming Languages",
    description: "Proficient in multiple programming languages for diverse development projects.",
    icon: Palette,
    theme: "green",
    items: [
      { name: "PHP", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Java", level: "Beginner" },
    ],
  },
  {
    kind: "chips",
    title: "Frameworks",
    description: "Modern frameworks and libraries for efficient development workflows.",
    icon: Brush,
    theme: "purple",
    items: ["Laravel", "React", "Next.js", "Django"],
  },
  {
    kind: "chips",
    title: "Databases",
    description: "Database design, optimization, and management across multiple platforms.",
    icon: Award,
    theme: "orange",
    items: ["MySQL", "PostgreSQL", "SQLite", "MariaDB", "MongoDB"],
  },
  {
    kind: "groups",
    title: "Multimedia",
    description: "Creative skills in graphic design, video editing, and multimedia production.",
    icon: Video,
    theme: "pink",
    groups: [
      { label: "Graphics:", items: ["Photo Retouching", "Color Correction", "Layout Design"] },
      { label: "Video:", items: ["Editing", "Color Grading", "Motion Graphics"] },
      { label: "Tools:", items: ["Photoshop", "Premiere", "Canva"] },
    ],
  },
  {
    kind: "chips",
    title: "Soft Skills",
    description:
      "Leadership and communication skills developed through various organizational roles.",
    icon: Award,
    theme: "teal",
    items: ["Leadership", "Communication", "Public Speaking"],
  },
];
