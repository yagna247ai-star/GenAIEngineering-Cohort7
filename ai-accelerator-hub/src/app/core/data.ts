// AI Accelerator Hub — Journalism Edition — Single source of truth (Core layer)
export interface Topic { pillar: string; level: string; time: string; title: string; desc: string; job: string; format: string; outcome: string; tryIt: string; }
export interface Workbook { n: string; title: string; desc: string; time: string; proof: string; guardrail: string; level: string; editorial: string; }
export interface Mission { tag: string; title: string; desc: string; eval: string; }
export interface Level { n: string; title: string; desc: string; meta: string; proof: string; includes: string; }
export interface GlossaryTerm { term: string; alias: string; def: string; journalist: string; risk: string; riskClass: string; }
export interface StuckItem { icon: string; title: string; desc: string; fix: string; }

export const SESSION_PROMPT = `You are an enterprise editorial assistant for AI Accelerator Hub — JOURNALISM EDITION.
GOAL: Transform the user’s raw tip + sources into a publish-ready brief.
GUARDRAILS: Cite every claim [1][2], flag uncertainty (high/med/low), redact PII, refuse off-scope, add “Do not publish if…” checklist.
CONTEXT: <paste 2–3 trusted sources, max 800 tokens, with titles + dates>
TASK: 1) List claims needing verification 2) Draft 180-word brief with citations 3) Confidence tags 4) Open questions for the reporter
OUTPUT: Markdown with [citations], confidence tags, and a “Do not publish if citation coverage <90% or any PII remains” gate.`;

export const PILLARS = ['Foundations','Reporting','Verification','Production','Audience','Ethics'] as const;

export const TOPICS: Topic[] = [
  { pillar:'Foundations', level:'L1', time:'18 min', title:'The AI Generalist Toolkit for Newsrooms', desc:'Models + prompts + context + evals as a desk. When to prompt, when to orchestrate.', job:'Explain AI to newsroom', format:'Read + Try', outcome:'Explain the desk model to your editor; choose prompt vs workflow correctly.', tryIt:'Try: Map your next story as desk roles → researcher, drafter, gate.' },
  { pillar:'Foundations', level:'L1', time:'22 min', title:'How LLMs Actually Work (For Reporters)', desc:'Tokens, attention, and why sounding right ≠ evidence.', job:'Interview an AI source', format:'Read', outcome:'Interview an AI builder without being misled by fluent nonsense.', tryIt:'Try: Ask a model builder “what is a token?” and verify.' },
  { pillar:'Foundations', level:'L1', time:'25 min', title:'Prompt Engineering vs Context Engineering', desc:'Twin levers for reliability: precise instruction vs evidence window.', job:'Write a standards-grade prompt', format:'Workshop', outcome:'Write a prompt that demands citations + confidence and design its evidence window.', tryIt:'Try: Turn a vague brief into a gated prompt.' },
  { pillar:'Reporting', level:'L2', time:'20 min', title:'Research at Speed — Synthesis without Fabrication', desc:'Turn 20 tabs into a cited synthesis with a standards checklist.', job:'Background a breaking story', format:'Workshop', outcome:'Produce a cited synthesis that passes the newsroom checklist.', tryIt:'Try: Synthesize 5 tabs with citations.' },
  { pillar:'Reporting', level:'L2', time:'30 min', title:'Interview Synthesis — From Transcript to Nut Graf', desc:'Transcript → claims → gap analysis → follow-up questions.', job:'Produce a post-interview brief', format:'Lab', outcome:'Turn a 30-min transcript into a nut graf + gaps in 10 min.', tryIt:'Try: Paste a transcript, get claims → gaps.' },
  { pillar:'Reporting', level:'L2', time:'28 min', title:'FOIA to Context Window', desc:'Chunk, de-duplicate, and cite FOIA dumps for RAG.', job:'Build a FOIA evidence locker', format:'Lab', outcome:'Build a RAG locker over 50 FOIA pages with citations.', tryIt:'Try: Chunk 5 FOIA pages, query one.' },
  { pillar:'Verification', level:'L2', time:'24 min', title:'Verification Protocols for Generative Output', desc:'Citation coverage, confidence tags, and the Do-not-publish gate.', job:'Fact-check an AI draft', format:'Checklist', outcome:'Run a draft through coverage + confidence + PII gates.', tryIt:'Try: Score a draft — coverage ≥90%?' },
  { pillar:'Verification', level:'L2', time:'20 min', title:'PII & Source Protection', desc:'Redaction, permissions, and when not to paste a source.', job:'Handle sensitive material', format:'Policy', outcome:'Handle a sensitive source without leaking PII.', tryIt:'Try: Redact a transcript before paste.' },
  { pillar:'Verification', level:'L3', time:'26 min', title:'Bias & Framing Audits', desc:'Audit prompt and retrieval for framing, omission, and amplification.', job:'Audit a generated explainer', format:'Eval', outcome:'Audit an explainer for framing and fix it.', tryIt:'Try: Red-team a political hed.' },
  { pillar:'Production', level:'L3', time:'32 min', title:'From Prompt to Newsroom Workflow', desc:'Single prompt → multi-step system with human gate and logs.', job:'Design a tip-to-brief workflow', format:'System', outcome:'Design a tip→brief workflow with gate + fallback.', tryIt:'Try: Map tip → retrieval → draft → gate.' },
  { pillar:'Production', level:'L3', time:'35 min', title:'Agents for the Assignment Desk', desc:'Build an inbox → brief agent with cost, latency, and fallback.', job:'Automate the morning brief', format:'Build', outcome:'Ship an inbox→brief agent at <$0.05/run.', tryIt:'Try: Tip → triage → brief demo.' },
  { pillar:'Production', level:'L4', time:'40 min', title:'RAG — Your Archive as Context', desc:'Your 10 years of clips as a citable retrieval layer.', job:'Launch an archive copilot', format:'Build', outcome:'Launch a citable archive copilot with permissions.', tryIt:'Try: Query 10 years of clips.' },
  { pillar:'Audience', level:'L4', time:'22 min', title:'Explain Like I’m a Reader — Controlled Generation', desc:'Brand voice + explainer generation with legal-reviewed constraints.', job:'Produce an explainer series', format:'System', outcome:'Produce an explainer series with voice consistency.', tryIt:'Try: Generate 3 explainers, check voice.' },
  { pillar:'Audience', level:'L4', time:'18 min', title:'Distribution & Analytics with AI', desc:'Headline, hed, and audience tests without clickbait.', job:'Test 3 heds with evals', format:'Lab', outcome:'Test 3 heds with evals, not clickbait.', tryIt:'Try: A/B 3 heds, score.' },
  { pillar:'Ethics', level:'L5', time:'20 min', title:'Editorial Policy for Generative AI', desc:'Attribution, disclosure, and when to byline the system.', job:'Draft your newsroom policy', format:'Policy', outcome:'Draft a disclosure policy your legal team approves.', tryIt:'Try: Byline decision tree.' },
  { pillar:'Ethics', level:'L5', time:'18 min', title:'Leadership — ROI & Risk for Editors', desc:'Cost, latency, trust, and team enablement metrics.', job:'Pitch the budget', format:'Memo', outcome:'Pitch AI with ROI + risk, not hype.', tryIt:'Try: One-page memo with metrics.' },
  { pillar:'Foundations', level:'L1', time:'15 min', title:'Evals & Red-Teaming for Journalists', desc:'Make reliability measurable: evals before anecdotes.', job:'Red-team your beat prompt', format:'Eval', outcome:'Make reliability measurable with 4 evals.', tryIt:'Try: Score hallucination <5%.' },
  { pillar:'Production', level:'L4', time:'30 min', title:'VCA Article Server — From Demo to Deploy', desc:'Containerize, health-check, and hand off to VCA with rollback.', job:'Deploy to VCA', format:'Deploy', outcome:'Deploy to VCA with health + rollback runbook.', tryIt:'Try: /health → 200 ok.' },
];

export const WORKBOOKS: Workbook[] = [
  { n:'01', title:'Source to Story — The Provenance Co-Pilot', desc:'Draft that cites. Verifies. Never invents a source. With a standards desk gate before publish.', time:'~90 min', proof:'1 cited draft + source map', guardrail:'Citation coverage ≥90% • Confidence tags', level:'Starter', editorial:'For reporters & fact-checkers' },
  { n:'02', title:'Evidence Locker — Context Engineering Lab', desc:'Turn archives, FOIA, and transcripts into a citable retrieval layer. Chunking that preserves meaning.', time:'~75 min', proof:'RAG over 20 docs', guardrail:'PII redaction • Permissions', level:'Core', editorial:'For researchers & archivists' },
  { n:'03', title:'Tip to Brief — Agent for the Desk', desc:'An assignment-desk agent: tip → triage → brief → human gate. Logged, cost-tracked, fallback-ready.', time:'~110 min', proof:'Brief agent demo', guardrail:'Human gate • Cost caps', level:'Builder', editorial:'For editors & producers' },
  { n:'04', title:'Standards Desk — Eval & Red-Team Sprint', desc:'Design evals, red-team your prompts, and ship with a fabrication-risk report your editor trusts.', time:'~60 min', proof:'Eval dashboard', guardrail:'Hallucination <5% • Bias audit', level:'Safety', editorial:'For standards & ethics' },
  { n:'05', title:'From Demo to Deploy — VCA Newsroom Handoff', desc:'Containerize, monitor, and deploy to the VCA article server with health checks and rollback.', time:'~95 min', proof:'VCA deploy + runbook', guardrail:'Health + rollback • Audit log', level:'Enterprise', editorial:'For product & dev' },
];

export interface WorkbookDetail { n: string; title: string; subtitle: string; time: string; level: string; editorial: string; overview: string; reading: { title: string; desc: string; time: string; source: string }[]; steps: { t: string; d: string; prompt?: string; check?: string }[]; fixes: string[]; proof: string; next: string; }

export const WORKBOOK_DETAILS: WorkbookDetail[] = [
  {
    n:'01', title:'Source to Story — The Provenance Co-Pilot', subtitle:'From three sources to a cited 180-word brief — with a standards gate before publish.',
    time:'~90 min', level:'Starter', editorial:'For reporters & fact-checkers',
    overview:'AI Accelerator Hub — exact steps, prompts, checks, fixes, and proof. You will draft with provenance, not hallucination: every sentence is traceable to a source span.',
    reading:[
      { title:'Reuters Handbook — Sources & Verification', desc:'When to name a source, when to anonymize, how to corroborate. Journalism-grade provenance, not AI paraphrase.', time:'12 min', source:'Reuters Handbook of Journalism' },
      { title:'AP Stylebook — Citation & Attribution', desc:'How to attribute, when to bracket, how to signal confidence. The stylebook as guardrail.', time:'8 min', source:'Associated Press' },
      { title:'Verification Handbook — Provenance', desc:'Provenance as product: claim → span → source. Why verbatim spans beat summaries.', time:'15 min', source:'Poynter / EJC' },
      { title:'Confidence Tags — High/Med/Low', desc:'Signal uncertainty like an editor: high = two sources + doc, med = one strong, low = single unverified.', time:'6 min', source:'AI Accelerator Hub' },
    ],
    steps:[
      { t:'Step 1 — Collect sources', d:'Gather 2–3 trusted sources. Keep them concise and preserve titles + dates. Reject single-source runs.', check:'Sources present? Dates included?' },
      { t:'Step 2 — Run the provenance prompt', d:'Use the AI Accelerator Hub editorial system prompt. Demand citations [1][2], confidence high/med/low, and a Do-not-publish checklist.', prompt: SESSION_PROMPT, check:'Every claim has [citation]? Confidence tags present?' },
      { t:'Step 3 — Standards check', d:'Run citation coverage = cited claims / total claims. Flag <90% as BLOCK. Check PII — redact names, contacts before re-run.', check:'Coverage ≥90%? PII 0?'},
      { t:'Step 4 — Ship proof', d:'Export source map (claim → [1] span) + 180-word brief. Peer review via fix prompts.', check:'Source map file + brief ready for portfolio?' },
    ],
    fixes:['Coverage <90%: Add one more source, shrink context to 600 tokens, re-run.', 'Hallucinated citation: Re-chunk with sentence boundaries, demand verbatim spans.', 'PII leak: Redact before paste, use Evidence Locker retrieval (Workbook 02).'],
    proof:'Deliverable: 1 cited 180-word brief + source map JSON (claim → [source] span). Evaluated for citation coverage ≥90%, PII 0.',
    next:'Next: Workbook 02 — Evidence Locker, then Lab proof Fact-Checked Brief Generator.'
  },
  {
    n:'02', title:'Evidence Locker — Context Engineering Lab', subtitle:'Turn archives, FOIA, and transcripts into a citable retrieval layer that remembers provenance.',
    time:'~75 min', level:'Core', editorial:'For researchers & archivists',
    overview:'AI Accelerator Hub Context Engineering is evidence-window design, not clever prompting. You will build a lab-grade locker that chunks meaningfully and cites precisely.',
    reading:[
      { title:'FOIA Machine — Request to Chunk', desc:'From request language to responsive docs to de-duplicated chunks. What to keep, what to drop.', time:'10 min', source:'Reporters Committee for Freedom of the Press' },
      { title:'RAG for Newsrooms — Archive as Context', desc:'Your 10 years of clips as a citable retrieval layer. Embedding titles + dates so provenance survives chunking.', time:'14 min', source:'Columbia Journalism Review' },
      { title:'PII Redaction Playbook', desc:'What counts as PII in a newsroom, how to redact before embedding, how to permission restricted docs.', time:'12 min', source:'Poynter' },
      { title:'Chunking — Meaning Over Tokens', desc:'800 tokens, 100 overlap, paragraph boundaries — preserving meaning beats maximizing window.', time:'8 min', source:'AI Accelerator Hub' },
    ],
    steps:[
      { t:'Step 1 — Ingest & permission', d:'List archives/FOIA/transcripts. Tag permission level (publish/internal/restricted). Drop restricted from index.', check:'Permission tags applied?' },
      { t:'Step 2 — Meaningful chunking', d:'Chunk 800 tokens, 100 overlap, on paragraph boundaries. Embed title + date in each chunk. De-duplicate via hash.', prompt:'Chunk: title — date — text — hash', check:'Avg chunk 700–900 tokens? Date preserved?' },
      { t:'Step 3 — Retrieval design', d:'Vector search k=8, filtered by permission + redacted PII. Return spans, not answers.', check:'Retrieval returns spans with [id] + title?' },
      { t:'Step 4 — Prove it', d:'Query “FOIA locker” — expect 3 relevant chunks with citations. Measure precision + redaction pass.', check:'Precision ≥0.8, redaction pass = 100%?' },
    ],
    fixes:['Retrieval miss: Increase k to 12, add title embeddings, re-chunk on headings.', 'PII in chunks: Run redaction pass before embedding, re-index.', 'Date loss: Embed date token in chunk header.'],
    proof:'Deliverable: RAG over 20 docs with permission filter + redaction pass + sample query log.',
    next:'Next: Workbook 03 — Tip to Brief Agent uses this locker as evidence window.'
  },
  {
    n:'03', title:'Tip to Brief — Agent for the Desk', subtitle:'An assignment-desk agent: tip → triage → brief → human gate, logged and cost-capped.',
    time:'~110 min', level:'Builder', editorial:'For editors & producers',
    overview:'From single prompt to newsroom system. This workbook is a multi-step AI Accelerator Hub system with checks, human gate, and fallback.',
    reading:[
      { title:'Assignment Desk — Tip Triage', desc:'Spot news vs enterprise vs FOIA: how to triage, assign confidence, and build a source plan before drafting.', time:'10 min', source:'Newsroom Labs / AP' },
      { title:'Human-in-the-Loop Gates', desc:'When to block, when to allow: coverage ≥90%, confidence tags, and the “Do-not-publish” gate as code.', time:'12 min', source:'AI Accelerator Hub Standards Desk' },
      { title:'Cost & Latency Caps', desc:'Why k=8 vs k=6 matters: latency, cost per run, and caching embeddings for the morning brief.', time:'8 min', source:'Engineering for Editors' },
      { title:'Fallback Briefs — Open Questions', desc:'When the gate blocks, don’t hallucinate filler — ship open questions that help the reporter.', time:'7 min', source:'Poynter' },
    ],
    steps:[
      { t:'Step 1 — Tip triage', d:'Classify tip: spot news / enterprise / FOIA. Assign confidence + source plan.', check:'Triage label + source plan present?' },
      { t:'Step 2 — Retrieve & draft', d:'Call Evidence Locker (k=8) → provenance prompt → 120-word brief with [citations].', prompt:'Tip + retrieved chunks → brief [citations]', check:'Brief has citations + confidence?' },
      { t:'Step 3 — Human gate & logs', d:'Human gate blocks if coverage <90%. Log prompt, context hash, cost, latency.', check:'Gate log entry created? Cost < $0.05?' },
      { t:'Step 4 — Fallback', d:'If gate BLOCK, fallback to “needs reporting” brief with open questions, not hallucinated filler.', check:'Fallback brief has open questions, not invented claims?' },
    ],
    fixes:['Gate always BLOCK: Reduce context to 600 tokens, add one more source.', 'Cost spike: Cap k=6, cache embeddings, truncate log.', 'Hallucinated fallback: Enforce “open questions” template strictly.'],
    proof:'Deliverable: Brief agent demo with gate log, cost + latency, and fallback sample. Ready for Lab Interview Synthesis Agent.',
    next:'Next: Workbook 04 — Standards Desk Eval harnesses this agent.'
  },
  {
    n:'04', title:'Standards Desk — Eval & Red-Team Sprint', subtitle:'Design evals and red-team prompts until your editor trusts the report, not the anecdote.',
    time:'~60 min', level:'Safety', editorial:'For standards & ethics',
    overview:'Make trust measurable. AI Accelerator Hub eval pattern — citation coverage, hallucination rate, PII, bias — then red-team until hallucination <5%.',
    reading:[
      { title:'Evals Before Anecdotes', desc:'Why measurable evals beat “it looked good” — four metrics + thresholds for your beat.', time:'10 min', source:'AI Accelerator Hub Standards Desk' },
      { title:'Red-Teaming — 3 Adversarial Prompts', desc:'Leading question, missing source, synthetic PII — how to make your prompt fail on purpose.', time:'12 min', source:'Poynter / Partnership on AI' },
      { title:'Bias Rubric — Omission & Amplification', desc:'Audit prompt + retrieval for framing, omission, amplification — with before/after examples.', time:'10 min', source:'Reuters Institute' },
      { title:'Do-Not-Publish Gate — Dashboard', desc:'Ship a fabrication-risk report: dashboard + gate checklist that an editor can sign.', time:'8 min', source:'AI Accelerator Hub' },
    ],
    steps:[
      { t:'Step 1 — Define evals', d:'Citation coverage, hallucination rate, PII leak, bias rubric (omission/amplification). Baselines on 10 samples.', check:'Evals JSON has 4 metrics + thresholds?' },
      { t:'Step 2 — Red-team', d:'Adversarial prompts: leading question, missing source, synthetic PII. Log failures.', prompt:'Red-team prompt set (3 adversarial)', check:'3 failures logged?' },
      { t:'Step 3 — Fix & re-run', d:'Fix via chunking + prompt + guardrail. Re-run eval harness until hallucination <5%, PII 0.', check:'Hallucination <5%, PII 0 on re-run?' },
      { t:'Step 4 — Report', d:'Ship fabrication-risk report: before/after, eval dashboard, Do-not-publish gate.', check:'Report has dashboard + gate checklist?' },
    ],
    fixes:['Hallucination 8%: Enforce citation spans, shrink window, add “uncertain” token.', 'PII leak: Re-run redaction, block restricted docs from context.', 'Bias flagged: Audit prompt language, diversify retrieval.'],
    proof:'Deliverable: Eval dashboard JSON + red-team report + Do-not-publish gate. Gate for all Labs.',
    next:'Next: Workbook 05 — From Demo to Deploy seals it on VCA.'
  },
  {
    n:'05', title:'From Demo to Deploy — VCA Newsroom Handoff', subtitle:'Containerize, health-check, and hand off to the VCA article server — production-grade.',
    time:'~95 min', level:'Enterprise', editorial:'For product & dev',
    overview:'AI Accelerator Hub final workbook: from notebook to newsroom product. Containerized, health-checked, rollback-ready — the Kajabi-grade production finish: clean typography, high contrast, fast.',
    reading:[
      { title:'Docker for Newsrooms', desc:'node:20 build → nginx:stable serve dist/ai-accelerator-hub/browser — image <150MB, layer cache for VCA.', time:'10 min', source:'Docker + VCA Docs' },
      { title:'nginx — SPA Fallback & Health', desc:'try_files … /index.html + /health → 200 ok — why refresh 404s happen and how to fix.', time:'8 min', source:'nginx + VCA Docs' },
      { title:'Base-href & Sub-path Deploy', desc:'How to deploy under /your-path/ with --base-href without breaking assets or health.', time:'7 min', source:'AI Accelerator Hub' },
      { title:'Runbook — Health, Logs, Audit', desc:'Hands-off to standards desk: health, logs, cost, audit, Do-not-publish gate — with rollback.', time:'12 min', source:'Enterprise Runbook' },
    ],
    steps:[
      { t:'Step 1 — Containerize', d:'Dockerfile: node:20 build → nginx:stable serve dist/ai-accelerator-hub/browser. Copy nginx.conf.', check:'Image builds locally? <150MB?' },
      { t:'Step 2 — Health & base-href', d:'Verify /health → 200 ok, and base-href for sub-path. Test try_files … /index.html.', check:'/health 200? SPA fallback returns index.html?' },
      { t:'Step 3 — Deploy to VCA', d:'Push to VCA article server. Check logs, latency, and rollback procedure.', check:'Deploy URL live? Rollback doc ready?' },
      { t:'Step 4 — Hand off', d:'Runbook: health, logs, cost, audit, Do-not-publish gate. Demo to standards desk.', check:'Runbook + demo recorded?' },
    ],
    fixes:['/health 404: Copy nginx.conf to /etc/nginx/conf.d/default.conf correctly.', '404 on refresh: Ensure try_files … /index.html in nginx.', 'Base-href fail: Rebuild with --base-href /your-path/.'],
    proof:'Deliverable: VCA deploy URL + health 200 + runbook. Final portfolio proof.',
    next:'Next: Lab — VCA Deploy — Newsroom Product proves it end-to-end.'
  },
];

export const MISSIONS: Mission[] = [
  { tag:'PORTFOLIO', title:'Fact-Checked Brief Generator', desc:'Tip + 3 sources → cited brief with Do-not-publish checklist. Standards desk reviews.', eval:'Citation ≥90%, fabrication 0' },
  { tag:'PORTFOLIO', title:'Archive Copilot (Citable RAG)', desc:'10 years of clips as a retrieval layer — with permissions and PII redaction.', eval:'Retrieval precision + redaction' },
  { tag:'PORTFOLIO', title:'Interview Synthesis Agent', desc:'Transcript → claims → gap analysis → follow-up questions — in 10 minutes.', eval:'Claim recall + gap detection' },
  { tag:'PORTFOLIO', title:'Bias & Framing Audit', desc:'Stress-test a political explainer for omission and amplification. Ship the report.', eval:'Bias rubric, before/after' },
  { tag:'PORTFOLIO', title:'Controlled Explainer System', desc:'Consistent voice + legal-reviewed constraints for explainers at scale.', eval:'Voice consistency + constraint pass' },
  { tag:'PORTFOLIO', title:'VCA Deploy — Newsroom Product', desc:'Deploy a containerized product to VCA with health, logs, and rollback.', eval:'Deploy success + runbook' },
];

export const LEVELS: Level[] = [
  { n:'01', title:'Foundations — The Generalist Reporter Toolkit', desc:'LLM, diffusion, and the generalist stack. Learn when to prompt, when to orchestrate, and when to demand a citation.', meta:'Prompt × Context × Evals', proof:'Concept memo + prompt library', includes:'Session 01 • 18 topics • Evals' },
  { n:'02', title:'Craft — Research, Verification & Writing', desc:'Turn AI into a rigorous thought partner. Synthesis, interview, FOIA, and provenance-first drafting.', meta:'Research • Verify • Draft', proof:'Cited brief + source map', includes:'Workbooks 01–02 • Verification labs' },
  { n:'03', title:'Systems — Newsroom Workflows & Agents', desc:'From single prompts to multi-step systems. Pipelines with checks, human gates, and fallbacks.', meta:'Workflows • Agents • Logs', proof:'Tip-to-brief agent', includes:'Workbook 03 • Agent labs' },
  { n:'04', title:'Products — From Prototype to Published', desc:'Ship internal copilots, briefing products, and archive tools with observability and cost controls.', meta:'Ship • Observe • Scale', proof:'Archive copilot or briefing product', includes:'Workbooks 04–05 • RAG' },
  { n:'05', title:'Leadership — Standards & Transformation', desc:'Governance, policy, team enablement, and ROI — the editor’s playbook for responsible scale.', meta:'Govern • Enable • Measure', proof:'Policy memo + rollout plan', includes:'Ethics pillar • Leadership labs' },
];

export const GLOSSARY: GlossaryTerm[] = [
  { term:'Hallucination', alias:'Fabrication', def:'Model invents a fact, source, or citation that sounds plausible.', journalist:'Treat as fabrication risk. Require citation coverage and a Do-not-publish gate.', risk:'Fabrication risk', riskClass:'high' },
  { term:'RAG', alias:'Retrieval-Augmented Generation', def:'Supply your own documents as context for generation, with citations.', journalist:'Your archive as context. 10 years of clips, citable. PII-aware.', risk:'Low if cited', riskClass:'low' },
  { term:'Context Window', alias:'Evidence window', def:'How much source material the model can see at once.', journalist:'Your evidence window. FOIA dump → chunk → cite. Window design is editorial.', risk:'Omission risk', riskClass:'med' },
  { term:'Prompt Engineering', alias:'Instruction design', def:'Precise role, task, format, and guardrail instructions.', journalist:'The assignment note. Role + task + format + guardrail = standards desk in a prompt.', risk:'Style drift', riskClass:'med' },
  { term:'Context Engineering', alias:'Evidence design', def:'Chunking, retrieval, and window design for reliable outputs.', journalist:'The research desk. Good context beats clever prompting.', risk:'Retrieval miss', riskClass:'med' },
  { term:'Eval', alias:'Evaluation', def:'Measurable test of reliability (citation coverage, hallucination rate, PII).', journalist:'Make trust measurable. Evals before anecdotes.', risk:'Unmeasured = risky', riskClass:'high' },
  { term:'PII', alias:'Personally Identifiable Info', def:'Names, contacts, and sensitive data that must not leak.', journalist:'Never paste a sensitive source into a prompt. Redact before retrieval.', risk:'Leakage risk', riskClass:'high' },
  { term:'Guardrail', alias:'Policy gate', def:'Rule that blocks, flags, or reroutes risky output (citation, confidence, PII).', journalist:'Standards desk as code. Do-not-publish-if…', risk:'Bypass risk', riskClass:'med' },
  { term:'Agent', alias:'Workflow + tool use', def:'Multi-step system that acts (search, retrieve, draft, gate).', journalist:'Assignment-desk agent: tip → brief → human gate. Logged.', risk:'Autonomy risk', riskClass:'med' },
  { term:'VCA', alias:'Article Server', def:'Your deployment target — containerized, health-checked, rollback-ready.', journalist:'From demo to newsroom product on VCA. Runbook required.', risk:'Ops risk', riskClass:'low' },
];

export const STUCK: StuckItem[] = [
  { icon:'◈', title:'I’m new — where do I start?', desc:'You’re a reporter, not an engineer. Start with the 90-second roadmap.', fix:'Action: Click “Create my newsroom roadmap” → answer 8 questions → start Level 01. No install.' },
  { icon:'≡', title:'My prompt sounds right but isn’t cited', desc:'Hallucination risk. The model is drafting without evidence.', fix:'Fix: Add context window (2–3 sources, 800 tokens) + demand citations + confidence tags. Open Workbook 01.' },
  { icon:'◎', title:'My source won’t verify / PII worry', desc:'Sensitive material or archive won’t pass the gate.', fix:'Fix: Redact PII before paste. Use Evidence Locker (Workbook 02) for permissioned RAG. Check glossary: PII.' },
  { icon:'⟡', title:'My deploy to VCA fails', desc:'Container builds locally but fails on VCA.', fix:'Fix: Check Dockerfile healthcheck + base-href. See Workbook 05 → VCA runbook. Test /health.' },
  { icon:'⬡', title:'My brief fails the Do-not-publish gate', desc:'Citation coverage <90% or confidence low.', fix:'Fix: Add 1–2 sources, shrink context, re-run eval. If still low, escalate to standards desk — don’t publish.' },
  { icon:'⬢', title:'I don’t know which of the 105 to do', desc:'Tool sprawl. You’re doing too much.', fix:'Fix: Re-run onboarding with tighter hours. Filter Learning Topics by pillar (Verification) and job (Fact-check).' },
];
