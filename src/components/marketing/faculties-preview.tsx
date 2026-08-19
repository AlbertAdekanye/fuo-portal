"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Atom,
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
  HeartPulse,
  Landmark,
  Scale,
  Users,
} from "lucide-react";

const faculties = [
  {
    name: "Faculty of Science",
    description:
      "Explore the laws of nature, computation, mathematics and scientific discovery.",
    icon: Atom,
    departments: 7,
  },
  {
    name: "Faculty of Engineering",
    description:
      "Design systems, machines and technologies built to solve real problems.",
    icon: Cpu,
    departments: 6,
  },
  {
    name: "Faculty of Arts",
    description:
      "Study language, culture, history, philosophy and creative expression.",
    icon: Landmark,
    departments: 5,
  },
  {
    name: "Faculty of Education",
    description:
      "Prepare to teach, lead classrooms and shape the next generation.",
    icon: GraduationCap,
    departments: 5,
  },
  {
    name: "Faculty of Law",
    description:
      "Understand justice, institutions, rights and the systems that shape society.",
    icon: Scale,
    departments: 4,
  },
  {
    name: "Faculty of Social Sciences",
    description:
      "Study people, societies, economies and the forces that influence behaviour.",
    icon: Users,
    departments: 5,
  },
  {
    name: "Faculty of Management Sciences",
    description:
      "Develop skills in business, finance, administration and entrepreneurship.",
    icon: BriefcaseBusiness,
    departments: 5,
  },
  {
    name: "Faculty of Health Sciences",
    description:
      "Learn the science and practice behind healthier people and communities.",
    icon: HeartPulse,
    departments: 5,
  },
];

export function FacultiesPreview() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Academic excellence
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Find where your curiosity belongs.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
              FUO combines serious learning with an experience designed to keep
              students curious, engaged and constantly improving.
            </p>
          </div>

          <Link
            href="/faculties"
            className="group inline-flex items-center gap-2 text-sm font-semibold"
          >
            Explore all faculties
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {faculties.map((faculty, index) => {
            const Icon = faculty.icon;

            return (
              <motion.div
                key={faculty.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-6 shadow-sm backdrop-blur-xl"
              >
                <div className="absolute -right-16 -top-16 size-40 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />

                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-2xl border bg-background shadow-sm">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{faculty.name}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {faculty.description}
                  </p>

                  <div className="mt-8 flex items-center justify-between border-t pt-5">
                    <span className="text-sm text-muted-foreground">
                      {faculty.departments} departments
                    </span>

                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
