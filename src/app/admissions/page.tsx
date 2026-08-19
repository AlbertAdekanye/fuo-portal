import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AdmissionProcess } from "@/components/admissions/admission-process";
import { AdmissionsHero } from "@/components/admissions/admissions-hero";
import { ApplyCta } from "@/components/admissions/apply-cta";
import { ProgrammesPreview } from "@/components/admissions/programmes-preview";
import { Requirements } from "@/components/admissions/requirements";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Apply to Federal University of Olodo and begin your journey from applicant to graduate.",
};

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />

      <main>
        <AdmissionsHero />

        <Requirements />

        <AdmissionProcess />

        <ProgrammesPreview />

        <ApplyCta />
      </main>

      <Footer />
    </>
  );
}
