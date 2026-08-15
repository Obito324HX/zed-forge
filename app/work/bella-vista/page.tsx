import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Bella Vista Restaurant — Case Study | zed-forge",
  description: "A modern African fusion restaurant website built to convert visitors into diners."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies["bella-vista"]} />;
}
