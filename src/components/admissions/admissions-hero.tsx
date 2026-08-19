"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AdmissionsHero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute left-1/2 top-12 -z-10 size-[750px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/15 to-cyan-500/20 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm shadow-sm backdrop-blur-xl"
          >
            <Sparkles className="size-4" />
            2026/2027 Admission Cycle
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="mt-7 text-balance text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
          >
            Your journey to gaining
            <span className="block bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              actual sense starts here.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            Apply to Federal University of Olodo, choose your programme,
            complete the entrance examination and begin your journey from
            applicant to graduate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/apply"
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "h-12 rounded-full px-7",
              )}
            >
              Start Application
              <ArrowRight className="ml-2 size-4" />
            </Link>

            <Link
              href="#requirements"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "h-12 rounded-full px-7",
              )}
            >
              View Requirements
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3"
        >
          <InfoCard icon={GraduationCap} value="12" label="Programme Types" />

          <InfoCard icon={BadgeCheck} value="8" label="Faculties" />

          <InfoCard icon={Sparkles} value="100%" label="Sense Potential" />
        </motion.div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-3xl border bg-background/70 p-6 text-left shadow-sm backdrop-blur-xl">
      <div className="flex size-11 items-center justify-center rounded-2xl bg-muted">
        <Icon className="size-5" />
      </div>

      <p className="mt-6 text-3xl font-black">{value}</p>

      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
