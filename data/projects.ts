export type Project = {
  slug:
    | "bella-vista"
    | "ironforge"
    | "carepoint"
    | "clientflow"
    | "edupulse"
    | "solstice-estates"
    | "nkwazi-farms"
    | "trustline-lending"
    | "verve-studio";
  category: string;
  filter: string[];
  name: string;
  description: string;
  features: string[];
  stack: string[];
  image: string;
  accent: string;
  liveUrl: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    slug: "edupulse",
    category: "In Development · Education",
    filter: ["SaaS", "Dashboard", "Business Solution"],
    name: "EduPulse",
    description:
      "A production school-management platform architected for real institutional load: multi-tenant data isolation, role-based access control, and real-time behavioral alerting engineered from the schema up.",
    features: ["Multi-Tenant Architecture", "JWT Authentication", "Command Palette Search", "Real-Time Alerts"],
    stack: ["React", "Flask", "PostgreSQL", "JWT Authentication"],
    image: "/case-studies/edupulse/cover.jpg",
    accent: "#6D5FD3",
    liveUrl: "https://edupulse-one.vercel.app/",
    badge: "Live Product"
  },
  {
    slug: "bella-vista",
    category: "Concept Build · Restaurant",
    filter: ["Websites", "Business Solution"],
    name: "Bella Vista",
    description:
      "A conversion-engineered restaurant platform: a structured menu system, table-reservation flow, and a visual brand narrative built to turn visitors into diners.",
    features: ["Menu System", "Reservation System", "Mobile Responsive", "Dark Mode"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    accent: "#C9A84C",
    liveUrl: "https://bella-vista-restaurant-pearl.vercel.app/"
  },
  {
    slug: "ironforge",
    category: "Concept Build · Fitness & Wellness",
    filter: ["Websites", "Business Solution"],
    name: "IronForge Fitness",
    description:
      "A conversion-engineered fitness platform: tiered membership architecture, trainer profiles, class scheduling, and a goal-based quiz that routes visitors into the right plan.",
    features: ["Membership Plans", "Class Schedule", "Trainer Profiles", "Goal Quiz"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    accent: "#FF4D00",
    liveUrl: "https://ironforge-fitness-gamma.vercel.app/"
  },
  {
    slug: "carepoint",
    category: "Concept Build · Healthcare",
    filter: ["Websites", "Business Solution"],
    name: "CarePoint Medical Center",
    description:
      "A trust-engineered healthcare platform for a multi-specialty clinic: structured appointment booking, a guided symptom-checker flow, doctor directory, and a patient-portal interface.",
    features: ["Appointment Booking", "Doctor Directory", "Symptom Checker", "Accessibility"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    accent: "#1B5E8C",
    liveUrl: "https://carepoint-medical.vercel.app/"
  },
  {
    slug: "clientflow",
    category: "Concept Build · SaaS / Web Application",
    filter: ["SaaS", "Dashboard", "Business Solution"],
    name: "ClientFlow CRM",
    description:
      "An enterprise-grade SaaS CRM engineered on Next.js and TypeScript: a real-time Kanban pipeline, analytics dashboard, and command-palette-driven navigation, built for zero-compromise performance.",
    features: ["Sales Pipeline", "Analytics", "AI Insights", "Command Palette"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    accent: "#2563EB",
    liveUrl: "https://clientflow-crm-five.vercel.app/",
    badge: "Most Complex"
  },
  {
    slug: "solstice-estates",
    category: "Concept Build · Real Estate",
    filter: ["Websites", "Business Solution"],
    name: "Solstice Estates",
    description:
      "An ultra-luxury real estate platform architected with multi-currency state management, neighborhood-comparison tooling, and a confidential off-market enquiry flow for discerning buyers.",
    features: ["Multi-Currency Toggle", "Neighborhood Comparison", "Confidential Listings", "Enquiry Flow"],
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/case-studies/solstice-estates/cover.jpg",
    accent: "#B08D57",
    liveUrl: "https://solstice-estates.vercel.app/"
  },
  {
    slug: "nkwazi-farms",
    category: "Concept Build · Agriculture",
    filter: ["Websites", "Business Solution"],
    name: "Nkwazi Farms",
    description:
      "An agriculture brand platform architected around one operating narrative: crops and livestock presented as a single integrated system, backed by a certification bar and a real production-scale proof layer.",
    features: ["Process Timeline", "Certifications Bar", "Proof-of-Scale Stats", "Photo Gallery"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    accent: "#48542F",
    liveUrl: "https://nkwazi-farms.vercel.app/"
  },
  {
    slug: "trustline-lending",
    category: "Concept Build · Fintech",
    filter: ["Websites", "Business Solution"],
    name: "Trustline Finance",
    description:
      "A dark, neo-fintech lending platform engineered around a live, slider-driven loan calculator and a multi-step application flow, replacing the static rate tables typical of the category.",
    features: ["Live Loan Calculator", "Multi-Step Apply Flow", "Currency Switcher", "Dark/Light Theme"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1707761918029-1295034aa31e?auto=format&fit=crop&w=1200&q=80",
    accent: "#35D6AE",
    liveUrl: "https://trustline-lending.vercel.app/"
  },
  {
    slug: "verve-studio",
    category: "Concept Build · Beauty & Grooming",
    filter: ["Websites", "Business Solution"],
    name: "Verve",
    description:
      "An editorial-grade studio platform for a unisex barber-and-salon brand, built on a hover-swap service panel with a touch-first fallback and accessibility wired through the interface, not bolted on after.",
    features: ["Hover-Swap Service Panel", "Accessible FAQ Accordion", "Keyboard-Navigable Gallery", "Graceful Degradation"],
    stack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1770253980732-dfed1cfdfa43?auto=format&fit=crop&w=1200&q=80",
    accent: "#B3202C",
    liveUrl: "https://verve-studio-silk.vercel.app/"
  }
];

export const filters = ["All", "Websites", "SaaS", "Dashboard", "Business Solution"];
