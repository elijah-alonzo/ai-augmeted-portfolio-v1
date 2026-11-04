import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { SITE } from "@/config/site";

type IconComponent = LucideIcon | typeof FacebookIcon;

export interface SocialLink {
  label: string;
  href: string;
  /** Text shown on the contact card. */
  display: string;
  /** Tooltip shown in the hero icon row. */
  title?: string;
  icon: IconComponent;
  external: boolean;
}

export const SOCIALS = {
  github: {
    label: "GitHub",
    href: "https://github.com/elijah-alonzo",
    display: "github.com/elijah-alonzo",
    icon: Github,
    external: true,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/elijah-alonzo",
    display: "linkedin.com/in/elijah-alonzo",
    icon: Linkedin,
    external: true,
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/share/1B6SvsQLH2/?mibextid=wwXIfr",
    display: "Elijah Alonzo",
    title: "Facebook: Elijah Alonzo",
    icon: FacebookIcon,
    external: true,
  },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/eljhalnz/",
    display: "@eljhalnz",
    title: "Instagram: @eljhalnz",
    icon: InstagramIcon,
    external: true,
  },
  email: {
    label: "Email",
    href: `mailto:${SITE.email}`,
    display: SITE.email,
    icon: Mail,
    external: false,
  },
} as const satisfies Record<string, SocialLink>;

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
