# Looped Event OS — Capability Inventory

> **Purpose.** A complete, honest inventory of what this platform actually does today, for use as the **source of truth for the public marketing website**. Anything marked **LIVE** is safe to publish.
>
> **Audit method.** Status was verified by reading the actual code — the module run-registry (`src/lib/modules/promptRegistry.ts`), the pillar router (`src/lib/middleware/pillar.ts`), the Inngest serve route, API routes under `src/app/api`, and the React surfaces — not from docs. Internal catalogues (`canonical-registry.ts`, `src/docs/MODULES.md`, the command-palette registry) were found to be **stale in both directions** and used only for wording, never for status.
>
> **Audit date:** 30 June 2026. **Audit type:** read-only. No code was changed.

## Status definitions (applied strictly)

| Status | Meaning |
|---|---|
| **LIVE** | Built **and** wired. A real user can use it today via a real route / trigger / UI surface. Not deprecated, not dead code, not behind a disabling flag. *(Some LIVE integrations are "config-gated" — the integration is real and wired but needs the customer's own API key; these are flagged.)* |
| **PARTIAL** | Scaffolded, behind a feature flag, no-op until configured, built-but-unwired, or only partially reachable. Real code exists; a customer cannot fully rely on it today. |
| **ROADMAP** | Specced or ideated only — exists in docs / types / comments / dead code with no working runtime path. |

> **The LIVE test for AI modules:** present in `PROMPT_REGISTRY` **and** not in the runtime `DEPRECATED_MODULES` map **and** has a pillar tag. This is the only reliable signal — the canonical registry's `deprecated` flags and the 2026-04-17 module doc both disagree with the running code.

---

## Top-line counts

**Headline: 153 LIVE · 20 PARTIAL · 11 ROADMAP**

| Group | LIVE | PARTIAL | ROADMAP |
|---|---:|---:|---:|
| AI intelligence modules (the six pillars) | 123 | 2 | — |
| Cross-cutting capabilities | 30 | 18 | 11 |
| **Total** | **153** | **20** | **11** |

*Counting basis: each AI module counts once; cross-cutting capabilities are counted at the sub-capability granularity listed in Part 2. Two retired portfolio modules and three "coming-soon" ops modules are not counted as capabilities (their replacements appear under ROADMAP). Groupings are pragmatic — the per-section detail is authoritative.*

**The single most important caveat:** the named Emap-pilot flagship — **MS1, the "Top-line Marketing Strategy"** — is comprehensively built and tested but **not wired to any runtime trigger** (no route, Inngest function, worker, or page invokes it). It is **PARTIAL**, not LIVE. Do not headline it.

---

# Part 1 — The Six Pillars

The platform's core is an AI **module** engine: each module runs a grounded LLM workflow, produces a structured deliverable, and pauses for human approve/reject. Modules are organised into six access-gated pillars. Internal code prefixes don't map 1:1 to the public pillar names — the mapping is: **Commercial** = `sponsorship_*` + `commercial_*`; **Event Management** = `ops_*` + meeting/pricing modules; the rest match.

Every module below is **LIVE** (runnable on demand and/or auto-fired by the cascade) unless explicitly marked otherwise. "Visual" modules emit image prompts that are rendered to actual images by the image-generation service.

## 1.1 Marketing (44 LIVE, 1 PARTIAL)

The demand-generation engine — audience intelligence, messaging, campaigns, paid/organic, creative.

| Module | Status | Plain-English benefit |
|---|---|---|
| Competitor Intelligence | LIVE | Maps direct & indirect competitor events (programme, speakers, pricing, targeting) via live web research. |
| Audience Behaviour Intelligence | LIVE | Mines historical attendee data for engagement patterns and re-engagement opportunities. |
| Market Mapping | LIVE | Sizes and segments the total addressable audience by function, seniority, sector and geography. |
| Sponsor & Exhibitor Universe | LIVE | Builds a tiered, scored universe of potential sponsors and exhibitors. |
| Personas | LIVE | Builds 3–5 detailed audience personas with motivations, objections and content preferences. |
| Calendar Awareness | LIVE | Flags external dates (competitor events, holidays, regulatory deadlines) that should shape campaign timing. |
| Competitive Monitor | LIVE | Ongoing watch on competitor event activity across web, social and press. |
| Partner Intelligence | LIVE | Identifies and profiles media, association and community partners with outreach rationale. |
| Media Partners | LIVE | Builds the media-partner target list and partnership-tier recommendations. |
| Keyword Research | LIVE | Primary, secondary and long-tail keywords with search volume and difficulty. |
| Social Prospects | LIVE | Finds social profiles of target audience members and sector influencers. |
| Lead Magnet | LIVE | Generates lead-magnet concepts (reports, guides, tools, calculators) per persona. |
| Messaging | LIVE | Core message pillars, per-persona value propositions and tone of voice (multi-step agentic). |
| Funnel Generator | LIVE | Maps the delegate conversion funnel with content and touchpoints per stage. |
| SEO & AEO Strategy | LIVE | Maps keywords to pages and prioritises geographic markets for search. |
| Email Sequences | LIVE | Multi-stage nurture email copy, segmented by persona. |
| Paid Ads Intelligence | LIVE | Paid-media opportunity landscape and recommended channel allocation. |
| Ad Campaign Planner | LIVE | Structured paid campaign plan — channels, budget by phase, targeting. |
| Ad Creative Generator | LIVE | Platform-specific ad copy variants for A/B testing. |
| Content Error Detection | LIVE | Scans programme, website copy and listings for factual errors, conflicts and brand violations. |
| Photography Brief | LIVE | Must-have shots, style guide, priority subjects, delivery timeline. |
| Videography Brief | LIVE | Recording priorities, highlight-reel requirements, B-roll shot list. |
| Campaign Plan | LIVE | High-level multi-phase campaign plan (channel mix, budget, milestones) — the strategic feeder. |
| Campaign Calendar | LIVE | Week-by-week content & campaign calendar from open to event day (multi-step agentic). |
| Organic Content Calendar | LIVE | Weekly organic social calendar aligned to the campaign and keyword research. |
| Landing Page | LIVE | Registration-page copy and structure (hero, social proof, speaker highlights, CTA hierarchy). |
| UTM Framework | LIVE | Standardised UTM naming convention and campaign tracking matrix. |
| Performance Forecast | LIVE | Registration-pace and revenue projections with confidence intervals. |
| Conversion Forecast | LIVE | Conversion probability by funnel stage and segment. |
| Urgency & Scarcity | LIVE | Registration-velocity analysis plus urgency tactics (deadlines, capacity, scarcity). |
| Campaign Concepts | LIVE | Creative concept territories — names, visual themes, headline angles, rationale. |
| Asset Production | LIVE | Brief and spec pack for each creative asset across the campaign. |
| Group Booking | LIVE | Group-booking opportunities, rate strategy and outreach templates. |
| Press Release | LIVE | Press-release copy for announcements (speaker reveals, finalists, programme launches). |
| Campaign Optimisation | LIVE | Weekly-digest monitor: underperformance detection plus pivot/budget recommendations. |
| Post-Event 365 Strategy | LIVE | Year-round content and thought-leadership strategy for the 12 months between editions. |
| Content Repurposing | LIVE | Turns approved event content into specific repurposed asset copy and briefs. |
| Testimonials Synthesis | LIVE | Maps attendee/speaker quotes to personas for next-edition marketing. |
| Thought Leadership | LIVE | Thought-leadership article angles and frameworks. |
| Interview Questions | LIVE | Pre- and post-event interview question banks for speakers, winners and experts. |
| Finalist Social Copy | LIVE | Platform-specific social announcement copy for awards finalists (date-gated; awards). |
| Social Assets | LIVE (visual) | Generates actual social-media image assets. |
| **Top-line Marketing Strategy (MS1)** | **PARTIAL** | The six-element strategic plan per event (Who, Problem/Solution, Offer, Why, Measure, 90 days) with a reasoning footnote on every decision, plus markdown / drill-into-reasoning / PDF renders. **Fully built and tested but not wired to any runtime trigger or page** — cannot be run by a user today. |

*Note: a subset of the LIVE marketing modules are flagged for consolidation in internal registries but remain genuinely runnable today.*

## 1.2 Content (21 LIVE, 1 PARTIAL)

The programme engine — research, speakers, agenda, session content, event-day documents.

| Module | Status | Plain-English benefit |
|---|---|---|
| Industry Intelligence | LIVE | Live sector intelligence (trends, regulation, technology, talent) via web research — the master context document for the whole event. |
| Key Topics | LIVE | The 8–15 highest-signal topics that should anchor the programme. |
| Content Gap Analysis | LIVE | Maps competing events' programmes and finds differentiation / white-space. |
| Agenda Architect | LIVE | Session-by-session agenda with timing, pacing and energy-arc analysis. |
| Day Flow Intelligence | LIVE | Whole-agenda day-flow quality layer (energy, adjacency, breaks, pacing). |
| Speaker Identification | LIVE | Discovers and shortlists speakers per programme track via web research. |
| Speaker Briefing | LIVE | Speaker-specific briefing packs (objectives, audience profile, AV, on-day timeline). |
| Speaker Briefing Pack | LIVE | Comprehensive speaker pack — AV spec, confirmed co-speakers, on-day timeline. |
| Speaker Outreach Copy | LIVE | Personalised speaker invitations plus multi-touch follow-up sequences. |
| Programme Framework | LIVE | The canonical session-by-session programme structure (tracks, session types, slots). |
| Programme Narrative | LIVE | The editorial thread connecting sessions into a coherent audience journey. |
| Programme Themes | LIVE | 3–5 overarching event themes with straplines and rationale. |
| Session Development | LIVE | Per-speaker session briefs (objectives, format, research) and finalised session copy. |
| Session Descriptions | LIVE | Published session titles, abstracts and speaker bios for the programme and website. |
| Abstract Intelligence | LIVE | Scores submitted abstracts for quality, originality, bias and theme fit. |
| Advisory Panel | LIVE | Advisory/programme-committee recommendations by sector expertise and network reach. |
| Interview Targets | LIVE | Recommends the priority interview targets (speakers, winners) for content capture. |
| Speaker Runsheet | LIVE | Speaker-by-speaker run of show — timing, AV, green-room logistics. |
| Chair Briefing | LIVE | Session-chair packs — bios, discussion prompts, time-keeping, Q&A facilitation. |
| Post-Event Intelligence | LIVE | Synthesises NPS, session ratings, sentiment and feedback into an actionable report. |
| Visual Themes | LIVE (visual) | Generates actual visual-identity / theme image assets. |
| Format Effectiveness (NPS × engagement) | PARTIAL | Post-event format-effectiveness quadrant. Builder exists but has no pillar tag, so the user run-gate rejects it and it is not in the cascade — effectively unreachable today. |

## 1.3 Commercial / Sponsorship (17 LIVE)

The sponsorship-revenue engine — prospecting, briefs, packages, pitches, ROI.

| Module | Status | Plain-English benefit |
|---|---|---|
| Prospect Finder | LIVE | Targeted sponsor/exhibitor prospect list with company profiles, activation rationale and outreach angle (agentic). |
| Lookalike Prospecting | LIVE | Lookalike modelling against existing sponsors to widen the prospect pool. |
| Sponsorship Pipeline | LIVE | Pipeline health metrics — stage conversion, revenue at risk, category gaps, velocity. |
| Renewal Intelligence | LIVE | Post-event renewal scoring across the contracted sponsor portfolio. |
| Sponsor Brief | LIVE | Bespoke sponsor briefs and pitch narratives grounded in audience and session data (agentic). |
| Session Sponsorship Map | LIVE | Matches programme sessions to sponsor categories by audience alignment. |
| Package Builder | LIVE | Sponsorship package architecture — tier naming, benefit inventory, pricing. |
| Pitch Generator | LIVE | Bespoke pitch decks and talking points per named prospect. |
| Media Pack PDF | LIVE | The commercial media pack — audience profile, reach stats, package tiers, testimonials. |
| Sponsor ROI Report | LIVE | Post-event ROI report per sponsor against the contracted package. |
| Commercial Outreach Copy | LIVE | Personalised sponsor outreach copy. |
| Sponsor FAQ | LIVE | Sponsor-facing FAQ. |
| Sponsor Co-Marketing Asset | LIVE | Co-marketing assets for sponsors to amplify the event. |
| Sponsor Activation Brief | LIVE | On-site and digital sponsor activation briefs. |
| Upsell Opportunities | LIVE | Identifies upsell opportunities across the sponsor/delegate base. |
| Upsell Campaigns | LIVE | Sponsor-specific upsell campaign sequences. |
| Sponsor Assets | LIVE (visual) | Generates actual sponsor visual assets. |

## 1.4 Telesales (8 LIVE)

The phone-conversion engine — segmentation, scripts, awards/entry/table-sale campaigns, call analysis. *(See also the Voice agents cross-cutting section for AI calling.)*

| Module | Status | Plain-English benefit |
|---|---|---|
| List Segmentation | LIVE | Segments the prospect list by priority, persona fit and propensity, with call-volume recommendations. |
| Call Scripts | LIVE | Call scripts by segment and objective — openers, objection handlers, close variations. |
| Discovery Playbook | LIVE | A versioned, approvable discovery-call playbook. |
| Whole-Campaign Intelligence | LIVE | A whole-campaign telesales pathway quality layer over the segment plan. |
| Entry Conversion | LIVE | Awards entry-conversion scripts and strategy (paid and free paths, objection handlers). |
| Nominations Drive | LIVE | Peer-to-peer nominations campaign strategy and scripts (awards). |
| Table Sales | LIVE | Gala-dinner table-sales scripts and prospect prioritisation (awards). |
| Call Log Intelligence | LIVE | Analyses call logs for objection patterns, conversion bottlenecks and script gaps. |

## 1.5 Event Management (20 LIVE)

The operations engine — run of show, timelines, risk, awards operations, pricing, meetings, FAQs.

| Module | Status | Plain-English benefit |
|---|---|---|
| Run of Show | LIVE | Minute-by-minute day-of run of show — AV cues, speaker movements, crew, contingencies. |
| Timeline Builder | LIVE | Event delivery timeline from brief to post-event close, with milestones and owners. |
| Whole-Lifecycle Intelligence | LIVE | Critical-path (CPM) analysis over the dated timeline. |
| Risk Intelligence | LIVE | Detects operational risks **and** plans mitigation in one module. |
| Pricing Analysis | LIVE | Delegate ticket pricing analysed against competitors and historical conversion. |
| Pricing Strategy | LIVE | Full delegate pricing strategy — tier architecture, early-bird windows, deadlines. |
| FAQ Builder | LIVE | The master event FAQ, logistics-accurate and structured by audience. |
| Entry FAQ | LIVE | Entry-guide FAQ for awards entrants — eligibility, process, judging, key dates. |
| Awards Category Strategy | LIVE | Awards landscape intelligence and category architecture strategy (agentic; awards). |
| Awards Programme Analysis | LIVE | Analyses the awards programme structure against market benchmarks (awards). |
| Judge Discovery | LIVE | Discovers and shortlists judges per confirmed category via web research (awards). |
| Judge Assets | LIVE | Promotional assets for confirmed judges — social copy, profile pages (awards). |
| Content Packs | LIVE | Finalist content packs (awards). |
| Award Category Graphics | LIVE (visual) | Generates actual award-category graphic assets (awards). |
| Event Sector Briefing | LIVE | Board-ready industry immersion report. |
| Post-Event Report | LIVE | Comprehensive post-event performance report after data upload. |
| Team Debrief | LIVE | Structured post-event debrief agenda, integrated with the meeting bot. |
| Meeting Intelligence | LIVE | Turns meeting transcripts into decisions, action items and follow-ups. |
| Meeting Pre-Briefing | LIVE | Pre-meeting briefing doc — agenda, attendee context, talking points. |
| Photo & Video Brief | LIVE | Photography/videography production brief. |

## 1.6 Portfolio (13 LIVE)

The executive / cross-event engine — performance, finance, audience overlap, growth, strategy.

| Module | Status | Plain-English benefit |
|---|---|---|
| Event Performance | LIVE | Event scorecard and benchmark across revenue, content, sponsorship and satisfaction. |
| P&L Analysis | LIVE | Financial performance from an uploaded P&L — revenue, costs, margin, variance. |
| Budget Reforecast | LIVE | Optimistic / base / conservative budget scenarios from current performance. |
| Multi-Year Pipeline | LIVE | Multi-year sponsor, delegate and speaker pipeline with renewal-risk scoring. |
| Opportunity Detection | LIVE | Portfolio-level market opportunities — new geographies, segments, formats. |
| Spin-offs | LIVE | Spin-off event opportunities (format, geography, segment, brand extension). |
| Strategic Intelligence Report | LIVE | Board-level synthesis of all upstream intelligence into a strategic report. |
| Audience Overlap | LIVE | Cross-event audience overlap at person and company level. |
| Whole-Portfolio Intelligence | LIVE | A cross-event portfolio-wide quality and pattern layer. |
| Community Strategy | LIVE | Year-round audience-ownership strategy — hubs, mid-year events, membership, subscriptions. |
| Format Effectiveness | LIVE | Session-format effectiveness across the portfolio (satisfaction × complexity). |
| Brand Segmentation | LIVE | Segments portfolio brands by audience, revenue model and positioning. |
| Speaker Network | LIVE | Maps speaker relationships and appearance frequency across the portfolio. |

**Retired here:** *New Event Concept* and *New Event Feasibility* are deprecated; their stated replacement ("New Event Research environment") is **ROADMAP** — no live surface exists (see Part 3).

---

# Part 2 — Cross-cutting capabilities

## The cascade engine — **LIVE**

Approving one module's output **automatically generates every downstream module whose dependencies are now satisfied**, fired in parallel batches, each grounded in the real outputs already approved for that event. Four "whole-picture" syntheses trigger on their specific upstreams. All driven by ~90 registered Inngest functions firing today. *Honest framing:* the chain starts when the **event brief is approved** (not at event creation) and **pauses for human approve/reject at every step** — it is assisted automation, not autonomous generation.

## The in-platform "Loop" assistant — **LIVE**

An in-product AI assistant on **every authenticated page** (floating button + Ctrl+L). It chats with users using live cross-pillar event context (briefs, all approved module outputs, brand siblings, alerts), can extract brief fields from a URL, and — **on the user's explicit confirmation** — kicks off a single module or a full intelligence cascade. Hard limits: it cannot approve, export, change billing or delete; nothing fires autonomously.
- Worker-handoff suggestion — **PARTIAL** (computed server-side but not surfaced in the UI).
- Ask-a-teammate (async human handoff) — **ROADMAP** (returns an honest "not available yet").

## Voice agents (Retell telephony)

An AI outbound-calling system for telesales/sponsorship, on each client's own Retell account.
- Call recording + transcription + AI (Claude) call-outcome classification, via a signed webhook — **LIVE** (produces data once calls are placed).
- Per-event voice **spend cap** — **LIVE**.
- **Emap relationship hard-suppression** — never auto-dials the anchor partner — **LIVE**.
- Voice-agent **knowledge-base builder** (from approved scripts/personas/segments) — **LIVE** (gated on `RETELL_ENABLED` + key).
- **Outbound AI dialler** — **PARTIAL**: fully built and cron-wired, but real dials are **off by default** behind a production-only send flag (`OUTREACH_LIVE_SEND`) and require each client to bring their own Retell key; the demo org is hard-blocked.
- **Operator cockpit** — **PARTIAL**: monitoring and campaign creation work, but several actions (pause campaign, re-run failed, A/B test, guardrails) are UI stubs.
- **Inbound call handling** — **ROADMAP**: a full library exists but is unwired (no entry point).
- **DNC / consent / calling-window / lawful-basis compliance gate** — **ROADMAP**: a complete `dispatchGate` exists but is dead code; only Emap suppression, budget and seed-time DNC run at dial.
- **AI-identity / call-recording disclosure to the callee** — **ROADMAP**: the disclosure copy exists but is wired into nothing.

> **Do not claim:** "fully automated / turnkey autodialer", "compliant by default", "handles inbound calls", or "tells recipients it's an AI". None are true today.

## Website chatbot — **LIVE**

A genuine drop-in `<script>` widget for the **event organiser's own website**: knowledge-base-grounded (strict anti-fabrication), deterministic FAQ pre-screen, IP rate-limited, with consented lead capture into the platform. Reachable and real; per event it needs the operator to compile a knowledge base and toggle it on before it answers. *(This is a chatbot Looped's customers embed on their event sites — not a bot on Looped's own marketing site.)*

## Awards entrant quiz — **LIVE**

A genuinely public, email-gated quiz at `/quiz/[token]` (plus an embeddable `<script>` loader) that AI-matches an entrant's company to the best-fit award categories with match scores and reasons, captures the lead and syncs to CRM. Fully wired end-to-end; the operator publishes it from the dashboard.

## Lead & demand capture

- Consent-gated **lead capture** into `event_lead_captures` with automatic routing (sponsor pipeline / telesales warm list / nurture) — **LIVE**.
- On-site **behavioural capture SDK** (`/sdk/looped-capture.js`) — **LIVE** (consent-first; a deliberate no-op until consent is granted).
- **Intent inbox** — the internal consumption surface for captured signals, with realtime updates and "route this" actions — **LIVE** (internal, behind auth).
- **Marketing-site lead forms** (the `/contact` and `/enterprise` pages persist to `sales_leads`) — **LIVE** (email notification is no-op until configured; the lead still saves).
- **PII firewall** (redacts before LLM egress) — **LIVE** (platform foundation).

## Data enrichment sources

| Source | Status | Note |
|---|---|---|
| Apollo — company + people-search enrichment | LIVE (config-gated) | Real, wired call paths via the Nango proxy; fires on approved market-mapping. Needs Nango key. |
| LLM company enrichment | LIVE | Haiku + web search on a company name (used by the quiz). |
| Gemini web-research grounding | LIVE (config-gated) | Native search grounding for the research step of several modules; falls back to Claude if no key. |
| Claude web search | LIVE | Native web-search tool used by content/research modules. |
| Social intelligence (on-demand, at briefing) | LIVE | Web-search-grounded sector scan that populates the event knowledge base. |
| Continuous social monitoring | PARTIAL | The continuous-monitor cron is disabled; only the on-demand briefing scan runs. |
| Cognism (phone enrichment) | PARTIAL | Real client, no live caller — dormant. |
| ScrapeGraphAI (website-scrape enrichment) | PARTIAL | Real client, only test callers. |
| Apify (LinkedIn / competitor scraping) | PARTIAL | Real client, consumers dormant. |
| Perplexity research | PARTIAL | Built and wired, but routing lists are deliberately empty. |
| Clearbit / Hunter | ROADMAP | No client, no call site. |

## Integrations / connectors

- **Nango** OAuth connector hub (BYO-key proxy broker, signed webhook receiver, health monitor) — **LIVE** (config-gated).
- **CRM sync — Salesforce, HubSpot** (live sync route + module context read) — **LIVE** (config-gated).
- **Email — Resend** (with a production send-isolation gate) — **LIVE** (config-gated).
- **Payments — Stripe** (signed webhook → event credits + compute-budget top-ups) — **LIVE** (config-gated).
- **Job orchestration — Inngest** (~90 functions; the automation backbone) — **LIVE**.
- **Web scraping — Firecrawl** (URL brief extraction, event discovery, website-quality monitor) — **LIVE** (config-gated).
- **Inbound CRM / data-warehouse connectors** (Creatio + Postgres warehouse — real fetch + field-map) — **PARTIAL** (unwired; not on any trigger/cron).
- **n8n** workflow trigger (Railway) — **PARTIAL** (admin route only; superseded by Inngest).
- **Scaffolded OAuth connectors** (Dynamics 365, LinkedIn, X/Twitter, Meta, YouTube, Sprout Social, Hootsuite, Evessio) — **PARTIAL** (registered, not end-to-end wired).
- **Inert connector catalogue** (~20 vendors: Mailchimp, Adestra, Campaign Monitor, Xero, QuickBooks, Hopin, Zoom, On24, SurveyMonkey, Typeform, Swapcard, Grip, Swoogo, Pipedrive, Google Analytics, Amplitude, Mixpanel, Eventbrite, Cvent, Google Ads, LinkedIn Ads) — **ROADMAP** (connector classes with no consumer; hidden in the UI).

> **Do not claim "50+ integrations" as live.** Only ~8 connectors are genuinely end-to-end wired (Nango + Salesforce + HubSpot + Apollo + Resend + Stripe + Firecrawl + Inngest); the rest are scaffolded or inert.

## Stakeholder portals

| Portal | Status | Note |
|---|---|---|
| Asset-collection portal (`/portal/[token]`) | **LIVE** | Speakers / judges / sponsors get an emailed secure link and submit headshot, bio, logo and socials (as URLs, not file uploads). |
| Finalist / winner awards portal | PARTIAL | Reachable and real, but the flagship "download your award graphics" buttons are disabled stubs. |
| Speaker portal (`/speaker-portal/[token]`) | PARTIAL | Built but unwired — submit path is CSRF-blocked and no dashboard UI provisions or emails it. |
| Judge scoring portal | ROADMAP | No entry-scoring surface exists; "judges" is an internal management page only. |
| Partner self-serve portal | ROADMAP | No external partner portal exists. |
| Awards entry-submission portal | ROADMAP | Entrants cannot self-submit; finalists are bulk-imported by the team. |
| Post-event survey portal (`/survey/[token]`) | PARTIAL | Real, but with the same CSRF exposure as the speaker portal. |

## Live dashboards

- **Per-pillar workspace hubs** (multi-tab: Work Hub cockpit with real module cards + approve/reject, Items inbox, Briefing, 30-Day Plan, Library) — **LIVE for 5 of 6 pillars** (Marketing, Content, Sponsorship, Telesales, Event Management).
- **Portfolio (Skye) hub** — **PARTIAL** (the Portfolio worker is a Stage-0 placeholder that raises no items; only the derived 30-day plan renders).
- **Org / portfolio command centre** (Agent Hub "needs you / live now", org home, portfolio-director view, Portfolio Intelligence with cross-event health) — **LIVE**.
- **Module output viewers** (full-page, modal and rich content viewers over the `/api/v1/outputs` contract) — **LIVE**.

## Intelligence feed & decisions

- **Intelligence / notification feed** (`event_notifications` + NotificationFeed, with working actions: category-fit nudge email, entry-stall schedule-call/add-note, coherence issues, brief-enrichment apply) — **LIVE** (populates once agents/crons emit signals; the dedicated Intelligence page is reached via the cockpit signal strip).
- **Decision hub** (cross-event human approve/reject queue over the `decisions` table, with batch-approve, filters and preview; also inline everywhere via the approval banner) — **LIVE**.
- **CIA autonomous-coordination feed** (`cia_decisions` — the Layer-2 agent coordination feed) — **PARTIAL** (write + read paths are wired, but its only UI mount is an un-navigable orphan page).

## Other observed

- **White-label** configuration (`/api/v1/white-label`) — **PARTIAL** (route exists; not verified end-to-end in this audit).

---

# Part 3 — What you can and cannot claim (quick reference)

**Safe to headline as LIVE today:**
- 120+ AI "co-worker" modules across six pillars (marketing, content, sponsorship, telesales, event management, portfolio) that research, draft and analyse, then pause for human sign-off.
- An automated **intelligence cascade** that chains those modules with grounded context.
- An **in-product AI assistant** ("Loop") on every page that answers with live event context and runs work on confirmation.
- An **embeddable website chatbot** and a **public, embeddable awards entry-quiz** with AI category matching.
- **AI voice calling** with automatic recording, transcription and call-outcome analysis, and a per-event spend cap (per client's own Retell account).
- Real **CRM (Salesforce/HubSpot), enrichment (Apollo), email (Resend), payments (Stripe)** integrations and **web-grounded research** (Gemini + Claude search).
- Live **per-pillar workspace dashboards**, a **cross-event command centre**, a **signal/notification feed**, and a **human decision queue**.
- A **stakeholder asset-collection portal** for speakers/judges/sponsors.

**Do NOT claim (PARTIAL/ROADMAP):**
- The **Top-line Marketing Strategy (MS1)** as a usable feature — it is built but unwired.
- A **turnkey, compliance-complete autodialer**, **inbound calls**, or **AI-identity disclosure** — the dialler is off by default and the compliance/disclosure layers are dead code.
- **Speaker / judge-scoring / partner / awards-entry-submission portals** — these are unwired or absent.
- **"50+ integrations"**, **continuous social monitoring**, **phone/LinkedIn/website enrichment** (Cognism/Apify/ScrapeGraphAI), or **Perplexity** — dormant or scaffolded.
- A fully-surfaced **autonomous decision feed** — the CIA feed lives on an un-navigable page; the **Portfolio hub** is still a placeholder.
- A **"New Event Research environment"** — specced as the replacement for two retired modules but not built.

---

## Appendix — methodology & the stale-registry trap

- **Run-truth source:** `src/lib/modules/promptRegistry.ts` (`PROMPT_REGISTRY` + `DEPRECATED_MODULES`) and `src/lib/middleware/pillar.ts` (`MODULE_TO_PILLAR`). The central run route is `src/app/api/v1/modules/run/route.ts`; modules execute through the Inngest `runModulePipeline`.
- **Why other catalogues were not trusted for status:** `src/lib/modules/canonical-registry.ts` marks ~26 modules `deprecated` yet ~12 of those are still registered and runnable, and it predates the whole-X and MS1 modules; `src/docs/MODULES.md` (2026-04-17) lists "ghost" and "coming-soon" entries that were since built or use drifted IDs; the command-palette registry still lists deleted modules. These were used for benefit wording only.
- **Cross-cutting areas** (voice, Loop, public capture, enrichment/connectors, portals, dashboards/feed, cascade) were each audited by reading the relevant routes, libraries, Inngest functions and React components directly.
- **Config-gated LIVE:** several integrations are real and wired but no-op until the customer supplies an API key (Apollo/Nango, Gemini, Resend, Stripe, Firecrawl, Retell). They are LIVE capabilities; they are not "always-on" in every environment.

*Source of truth for the public website. Re-audit before any major external launch — the module registries drift.*
