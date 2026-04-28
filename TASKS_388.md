# TASKS_388 — MARKETING SITE COPY UPGRADE (CURSOR TASK)
## Upgrade copy on looped-marketing-site.vercel.app to reflect accurate, research-grounded positioning.
## This is a Cursor task — open in Cursor, not Claude Code.

---

## CONTEXT AND SOURCE MATERIAL

### The positioning insight (from Emap sales conversations):
Event teams already use ChatGPT. They write copy reasonably fast. The problem is they're writing 
it against a vague brief and their own judgment — no shared intelligence, no cascade, no connection 
to strategic research. Looped doesn't make the copy faster. It makes the copy informed.

### The industry data (from industry AI adoption report, April 2026):
- The event industry is "leaning on general-purpose models rather than events-specific AI"
- Conferences lead AI adoption at 18% of event types — the highest adopters in the industry
- Training staff (30%) and cost (25%) are the top two barriers to AI adoption
- "The 1 and 3 problem" — AI content that leads with one good line followed by three generic bullets. 
  Attendees can detect it.
- 40% of event companies spend under $10k/year on AI tools — Looped sits in the right price band

### What Looped is NOT:
- Not an AI writing tool (ChatGPT already does that)
- Not a generic AI agent builder (Creatio and others do that)
- Not another wrapper around a language model
- Not something that requires teams to learn prompt engineering

### What Looped IS:
- An event operating system with domain-encoded intelligence
- The strategic intelligence layer that makes everything downstream better
- Built specifically for conference and awards organiser teams — every module knows what a 
  judging process is, what a nominations drive requires, how entry deadlines chain
- Human-in-the-loop by design — the team approves everything before it acts
- A cascade system where one approved intelligence output unlocks the next automatically

---

## WHAT TO CHANGE

### Hero section:
Current likely says something generic like "AI for events" or similar.

Replace with copy that speaks to the insight that teams already have ChatGPT — 
and that's not the problem Looped solves:

**Headline option A:**
"Your team is already using AI. Now give it something worth working with."

**Headline option B:**
"The event industry is using general-purpose AI. Looped is built for nothing else."

**Headline option C:**
"100 events. Running the same problems 100 times. Looped ends that."

**Subhead (use this or close variation):**
"Looped is an AI intelligence operating system built exclusively for conference and awards 
organiser teams. Not a writing tool. Not another agent builder. The strategic foundation 
that makes every output — and every team member — better informed."

### Problem section:
Replace any generic AI benefits with this specific framing:

"Your marketing managers are already prompting ChatGPT for copy. Your commercial team is 
doing their own research. Your telesales team is working from last year's script.

The outputs aren't bad. But they're not connected. Every event starts from scratch. Every 
team member works from their own judgment. And 100 events later, nothing compounds.

Looped builds the intelligence foundation first — competitor landscape, audience mapping, 
market positioning, commercial intelligence — then makes that foundation available to every 
person on every team across every event in your portfolio."

### How it works section:
Keep it simple. Three steps:

1. **Brief the event** — scrape the website, answer four questions, upload last year's data.
2. **Approve the intelligence cascade** — root modules run automatically and feed every downstream output.
3. **Your team executes** — with approved intelligence in everything they produce.

### Key differentiators section:
Lead with these four, in this order:

1. **Built for events, not adapted for events**
   "Every module knows what a judging process is. What a nominations drive requires. 
   How entry deadlines chain into table sales. That knowledge isn't in ChatGPT."

2. **Human-in-the-loop by design**
   "Nothing happens without your approval. The cascade pauses at every output, waiting 
   for a human decision. This isn't AI running wild — it's AI doing the research, 
   your team making the calls."

3. **Portfolio-level intelligence, not event-level noise**
   "Cross-event learning means every edition is informed by what worked in the last one. 
   Benchmark data means every event knows where it sits in the market. 
   The platform gets smarter with every event that runs through it."

4. **Your team doesn't need to learn anything new**
   "No prompt engineering. No agent configuration. No training programme. 
   The platform asks four questions and builds the rest."

### Social proof / trust section:
If there's a testimonials or logos section, for now use:

"Designed with and for event organiser teams at the UK's leading B2B event publishers."

Don't fabricate testimonials. Don't name Emap specifically (not contracted yet).

### Remove:
- Any generic AI feature lists
- Any mention of "AI agents" without explanation of what they actually do
- Any copy that could apply to any SaaS product (efficiency, productivity, etc.)
- The word "revolutionary" or "cutting-edge" or "game-changing"
- Any reference to "ChatGPT competitor" — Looped is not competing with ChatGPT

---

## VISUAL/DESIGN NOTES

The branding currently shows "makerkit" — this must be changed to "Looped Event OS" throughout.

Primary colour: #4338ca (Violet)
Font: Whatever the current site uses — don't change fonts

Do not change the layout structure, just the content within it.

---

## FILES TO EDIT

The marketing site lives at looped-marketing-site.vercel.app and is a separate Netlify/Vercel 
deployment. Open the marketing site repo in Cursor and find:

```bash
# Common MakerKit marketing page locations:
src/app/page.tsx or src/app/(marketing)/page.tsx  — homepage
src/app/(marketing)/pricing/page.tsx — pricing page
src/components/marketing/Hero.tsx — hero component
src/components/marketing/Features.tsx — features section
```

Edit the copy in these files following the guidance above. 
Do not change any routing, authentication, or functionality.

---

## ACCEPTANCE CRITERIA
- [ ] "makerkit" replaced with "Looped Event OS" throughout
- [ ] Hero headline speaks to the events-specific positioning, not generic AI
- [ ] Problem section articulates the ChatGPT-already-used insight
- [ ] Four key differentiators present and in correct order
- [ ] No fabricated testimonials
- [ ] No generic AI buzzwords
- [ ] Copy reads as human, not AI-written (no em-dashes, no "delve into", no bullet-heavy structure)
