"use client";

import { motion } from "framer-motion";
import { Award, Flame, Medal, Star, Trophy, Zap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Knowledge XP",
    description: "Earn XP whenever you learn, improve or complete challenges.",
  },
  {
    icon: Flame,
    title: "Learning Streaks",
    description: "Build consistency by returning to learn every day.",
  },
  {
    icon: Award,
    title: "Achievements",
    description: "Unlock badges for milestones, discoveries and secret tasks.",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    description: "Compete with students in your department and faculty.",
  },
];

export function GamificationPreview() {
  return (
    <section className="border-y bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Learning that feels rewarding
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Get rewarded for actually gaining sense.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            Progress through FUO by learning consistently, completing academic
            challenges and helping your faculty climb the leaderboard.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border bg-background p-7 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Rank</p>

                <h3 className="mt-2 text-2xl font-black">Department Scholar</h3>
              </div>

              <div className="flex size-14 items-center justify-center rounded-2xl bg-muted">
                <Medal className="size-6" />
              </div>
            </div>

            <div className="mt-10">
              <div className="flex justify-between text-sm">
                <span>6,840 XP</span>
                <span className="text-muted-foreground">10,000 XP</span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "68%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-foreground"
                />
              </div>

              <p className="mt-3 text-sm text-muted-foreground">
                3,160 XP until Faculty Champion.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <Metric value="12" label="Badges" />
              <Metric value="21" label="Day streak" />
              <Metric value="#8" label="Faculty rank" />
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="rounded-3xl border bg-background p-6 shadow-sm"
                >
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-muted">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold">{feature.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Star className="size-4" />
          Ultimate rank: Chancellor of Knowledge
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-muted/70 p-4 text-center">
      <p className="font-black">{value}</p>

      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
