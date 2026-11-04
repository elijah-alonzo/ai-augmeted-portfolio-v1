export const SITE = {
  name: "Elijah Alonzo",
  fullName: "Elijah Taguinod Alonzo",
  tagline: "IT Student | Certified Database Specialist | Aspiring Cloud Specialist",
  badge: "Aspiring Cloud Specialist",
  email: "elijahalonzo.me@gmail.com",
  assistantName: "Elijah",
  images: {
    logo: "/elijah-alonzo.png",
    avatar: "/profile.png",
  },
} as const;

export const CONTACT_FORM = {
  endpoint: "https://api.web3forms.com/submit",
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
  resetDelayMs: 5000,
} as const;
