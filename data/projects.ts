export type Project = {
  slug: "bella-vista" | "ironforge" | "carepoint" | "clientflow" | "edupulse" | "solstice-estates";
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
    image: "https://images.pexels.com/photos/4626268/pexels-photo-4626268.jpeg?auto=compress&cs=tinysrgb&w=1200",
    accent: "#B08D57",
    liveUrl: "https://solstice-estates.vercel.app/"
  }
];

export const filters = ["All", "Websites", "SaaS", "Dashboard", "Business Solution"];
