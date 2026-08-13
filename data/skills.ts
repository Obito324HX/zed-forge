export interface StackGroup {
  title: string;
  items: string[];
  featured?: boolean;
  description?: string;
}

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend & Data",
    items: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "JWT Authentication", "REST APIs"],
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Render", "Figma", "VS Code"],
  },
  {
    title: "AI-Assisted Development",
    items: ["ChatGPT", "Claude", "Codex"],
    featured: true,
    description:
      "We use industry-leading AI tools to plan faster, catch errors earlier, and spend more time on the details that matter — so you get a better product in less time.",
  },
];

export const learning = ["Supabase", "React Native", "Node.js"];
