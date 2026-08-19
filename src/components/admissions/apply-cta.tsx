"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function ApplyCta() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-foreground px-6 py-16 text-background sm:px-10 lg:px-16 lg:py-20"
      >
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-violet-500/25 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 size-96 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-4 py-2 text-sm">
            <Sparkles className="size-4" />
            Applications are open
          </div>

          <div className="mt-7 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Think you have what it takes?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-background/70">
                There is only one scientifically questionable way to find out.
                Apply to FUO and begin your journey.
              </p>
            </div>

            <Link
              href="/apply"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-background px-7 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02]"
            >
              Start Application
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}