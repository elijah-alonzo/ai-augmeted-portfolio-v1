export interface ExperienceEntry {
  role: string;
  context: string;
}

export interface ExperienceGroup {
  title: string;
  entries: ExperienceEntry[];
}

export const HARD_SKILLS_EXPERIENCE: ExperienceGroup = {
  title: "Hard Skills Experience",
  entries: [
    {
      role: "Project Lead and Developer",
      context: "Paulinian Student Government E-Portfolio and Ranking System",
    },
    {
      role: "IT Department Leader and Developer",
      context: "Collaborative Online International Learning (COIL) Program",
    },
    { role: "3rd Place", context: "2023 SPUP–PATHWAY Hackathon" },
  ],
};

export const SOFT_SKILLS_EXPERIENCE: ExperienceGroup = {
  title: "Soft Skills Experience",
  entries: [
    { role: "Senator", context: "Paulinian Student Government (2022–2023)" },
    { role: "Assistant P.R.O.", context: "Paulinian Student Government (2023–2024)" },
    { role: "Secretary", context: "Paulinian Student Government (2023–2024)" },
    {
      role: "3rd Year Representative",
      context: "Junior Philippine Computer Society (2023–2024)",
    },
    {
      role: "Member",
      context: "Multimedia Committee, Rotaract Club of Tuguegarao (2023–2024)",
    },
  ],
};
