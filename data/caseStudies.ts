import { projects } from "./projects";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  image: string;
  stack: string[];
  meta: { label: string; value: string }[];
  challenge: string[];
  approach: string[];
  features: { name: string; description: string }[];
  demonstrates: string;
  mockups: string[];
  next: string;
  liveUrl: string;
};

const bySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

export const caseStudies: Record<string, CaseStudy> = {
  "bella-vista": {
    slug: "bella-vista",
    title: "Bella Vista Restaurant",
    category: "Restaurant",
    tagline: "A conversion-engineered restaurant platform, architected to turn visitors into diners.",
    image: bySlug["bella-vista"].image,
    stack: bySlug["bella-vista"].stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Most independently owned restaurants have outdated or no web presence at all. This demo shows what a modern restaurant site looks like: one that builds trust, drives reservations, and reflects the quality of the food.",
      "The target client is a restaurant, cafe, lodge, or food business that needs customers to understand the atmosphere before they walk through the door."
    ],
    approach: [
      "Built as a Modern African Fusion brand, not a generic template.",
      "Includes address details and WhatsApp-based booking, easy to localize to any market.",
      "Added menu filtering, reservation form, Instagram grid, press bar, and persistent dark mode."
    ],
    features: [
      ["Menu Filter", "Guests can browse categories quickly."],
      ["Reservation Form", "Clear path from interest to table booking."],
      ["Instagram Grid", "Signals an active, well-run business at a glance."],
      ["Dark Mode", "Premium dining mood across all pages."],
      ["WhatsApp CTA", "Matches how customers actually prefer to book."],
      ["SVG Logo", "Scalable brand mark with zero performance cost."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that hospitality brands don't have to choose between atmosphere and performance. Precision execution, down to the reservation flow.",
    mockups: [
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80"
    ],
    next: "ironforge",
    liveUrl: bySlug["bella-vista"].liveUrl
  },
  ironforge: {
    slug: "ironforge",
    title: "IronForge Fitness",
    category: "Fitness & Wellness",
    tagline: "A conversion-engineered fitness platform, architected to turn visitors into members.",
    image: bySlug.ironforge.image,
    stack: bySlug.ironforge.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Gyms and fitness centers need websites that match the energy of their brand and convert visitors into members. Most gym sites are either outdated or non-existent.",
      "This concept gives a fitness business a digital presence that feels as strong as its facility."
    ],
    approach: [
      "Dark, high-energy design with electric orange accents.",
      "Goal quiz funnels visitors to the right membership plan.",
      "Countdown trial timer, transformation slider, and live-looking class capacity create momentum."
    ],
    features: [
      ["Goal Quiz", "Routes prospects to the right plan."],
      ["Countdown Timer", "Creates urgency around limited-time offers."],
      ["Before/After Slider", "Makes transformation outcomes tangible."],
      ["Class Schedule", "Gives visitors a clear sense of how the gym runs day to day."],
      ["Membership Toggle", "Compares plans without friction."],
      ["BMI Calculator", "Gives visitors a reason to interact before they commit."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that a fitness brand's digital presence can carry the same intensity as the facility itself, engineered for conversion at every step.",
    mockups: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80"
    ],
    next: "carepoint",
    liveUrl: bySlug.ironforge.liveUrl
  },
  carepoint: {
    slug: "carepoint",
    title: "CarePoint Medical Center",
    category: "Healthcare",
    tagline: "A trust-engineered healthcare platform, architected for a multi-specialty clinic.",
    image: bySlug.carepoint.image,
    stack: bySlug.carepoint.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "Business Website" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Healthcare websites need to build immediate trust. Patients are anxious and need to feel they are in the right hands before they even book an appointment.",
      "This concept shows how private clinics and specialist practices can present care, credentials, and booking paths clearly."
    ],
    approach: [
      "Trust-first design with registration, insurance, and partner proof points.",
      "Accessibility controls target elderly patients and families.",
      "Emergency bar, symptom checker disclaimer, and local language cues show domain awareness."
    ],
    features: [
      ["Accessibility Bar", "Improves readability and confidence."],
      ["Emergency Bar", "Keeps urgent contact visible."],
      ["Symptom Checker", "Demonstrates guided triage with disclaimers."],
      ["Doctor Profiles", "Builds personal trust."],
      ["Insurance Ticker", "Answers payment questions early."],
      ["Appointment Booking", "Turns trust into action."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof that healthcare interfaces can be both clinically credible and genuinely well-engineered, built to earn trust before the first appointment.",
    mockups: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
    ],
    next: "clientflow",
    liveUrl: bySlug.carepoint.liveUrl
  },
  clientflow: {
    slug: "clientflow",
    title: "ClientFlow CRM",
    category: "SaaS / Web Application",
    tagline: "An enterprise-grade SaaS CRM, engineered on Next.js and TypeScript for zero-compromise performance.",
    image: bySlug.clientflow.image,
    stack: bySlug.clientflow.stack,
    meta: [
      { label: "Timeline", value: "2 weeks" },
      { label: "Type", value: "SaaS Application" },
      { label: "Status", value: "Complete — Live Demo" }
    ],
    challenge: [
      "Agencies and startups pitching SaaS products need to demonstrate what their platform looks like before it is fully built.",
      "This demo shows that zed-forge can design and build production-quality web applications, not just websites."
    ],
    approach: [
      "Full Next.js App Router application with TypeScript throughout.",
      "Kanban pipeline, command palette, analytics, AI assistant mockup, and onboarding patterns signal serious product engineering.",
      "Loading, empty, and keyboard-friendly states make the product feel complete."
    ],
    features: [
      ["Kanban Pipeline", "Visual sales flow with clear stages."],
      ["Command Palette", "Fast navigation for power users."],
      ["AI Assistant", "Shows an intelligent support layer."],
      ["Analytics Dashboard", "Turns activity into decisions."],
      ["Lead Management", "Core CRM workflow for teams."],
      ["Onboarding Tour", "Makes complex software approachable."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "Proof of full product engineering, not just marketing sites: real application architecture, state management, and interface systems built to production standards.",
    mockups: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
    ],
    next: "edupulse",
    liveUrl: bySlug.clientflow.liveUrl
  },
  edupulse: {
    slug: "edupulse",
    title: "EduPulse",
    category: "Education · SaaS Platform",
    tagline: "A real school management platform, not a mockup, in active development.",
    image: "/case-studies/edupulse/login.jpg",
    stack: bySlug.edupulse.stack,
    meta: [
      { label: "Timeline", value: "Ongoing" },
      { label: "Type", value: "SaaS Platform" },
      { label: "Status", value: "In Active Development — Live" }
    ],
    challenge: [
      "Schools and training institutions track attendance, grades, and student risk across spreadsheets and disconnected tools, with no single live view of who needs help.",
      "The platform needed to serve multiple institutions on one system without any institution ever seeing another's data, while staying fast enough for a lecturer to check on a phone between classes.",
    ],
    approach: [
      "Built as a genuine multi-tenant system: institutions register with a join code, and every account, query, and permission is scoped to enforce full tenant isolation.",
      "JWT-based authentication with role-based access across super-admin, admin, lecturer, and student roles.",
      "A command palette with real search across students, courses, and institutions, not a hardcoded demo list, plus a mobile-first bottom nav so the product actually works on the devices staff use day to day.",
    ],
    features: [
      ["Multi-Tenant Architecture", "Every institution's data is fully isolated, enforced at the query level."],
      ["JWT Authentication", "Role-based access across super-admin, admin, lecturer, and student accounts."],
      ["Institutional Pulse", "A live composite view of attendance, grades, and open alerts per institution."],
      ["Command Palette", "Real search across students, courses, and institutions, not a hardcoded demo."],
      ["Configurable Alerts", "Each institution sets its own thresholds for flagging students at risk."],
      ["Mobile-First Nav", "A real bottom nav built for staff checking data between classes, not a desktop afterthought."]
    ].map(([name, description]) => ({ name, description })),
    demonstrates:
      "This is live, evolving production software, not a static demo. It's the clearest proof of the institutional-grade, security-conscious engineering the rest of our work is built on.",
    mockups: [
      "/case-studies/edupulse/cover.jpg",
      "/case-studies/edupulse/command-palette.jpg"
    ],
    next: "bella-vista",
    liveUrl: bySlug.edupulse.liveUrl
  }
};
