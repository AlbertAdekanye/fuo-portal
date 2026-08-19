"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Brain,
  FileText,
  GraduationCap,
  KeyRound,
  UserRoundCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Complete Application",
    description:
      "Submit your personal information and choose your preferred programme.",
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "Receive Applicant Number",
    description:
      "FUO automatically generates a unique applicant number for your application.",
  },
  {
    number: "03",
    icon: Brain,
    title: "Write Entrance CBT",
    description:
      "Take an interactive examination covering reasoning and general knowledge.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Get Your Result",
    description:
      "Your entrance examination is automatically graded after submission.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Admission Decision",
    description:
      "Successful applicants receive admission status and an admission letter.",
  },
  {
    number: "06",
    icon: KeyRound,
    title: "Enter Student Portal",
    description:
      "Accept admission and unlock the complete FUO student experience.",
  },
];

export function AdmissionProcess() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Admission process
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Six steps between you and university life.
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            No mysterious queues. No missing files. No office-to-office
            pilgrimage.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06,
                }}
                className="group rounded-3xl border bg-card/60 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
                    <Icon className="size-5" />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
