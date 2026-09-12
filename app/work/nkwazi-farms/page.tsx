import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Nkwazi Farms — Case Study | zed-forge",
  description: "An agriculture brand platform architected around one operating narrative: crops and livestock as a single integrated system."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies["nkwazi-farms"]} />;
}
