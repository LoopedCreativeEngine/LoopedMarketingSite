-- Waitlist signups for the Looped marketing site.
--
-- Apply this once, to the Supabase project named in SUPABASE_URL, before the
-- site is pointed at it. Until it exists the waitlist endpoint refuses valid
-- signups with a 503 rather than accepting leads it cannot store.
--
-- Everything the site collects is here and nothing else. There is no phone
-- number, no IP address and no free-text notes column, because a waitlist does
-- not need them and each one is another thing to hold safely.

create table if not exists public.waitlist_signups (
  id                              uuid primary key,
  created_at                      timestamptz not null default now(),

  -- What the visitor told us.
  name                            text        not null,
  work_email                      text        not null,
  company                         text        not null,
  portfolio_size_or_event_count   text        not null default '',

  -- Where the visit came from, carried from the landing page.
  landing_page                    text        not null default '',
  source_page                     text        not null default '',
  referrer                        text        not null default '',
  utm_source                      text        not null default '',
  utm_medium                      text        not null default '',
  utm_campaign                    text        not null default '',
  utm_content                     text        not null default '',
  utm_term                        text        not null default '',

  -- Lifecycle and consent.
  status                          text        not null default 'new',
  consent_version                 text        not null
);

-- 🔴 THE DEDUPE. One row per address, case-insensitively.
--
-- This is what makes a second submission from the same person a graceful
-- "you are already on the list" instead of a duplicate lead. The application
-- lowercases the address before inserting; the index is on lower() as well so
-- a row written by any other route still cannot duplicate an existing address.
create unique index if not exists waitlist_signups_work_email_key
  on public.waitlist_signups (lower(work_email));

-- Newest first is how the list is always read.
create index if not exists waitlist_signups_created_at_idx
  on public.waitlist_signups (created_at desc);

-- 🔴 ROW LEVEL SECURITY ON, WITH NO POLICY.
--
-- The site writes with the service-role key, which bypasses RLS. Enabling RLS
-- and granting nothing means the anon and authenticated keys - the ones that
-- can reach the browser - can neither read nor write this table. A waitlist
-- that any visitor could read is a leak of every other visitor.
alter table public.waitlist_signups enable row level security;

comment on table public.waitlist_signups is
  'Marketing site early-access waitlist. Written only by the site''s server-side route using the service-role key. RLS is on with no policy, so no browser-reachable key can read it.';
