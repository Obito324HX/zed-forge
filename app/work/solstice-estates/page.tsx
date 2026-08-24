import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Solstice Estates — Case Study | zed-forge",
  description: "An ultra-luxury real estate platform with multi-currency state management, neighborhood-comparison tooling, and a confidential enquiry flow."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies["solstice-estates"]} />;
}
