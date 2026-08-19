import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { ApplicationForm } from "@/components/admissions/application-form";

export const metadata: Metadata = {
  title: "Apply to FUO",
  description: "Start your application to Federal University of Olodo.",
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-muted/20 pt-16">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              FUO Admissions
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Application Form
            </h1>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Complete all sections carefully. Your information will be used
              throughout the FUO admission process.
            </p>
          </div>

          <ApplicationForm />
        </div>
      </main>
    </>
  );
}
