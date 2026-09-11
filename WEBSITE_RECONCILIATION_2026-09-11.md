WEBSITE RECONCILIATION — 2026-09-11

Follow-on to FULL_PLATFORM_WEBSITE_SCOPE_2026-09-09.md. This is a targeted
reconciliation of the current full-platform site to the latest authorised
proposition, plus a visual-design lift of the deeper pages. It is NOT a
redesign. The homepage, visual identity, typography, tone and information
architecture are preserved.


PHASE 0 — BASELINE (verified, read-only)

Repo:            C:\Users\HP\LoopedMarketingSite
Branch:          feature/full-platform-site-2026-09-09
HEAD at start:   ede61e5
Working tree:    clean
Lineage:         ede61e5 sits directly on 5ca71de (origin/feature/website-endgame-content),
                 exactly as the scope doc's "Implementation Safety" section prescribed.

Competing version considered and rejected as the baseline:
  feature/platform-story-on-approved-2026-09-09 (8ed8725, dated 2026-09-10, in a
  separate worktree at C:\Users\HP\LoopedMktgApproved). It is a newer-by-date but
  DIFFERENT workstream: a launch/conversion rebuild on the "approved Claude Design
  system" with real waitlist/demo backends, Supabase migrations and a different IA
  (capability pages nested under /platform/*). It does NOT carry
  FULL_PLATFORM_WEBSITE_SCOPE_2026-09-09.md.

Why the current branch is canonical for THIS task (high confidence):
  1. It is the branch the founder named.
  2. Its parent is website-endgame-content, the exact lineage the founder named
     and the scope doc named.
  3. FULL_PLATFORM_WEBSITE_SCOPE_2026-09-09.md exists ONLY on this branch and was
     committed as part of ede61e5. That scope doc is the brief this branch implements,
     and this reconciliation is its direct continuation.

Safe to proceed.


AUDIT SUMMARY

Design gold standard: the homepage and /how-it-works. /how-it-works already renders
the canonical operating loop (Understand, Recommend, Decide, Act, Verify, Learn) via
LoopStages, plus AutonomyModes and CascadeDiagram. The loop language already exists;
it simply is not connected to the interoperability proposition yet.

Deeper pages carry 0 to 2 strong product visuals each, then fall back to CapabilityGrid
(icon and text cards) and bullet lists. That card dependence is the "under-designed"
feeling the founder identified.

Copy is largely on-message already: intelligence and action layer (not a replacement),
no generic AI language, human decision authority, no em dashes, honest availability pills.
Preserve it.

The single biggest gap, copy and visual, is that the governed AI-interoperability
proposition is entirely absent from the site.


PAGE ARCHITECTURE DECISION (interoperability)

Chosen: option A, extended. NOT a new navigation page.
  - Primary home: a dedicated section on /platform, with a new interoperability visual.
  - Supporting homepage mention: a compact strip inside the existing platform-bridge
    section, linking through to /platform.
  - Reinforcement: a section on /data-and-integrations, which already owns "your systems
    stay yours" and the permission/ownership story.
Rationale: the Platform nav group already has six items. A seventh "Your AI + Looped"
page would over-index a single buyer objection and risk reading as bolt-on "AI
integrations", the exact thing to avoid. Interoperability is an architectural property
of the platform, so it belongs inside the platform story.


EXACT COPY CHANGES BY PAGE

1. Homepage — src/components/sections/PlatformBridgeSection.tsx
   Add a compact supporting interoperability strip beneath the ChainFlow:
   headline "Your AI already knows your business. Looped knows your events.",
   one clarifying line, link to the /platform interoperability section.

2. /platform — src/app/platform/page.tsx
   Add a capstone movement "Your wider AI environment" after Learn: heading, lede,
   the InteroperabilityLayer visual, and a short authority note. Add its anchor to
   the page spine. No rewrite of existing panels.

3. /data-and-integrations — src/app/data-and-integrations/page.tsx
   Add a movement "Your AI, and Looped": governed interoperability copy plus the
   InteroperabilityLayer visual (ink tone). Add its anchor to the page contents.
   Frames external/organisation AI consuming Looped event intelligence through
   governed interfaces while Looped keeps authority.

4. Pillar pages — via the shared template (all six)
   Add a structured cross-pillar "connections" visual to the existing "How this
   connects" section. Keeps the existing prose; adds the picture. Distilled from
   each pillar's own connects copy, so no new claims.

5. /pillars/portfolio — src/app/pillars/portfolio/page.tsx
   Add the PortfolioDrill visual (portfolio, brand, event, pillar, signal) with
   intelligence rolling back up, to demonstrate Looped is more than a BI dashboard.

Interoperability copy guardrails applied throughout:
  - Durable architectural language: governed interfaces, event intelligence, permitted
    actions, authority. No brittle vendor list.
  - Looped keeps tenant, policy, security, data and action authority. External AI does
    not bypass any of it.
  - No claim of specific external integrations as production capability.
  - No em dashes.


VISUAL / ANIMATION ADDITIONS

New reusable components (src/components/product/):
  - InteroperabilityLayer  Three governed tiers: your AI environment, then Looped as the
                            event intelligence and authority layer, then your event
                            systems. Used on /platform and /data-and-integrations.
  - PillarConnections       This pillar in the flow: what it draws on, what it feeds,
                            two-way. Used on all six pillar pages.
  - PortfolioDrill          Portfolio to signal drill path, with roll-up. Portfolio pillar.

All three reuse the existing design language (paper/ink shells, violet/iris, Fraunces,
mono labels, DataFabric-style SVG connectors). Motion is subtle and CSS-based, so the
global prefers-reduced-motion rule in globals.css neutralises it automatically; each
visual is fully understandable with no motion. Server components where possible.

Reusable vs page-specific:
  - Reusable: InteroperabilityLayer (2 pages), PillarConnections (6 pages), plus new
    keyframes in globals.css.
  - Page-specific data only: the props passed on each page. PortfolioDrill is used once
    but built parameterised.


DELIBERATELY PRESERVED

  - Homepage hero, narrative, visual identity, typography, tone.
  - Existing strong copy across platform and pillars.
  - Availability pills (Live / In pilot / Rolling out). These are honest, not
    overselling, and match the scope doc's request to be truthful about maturity.
  - Navigation and IA.
  - The existing operating-loop treatment on /how-it-works.


CLAIMS REQUIRING PRODUCT-AUTHORITY VERIFICATION (flagged, not asserted)

  - The mechanism by which an organisation's AI consumes Looped event intelligence is
    described only in durable architectural terms (governed interfaces, APIs,
    permitted actions). No specific external product (ChatGPT, Claude, Copilot, etc.)
    is named as a supported integration. If and when a named integration is authorised
    as production, the copy can be made more specific.
  - Existing availability pills already carry the maturity of individual capabilities;
    these were left as-is.


NOT REQUIRED TO SHIP, RECOMMENDED LATER

  - Bespoke "extra" visuals for Marketing, Content and Telesales pillars, to match the
    richness Commercial, Event Management and Portfolio already have.
  - An event-management "consequence propagation" visual (a decision changing downstream
    implications).
  - Swapping MediaFrame placeholders for real product footage once available.
