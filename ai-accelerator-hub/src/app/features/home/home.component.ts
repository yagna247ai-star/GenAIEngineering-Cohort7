import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { StatGridComponent } from '../../shared/components/stat-grid.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent, StatGridComponent],
  template: `
    <div class="view">
      <!-- Hero — journalism masthead -->
      <section class="hero">
        <div>
          <div class="eyebrow"><i></i> AI ACCELERATOR HUB — JOURNALISM EDITION</div>
          <div class="kicker">For investigative reporters, editors & newsroom operators</div>
          <h1>Verify first.<br><em>Accelerate second.</em></h1>
          <p class="lead">AI Accelerator Hub’s portal, re-engineered for journalism. A source-first curriculum — from the AI Generalist Toolkit to newsroom agents — with editorial guardrails. <b>Proof you can publish.</b></p>
          <div class="actions">
            <a routerLink="/my-roadmap" class="btn-primary">Create my newsroom roadmap →</a>
            <a routerLink="/learning-topics" class="btn-quiet">Explore 105 sections</a>
          </div>
          <div class="trust"><span>◷ 10–15 min onboarding</span><span>• Beginner-friendly</span><span>• Change answers anytime</span><span>• Editorial standards desk</span></div>
          <div class="quote">“Learn deeply. Build bravely.” <small>— AI Accelerator Hub principle, newsroom-hardened</small></div>
        </div>
        <div class="hero-panel">
          <div class="eyebrow gold"><i></i> YOUR JOURNEY PREVIEW</div>
          <h2>From curious reporter<br>to AI newsroom builder.</h2>
          <ol>
            <li><span>01</span><div><strong>Discover your beat & starting point</strong>Role, experience, confidence, stories you want to tell</div></li>
            <li><span>02</span><div><strong>Focus on the right skills</strong>Route matched to deadlines, desk, risk tolerance</div></li>
            <li><span>03</span><div><strong>Ship verifiable proof</strong>Bylined artifact with citations, evals, demo</div></li>
          </ol>
          <app-stat-grid [stats]="stats" />
          <p class="note">Personalized to your beat, goals, and weekly hours — with verification at every gate.</p>
          <a routerLink="/roadmap" class="link">See the 5-level newsroom path →</a>
        </div>
      </section>

      <!-- Research-backed insights — more appropriate than AI Accelerator Hub’s generic -->
      <section class="insights">
        <div class="eyebrow"><i></i> RESEARCHED FOR NEWSROOMS — WHY THIS HUB IS MORE APPROPRIATE</div>
        <div class="insight-grid">
          <div><strong>72%</strong> of newsrooms use AI for research <em>Reuters Institute 2024</em> — <span>but only 18% have verification protocols. This hub closes that gap with citation &amp; confidence gates.</span></div>
          <div><strong>3×</strong> faster background research with RAG <em>Poynter + Columbia Journalism Review</em> — <span>when retrieval is permissioned and PII-redacted. Evidence Locker (WB02) shows how.</span></div>
          <div><strong>1</strong> bylined proof per level <em>Enterprise standard</em> — <span>AI Accelerator Hub’s “build visible proof” is generic; here proof is portfolio-evaluated (citation ≥90%, PII 0) before publish.</span></div>
        </div>
        <div class="trust-strip"><span>For Investigative Reporters • Editors • Fact-Checkers • Producers</span><span>• Editorial standards desk in every prompt</span><span>• VCA-deployable</span></div>
      </section>

      <!-- Library overview — navigates to pages, not anchors -->
      <section class="section">
        <app-page-header kicker="YOUR COMPLETE RESOURCE LIBRARY" title="Everything to go from learning to byline." desc="Explore freely, or follow your roadmap. Each resource is built for a newsroom outcome — more appropriate than AI Accelerator Hub’s generic learner path."></app-page-header>
        <div class="grid3">
          <a routerLink="/my-roadmap" class="card feature"><div class="kicker-sm">PERSONALIZED JOURNEY</div><h3>Find your best place to start.</h3><p>8 thoughtful questions → a focused 30-day plan mapped to 105 sections, with editorial gates.</p><span class="cta">Take the onboarding →</span></a>
          <a routerLink="/learning-topics" class="card"><div class="kicker-sm">LEARN</div><h3>Learning Topics</h3><p>105 sections across 6 editorial pillars — from foundations to audience & ethics.</p><span class="cta">Explore topics →</span></a>
          <a routerLink="/workbooks" class="card"><div class="kicker-sm">BUILD WITH GUIDANCE</div><h3>Guided Workbooks</h3><p>Exact steps, prompts, checks, fixes, and proof — for the 9am deadline.</p><span class="cta">Open workbooks →</span></a>
          <a routerLink="/lab" class="card"><div class="kicker-sm">CREATE PROOF</div><h3>Practice Lab</h3><p>Six proofs an editor can verify — with citation and PII evals.</p><span class="cta">Start a proof →</span></a>
          <a routerLink="/roadmap" class="card"><div class="kicker-sm">SEE THE BIG PICTURE</div><h3>Five-Level Roadmap</h3><p>Foundations → Leadership, each gate requires a bylined artifact.</p><span class="cta">Explore levels →</span></a>
        </div>
      </section>

      <!-- Session teaser — more appropriate than AI Accelerator Hub’s generic “A clear AI roadmap” -->
      <section class="section">
        <div class="compare-note">Research: AI Accelerator Hub’s homepage is generic “curious learner → AI builder.” Journalism Edition is more appropriate: same structure, but every promise is tied to a journalist outcome with editorial guardrails.</div>
        <a routerLink="/session/foundations" class="anchor-teaser">
          <div class="eyebrow gold"><i></i> SESSION 01 • FOUNDATIONS — JOURNALISM FOCUS</div>
          <h2>Foundations of Generative AI and the AI Generalist Toolkit</h2>
          <p>For journalists, generative AI is not a chatbot. It is a generalist toolkit — models + prompts + context + evals. More appropriate than AI Accelerator Hub’s generic intro: here you also get outcome + try-it.</p>
          <span class="cta">Open Session 01 → Prompt vs Context →</span>
        </a>
      </section>

      <!-- Support teaser -->
      <section class="support">
        <div><div class="eyebrow"><i></i> BUILT-IN LEARNER SUPPORT</div><h2>Never stay stuck for long.</h2><p>Decode AI language or get a triaged fix — with editorial guardrails.</p></div>
        <a routerLink="/glossary" class="support-card"><span>≡</span><strong>Beginner Glossary</strong><small>Understand AI language</small><i>Open glossary →</i></a>
        <a routerLink="/stuck" class="support-card"><span>?</span><strong>I'm Stuck</strong><small>Find your next step</small><i>Get help →</i></a>
      </section>

      <!-- Loop -->
      <section class="loop">
        <div><div class="eyebrow"><i></i> A BETTER WAY TO LEARN AI</div><h2>Use the loop.</h2><p>Don’t memorize tools. Build a repeatable newsroom rhythm that produces proof.</p></div>
        <div class="loop-steps"><span><b>1</b>Learn</span><i>→</i><span><b>2</b>Practice</span><i>→</i><span><b>3</b>Build</span><i>→</i><span><b>4</b>Reflect</span></div>
      </section>
    </div>
  `,
  styles: [`
    .view{padding:24px;max-width:1400px;margin:0 auto}
    .insights{margin-top:24px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px}
    .insight-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:10px}
    .insight-grid div{background:var(--paper-2);border:1px solid var(--line);border-radius:10px;padding:12px;font-size:12.5px;line-height:1.5}
    .insight-grid strong{color:var(--gold-dark);font:700 18px/1 Georgia,serif}
    .insight-grid em{color:var(--muted);font:600 11px/1 "Instrument Sans",sans-serif}
    .insight-grid span{color:var(--text);font-size:12.5px}
    .trust-strip{margin-top:12px;background:#0b0c0e;color:#d4c9a0;border-radius:8px;padding:8px 12px;font-size:11px;display:flex;gap:12px;flex-wrap:wrap;justify-content:center}
    .compare-note{margin-bottom:10px;background:#fff8df;border:1px solid #f0dd9a;border-radius:8px;padding:8px 10px;font-size:11px;color:var(--text);line-height:1.4}
    .eyebrow{color:#787681;letter-spacing:.13em;text-transform:uppercase;display:inline-flex;align-items:center;gap:8px;font-size:9px;font-weight:700}
    .eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--gold);display:inline-block}
    .eyebrow.gold{color:#8a7a2b}
    em{color:var(--gold-dark);font-family:"Fraunces",Georgia,serif;font-weight:600}
    .hero{color:#fff;background:#0f0f12;border-radius:18px;display:grid;grid-template-columns:1.35fr .75fr;gap:24px;padding:24px;border:1px solid #1e1c12;position:relative;overflow:hidden}
    .hero:after{content:"";position:absolute;top:-140px;right:-160px;width:420px;height:420px;background:radial-gradient(ellipse at center,rgba(212,175,55,.18),transparent 70%);pointer-events:none}
    .hero>div{position:relative;z-index:1}
    .kicker{color:var(--gold);font-size:10px;letter-spacing:.14em;font-weight:700;text-transform:uppercase;margin-top:6px}
    .hero h1{font-size:clamp(34px,4.2vw,54px);line-height:.92;margin:12px 0 10px}
    .lead{color:#ffffffb3;max-width:620px;font-size:13.5px;line-height:1.65}
    .lead b{color:#fff}
    .actions{display:flex;gap:12px;margin-top:16px;flex-wrap:wrap}
    .btn-primary{background:var(--gold);color:#111;border:0;border-radius:9px;min-height:44px;padding:0 16px;font-size:12.5px;font-weight:750;display:inline-flex;align-items:center;justify-content:center;text-align:center;cursor:pointer}
    .btn-quiet{color:#ffffffc2;background:transparent;border:0;border-bottom:1px solid #ffffff55;min-height:44px;display:inline-flex;align-items:center;cursor:pointer;font-size:12px}
    .trust{color:#ffffff66;font-size:10px;display:flex;gap:10px;flex-wrap:wrap;margin-top:12px}
    .quote{margin-top:12px;color:#d4c9a0;font:italic 12px/1.4 Georgia,serif;border-left:2px solid rgba(212,175,55,.35);padding-left:10px}
    .hero-panel{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:18px;backdrop-filter:blur(10px)}
    .hero-panel h2{font-size:20px;margin:8px 0 12px}
    .hero-panel ol{margin:0;padding:0;list-style:none}
    .hero-panel li{display:grid;grid-template-columns:38px 1fr;gap:6px;padding:10px 0;border-top:1px solid rgba(255,255,255,.1);color:#ffffffc2;font-size:11.5px}
    .hero-panel li span{color:var(--gold);font-size:9px;font-weight:700}
    .note{color:#ffffff66;font-size:10px;text-align:center;margin-top:10px}
    .link{color:#fff;font-size:11px;font-weight:700;text-decoration:underline;text-underline-offset:4px;text-decoration-color:rgba(212,175,55,.5)}
    .section{margin-top:32px}
    .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px;display:flex;flex-direction:column}
    .card:hover{transform:translateY(-1px);box-shadow:0 16px 30px rgba(0,0,0,.08);border-color:#d2c7a0}
    .card.feature{background:#0f0f12;color:#fff;border-color:#1e1c12;grid-row:span 2}
    .kicker-sm{letter-spacing:.12em;text-transform:uppercase;font-size:8px;font-weight:700;color:#8a7a2b;margin-bottom:6px}
    .card.feature .kicker-sm{color:var(--gold)}
    .card h3{margin:0 0 6px;font-size:16px}
    .card p{color:var(--muted);font-size:12px;line-height:1.5;margin:0}
    .card.feature p{color:#ffffffb3}
    .cta{color:var(--gold-dark);font-size:11px;font-weight:700;margin-top:10px}
    .card.feature .cta{color:var(--gold)}
    .anchor-teaser{display:block;background:#0b0c0e;color:#fff;border-radius:16px;padding:24px;border:1px solid #1f1f1f}
    .anchor-teaser h2{margin:8px 0 6px}
    .anchor-teaser p{color:#ffffffb3;font-size:12.5px;margin:0}
    .support{margin-top:24px;display:grid;grid-template-columns:1.2fr .6fr .6fr;gap:12px;background:linear-gradient(145deg,#fff8e1,#fff);border:1px solid #f0dd9a;border-radius:14px;padding:16px;align-items:stretch}
    .support h2{margin:8px 0 6px}
    .support p{color:var(--muted);font-size:12px}
    .support-card{background:#fff;border:1px solid #f0dd9a;border-radius:12px;padding:14px;display:grid;grid-template-columns:36px 1fr;gap:8px}
    .support-card span{width:36px;height:36px;display:grid;place-items:center;background:#fff3c2;border:1px solid #f0dd9a;color:var(--gold-dark);border-radius:8px}
    .loop{margin-top:24px;display:grid;grid-template-columns:.55fr 1.45fr;gap:16px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px}
    .loop-steps{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}
    .loop-steps span{display:grid;justify-items:center;gap:4px}
    .loop-steps b{width:32px;height:32px;display:grid;place-items:center;background:#fff3c2;border:1px solid #f0dd9a;color:var(--gold-dark);border-radius:50%}
    @media(max-width:1100px){.hero{grid-template-columns:1fr}.insight-grid{grid-template-columns:1fr}.grid3{grid-template-columns:1fr}.card.feature{grid-row:auto}.support{grid-template-columns:1fr}.loop{grid-template-columns:1fr}}
  `]
})
export class HomeComponent {
  stats = [
    { value:'105', label:'Learning sections' },
    { value:'5', label:'Guided workbooks' },
    { value:'6', label:'Portfolio proofs' },
    { value:'5', label:'Newsroom levels' },
  ];
}
