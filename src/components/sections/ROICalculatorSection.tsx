"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

function AnimatedCurrency({ value }: { value: number }): React.ReactElement {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Reduced motion snaps to the final value (duration 0); setState stays in
    // framer's async onUpdate, never synchronous in the effect body.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controls = animate(0, value, {
      duration: reduce ? 0 : 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return <>{display.toLocaleString("en-GB")}</>;
}

const inputClass =
  "w-full rounded-lg border border-white/15 bg-black/25 px-4 py-3 text-snow outline-none transition-colors focus:border-pink";

export function ROICalculatorSection(): React.ReactElement {
  const [eventsPerYear, setEventsPerYear] = useState(10);
  const [peoplePerEvent, setPeoplePerEvent] = useState(4);
  const [dayRate, setDayRate] = useState(350);
  const [callingAgency, setCallingAgency] = useState(true);
  const [dataLists, setDataLists] = useState(true);
  const hasInputs = eventsPerYear > 0 && peoplePerEvent > 0 && dayRate > 0;

  const result = useMemo(() => {
    const daysPerEvent = 4 + 3 + 2 + 6;
    const totalDays = daysPerEvent * eventsPerYear;
    const annualValue = totalDays * dayRate;
    return { daysPerEvent, totalDays, annualValue };
  }, [eventsPerYear, dayRate]);

  return (
    <Panel tone="night" index="11" kicker="What it's worth" width="narrow">
      <Reveal>
        <h2 className="text-balance text-center display-section">What could Looped be worth to your team?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-mist">
          Use your own numbers. Every calculation is based on what you tell us, not what we assume.
        </p>
      </Reveal>

      <Reveal className="mt-10 rounded-2xl border border-white/10 bg-night-raised p-6 shadow-[var(--lift-ink)] sm:p-8">
        <div className="grid gap-5">
          <label className="space-y-2">
            <span className="text-sm font-medium text-snow">How many events does your team run per year?</span>
            <input
              type="number"
              value={eventsPerYear}
              onChange={(e) => setEventsPerYear(Number(e.target.value) || 0)}
              className={inputClass}
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-snow">How many people work on each event on average?</span>
            <input
              type="number"
              value={peoplePerEvent}
              onChange={(e) => setPeoplePerEvent(Number(e.target.value) || 0)}
              className={inputClass}
            />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-snow">
              What&apos;s the average day rate or daily cost for your team?
            </span>
            <input
              type="number"
              value={dayRate}
              onChange={(e) => setDayRate(Number(e.target.value) || 0)}
              className={inputClass}
            />
            <p className="text-xs text-mist">This can be salary ÷ 220 working days, or your agency day rate.</p>
          </label>

          <div className="space-y-2">
            <p className="text-sm font-medium text-snow">
              Do you currently use an outbound calling agency for any events?
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCallingAgency(true)}
                className={`rounded-lg px-4 py-2 text-sm transition-colors ${callingAgency ? "bg-purple text-snow" : "border border-white/10 bg-black/25 text-mist"}`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setCallingAgency(false)}
                className={`rounded-lg px-4 py-2 text-sm transition-colors ${!callingAgency ? "bg-purple text-snow" : "border border-white/10 bg-black/25 text-mist"}`}
              >
                No
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-snow">
              Do you pay for a data list provider (Cognism, Apollo, or similar)?
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setDataLists(true)}
                className={`rounded-lg px-4 py-2 text-sm transition-colors ${dataLists ? "bg-purple text-snow" : "border border-white/10 bg-black/25 text-mist"}`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setDataLists(false)}
                className={`rounded-lg px-4 py-2 text-sm transition-colors ${!dataLists ? "bg-purple text-snow" : "border border-white/10 bg-black/25 text-mist"}`}
              >
                No
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {hasInputs ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 rounded-xl border border-pink/40 bg-[rgba(167,139,219,0.08)] p-5 shadow-[var(--lavender-emph)]"
            >
              <p className="kicker text-lavender">Projected annual value redirected</p>
              <p className="mt-2 font-serif text-4xl text-snow sm:text-5xl">
                £<AnimatedCurrency key={result.annualValue} value={result.annualValue} />
              </p>
              <p className="mt-4 text-sm text-snow">
                Based on your numbers, Looped could free up the equivalent of{" "}
                <span className="font-semibold text-lavender">{result.daysPerEvent} days</span> of team time per event.
              </p>
              <p className="mt-2 text-sm text-snow">
                Across <span className="font-semibold text-lavender">{eventsPerYear} events</span>, that&apos;s{" "}
                <span className="font-semibold text-lavender">{result.totalDays} days</span> per year.
              </p>
              <p className="mt-2 text-sm text-snow">
                At <span className="font-semibold text-lavender">£{dayRate.toLocaleString("en-GB")}</span> per day, that&apos;s
                senior team time redirected to higher-value work.
              </p>
              {callingAgency ? (
                <p className="mt-4 text-sm text-mist">
                  Plus the option to run automated voice campaigns alongside or instead of agency calling when volume
                  justifies it.
                </p>
              ) : null}
              {dataLists ? (
                <p className="mt-2 text-sm text-mist">
                  Plus every data pull becoming precision-targeted rather than manually filtered. Same subscription,
                  better results.
                </p>
              ) : null}
            </motion.div>
          ) : null}
        </AnimatePresence>

        <p className="mt-5 text-xs leading-relaxed text-mist">
          These are estimates based on conservative assumptions about time displaced. Your actual results will depend on
          how your team currently works and how deeply you integrate the platform.
        </p>

        <div className="mt-6">
          <CtaButton href="/demo" tone="ink">
            Apply to pilot
          </CtaButton>
        </div>
      </Reveal>
    </Panel>
  );
}
