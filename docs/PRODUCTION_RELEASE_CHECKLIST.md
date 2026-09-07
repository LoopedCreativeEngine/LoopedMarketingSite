# Looped marketing site: production release checklist

Work through this in order. Every step is either a founder action or a command
you can run and read the output of. Nothing here is optional, and nothing here
happens automatically as a side effect of deploying.

The site is built to be safe when unconfigured. Before the environment below is
set, the waitlist refuses signups rather than losing them, no analytics event is
sent, and nothing is indexable. That is deliberate: the failure mode of an
unfinished launch is a visible refusal, never a silently dropped lead.

---

## 1. Release SHA

- Branch: `review/homepage-message-update-2026-09-06`
- Record the exact commit being released before anything else:

```bash
git -C /home/ubuntu/looped-mktg-approved-review rev-parse HEAD
```

Write it into the release note. Every step below refers to that build. If any
code changes after this point, start the checklist again from here.

---

## 2. Production domain and DNS

**Founder decision required.** No production domain is committed anywhere in
this repository, so one must be chosen before the metadata means anything.

- [ ] Choose the production hostname (for example `www.looped.<tld>`).
- [ ] Point an A/AAAA record, or a CNAME, at the host that will serve the site.
- [ ] Decide the apex behaviour: either the apex redirects to `www`, or `www`
      redirects to the apex. Pick one and make the other a 301, so a single
      canonical origin exists. Both being reachable and both serving content
      splits search signals and makes the canonical tags wrong.
- [ ] Confirm propagation: `dig +short <hostname>`.

## 3. HTTPS

- [ ] A valid certificate covers the exact hostname in `NEXT_PUBLIC_SITE_URL`.
- [ ] HTTP redirects to HTTPS with a 301.
- [ ] Confirm: `curl -sI https://<hostname> | head -1` returns `200`, and
      `curl -sI http://<hostname> | head -1` returns a `301`.

## 4. Environment variables

Set on the production host. See `.env.example` for the full annotated list.

| Variable | Required | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Yes** | Public origin, no trailing slash. Drives metadataBase, canonicals, sitemap, robots. |
| `NEXT_PUBLIC_ALLOW_INDEXING` | **Yes, at launch** | Exactly `true`, and only on the production domain. Anything else keeps the site closed to crawlers. |
| `SUPABASE_URL` | **Yes** | The Supabase project holding the waitlist. |
| `SUPABASE_SERVICE_ROLE_KEY` | **Yes** | Server-only secret. Never `NEXT_PUBLIC_`. Never in the repository. |
| `SUPABASE_WAITLIST_TABLE` | No | Defaults to `waitlist_signups`. |
| `WAITLIST_NOTIFY_SLACK_WEBHOOK` | Recommended | Slack incoming webhook for signup alerts. |
| `WAITLIST_NOTIFY_WEBHOOK_URL` | Alternative | Any endpoint that accepts a JSON POST. |
| `NEXT_PUBLIC_POSTHOG_KEY` | Recommended | Without it, no conversion events are sent. |
| `NEXT_PUBLIC_POSTHOG_HOST` | No | Defaults to `https://eu.i.posthog.com`. |
| `WAITLIST_FILE_STORE` | **No** | Review hosts only. Must be unset in production. |

- [ ] `NEXT_PUBLIC_*` values are correct for the production domain. They are
      compiled into the client bundle at build time, so changing one means a
      rebuild, not a restart.
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is set as a secret, not in a committed file.
- [ ] `WAITLIST_FILE_STORE` is **not** set.

## 5. Database schema

**Founder action required.** The site does not create its own table.

- [ ] Apply `supabase/migrations/20260907120000_waitlist_signups.sql` to the
      production Supabase project (SQL editor, or `supabase db push`).
- [ ] Confirm the unique index exists: a second insert of the same address must
      fail with SQLSTATE `23505`, which is what the app turns into a graceful
      "you are already on the list".
- [ ] Confirm row level security is enabled with no policy, so no
      browser-reachable key can read the table.

## 6. Analytics configuration

**Founder action required if conversion tracking is wanted at launch.**

- [ ] Create or choose the PostHog project.
- [ ] Set `NEXT_PUBLIC_POSTHOG_KEY` (and `NEXT_PUBLIC_POSTHOG_HOST` if the
      project is not on EU cloud) and rebuild.
- [ ] After the smoke test, confirm these eight events arrive:
      `page_view`, `waitlist_cta_click`, `see_looped_in_action_click`,
      `waitlist_form_start`, `waitlist_form_submit`, `waitlist_success`,
      `newsroom_signup_click`, `newsroom_article_click`.
- [ ] Confirm each carries `path`, `referrer`, `landing_page` and the five
      `utm_*` properties.

## 7. Notification configuration

- [ ] Create the Slack incoming webhook (or the receiving endpoint) and set the
      variable.
- [ ] Send a test signup and confirm the message arrives.
- [ ] Remember the contract: a notification failure is logged and swallowed. It
      can never fail a signup, so a silent notifier means checking the store,
      not assuming there were no leads.

## 8. Privacy

- [ ] Publish the real privacy policy before any paid campaign drives traffic.
      `/privacy` currently says so itself and is a placeholder.
- [ ] Make sure the policy covers the analytics events above and the waitlist
      data retained in Supabase.

## 9. Build

```bash
cd /home/ubuntu/looped-mktg-approved-review
npm ci
npm run lint
npm run build
```

- [ ] Lint clean.
- [ ] Build succeeds with no type errors.
- [ ] `.next/BUILD_ID` is newer than the release commit's timestamp, so the
      artefact provably contains the release.

## 10. Smoke test on production

Replace `<host>` with the production origin.

```bash
# Every public route answers.
for p in / /how-it-works /newsroom /demo /privacy; do
  printf '%-16s ' "$p"; curl -s -o /dev/null -w '%{http_code}\n' "https://<host>$p"
done

# Indexing is ON and the shelved routes are excluded.
curl -s https://<host>/robots.txt
curl -s https://<host>/sitemap.xml | grep -c '<loc>'
curl -s https://<host>/sitemap.xml | grep -ci 'platform\|pillars'   # must be 0

# The shelved routes still refuse indexing.
curl -s https://<host>/platform | grep -o '<meta name="robots"[^>]*>'

# The store and notifier the running build actually resolved.
curl -s https://<host>/api/waitlist    # {"ok":true,"store":"supabase","notifier":"slack"}

# 404 behaviour.
curl -s -o /dev/null -w '%{http_code}\n' https://<host>/no-such-page   # 404
```

- [ ] `/api/waitlist` reports `"store":"supabase"`. If it reports
      `"unconfigured"`, **stop**: the site would refuse every signup.
- [ ] Submit one real signup through the form. Confirm the row is in Supabase
      and the notification arrived.
- [ ] Submit the same address again. Confirm the friendly "already on the list"
      response and that no second row was created.
- [ ] Confirm the Open Graph card renders: paste the URL into Slack, or check
      `https://<host>/opengraph-image`.

## 11. Rollback

The site is a static-plus-route-handler Next build with no destructive
migrations, so rollback is redeploying the previous commit.

- [ ] Record the currently deployed SHA **before** releasing, so there is
      something to go back to.
- [ ] To roll back: redeploy the previous SHA and rebuild. No database change is
      needed; the waitlist table is additive and the previous build either
      writes to the same table or refuses, and never destroys rows.
- [ ] If the rollback is because of the waitlist specifically, unset
      `NEXT_PUBLIC_ALLOW_INDEXING` as well, so a broken launch stops being
      crawled while it is fixed.
- [ ] The waitlist table is never dropped as part of a rollback. Leads collected
      by the bad release are still leads.

## 12. Post-release verification

Within an hour of release:

- [ ] All public routes still 200.
- [ ] At least one `page_view` visible in PostHog.
- [ ] A test signup end to end: row written, notification received.
- [ ] `https://<host>/sitemap.xml` reachable and contains only public pages.
- [ ] Submit the sitemap in Google Search Console.
- [ ] Confirm in Search Console that `/platform` and `/pillars/*` are excluded
      by noindex, not indexed.

Within a week:

- [ ] Check the waitlist table for spam patterns. The honeypot and the
      per-instance rate limit stop the obvious cases; if real spam appears,
      that is the signal to add a captcha or a platform-level rate limit.
- [ ] Export the list and confirm it loads cleanly:

```sql
select created_at, name, work_email, company, portfolio_size_or_event_count,
       utm_source, utm_medium, utm_campaign, source_page, referrer, status
from public.waitlist_signups
order by created_at desc;
```

---

## Known limitations, written down on purpose

- **Rate limiting is per instance and in memory.** Several instances behind a
  load balancer each keep their own counters, so the effective limit is the
  configured limit times the instance count. Adequate for a waitlist; if the
  site is fronted by a platform with its own rate limiting, prefer that.
- **The file store is not for production.** On a serverless host a file write
  appears to succeed and vanishes with the instance. It is opt-in via
  `WAITLIST_FILE_STORE` and must stay unset in production.
- **No production domain is chosen in the repository.** Until
  `NEXT_PUBLIC_SITE_URL` is set, canonicals and the sitemap point at localhost.
- **`/privacy` is a placeholder.** It must be replaced before paid traffic.
