import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "EduPulse — Case Study | zed-forge",
  description: "A real, actively developed school management platform with multi-tenant architecture, role-based security, and live institutional data."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies.edupulse} />;
}
