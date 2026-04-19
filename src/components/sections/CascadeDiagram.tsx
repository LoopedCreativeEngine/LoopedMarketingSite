"use client";

import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";

const NODES: { id: string; label: string; mono: string }[] = [
  { id: "n1", label: "Brief & targets", mono: "event_brief" },
  { id: "n2", label: "Core intelligence", mono: "content_industry_intelligence" },
  { id: "n3", label: "Market mapping", mono: "marketing_market_mapping" },
  { id: "n4", label: "Messaging architecture", mono: "marketing_messaging_architecture" },
  { id: "n5", label: "Campaign plan", mono: "marketing_campaign_plan" },
  { id: "n6", label: "Campaign-ready outputs", mono: "marketing_campaign_calendar" },
];

export function CascadeDiagram({ expanded = false }: { expanded?: boolean }): React.ReactElement {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const nodes = expanded ? NODES : NODES.slice(0, 5);

  return (
    <div ref={ref} className="w-full overflow-x-auto pb-2">
      <div className="flex min-w-[720px] flex-row flex-nowrap items-center justify-center gap-0 md:min-w-0">
        {nodes.map((node, i) => (
          <Fragment key={node.id}>
            <motion.div
              className="relative z-10 w-[150px] flex-shrink-0 rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-[160px] sm:p-4"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 + i * 0.1, duration: 0.45 }}
            >
              <p className="text-xs font-semibold text-slate-900 sm:text-sm">{node.label}</p>
              <p className="mt-2 font-mono text-[10px] leading-snug text-indigo-700/90 sm:text-[11px]">{node.mono}</p>
            </motion.div>
            {i < nodes.length - 1 && (
              <motion.div
                className="mx-1 h-0.5 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-indigo-300 to-indigo-600 sm:mx-2 sm:w-10"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.18 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left center" }}
                aria-hidden
              />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
