# Cohort Employer Mix & Pre-Batch Survey — On-Call Intensity Variation

> Gap addressed: No cohort employer-mix file existed to account for on-call intensity variation across employer types. This document adds the missing file and recommends a pre-batch survey.

## 1. Why Employer Mix Matters

On-call intensity, stand-up cadence, and after-hours availability vary systematically by employer type. Scheduling live sessions, office hours, and assignment deadlines without this mix risks low attendance and learner fatigue.

| Employer Type | Typical On-Call / After-Hours Intensity | Typical Stand-Up Window (IST) | Implication for Cohort Ops |
|---|---|---|---|
| **Product** (e.g., SaaS, consumer tech, startups product orgs) | Low–Medium; pager for prod incidents only, usually follow-the-sun or infrequent rotation (1 in 4–8 weeks). | 10:00–11:30 IST (stand-up), flexible focus time after. Highest availability for evening sessions (19:00–21:00 IST). | Prefer evening deep-dives; can accept weekend hack windows. |
| **Services** (e.g., IT services, consulting, SI) | Medium–High; client-driven escalations, billable shift overlap with US/EU clients. Weekly client stand-ups often early/late. | 08:30–10:00 IST or 18:00–20:00 IST (client sync). Frequent 14:00–16:00 IST internal stand-ups. | Avoid late-evening mandatory sessions on weekdays; offer async recordings + alternate morning slot. |
| **GCC — Global Capability Center** (enterprise GCCs) | Medium; strong process, US/EU overlap windows (17:00–22:00 IST overlap), rotational on-call for platform teams. | 12:00–15:00 IST (overlap with HQ), sometimes 18:30 IST scrum. | Mid-day lunch/hands-on works; late-evening on-call weeks need catch-up provision. |
| Other (GCC-adjacent, captive) | Varies; treat as GCC unless surveyed. | Survey to confirm. | Capture explicitly. |

**Key takeaway:** Do not assume uniform availability. Product learners tolerate 20:00 IST live builds; Services/GCC learners on active on-call or US-overlap may not. Collect mix *before* the batch calendar is locked.

## 2. Recommendation: Pre-Batch Survey (Run Before Day 1)

Run a **pre-batch survey at T-7 to T-3 days before cohort start** (during onboarding) to map employer-type distribution and constrain scheduling.

### Required Questions (exact gap items)

1. **Employer type** — Single select: `Product` / `Services` / `GCC` / `Startup (product)` / `Other` (with free text for company name optional). *Do not collect sensitive employer-internal data; type only.*
2. **Stand-up / core overlap time** — `What time is your daily stand-up / core overlap window?` Single select or free text: `08:00–09:30 IST` / `09:30–11:00 IST` / `11:00–14:00 IST` / `14:00–16:00 IST` / `17:00–20:00 IST` / `No fixed stand-up` / `Varies by rotation` (+ text field).
3. **On-call frequency** — `How often are you on-call or expected to respond after hours?` Single select: `Never / Rarely` / `1 week per month` / `1 week per 2 weeks` / `Most weeks (client/GCC overlap)` / `Currently on-call this batch window (dates)`.

### Recommended Additions (keep short — 2 min total)

4. Time zone / work location: `IST` / `IST + US overlap shift` / `Other`.
5. Preferred live-session window (rank): `Morning 08:00–10:00` / `Lunch 12:00–14:00` / `Evening 19:00–21:00` / `Weekend` / `Async-only`.
6. Upcoming PTO / release freeze window that conflicts with batch dates (optional free text).

> Survey must be **anonymous-optional** (allow alias), GDPR/DPDP-aligned, and used only for scheduling. Store aggregates, not individual employer attribution, in the published mix file.

## 3. How to Use Results

1. **Compute mix:** `% Product vs % Services vs % GCC` from Q1. Example from past batches: 30% Product / 45% Services / 25% GCC — actual to be filled from survey.
2. **Derive constraints:**
   - If Services+GCC > 50% with stand-ups at 18:00–20:00 IST, move mandatory live sessions out of that window; keep 10:00–11:00 or 20:30+ optional.
   - If >30% report weekly on-call, schedule no single-point-of-failure deadlines; offer 48h grace and async catch-up lab.
3. **Publish:** Update Section 4 below with anonymized aggregate mix within 48h of survey close. Do not publish raw rows.
4. **Calendar:** Lock batch calendar only after step 1; revisit at mid-batch if on-call rotation changes (quick 1-question pulse).

## 4. Cohort Mix — To Be Filled From Survey

> Replace placeholder on survey close. Keep anonymized aggregates only.

| Metric | Value (fill post-survey) | n |
|---|---|---|
| Employer mix — Product | __% | __/N |
| Employer mix — Services | __% | __/N |
| Employer mix — GCC | __% | __/N |
| Employer mix — Other | __% | __/N |
| Median stand-up window | __ IST |  |
| On-call weekly or more | __% | __/N |
| Preferred slot winner | __ |  |
| Survey response rate | __% | __/invited |

*Raw response CSV location (private, not committed): `data/private/cohort_pre_batch_responses_YYYY-MM-DD.csv` — gitignored. Template for collection:* `data/cohort_pre_batch_survey_template.csv`.

## 5. Collection Template

- Google Form / Typeform with Q1–Q6 above (copy from template). Link in onboarding email + LMS banner.
- CSV template committed for offline/air-gapped use: `data/cohort_pre_batch_survey_template.csv` (headers only, no PII).
- Deadline: T-3 days; reminder at T-5 days if <60% response.

## 6. Privacy & Handling

- Collect minimal data; company name optional.
- Do not commit individual responses; commit only anonymized aggregates in this doc.
- Retention: delete raw sheet 30 days after batch ends.

## 7. Checklist for Batch Ops

- [ ] Create form from template (5 min)
- [ ] Send to cohort at onboarding (T-7 days)
- [ ] Close at T-3 days, fill Section 4 above
- [ ] Adjust live-session windows and deadline policy based on mix
- [ ] Announce calendar lock in cohort channel

---
*File added to close gap: cohort employer-mix visibility for scheduling under variable on-call intensity (Product vs Services vs GCC). Next batch: replace Section 4 placeholder with real aggregate.*
