"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/motion/Reveal";

export function ROICalculatorSection(): React.ReactElement {
  const [eventsPerYear, setEventsPerYear] = useState(10);
  const [peoplePerEvent, setPeoplePerEvent] = useState(4);
  const [dayRate, setDayRate] = useState(350);
  const [callingAgency, setCallingAgency] = useState(true);
  const [dataLists, setDataLists] = useState(true);

  const result = useMemo(() => {
    const daysPerEvent = 4 + 3 + 2 + 6;
    const totalDays = daysPerEvent * eventsPerYear;
    const annualValue = totalDays * dayRate;
    return { daysPerEvent, totalDays, annualValue };
  }, [eventsPerYear, dayRate]);

  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            What could Looped be worth to your team?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Use your own numbers. Every calculation is based on what you tell us — not what we assume.
          </p>
        </Reveal>

        <Reveal className="mt-10 rounded-2xl border border-white/10 bg-looped-card p-6 sm:p-8">
          <div className="grid gap-5">
            <label className="space-y-2">
              <span className="text-sm font-medium text-[#f8f9ff]">How many events does your team run per year?</span>
              <input
                type="number"
                value={eventsPerYear}
                onChange={(e) => setEventsPerYear(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-white/20 bg-[#151826] px-4 py-3 text-[#f8f9ff] outline-none ring-looped-violet-700 transition focus:ring-2"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-[#f8f9ff]">How many people work on each event on average?</span>
              <input
                type="number"
                value={peoplePerEvent}
                onChange={(e) => setPeoplePerEvent(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-white/20 bg-[#151826] px-4 py-3 text-[#f8f9ff] outline-none ring-looped-violet-700 transition focus:ring-2"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-[#f8f9ff]">What&apos;s the average day rate or daily cost for your team?</span>
              <input
                type="number"
                value={dayRate}
                onChange={(e) => setDayRate(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-white/20 bg-[#151826] px-4 py-3 text-[#f8f9ff] outline-none ring-looped-violet-700 transition focus:ring-2"
              />
              <p className="text-xs text-[#c4c8d8]">This can be salary ÷ 220 working days, or your agency day rate.</p>
            </label>

            <div className="space-y-2">
              <p className="text-sm font-medium text-[#f8f9ff]">
                Do you currently use an outbound calling agency for any events?
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCallingAgency(true)}
                  className={`rounded-lg px-4 py-2 text-sm ${callingAgency ? "bg-looped-violet-700 text-white" : "bg-[#151826] text-[#c4c8d8]"}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setCallingAgency(false)}
                  className={`rounded-lg px-4 py-2 text-sm ${!callingAgency ? "bg-looped-violet-700 text-white" : "bg-[#151826] text-[#c4c8d8]"}`}
                >
                  No
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium text-[#f8f9ff]">
                Do you pay for a data list provider (Cognism, Apollo, or similar)?
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setDataLists(true)}
                  className={`rounded-lg px-4 py-2 text-sm ${dataLists ? "bg-looped-violet-700 text-white" : "bg-[#151826] text-[#c4c8d8]"}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setDataLists(false)}
                  className={`rounded-lg px-4 py-2 text-sm ${!dataLists ? "bg-looped-violet-700 text-white" : "bg-[#151826] text-[#c4c8d8]"}`}
                >
                  No
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-looped-violet-700/40 bg-[#151826] p-5">
            <p className="text-sm text-[#f8f9ff]">
              Based on your numbers, Looped could free up the equivalent of{" "}
              <span className="font-semibold text-violet-300">{result.daysPerEvent} days</span> of team time per event.
            </p>
            <p className="mt-2 text-sm text-[#f8f9ff]">
              Across <span className="font-semibold text-violet-300">{eventsPerYear} events</span>, that&apos;s{" "}
              <span className="font-semibold text-violet-300">{result.totalDays} days</span> per year.
            </p>
            <p className="mt-2 text-sm text-[#f8f9ff]">
              At <span className="font-semibold text-violet-300">£{dayRate.toLocaleString("en-GB")}</span> per day,
              that&apos;s{" "}
              <span className="font-semibold text-violet-300">£{result.annualValue.toLocaleString("en-GB")}</span> of
              senior team time redirected to higher-value work.
            </p>
            {callingAgency ? (
              <p className="mt-4 text-sm text-[#c4c8d8]">
                Plus the option to run automated voice campaigns alongside or instead of agency calling when volume
                justifies it.
              </p>
            ) : null}
            {dataLists ? (
              <p className="mt-2 text-sm text-[#c4c8d8]">
                Plus every data pull becoming precision-targeted rather than manually filtered — same subscription,
                better results.
              </p>
            ) : null}
          </div>

          <p className="mt-5 text-xs leading-relaxed text-[#c4c8d8]">
            These are estimates based on conservative assumptions about time displaced. Your actual results will depend
            on how your team currently works and how deeply you integrate the platform.
          </p>

          <div className="mt-6">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg bg-looped-violet-700 px-5 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
            >
              Talk to us about your events
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
