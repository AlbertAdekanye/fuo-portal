"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";

export function AdmissionsCta() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border bg-foreground px-6 py-16 text-background shadow-2xl sm:px-12 lg:px-16 lg:py-20"
      >
        <div className="absolute -left-40 -top-40 size-96 rounded-full bg-violet-500/20 blur-[120px]" />

        <div className="absolute -bottom-40 right-0 size-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-sm">
              <Sparkles className="size-4" />
              2026 admissions
            </div>

            <h2 className="mt-7 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Maybe you came for the joke.
              <span className="block text-background/70">
                Stay for the knowledge.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-background/70">
              Begin your FUO journey, write the entrance examination and find
              out how much sense you can actually acquire.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/admissions"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-background px-7 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              Apply Now
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/programmes"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-background/20 px-7 text-sm font-semibold transition-colors hover:bg-background/10"
            >
              <GraduationCap className="size-4" />
              View Programmes
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
