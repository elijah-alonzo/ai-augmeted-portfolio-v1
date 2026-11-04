import { Github, Linkedin, Mail } from "lucide-react";
import type { SocialId } from "@/data/socials";
import { FacebookIcon, InstagramIcon, type IconProps } from "./icons";

const ICONS = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
} as const satisfies Record<SocialId, React.ComponentType<IconProps>>;

export function SocialIcon({ id, ...props }: { id: SocialId } & IconProps) {
  const Icon = ICONS[id];
  return <Icon {...props} />;
}
