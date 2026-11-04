import type { ThemeName } from "@/lib/theme";

export interface Certification {
  title: string;
  description: string;
  image: string;
  tags: string[];
  theme: ThemeName;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "ITS Databases",
    description: "Professional certification in database management and administration.",
    image: "/images/itsdatabase.png",
    tags: ["Database", "SQL", "Certified"],
    theme: "blue",
  },
  {
    title: "TCON 2023",
    description: "The Ultimate Tech Event in the North - Technology conference and networking.",
    image: "/images/itecon2024.png",
    tags: ["Tech Event", "Networking", "2023"],
    theme: "purple",
  },
  {
    title: "SPUP CyberSummit 2023",
    description: "Cybersecurity summit focused on digital security and protection strategies.",
    image: "/images/cybersummit2023.png",
    tags: ["Cybersecurity", "Security", "2023"],
    theme: "red",
  },
  {
    title: "SPUP CyberSummit 2024",
    description: "Advanced cybersecurity training and threat analysis workshop.",
    image: "/images/ite2025.png",
    tags: ["Cybersecurity", "Training", "2024"],
    theme: "green",
  },
  {
    title: "SPUP CyberSummit 2025",
    description: "Latest cybersecurity trends and emerging threat landscape analysis.",
    image: "/images/capstoneshowcase.png",
    tags: ["Cybersecurity", "Trends", "2025"],
    theme: "orange",
  },
  {
    title: "SPUP CyberSecurity RoadShow 2025",
    description: "Interactive cybersecurity awareness and hands-on security demonstrations.",
    image: "/images/roadshow.png",
    tags: ["RoadShow", "Hands-on", "2025"],
    theme: "teal",
  },
];
