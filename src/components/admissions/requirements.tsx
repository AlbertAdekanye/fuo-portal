"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  FileImage,
  GraduationCap,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";

const requirements = [
  {
    icon: UserRound,
    title: "Personal Information",
    description:
      "Provide your full name, date of birth, gender, state and local government.",
  },
  {
    icon: Mail,
    title: "Valid Email Address",
    description:
      "Your email will be used for verification and important admission updates.",
  },
  {
    icon: Phone,
    title: "Phone Number",
    description:
      "Provide an active Nigerian phone number that can be used to contact you.",
  },
  {
    icon: FileImage,
    title: "Passport Photograph",
    description:
      "Upload a clear recent passport photograph for your applicant profile.",
  },
  {
    icon: GraduationCap,
    title: "Programme Selection",
    description:
      "Choose the programme, faculty and department you want to apply to.",
  },
  {
    icon: CheckCircle2,
    title: "Entrance Examination",
    description:
      "Complete the FUO entrance CBT after your application has been submitted.",
  },
];

export function Requirements() {
  return (
    <section id="requirements" className="border-y bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Before you apply
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            What you need.
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            The application process is straightforward. Prepare these details
            before starting your application.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {requirements.map((requirement, index) => {
            const Icon = requirement.icon;

            return (
              <motion.div
                key={requirement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="rounded-3xl border bg-background p-6 shadow-sm"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl bg-muted">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-6 text-lg font-bold">{requirement.title}</h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {requirement.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
