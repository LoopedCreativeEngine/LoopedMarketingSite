-- Personalised walkthrough requests ("Show me Looped on my event").
--
-- Deliberately a separate table from waitlist_signups. A waitlist signup means
-- "keep me posted"; a row here means "build me a walkthrough of my event",
-- which is different intent, different follow-up and different fields. Keeping
-- them apart is what makes this lead separately attributable.
--
-- Apply this to the same Supabase project named in SUPABASE_URL. Until it
-- exists the endpoint refuses valid requests with a 503 rather than accepting
-- leads it cannot store.

create table if not exists public.demo_requests (
  id                uuid primary key,
  created_at        timestamptz not null default now(),

  -- Who is asking.
  name              text        not null,
  work_email        text        not null,
  company           text        not null,

  -- What they want to see Looped on. The URL is the highest-value field: one
  -- link says more about an event than a paragraph a busy organiser has to type.
  event_name        text        not null,
  event_url         text        not null default '',
  event_type        text        not null default '',
  events_per_year   text        not null default '',
  what_to_see       text        not null default '',

  -- Where the visit came from, carried from the landing page.
  landing_page      text        not null default '',
  source_page       text        not null default '',
  referrer          text        not null default '',
  utm_source        text        not null default '',
  utm_medium        text        not null default '',
  utm_campaign      text        not null default '',
  utm_content       text        not null default '',
  utm_term          text        not null default '',

  status            text        not null default 'new',
  consent_version   text        not null
);

-- 🔴 NO UNIQUE INDEX ON work_email, AND THAT IS DELIBERATE.
--
-- The waitlist holds one row per address. This table must not: the same person
-- can legitimately ask for a walkthrough of two different events, and a second
-- request is a second piece of intent, not a duplicate to be swallowed. Read
-- this table by created_at, and group by email in the query if you want to.
create index if not exists demo_requests_created_at_idx
  on public.demo_requests (created_at desc);

create index if not exists demo_requests_work_email_idx
  on public.demo_requests (lower(work_email));

-- 🔴 ROW LEVEL SECURITY ON, WITH NO POLICY.
--
-- The site writes with the service-role key, which bypasses RLS. Enabling RLS
-- and granting nothing means the anon and authenticated keys - the ones that
-- can reach the browser - can neither read nor write this table.
alter table public.demo_requests enable row level security;

comment on table public.demo_requests is
  'Requests for a personalised Looped walkthrough, from /demo. Separate from waitlist_signups by design. Written only by the site''s server-side route using the service-role key. RLS is on with no policy.';
