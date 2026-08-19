import Link from "next/link";
import { GraduationCap, Mail } from "lucide-react";

const footerLinks = {
  University: [
    { label: "About FUO", href: "/about" },
    { label: "Faculties", href: "/faculties" },
    { label: "Departments", href: "/departments" },
    { label: "Programmes", href: "/programmes" },
  ],

  Admissions: [
    { label: "Apply", href: "/admissions" },
    { label: "Academic Calendar", href: "/academic-calendar" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],

  Campus: [
    { label: "News", href: "/news" },
    { label: "Events", href: "/events" },
    { label: "Library", href: "/library" },
    { label: "Student Portal", href: "/login" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-foreground text-background">
                <GraduationCap className="size-5" />
              </div>

              <div>
                <p className="font-black">Federal University of Olodo</p>

                <p className="text-xs text-muted-foreground">
                  Established 2026
                </p>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              A fictional university experience built to make education more
              interactive, entertaining and rewarding.
            </p>

            <p className="mt-5 font-semibold">
              Come as an Olodo. Graduate with Sense.
            </p>

            <div className="mt-7 flex gap-2">

              <SocialIcon
                href="mailto:hello@fuo.edu.ng"
                label="Email"
                icon={Mail}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="text-sm font-bold">{category}</p>

                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Federal University of Olodo.</p>

          <p>
            FUO is fictional. No actual Olodos were harmed in the making of this
            university.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-xl border transition-colors hover:bg-muted"
    >
      <Icon className="size-4" />
    </Link>
  );
}
