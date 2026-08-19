"use client";

import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  MessageSquareText,
  Navigation,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Explain concepts",
    description:
      "Get clear educational explanations when a topic refuses to enter your head.",
  },
  {
    icon: Navigation,
    title: "Navigate FUO",
    description:
      "Ask where to register courses, check results or find your next academic task.",
  },
  {
    icon: MessageSquareText,
    title: "Academic support",
    description:
      "Ask questions across your courses and receive useful guidance.",
  },
];

export function DeanAiPreview() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm shadow-sm">
            <Sparkles className="size-4" />
            Meet Dean AI
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Your academic assistant who actually wants you to understand.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Dean AI helps students understand difficult concepts, navigate
            university life and stay focused on learning.
          </p>

          <div className="mt-10 space-y-5">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div key={capability.title} className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-muted">
                    <Icon className="size-5" />
                  </div>

                  <div>
                    <h3 className="font-bold">{capability.title}</h3>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {capability.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20 blur-3xl" />

          <div className="overflow-hidden rounded-[2rem] border bg-background/80 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b px-6 py-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-2xl bg-foreground text-background">
                  <Bot className="size-5" />
                </div>

                <div>
                  <p className="font-bold">Dean AI</p>
                  <p className="text-xs text-muted-foreground">
                    Academic Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-600">
                <span className="size-2 rounded-full bg-emerald-500" />
                Online
              </div>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-foreground px-4 py-3 text-sm text-background">
                Dean, abeg explain recursion before my brain gives stack
                overflow.
              </div>

              <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-muted px-4 py-4 text-sm leading-6">
                <p>
                  Recursion happens when a function solves a problem by calling
                  itself with a smaller version of that problem.
                </p>

                <div className="mt-4 rounded-xl border bg-background p-4 font-mono text-xs">
                  factorial(5)
                  <br />
                  → 5 × factorial(4)
                  <br />
                  → 5 × 4 × factorial(3)
                  <br />
                  → ...
                  <br />→ 120
                </div>

                <p className="mt-4 text-muted-foreground">
                  The important part is having a base case so the function
                  eventually stops calling itself.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="size-3.5" />
                +20 Knowledge XP for understanding recursion
              </div>
            </div>

            <div className="border-t p-5">
              <div className="rounded-2xl border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
                Ask Dean AI anything about your studies...
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
