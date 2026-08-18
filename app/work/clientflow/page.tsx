import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "ClientFlow CRM — Case Study | zed-forge",
  description: "An enterprise-grade SaaS CRM engineered on Next.js and TypeScript for zero-compromise performance."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies.clientflow} />;
}
