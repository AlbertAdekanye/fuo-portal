export const siteConfig = {
  name: "Federal University of Olodo",
  shortName: "FUO",
  description:
    "A modern university simulation where curiosity, learning and humour meet.",
  motto: "Come as an Olodo. Graduate with Sense.",
  mission: "To transform confidence into competence through learning.",
  established: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    email: "admissions@fuo.edu.ng",
    phone: "+234 800 FUO SENSE",
    location: "Olodo Knowledge District, Nigeria",
  },
} as const;
