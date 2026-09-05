"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Wordmark } from "@/components/brand/LoopMark";
import { cn } from "@/lib/cn";

/** Clean light navigation: wordmark, a few quiet links, one gradient CTA. */
const navLinks = [
  { href: "/#pillars", label: "Platform" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/#why-looped-exists", label: "Why Looped" },
  { href: "/newsroom", label: "Newsroom" },
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
        elevated ? "border-b border-hairline bg-paper/85 backdrop-blur-md" : "border-b border-transparent bg-transparent",
      )}
      layout
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="text-ink transition-opacity hover:opacity-80" aria-label="Looped, home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="text-[0.95rem] font-medium text-slate transition-colors hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="hidden cursor-pointer items-center rounded-full bg-grad px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--grad-emph)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Start with an event
          </Link>

          <div className="md:hidden">
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="inline-flex cursor-pointer items-center justify-center rounded-full border border-hairline p-2 text-ink transition-colors hover:bg-stone-deep"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-night/40 backdrop-blur-sm" />
                <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col border-l border-hairline bg-paper p-6 shadow-xl outline-none">
                  <div className="mb-8 flex items-center justify-between">
                    <Dialog.Title className="text-ink">
                      <Wordmark />
                    </Dialog.Title>
                    <Dialog.Close asChild>
                      <button type="button" className="cursor-pointer rounded-full p-2 text-muted hover:bg-stone-deep hover:text-ink" aria-label="Close menu">
                        <X className="h-5 w-5" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className="flex flex-col gap-4">
                    {navLinks.map((l) => (
                      <Link key={l.href} href={l.href} className="text-base font-medium text-slate hover:text-ink" onClick={() => setMobileOpen(false)}>
                        {l.label}
                      </Link>
                    ))}
                    <Link
                      href="/demo"
                      className="mt-2 inline-flex w-fit rounded-full bg-grad px-5 py-2.5 text-sm font-semibold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Start with an event
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
