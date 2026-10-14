import type { Metadata } from "next";
import { CaseStudyLayout } from "@/components/work/CaseStudyLayout";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Verve — Case Study | zed-forge",
  description: "An editorial-grade studio platform for a unisex barber-and-salon brand, built around one narrative: no more picking a side of the door."
};

export default function Page() {
  return <CaseStudyLayout study={caseStudies["verve-studio"]} />;
}
