"use client";

import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Admissions", href: "/admissions" },
  { name: "Faculties", href: "/faculties" },
  { name: "Programmes", href: "/programmes" },
  { name: "News", href: "/news" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-foreground text-sm font-black text-background">
            FUO
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-bold leading-none">Federal University</p>
            <p className="mt-1 text-xs text-muted-foreground">of Olodo</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          </Button>

          <Link
            href="/login"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "hidden sm:inline-flex",
            )}
          >
            Student Login
          </Link>

          <Link
            href="/admissions"
            className={cn(
              buttonVariants(),
              "hidden rounded-full sm:inline-flex",
            )}
          >
            Apply Now
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="lg:hidden" />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Federal University of Olodo</SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="my-4 h-px bg-border" />

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    variant: "outline",
                  })}
                >
                  Student Login
                </Link>

                <Link
                  href="/admissions"
                  onClick={() => setOpen(false)}
                  className={buttonVariants()}
                >
                  Apply for Admission
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
