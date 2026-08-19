"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const programmes = [
  "Certificate",
  "Diploma",
  "ND",
  "HND",
  "B.Sc",
  "B.A",
  "B.Ed",
  "B.Tech",
  "M.Sc",
  "MBA",
  "M.Phil",
  "PhD",
];

export function ProgrammesPreview() {
  return (
    <section className="border-y bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Programmes
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Study at your level.
            </h2>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              FUO supports academic journeys from certificate programmes all the
              way to doctoral study.
            </p>
          </div>

          <Link
            href="/programmes"
            className="inline-flex items-center gap-2 text-sm font-semibold"
          >
            View all programmes
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {programmes.map((programme, index) => (
            <motion.div
              key={programme}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.035,
              }}
              className="rounded-2xl border bg-background p-5 shadow-sm"
            >
              <BookOpen className="size-5 text-muted-foreground" />

              <p className="mt-5 font-bold">{programme}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
