import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Bella Vista Restaurant — Case Study | zed-forge",
  description: "A conversion-engineered restaurant platform, architected to turn visitors into diners."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies["bella-vista"]} />;
}
