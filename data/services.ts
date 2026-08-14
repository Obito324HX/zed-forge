import { Boxes, Database, Globe, LayoutDashboard, Rocket, Shield } from "lucide-react";

export const services = [
  {
    icon: Globe,
    name: "Business Websites",
    description:
      "Modern, responsive websites that make your business look credible, attract customers, and work perfectly on every device.",
    examples: ["Restaurants", "Clinics", "Gyms", "Schools", "Churches", "Lodges"],
    cta: "Get a Quote"
  },
  {
    icon: LayoutDashboard,
    name: "Web Applications",
    description:
      "Custom systems built to solve real business problems: booking platforms, client portals, management dashboards, and internal tools.",
    examples: ["Booking Systems", "CRM Tools", "Admin Dashboards", "Portals"],
    cta: "Get a Quote"
  },
  {
    icon: Boxes,
    name: "SaaS Platforms",
    description:
      "Scalable software products built for growth. Full product design, frontend development, and deployment-ready code.",
    examples: ["CRM Platforms", "Analytics Tools", "Client Portals", "Marketplaces"],
    cta: "Get a Quote"
  },
  {
    icon: Database,
    name: "Backend & APIs",
    description:
      "Reliable backend systems built to handle real data and real load: clean APIs, well-structured databases, and integrations that don't break under pressure.",
    examples: ["REST APIs", "Database Design", "Third-Party Integrations", "Data Migrations"],
    cta: "Get a Quote"
  },
  {
    icon: Shield,
    name: "Security & Access Control",
    description:
      "Authentication and permissions built in from the start, not patched in afterward. Every account, role, and data boundary handled properly.",
    examples: ["Authentication", "Role-Based Access", "Multi-Tenant Isolation", "Credential Management"],
    cta: "Get a Quote"
  },
  {
    icon: Rocket,
    name: "Deployment & Infrastructure",
    description:
      "A clean, repeatable path from code to a live, stable product, with proper environment configuration and monitoring from day one.",
    examples: ["Cloud Hosting", "CI/CD", "Environment Config", "Uptime Monitoring"],
    cta: "Get a Quote"
  }
];
