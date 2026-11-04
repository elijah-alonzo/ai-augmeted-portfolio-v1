/**
 * Tailwind generates classes from literal strings only, so every color theme
 * is spelled out in full here instead of being built from template strings.
 */
export interface Theme {
  /** Card background gradient and border. */
  surface: string;
  /** Border color when a card is hovered. */
  hoverBorder: string;
  /** Gradient behind an icon badge. */
  iconBadge: string;
  /** Gradient overlaid on card images. */
  imageOverlay: string;
  /** Tag / chip colors. */
  chip: string;
  /** Muted text inside a chip (e.g. a proficiency level). */
  chipMuted: string;
  /** Link color. */
  link: string;
}

export const THEMES = {
  blue: {
    surface: "bg-gradient-to-br from-blue-50 to-white border border-blue-200",
    hoverBorder: "hover:border-blue-400",
    iconBadge: "bg-gradient-to-r from-blue-500 to-blue-700",
    imageOverlay: "from-blue-900/60",
    chip: "bg-blue-100 text-blue-700",
    chipMuted: "text-blue-600",
    link: "text-blue-600 hover:text-blue-700",
  },
  green: {
    surface: "bg-gradient-to-br from-green-50 to-white border border-green-200",
    hoverBorder: "hover:border-green-400",
    iconBadge: "bg-gradient-to-r from-green-500 to-green-700",
    imageOverlay: "from-green-900/60",
    chip: "bg-green-100 text-green-700",
    chipMuted: "text-green-600",
    link: "text-green-600 hover:text-green-700",
  },
  purple: {
    surface: "bg-gradient-to-br from-purple-50 to-white border border-purple-200",
    hoverBorder: "hover:border-purple-400",
    iconBadge: "bg-gradient-to-r from-purple-500 to-purple-700",
    imageOverlay: "from-purple-900/60",
    chip: "bg-purple-100 text-purple-700",
    chipMuted: "text-purple-600",
    link: "text-purple-600 hover:text-purple-700",
  },
  orange: {
    surface: "bg-gradient-to-br from-orange-50 to-white border border-orange-200",
    hoverBorder: "hover:border-orange-400",
    iconBadge: "bg-gradient-to-r from-orange-500 to-orange-700",
    imageOverlay: "from-orange-900/60",
    chip: "bg-orange-100 text-orange-700",
    chipMuted: "text-orange-600",
    link: "text-orange-600 hover:text-orange-700",
  },
  pink: {
    surface: "bg-gradient-to-br from-pink-50 to-white border border-pink-200",
    hoverBorder: "hover:border-pink-400",
    iconBadge: "bg-gradient-to-r from-pink-500 to-pink-700",
    imageOverlay: "from-pink-900/60",
    chip: "bg-pink-100 text-pink-700",
    chipMuted: "text-pink-600",
    link: "text-pink-600 hover:text-pink-700",
  },
  teal: {
    surface: "bg-gradient-to-br from-teal-50 to-white border border-teal-200",
    hoverBorder: "hover:border-teal-400",
    iconBadge: "bg-gradient-to-r from-teal-500 to-teal-700",
    imageOverlay: "from-teal-900/60",
    chip: "bg-teal-100 text-teal-700",
    chipMuted: "text-teal-600",
    link: "text-teal-600 hover:text-teal-700",
  },
  red: {
    surface: "bg-gradient-to-br from-red-50 to-white border border-red-200",
    hoverBorder: "hover:border-red-400",
    iconBadge: "bg-gradient-to-r from-red-500 to-red-700",
    imageOverlay: "from-red-900/60",
    chip: "bg-red-100 text-red-700",
    chipMuted: "text-red-600",
    link: "text-red-600 hover:text-red-700",
  },
  cyan: {
    surface: "bg-gradient-to-br from-cyan-50 to-white border border-cyan-200",
    hoverBorder: "hover:border-cyan-400",
    iconBadge: "bg-gradient-to-r from-cyan-500 to-cyan-700",
    imageOverlay: "from-cyan-900/60",
    chip: "bg-cyan-100 text-cyan-700",
    chipMuted: "text-cyan-600",
    link: "text-cyan-600 hover:text-cyan-700",
  },
  emerald: {
    surface: "bg-gradient-to-br from-emerald-50 to-white border border-emerald-200",
    hoverBorder: "hover:border-emerald-400",
    iconBadge: "bg-gradient-to-r from-emerald-500 to-emerald-700",
    imageOverlay: "from-emerald-900/60",
    chip: "bg-emerald-100 text-emerald-700",
    chipMuted: "text-emerald-600",
    link: "text-emerald-600 hover:text-emerald-700",
  },
} as const satisfies Record<string, Theme>;

export type ThemeName = keyof typeof THEMES;
