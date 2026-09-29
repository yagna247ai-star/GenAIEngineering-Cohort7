# Use-Case Finding - Marketing Pipeline (D.A.R.E Discover Output)

## Inventory (12 ideas -> 5 Shortlisted)
We evaluated 12 ideas from interviews + Kore.ai deployments. Scored on Value (Pipeline $, Time saved) vs Feasibility (Data, Integration, Risk).

### Scoring (1-5)
| # | Use Case | Description | Value | Feas | Risk | Total | D.A.R.E Notes |
|---|---|---|---|---|---|---|---|
| UC1 | **AI Lead Capture & Qualification Agent** | Conversational agent on Web/WhatsApp captures lead, asks BANT, scores Hot/Warm/Cold | 5 | 4 | 2 | **12** | Quick win, needs only CRM + KB |
| UC2 | AI Campaign & Content Co-Pilot | Generate email variants, landing copy, ad creatives from brand voice | 4 | 2 | 3 | 9 | Needs brand corpus, phase 2 |
| UC3 | **Autonomous Nurture Orchestrator** | Hot->book meeting, Warm->7-day personalized WhatsApp/Email drip, Cold->newsletter | 5 | 3 | 2 | **11** | Pairs with UC1, same data |
| UC4 | Marketing-Sales Handoff & Pipeline Copilot | Auto-create deal, assign SDR, Slack notify, forecast health dashboard | 4 | 3 | 3 | 10 | Needs deep CRM, phase 2 |
| UC5 | Intelligence Agent (Competitor/Customer Sentiment) | Scrape reviews, competitor pricing, sentiment on lost deals | 3 | 2 | 4 | 9 | Data heavy, future |

> **Full list of 7 dropped ideas:** Ad budget optimizer, SEO blog auto-writer, Influencer matcher, Chat-to-Cart, Voice call SDR, Referral engine, Churn predictor - all higher effort or disconnected from immediate pipeline leak.

## Deep Dive: Top 2 (MVP Scope)

### UC1 - Lead Capture & Qualification Agent
- **User:** Website visitor / WhatsApp lead
- **Flow:** "Pricing for 50 users?" -> Bot asks Name, Email, Company, Employee count, Use-case, Timeline, Budget band -> LLM extracts + validates -> Scores via rules + LLM
  - Hot (BANT 4/4): Instantly create CRM + book calendar + Slack SDR
  - Warm (2-3/4): Enroll nurture
  - Cold (0-1/4): Suppress + newsletter opt-in
- **Inputs:** Product KB (pricing, FAQs), BANT rubric
- **Success:** % leads qualified, response time <2 min, qualification accuracy >85%
- **Effort:** 2 weeks build

### UC3 - Nurture Orchestrator
- **User:** Warm lead who didn't book
- **Flow:** Day1: Personalized email with case study relevant to industry. Day3: WhatsApp follow-up with ROI calc. Day7: "Still interested? Book slot" -> if yes, route to UC1 Hot path
- **Personalization:** Uses industry + pain point from UC1 answers + RAG over case studies
- **Success:** Re-activation rate, Meetings from nurture, Unsubscribe <2%
- **Effort:** 1.5 weeks build (reuses CRM + email infra)

## Prioritization Matrix

```
        High Value
            ^
    UC1 *   |   UC3 *
            |   UC4 *
            |
    UC2 *   |   UC5 *
            +----------------> High Feasibility
```

**MVP Choice: UC1 + UC3 Combined = "Lead-to-Meeting AI Agent"**
- **Why combined:** Same pipeline, same data, sequential. Building UC1 without UC3 leaks Warm leads; building UC3 without UC1 has no leads to nurture.
- **Why not others:** UC2 needs brand voice training data not available Day1. UC4/5 need data warehouse maturity.
- **Kore.ai mapping:** UC1 = XO Platform + Search AI; UC3 = Agent AI + Integration Hub (email/WhatsApp).

## What MVP Will NOT Do (Non-Goals for Phase 1)
- No auto-generated ad creatives/images (UC2)
- No predictive churn/forecast (UC5)
- No voice calling (future)
- No multi-language beyond EN (add later via Kore.ai language pack)

## Assumptions & Open Questions
- Assumption: B2B, HubSpot/Salesforce, Website + WhatsApp as channels, avg deal $2k-10k
- Open: Confirm ICP (e.g., "Series A SaaS, 50-500 employees, Founder/Head of Marketing") - will tune scoring
- Need: BANT weights from sales lead before Architect gate

## Next: Architect Phase will detail flows for UC1+UC3 only.
