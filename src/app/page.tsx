import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AdmissionsCta } from "@/components/marketing/admissions-cta";
import { DeanAiPreview } from "@/components/marketing/dean-ai-preview";
import { FacultiesPreview } from "@/components/marketing/faculties-preview";
import { GamificationPreview } from "@/components/marketing/gamification-preview";
import { Hero } from "@/components/marketing/hero";
import { HowFuoWorks } from "@/components/marketing/how-fuo-works";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FacultiesPreview />

        <HowFuoWorks />

        <DeanAiPreview />

        <GamificationPreview />

        <AdmissionsCta />
      </main>

      <Footer />
    </>
  );
}
