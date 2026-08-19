"use client";

import { motion } from "framer-motion";
import {
  BookOpenCheck,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LibraryBig,
  Trophy,
} from "lucide-react";

const journey = [
  {
    step: "01",
    title: "Apply",
    description:
      "Choose a programme, complete your application and receive your FUO applicant number.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Write Entrance CBT",
    description:
      "Take an interactive entrance examination where even your wrong answers teach you something.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Gain Admission",
    description:
      "Successful applicants receive an admission letter and unlock the student portal.",
    icon: GraduationCap,
  },
  {
    step: "04",
    title: "Learn",
    description:
      "Register courses, attend semesters, complete assignments and grow your Knowledge XP.",
    icon: LibraryBig,
  },
  {
    step: "05",
    title: "Write Exams",
    description:
      "Take semester CBTs, receive results and track your GPA, CGPA and academic standing.",
    icon: BookOpenCheck,
  },
  {
    step: "06",
    title: "Graduate",
    description:
      "Complete your programme, generate your certificate and join the FUO alumni community.",
    icon: Trophy,
  },
];

export function HowFuoWorks() {
  return (
    <section className="relative overflow-hidden border-y bg-muted/30 py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The student journey
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            From applicant to Chancellor of Knowledge.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            FUO simulates the complete university experience while rewarding
            learning at every stage.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[31px] top-0 hidden w-px bg-border lg:block" />

          <div className="space-y-5">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="relative grid gap-5 rounded-3xl border bg-background/80 p-6 shadow-sm backdrop-blur-xl lg:grid-cols-[64px_1fr_auto] lg:items-center"
                >
                  <div className="relative z-10 flex size-16 items-center justify-center rounded-2xl border bg-background shadow-sm">
                    <Icon className="size-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {item.step}
                      </span>

                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <span className="hidden rounded-full border px-4 py-2 text-xs font-semibold text-muted-foreground lg:block">
                    Stage {index + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
