"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute left-1/2 top-20 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl" />

      <div className="absolute right-10 top-40 -z-10 size-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-2">
              <Sparkles className="mr-2 size-3.5" />
              Admissions 2026 are now open
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-balance text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Come as an Olodo.
            <span className="block bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Graduate with Sense.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl"
          >
            Welcome to Federal University of Olodo, where confidence meets
            competence and every wrong answer is another opportunity to learn
            something useful.
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
              href="/admissions"
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
                "h-12 rounded-full px-7",
              )}
            >
              Apply for Admission
              <ArrowRight className="ml-2 size-4" />
            </Link>

            <Link
              href="/about"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
                "h-12 rounded-full px-7",
              )}
            >
              Explore FUO
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
          className="mx-auto mt-20 grid max-w-5xl gap-4 md:grid-cols-3"
        >
          <StatCard icon={GraduationCap} value="2026" label="Established" />

          <StatCard icon={BookOpen} value="8" label="Faculties" />

          <StatCard icon={Sparkles} value="∞" label="Sense Available" />
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className="rounded-3xl border border-border/50 bg-background/60 p-6 text-left shadow-sm backdrop-blur-xl"
    >
      <div className="mb-6 flex size-11 items-center justify-center rounded-2xl bg-muted">
        <Icon className="size-5" />
      </div>

      <p className="text-3xl font-black tracking-tight">{value}</p>

      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}
