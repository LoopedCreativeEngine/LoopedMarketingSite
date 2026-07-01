"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Wordmark } from "@/components/brand/LoopMark";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/newsroom", label: "Newsroom" },
  { href: "/#pricing", label: "Pricing" },
];

const pillarLinks = [
  { href: "/pillars/marketing", label: "Marketing" },
  { href: "/pillars/content", label: "Content" },
  { href: "/pillars/sponsorship", label: "Commercial" },
  { href: "/pillars/telesales", label: "Telesales" },
  { href: "/pillars/event-management", label: "Event Management" },
  { href: "/pillars/portfolio", label: "Portfolio" },
];

export function SiteHeader(): React.ReactElement {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setElevated(y > 16);
  });

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        elevated
          ? "border-b border-[rgba(23,19,31,0.08)] bg-bone/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
      layout
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="text-ink-text transition-opacity hover:opacity-80" aria-label="Looped, home">
          <Wordmark />
        </Link>

        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex items-center gap-7">
            <NavigationMenu.Item className="relative">
              <NavigationMenu.Trigger className="cursor-pointer text-sm font-medium text-graphite transition-colors hover:text-violet">
                Pillars
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-8 w-64 rounded-2xl border border-[rgba(23,19,31,0.10)] bg-paper p-2.5 shadow-[var(--lift-light)]">
                <div className="grid gap-0.5">
                  {pillarLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-lg px-3 py-2 text-sm text-graphite transition-colors hover:bg-sand/70 hover:text-ink-text"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            {navLinks.map((l) => (
              <NavigationMenu.Item key={l.href}>
                <NavigationMenu.Link asChild>
                  <Link href={l.href} className="text-sm font-medium text-graphite transition-colors hover:text-violet">
                    {l.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden cursor-pointer items-center rounded-full border border-[rgba(23,19,31,0.22)] px-4 py-2 text-sm font-semibold text-ink-text transition-colors hover:bg-sand/70 md:inline-flex"
          >
            Join the waitlist
          </Link>
          <Link
            href="/demo"
            className="hidden cursor-pointer items-center rounded-full bg-violet px-4 py-2 text-sm font-semibold text-bone shadow-[var(--violet-emph)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Apply to pilot
          </Link>

          <div className="md:hidden">
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-[rgba(23,19,31,0.18)] p-2 text-ink-text transition-colors hover:bg-sand/70"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" />
                <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col border-l border-[rgba(23,19,31,0.10)] bg-bone p-6 shadow-xl outline-none">
                  <div className="mb-8 flex items-center justify-between">
                    <Dialog.Title className="text-ink-text">
                      <Wordmark />
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="cursor-pointer rounded-lg p-2 text-muted-ink hover:bg-sand/70 hover:text-ink-text"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-sm font-medium text-graphite hover:text-violet"
                      onClick={() => setMobileOpen(false)}
                    >
                      Home
                    </Link>
                    {navLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="text-sm font-medium text-graphite hover:text-violet"
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                      </Link>
                    ))}
                    <div className="my-1 h-px w-full bg-[rgba(23,19,31,0.10)]" />
                    {pillarLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="text-sm font-medium text-graphite hover:text-violet"
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                      </Link>
                    ))}
                    <Link
                      href="/demo"
                      className="mt-2 inline-flex w-fit rounded-full bg-violet px-5 py-2.5 text-sm font-semibold text-bone"
                      onClick={() => setMobileOpen(false)}
                    >
                      Apply to pilot
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex w-fit rounded-full border border-[rgba(23,19,31,0.22)] px-5 py-2.5 text-sm font-semibold text-ink-text"
                      onClick={() => setMobileOpen(false)}
                    >
                      Join the waitlist
                    </Link>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
