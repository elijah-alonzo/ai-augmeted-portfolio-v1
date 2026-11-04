import { SITE } from "@/config/site";

export type SocialId = "github" | "linkedin" | "facebook" | "instagram" | "email";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
  /** Text shown on the contact card. */
  display: string;
  /** Tooltip shown in the hero icon row. */
  title?: string;
  /** Whether the link leaves the site and should open in a new tab. */
  external: boolean;
}

export const SOCIALS = {
  github: {
    id: "github",
    label: "GitHub",
    href: "https://github.com/elijah-alonzo",
    display: "github.com/elijah-alonzo",
    external: true,
  },
  linkedin: {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/elijah-alonzo",
    display: "linkedin.com/in/elijah-alonzo",
    external: true,
  },
  facebook: {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1B6SvsQLH2/?mibextid=wwXIfr",
    display: "Elijah Alonzo",
    title: "Facebook: Elijah Alonzo",
    external: true,
  },
  instagram: {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/eljhalnz/",
    display: "@eljhalnz",
    title: "Instagram: @eljhalnz",
    external: true,
  },
  email: {
    id: "email",
    label: "Email",
    href: `mailto:${SITE.email}`,
    display: SITE.email,
    external: false,
  },
} as const satisfies Record<SocialId, SocialLink>;

export const HERO_SOCIALS: SocialLink[] = [
  SOCIALS.github,
  SOCIALS.linkedin,
  SOCIALS.facebook,
  SOCIALS.instagram,
  SOCIALS.email,
];

export const CONTACT_SOCIALS: SocialLink[] = [
  SOCIALS.email,
  SOCIALS.linkedin,
  SOCIALS.github,
  SOCIALS.facebook,
  SOCIALS.instagram,
];
