import { Boxes, Database, Globe, LayoutDashboard, Rocket, Shield } from "lucide-react";

export const services = [
  {
    icon: Globe,
    name: "Business Websites",
    description:
      "High-performance digital storefronts engineered for conversion, optimal Core Web Vitals, and zero layout shift, not just visual polish.",
    examples: ["Restaurants", "Clinics", "Gyms", "Schools", "Churches", "Lodges"],
    cta: "Discuss This Build"
  },
  {
    icon: LayoutDashboard,
    name: "Web Applications",
    description:
      "Bespoke systems architected around your actual operating logic: booking platforms, client portals, management dashboards, and internal tools built to hold up under real use.",
    examples: ["Booking Systems", "CRM Tools", "Admin Dashboards", "Portals"],
    cta: "Discuss This Build"
  },
  {
    icon: Boxes,
    name: "SaaS Platforms",
    description:
      "Scalable software platforms engineered for growth, from product architecture and interface design to production-ready, deployment-hardened code.",
    examples: ["CRM Platforms", "Analytics Tools", "Client Portals", "Marketplaces"],
    cta: "Discuss This Build"
  },
  {
    icon: Database,
    name: "Backend & APIs",
    description:
      "Backend infrastructure engineered to handle real data and real load: precise APIs, rigorously structured databases, and integrations built to hold under pressure.",
    examples: ["REST APIs", "Database Design", "Third-Party Integrations", "Data Migrations"],
    cta: "Discuss This Build"
  },
  {
    icon: Shield,
    name: "Security & Access Control",
    description:
      "Institutional-grade authentication and access control, architected in from the first commit, not patched in afterward. Every account, role, and data boundary enforced at the system level.",
    examples: ["Authentication", "Role-Based Access", "Multi-Tenant Isolation", "Credential Management"],
    cta: "Discuss This Build"
  },
  {
    icon: Rocket,
    name: "Deployment & Infrastructure",
    description:
      "A rigorous, repeatable path from code to a live, edge-deployed product, with proper environment configuration and monitoring engineered in from day one.",
    examples: ["Cloud Hosting", "CI/CD", "Environment Config", "Uptime Monitoring"],
    cta: "Discuss This Build"
  }
];
