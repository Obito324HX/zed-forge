import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Trustline Finance — Case Study | zed-forge",
  description: "A dark, neo-fintech lending platform engineered around a live, state-driven loan calculator, not a static rates table."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies["trustline-lending"]} />;
}
