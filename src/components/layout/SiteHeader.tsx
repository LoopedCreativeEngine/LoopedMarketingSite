"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
];

export function SiteHeader(): React.ReactElement {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setElevated(y > 16);
  });

  const onHero = pathname === "/";
  const transparent = onHero && !elevated;

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        transparent ? "border-transparent bg-transparent" : "border-slate-200/80 bg-white/95 backdrop-blur-md",
      )}
      layout
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "text-sm font-semibold tracking-tight transition-colors",
            transparent ? "text-white" : "text-slate-900",
          )}
        >
          Looped
        </Link>

        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex items-center gap-8">
            {navLinks.map((l) => (
              <NavigationMenu.Item key={l.href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={l.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-indigo-600",
                      transparent ? "text-white/90" : "text-slate-600",
                    )}
                  >
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
            className="hidden cursor-pointer items-center rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Book a demo
          </Link>

          <div className="md:hidden">
            <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className={cn(
                    "inline-flex cursor-pointer items-center justify-center rounded-lg border p-2 transition-colors",
                    transparent
                      ? "border-white/25 text-white hover:bg-white/10"
                      : "border-slate-200 text-slate-800 hover:bg-slate-50",
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/40" />
                <Dialog.Content className="fixed right-0 top-0 z-50 flex h-full w-[min(100%,320px)] flex-col border-l border-slate-200 bg-white p-6 shadow-xl outline-none">
                  <div className="mb-8 flex items-center justify-between">
                    <Dialog.Title className="text-lg font-semibold text-slate-900">Menu</Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="cursor-pointer rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                        aria-label="Close menu"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </Dialog.Close>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/"
                      className="text-sm font-medium text-slate-700 hover:text-indigo-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      Home
                    </Link>
                    {navLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="text-sm font-medium text-slate-700 hover:text-indigo-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {l.label}
                      </Link>
                    ))}
                    <Link
                      href="/demo"
                      className="mt-2 inline-flex w-fit rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Book a demo
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
