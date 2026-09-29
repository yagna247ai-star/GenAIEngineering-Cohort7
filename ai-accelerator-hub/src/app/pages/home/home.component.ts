import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <div class="view">
    <!-- Masthead / Hero — Journalist Program -->
    <section id="home" class="hero">
      <div class="hero-copy">
        <div class="eyebrow"><i></i> AI ACCELERATOR HUB — JOURNALISM EDITION</div>
        <div class="kicker">For investigative reporters, editors & newsroom operators</div>
        <h1>Verify first.<br><em>Accelerate second.</em></h1>
        <p class="lead">Outskill’s Generative AI Learning Portal, re-engineered for journalism. A rigorous, source-first curriculum — from the AI Generalist Toolkit to newsroom agents — with editorial guardrails. Not tool tourism. <b>Proof you can publish.</b></p>
        <div class="hero-actions">
          <button class="primary-action" (click)="scrollTo('my-roadmap')">Create my newsroom roadmap <span>→</span></button>
          <button class="quiet-action" (click)="scrollTo('learning-topics')">Explore 105 sections</button>
        </div>
        <div class="trust-row">
          <span>◷ 10–15 min onboarding</span><span>• Beginner-friendly</span><span>• Change answers anytime</span><span>• Editorial standards desk</span>
        </div>
        <div class="quote">“Learn deeply. Build bravely.” <small>— Outskill principle, newsroom-hardened</small></div>
      </div>
      <div class="hero-panel">
        <div class="eyebrow gold"><i></i> YOUR JOURNEY PREVIEW</div>
        <h2>From curious reporter<br>to AI newsroom builder.</h2>
        <ol>
          <li><span>01</span><div><strong>Discover your beat & starting point</strong><br>Role, experience, confidence, and the stories you want to tell</div></li>
          <li><span>02</span><div><strong>Focus on the right skills</strong><br>A route matched to your deadlines, desk, and risk tolerance</div></li>
          <li><span>03</span><div><strong>Ship verifiable proof</strong><br>A bylined artifact with citations, evals, and a shareable demo</div></li>
        </ol>
        <div class="panel-stats">
          <div><strong>105</strong><span>Learning sections</span></div>
          <div><strong>5</strong><span>Guided workbooks</span></div>
          <div><strong>6</strong><span>Portfolio proofs</span></div>
          <div><strong>5</strong><span>Newsroom levels</span></div>
        </div>
        <p class="panel-note">Personalized to your beat, goals, and weekly hours — with verification at every gate.</p>
        <button class="panel-link" (click)="scrollTo('roadmap')">See the 5-level newsroom path →</button>
      </div>
    </section>

    <!-- Personalized Roadmap — Do/React loop -->
    <section id="my-roadmap" class="section roadmap-form">
      <div class="section-head">
        <div class="eyebrow"><i></i> PERSONALIZED JOURNEY — DO / REACT</div>
        <h2>My AI Roadmap — your 30-day newsroom plan.</h2>
        <p>Answer 8 questions. The system <b>does</b> a mapping, you <b>react</b> to the preview, the system refines. No generic path — your beat, time, and risk shape the library.</p>
      </div>

      <div class="roadmap-grid">
        <div class="roadmap-card">
          <h3>8 questions, 90 seconds</h3>
          <label>Primary role
            <select (change)="role.set($any($event.target).value)">
              <option>Investigative Reporter</option><option>Editor / Standards Desk</option><option>Fact-Checker / Researcher</option><option>Audience / Producer</option><option>Student / Fellow</option>
            </select>
          </label>
          <label>Core goal
            <select (change)="goal.set($any($event.target).value)">
              <option>Research & verification at speed</option><option>Drafting with provenance</option><option>Building newsroom agents</option><option>Audience & distribution</option>
            </select>
          </label>
          <label>Weekly hours
            <input type="range" min="2" max="15" [value]="hours()" (input)="hours.set($any($event.target).valueAsNumber)" />
            <small>{{hours()}} hrs/week — {{hours() < 5 ? 'Foundations track' : hours() < 10 ? 'Craft track' : 'Builder track'}}</small>
          </label>
          <label>Risk tolerance
            <select (change)="risk.set($any($event.target).value)">
              <option>Publish-grade — citations required</option><option>Internal briefing — speed first</option>
            </select>
          </label>
          <button class="primary-action full" (click)="generate()">Generate my 30-day plan</button>
          @if(planReady()){
            <div class="plan-done">✓ Plan generated — scroll to see your track</div>
          }
        </div>

        <div class="plan-preview">
          <div class="eyebrow gold"><i></i> YOUR PREVIEW — REACT & REFINE</div>
          <h3>{{role()}} • {{goal()}}</h3>
          <p class="muted">A Do/React loop: we propose, you correct, we re-map. Change any answer — the preview updates live.</p>

          <div class="week-grid">
            @for(w of weeks(); track w.title){
              <div class="week">
                <span>{{w.week}}</span>
                <strong>{{w.title}}</strong>
                <small>{{w.detail}}</small>
                <em>{{w.proof}}</em>
              </div>
            }
          </div>

          <div class="guardrail">Editorial guardrail: {{risk()}} — every artifact requires citations + confidence tags before publish.</div>
          <div class="cta-row">
            <button class="ghost" (click)="scrollTo('learning-topics')">Browse the 105 sections →</button>
            <button class="primary-action sm" (click)="scrollTo('workbooks')">Start Workbook 01 →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Resource Library Overview -->
    <section class="section">
      <div class="section-head">
        <div class="eyebrow"><i></i> YOUR COMPLETE RESOURCE LIBRARY</div>
        <h2>Everything to go from learning to byline.</h2>
        <p>Explore freely, or follow your roadmap. Each resource is built for a newsroom outcome — not a demo.</p>
      </div>
      <div class="lib-grid">
        <button class="lib-card feature" (click)="scrollTo('my-roadmap')">
          <div class="lib-kicker">PERSONALIZED JOURNEY</div>
          <h3>Find your best place to start.</h3>
          <p>8 thoughtful questions → a focused 30-day plan mapped to 105 sections, with editorial gates.</p>
          <span class="cta">Take the onboarding <i>→</i></span>
          <div class="lib-icon gold">◈</div>
        </button>
        @for(c of libCards; track c.title){
          <button class="lib-card" (click)="scrollTo(c.anchor)">
            <div class="lib-kicker">{{c.kicker}}</div>
            <h3>{{c.title}}</h3>
            <p>{{c.desc}}</p>
            <span class="cta">{{c.cta}} <i>→</i></span>
            <div class="lib-icon {{c.tone}}">{{c.icon}}</div>
          </button>
        }
      </div>
    </section>

    <!-- Learning Topics — 105 sections, journalist pillars -->
    <section id="learning-topics" class="section">
      <div class="section-head with-filters">
        <div>
          <div class="eyebrow"><i></i> LEARN — 105 CLEAR SECTIONS</div>
          <h2>Learning Topics, curated for journalists.</h2>
          <p>Not 105 random tools. Six editorial pillars, sequenced by newsroom risk. Filter by pillar, level, or editorial job to be done.</p>
        </div>
        <div class="filters">
          <input placeholder="Filter topics…" [value]="topicFilter()" (input)="topicFilter.set($any($event.target).value)" />
          <select (change)="pillar.set($any($event.target).value)">
            <option value="all">All pillars</option>
            @for(p of pillars; track p){ <option [value]="p">{{p}}</option> }
          </select>
        </div>
      </div>

      <div class="pillar-bar">
        @for(p of pillars; track p){
          <button [class.active]="pillar()==p" (click)="pillar.set(p)">{{p}}</button>
        }
        <button [class.active]="pillar()=='all'" (click)="pillar.set('all')">All</button>
      </div>

      <div class="topic-grid">
        @for(t of filteredTopics(); track t.title){
          <article class="topic-card">
            <div class="eyebrow gold"><i></i> {{t.pillar}} • {{t.level}} • {{t.time}}</div>
            <h3>{{t.title}}</h3>
            <p>{{t.desc}}</p>
            <div class="topic-meta">
              <span>Editorial job: {{t.job}}</span>
              <span class="tag">{{t.format}}</span>
            </div>
            <button class="link" (click)="openTopic(t.title)">Open section →</button>
          </article>
        }
      </div>
      <div class="count">Showing {{filteredTopics().length}} of 105 sections • Foundations → Leadership</div>
    </section>

    <!-- Session 1 Deep Dive — anchored -->
    <section id="session-1-foundations-of-generative-ai-and-the-ai-generalist-toolkit-3-prompt-engineering-versus-context-engineering" class="section anchor-section">
      <div class="anchor-card">
        <div class="eyebrow gold"><i></i> SESSION 01 • FOUNDATIONS — JOURNALISM FOCUS</div>
        <h2>Foundations of Generative AI and the AI Generalist Toolkit</h2>
        <p class="lead">For journalists, generative AI is not a chatbot. It is a <b>generalist toolkit</b> — models + prompts + context + evals — that turns reporting labor into verifiable systems. This session builds the mental model every later workflow depends on.</p>

        <div class="anchor-3">
          <div>
            <strong>01 — The Generalist Reporter Lens</strong>
            <span>Why breadth beats tool-chasing. Compose LLM, retrieval, and human judgment like a desk: researcher + drafter + standards editor. <em>Newsroom example:</em> Tip → Retrieval → Draft → Standards gate → Publish.</span>
          </div>
          <div>
            <strong>02 — Prompt Engineering <em>vs</em> Context Engineering</strong>
            <span><b>Prompt</b> = precise instruction (role, task, format, guardrail). <b>Context</b> = evidence window (sources, transcripts, FOIA, data). Reliability lives in context; leverage lives in prompt. Both require evals. <em>Try the starter below.</em></span>
          </div>
          <div>
            <strong>03 — Editorial Guardrails</strong>
            <span>Source, hallucination, PII, and bias checks from day one. Every output carries citations + confidence (high/med/low) + a <em>Do-not-publish-if…</em> checklist. Verification is the product.</span>
          </div>
        </div>

        <div class="session-meta">
          <span>45 min • Foundations • Publish-grade</span><span>Prerequisite: None</span><span>Next: Workbook 01 →</span>
        </div>

        <div class="try-card">
          <div>
            <div class="eyebrow"><i></i> TRY IT NOW — EDITORIAL PROMPT</div>
            <h3>Turn a vague brief into a standards-ready system prompt.</h3>
            <p>Copy, paste your 2–3 sources, run, and check the <em>Do-not-publish</em> gate.</p>
            <div class="try-actions">
              <button (click)="copyPrompt()">Copy starter prompt</button>
              <button class="ghost" (click)="scrollTo('workbooks')">Open Workbook 01 →</button>
            </div>
          </div>
          <pre><code>{{samplePrompt}}</code></pre>
        </div>
      </div>
    </section>

    <!-- Guided Workbooks — journalist workflows -->
    <section id="workbooks" class="section">
      <div class="section-head">
        <div class="eyebrow"><i></i> BUILD WITH GUIDANCE — 5 WORKBOOKS</div>
        <h2>Exact steps, prompts, checks, fixes, and proof.</h2>
        <p>Each workbook is a newsroom workflow you can run on tomorrow’s story. Not a tutorial — a bylinable system with a standards desk.</p>
      </div>
      <div class="workbook-grid">
        @for(w of workbooks; track w.n){
          <button class="workbook-card" (click)="openWorkbook(w.n)">
            <div class="wb-num">{{w.n}}</div>
            <div class="wb-main">
              <div class="eyebrow gold"><i></i> WORKBOOK {{w.n}} • {{w.level}}</div>
              <h3>{{w.title}}</h3>
              <p>{{w.desc}}</p>
              <div class="wb-tags"><span>{{w.time}}</span><span>{{w.proof}}</span><span>{{w.guardrail}}</span></div>
            </div>
            <footer>
              <span>{{w.editorial}}</span>
              <strong>Open workbook →</strong>
            </footer>
          </button>
        }
      </div>
    </section>

    <!-- Practice Lab — 6 proofs -->
    <section id="lab" class="section">
      <div class="section-head">
        <div class="eyebrow"><i></i> CREATE PROOF — PRACTICE LAB</div>
        <h2>Six portfolio proofs you can show an editor.</h2>
        <p>Confidence comes from shipped work. Each proof is evaluated for citation coverage, fabrication risk, and PII handling.</p>
      </div>
      <div class="practice-progress">
        <div><strong>{{labProgress()}}%</strong><span>Lab completion</span></div>
        <div><span [style.width.%]="labProgress()"></span></div>
        <p>Complete 2 proofs to unlock your AI Accelerator certificate. Standards desk reviews all proofs.</p>
      </div>
      <div class="mission-grid">
        @for(m of missions(); track m.title){
          <button (click)="toggleMission(m)" [class.done]="m.done">
            <div class="mission-check">{{m.done ? '✓' : '+'}}</div>
            <div>
              <div class="eyebrow gold"><i></i> {{m.tag}}</div>
              <h3>{{m.title}}</h3>
              <p>{{m.desc}}</p>
              <div class="eval">Eval: {{m.eval}}</div>
            </div>
            <strong>{{m.done ? 'Completed — View proof' : 'Start proof →'}}</strong>
          </button>
        }
      </div>
    </section>

    <!-- Five-Level Roadmap -->
    <section id="roadmap" class="section">
      <div class="section-head">
        <div class="eyebrow"><i></i> FIVE-LEVEL NEWSROOM ROADMAP</div>
        <h2>The complete capability path — foundations to leadership.</h2>
        <p>Sequenced for working journalists. Each level unlocks the next; each gate requires a verifiable artifact.</p>
      </div>
      <div class="roadmap-list">
        @for(l of levels; track l.n){
          <article>
            <div class="roadmap-level">{{l.n}}</div>
            <div class="roadmap-main">
              <div class="eyebrow gold"><i></i> LEVEL {{l.n}}</div>
              <h3>{{l.title}}</h3>
              <p>{{l.desc}}</p>
              <div class="tag-row"><span>{{l.meta}}</span><span>Guided checks</span><span>Publishing gate</span></div>
              <div class="level-proof">Proof: {{l.proof}}</div>
            </div>
            <aside>
              <span>Includes</span>
              <strong>{{l.includes}}</strong>
              <a class="aside-cta" (click)="scrollTo('workbooks')">Explore →</a>
            </aside>
          </article>
        }
      </div>
      <div class="roadmap-note">
        <span>Newsroom guardrail</span>
        <p>Every level includes provenance, PII, and bias review — so acceleration never outruns trust. The standards desk is not optional.</p>
      </div>
    </section>

    <!-- Support — Glossary -->
    <section id="glossary" class="section">
      <div class="section-head with-filters">
        <div>
          <div class="eyebrow"><i></i> SUPPORT — BEGINNER GLOSSARY</div>
          <h2>Decode AI language — journalist translation.</h2>
          <p>40 terms, each with a newsroom definition, risk, and when to use it. Search <em>hallucination</em>, <em>RAG</em>, or <em>guardrail</em>.</p>
        </div>
        <input class="glossary-search" placeholder="Search glossary…" [value]="glossaryQ()" (input)="glossaryQ.set($any($event.target).value)" />
      </div>
      <div class="glossary-grid">
        @for(g of filteredGlossary(); track g.term){
          <article>
            <h3>{{g.term}} <small>{{g.alias}}</small></h3>
            <p class="def">{{g.def}}</p>
            <p class="journalist"><b>For journalists:</b> {{g.journalist}}</p>
            <span class="risk {{g.riskClass}}">{{g.risk}}</span>
          </article>
        }
      </div>
    </section>

    <!-- Support — I'm Stuck -->
    <section id="stuck" class="section stuck-section">
      <div class="section-head">
        <div class="eyebrow"><i></i> SUPPORT — I’M STUCK</div>
        <h2>Find your next step — newsroom triage.</h2>
        <p>Choose your situation. Get a step-by-step fix built around common beginner failures — with editorial guardrails.</p>
      </div>
      <div class="stuck-grid">
        @for(s of stuck; track s.title){
          <button (click)="openStuck(s.title)">
            <div class="stuck-icon">{{s.icon}}</div>
            <div>
              <strong>{{s.title}}</strong>
              <p>{{s.desc}}</p>
              <small>{{s.fix}}</small>
            </div>
            <i>→</i>
          </button>
        }
      </div>
      <div class="help-cta">
        <p>Still stuck? <b>10-min debug</b> with the standards desk — bring your prompt, context, and last output.</p>
        <button class="primary-action sm" (click)="scrollTo('my-roadmap')">Re-run onboarding →</button>
      </div>
    </section>

    <!-- Loop -->
    <section class="home-bottom">
      <div>
        <div class="eyebrow"><i></i> A BETTER WAY TO LEARN AI</div>
        <h2>Use the loop.</h2>
        <p>Don’t memorize tools. Build a repeatable newsroom rhythm that produces proof — and compounds trust.</p>
      </div>
      <div class="learning-loop">
        <span><b>1</b><strong>Learn</strong><small>One idea</small></span><i>→</i>
        <span><b>2</b><strong>Practice</strong><small>On your beat</small></span><i>→</i>
        <span><b>3</b><strong>Build</strong><small>Ship proof</small></span><i>→</i>
        <span><b>4</b><strong>Reflect</strong><small>Improve system</small></span>
      </div>
    </section>

    @if(toast()){
      <div class="toast">{{toast()}}</div>
    }
  </div>
  `,
  styles: [`
    .view{padding: clamp(26px,4vw,44px) clamp(18px,4vw,44px) 48px; max-width:1400px; margin:0 auto}
    .eyebrow{color:#787681; letter-spacing:.13em; text-transform:uppercase; display:inline-flex; align-items:center; gap:8px; font-size:9px; font-weight:700}
    .eyebrow i{width:7px; height:7px; border-radius:50%; background:var(--gold); display:inline-block}
    .eyebrow.gold{color:#8a7a2b}
    em{color:var(--gold-dark); font-family:"Fraunces", Georgia, serif; font-weight:600}
    .hero{color:#fff; background:#0f0f12; border-radius:18px; display:grid; grid-template-columns: minmax(0,1.35fr) minmax(300px,.75fr); gap:clamp(24px,4vw,44px); padding:clamp(20px,3vw,36px); position:relative; overflow:hidden; border:1px solid #1e1c12}
    .hero:after{content:""; position:absolute; top:-140px; right:-160px; width:420px; height:420px; background:radial-gradient(ellipse at center, rgba(212,175,55,.18), transparent 70%); pointer-events:none}
    .hero-copy,.hero-panel{position:relative; z-index:1}
    .kicker{color:var(--gold); font-size:10px; letter-spacing:.14em; font-weight:700; margin-top:6px; text-transform:uppercase}
    .hero-copy h1{letter-spacing:-.055em; margin:12px 0 10px; font-size:clamp(34px,4.2vw,54px); line-height:.92; font-weight:700}
    .lead{color:#ffffffb3; max-width:620px; margin:0; font-size:13.5px; line-height:1.65}
    .lead b{color:#fff}
    .hero-actions{display:flex; align-items:center; gap:14px; margin-top:18px; flex-wrap:wrap}
    .primary-action{background:var(--gold); color:#111; border:0; border-radius:9px; min-height:44px; padding:0 16px; font-size:12.5px; font-weight:750; display:inline-flex; align-items:center; gap:8px; cursor:pointer; box-shadow:0 8px 22px rgba(212,175,55,.22); transition:.18s}
    .primary-action:hover{background:#e6c24a; transform:translateY(-1px)}
    .primary-action.sm{min-height:36px; padding:0 12px; font-size:11.5px}
    .primary-action.full{width:100%; justify-content:center; margin-top:14px}
    .quiet-action{color:#ffffffc2; background:transparent; border:0; border-bottom:1px solid #ffffff55; min-height:36px; padding:0 2px; cursor:pointer; font-size:12px}
    .ghost{background:#fff; border:1px solid var(--line); border-radius:8px; min-height:36px; padding:0 12px; cursor:pointer; font-weight:700; font-size:11.5px}
    .trust-row{display:flex; gap:10px; margin-top:14px; color:#ffffff66; font-size:10px; flex-wrap:wrap}
    .quote{margin-top:14px; color:#d4c9a0; font:italic 12px/1.4 Georgia, serif; border-left:2px solid rgba(212,175,55,.35); padding-left:10px}
    .quote small{font:600 9px "Instrument Sans", sans-serif; color:#a89a6a; letter-spacing:.06em}
    .hero-panel{background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.12); border-radius:14px; padding:20px; backdrop-filter:blur(10px)}
    .hero-panel h2{letter-spacing:-.03em; margin:8px 0 12px; font-size:20px; line-height:1.1}
    .hero-panel ol{margin:0; padding:0; list-style:none}
    .hero-panel li{display:grid; grid-template-columns:38px 1fr; gap:6px; padding:10px 0; border-top:1px solid rgba(255,255,255,.1); color:#ffffffc2; font-size:11.5px; line-height:1.4}
    .hero-panel li span{color:var(--gold); font-size:9px; font-weight:700}
    .hero-panel li strong{color:#fff}
    .panel-stats{display:grid; grid-template-columns:repeat(4,1fr); gap:8px; margin-top:12px; border-top:1px solid rgba(255,255,255,.1); padding-top:12px}
    .panel-stats div{display:grid; justify-items:center; gap:2px}
    .panel-stats strong{color:var(--gold); font:700 18px/1 Georgia, serif}
    .panel-stats span{color:#ffffff8a; font-size:8px; letter-spacing:.06em; text-transform:uppercase}
    .panel-note{color:#ffffff66; font-size:10px; margin:8px 0 0; text-align:center}
    .panel-link{background:transparent; border:0; color:#fff; font-size:11px; font-weight:700; cursor:pointer; margin-top:10px; text-decoration:underline; text-underline-offset:4px; text-decoration-color:rgba(212,175,55,.5)}

    .section{margin-top:36px}
    .section-head{max-width:760px; margin-bottom:16px}
    .section-head h2{margin:8px 0 6px; font-size:clamp(22px,3vw,32px); line-height:1}
    .section-head p{margin:0; color:var(--muted); font-size:12.5px; line-height:1.6}
    .section-head.with-filters{display:flex; justify-content:space-between; gap:16px; align-items:end; max-width:none; flex-wrap:wrap}
    .filters{display:flex; gap:8px}
    .filters input, .filters select, .glossary-search{border:1px solid var(--line); border-radius:8px; padding:8px 10px; font-size:12.5px; background:#fff}
    .glossary-search{width:260px}

    .roadmap-form .roadmap-grid{display:grid; grid-template-columns:380px 1fr; gap:16px}
    .roadmap-card{background:#fff; border:1px solid var(--line); border-radius:14px; padding:18px}
    .roadmap-card h3{margin:0 0 12px; font-size:16px}
    .roadmap-card label{display:block; margin-top:12px; font-size:12px; font-weight:600}
    .roadmap-card select, .roadmap-card input{width:100%; margin-top:6px; border:1px solid var(--line); border-radius:8px; padding:8px; background:#fff; font-size:12.5px}
    .roadmap-card small{color:var(--muted); font-size:11px}
    .plan-done{margin-top:10px; background:#fff8df; border:1px solid #f0dd9a; color:var(--gold-dark); border-radius:8px; padding:8px; font-size:11.5px; font-weight:600}
    .plan-preview{background:#0b0c0e; color:#fff; border-radius:14px; padding:18px; border:1px solid #1f1f1f}
    .plan-preview h3{margin:6px 0 4px; font-size:16px; color:var(--gold)}
    .muted{color:#ffffff8a; font-size:11.5px; margin:0}
    .week-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:10px; margin-top:14px}
    .week{background:#ffffff0f; border:1px solid #ffffff14; border-radius:10px; padding:12px}
    .week span{color:var(--gold); font-size:8px; letter-spacing:.1em; font-weight:700}
    .week strong{display:block; margin:4px 0 2px; font-size:12.5px}
    .week small{color:#ffffffb3; font-size:11px; display:block; line-height:1.4}
    .week em{color:#a89a6a; font-size:10px; font-style:normal; margin-top:6px; display:block}
    .guardrail{margin-top:12px; background:rgba(212,175,55,.12); border:1px solid rgba(212,175,55,.25); color:#f0dd9a; border-radius:8px; padding:8px; font-size:11px}
    .cta-row{display:flex; gap:8px; margin-top:12px}

    .lib-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:12px}
    .lib-card{text-align:left; background:#fff; border:1px solid var(--line); border-radius:14px; padding:18px; position:relative; overflow:hidden; cursor:pointer; transition:.18s; min-height:168px; display:flex; flex-direction:column}
    .lib-card:hover{transform:translateY(-1px); box-shadow:0 16px 30px rgba(0,0,0,.08); border-color:#d2c7a0}
    .lib-card.feature{grid-row:span 2; background:#0f0f12; color:#fff; border-color:#1e1c12}
    .lib-card.feature .lib-kicker{color:var(--gold)}
    .lib-card.feature p{color:#ffffffb3}
    .lib-card.feature .cta{color:var(--gold)}
    .lib-kicker{letter-spacing:.12em; text-transform:uppercase; font-size:8px; font-weight:700; color:#8a7a2b; margin-bottom:6px}
    .lib-card h3{margin:0 0 6px; font-size:18px}
    .lib-card p{margin:0; color:var(--muted); font-size:12px; line-height:1.5; flex:1}
    .cta{margin-top:10px; color:var(--gold-dark); font-size:11px; font-weight:700; display:inline-flex; gap:6px; align-items:center}
    .lib-icon{position:absolute; right:12px; top:12px; width:32px; height:32px; display:grid; place-items:center; border-radius:8px; font-size:14px; border:1px solid var(--line)}
    .lib-icon.gold{background:rgba(212,175,55,.12); color:var(--gold); border-color:rgba(212,175,55,.3)}

    .pillar-bar{display:flex; gap:6px; flex-wrap:wrap; margin-bottom:12px}
    .pillar-bar button{border:1px solid var(--line); background:#fff; border-radius:99px; padding:6px 10px; font-size:11px; cursor:pointer}
    .pillar-bar button.active{background:#0b0c0e; color:var(--gold); border-color:#0b0c0e}
    .topic-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:10px}
    .topic-card{background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px; display:flex; flex-direction:column}
    .topic-card h3{margin:6px 0 4px; font-size:14.5px; line-height:1.2}
    .topic-card p{margin:0; color:var(--muted); font-size:11.5px; line-height:1.45; flex:1}
    .topic-meta{margin-top:8px; display:flex; justify-content:space-between; gap:8px; font-size:10px; color:var(--muted)}
    .topic-meta .tag{background:var(--paper-2); border:1px solid var(--line); border-radius:99px; padding:2px 6px; font-size:9px; font-weight:600}
    .link{background:transparent; border:0; color:var(--gold-dark); font-size:11px; font-weight:700; cursor:pointer; text-align:left; margin-top:8px}
    .count{margin-top:8px; color:var(--muted); font-size:11px; text-align:center}

    .anchor-section{margin-top:22px}
    .anchor-card{background:#0b0c0e; color:#fff; border-radius:16px; padding:28px; border:1px solid #1f1f1f}
    .anchor-card h2{margin:8px 0 8px; font-size:clamp(22px,3vw,30px); line-height:1}
    .anchor-card .lead{color:#ffffffb3; margin:0; font-size:12.5px; line-height:1.6; max-width:760px}
    .anchor-3{display:grid; grid-template-columns:repeat(3,1fr); gap:0; margin-top:16px}
    .anchor-3 div{border-left:1px solid #ffffff16; padding:0 16px; display:grid; gap:6px}
    .anchor-3 div:first-child{border:0; padding-left:0}
    .anchor-3 strong{color:var(--gold); font-size:11px}
    .anchor-3 span{color:#ffffffb3; font-size:11.5px; line-height:1.5}
    .anchor-3 em{color:var(--gold); font-style:normal; font-size:11px}
    .session-meta{display:flex; gap:12px; margin-top:12px; color:#ffffff66; font-size:10px; flex-wrap:wrap}
    .try-card{margin-top:16px; background:var(--gold); color:#111; border-radius:12px; display:grid; grid-template-columns:.9fr 1.1fr; gap:16px; padding:16px}
    .try-card h3{margin:6px 0 6px; font-size:16px}
    .try-card p{margin:0 0 10px; font-size:11.5px; opacity:.8}
    .try-actions{display:flex; gap:8px}
    .try-card button{border:1px solid #111; background:#111; color:var(--gold); border-radius:8px; min-height:34px; padding:0 10px; font-size:11px; font-weight:700; cursor:pointer}
    .try-card button.ghost{background:transparent; color:#111}
    .try-card pre{margin:0; background:#111; color:#e8e0c0; border-radius:9px; padding:12px; overflow:auto; font:11px/1.5 "JetBrains Mono", monospace; border:1px solid #222}

    .workbook-grid{display:grid; grid-template-columns:1fr; gap:10px}
    .workbook-card{display:grid; grid-template-columns:48px 1fr 140px; gap:14px; align-items:center; background:#fff; border:1px solid var(--line); border-radius:13px; padding:16px; cursor:pointer; text-align:left; transition:.18s}
    .workbook-card:hover{transform:translateY(-1px); box-shadow:0 12px 24px rgba(0,0,0,.06); border-color:#d2c7a0}
    .wb-num{width:42px; height:42px; display:grid; place-items:center; background:#fff3c2; border:1px solid #f0dd9a; color:var(--gold-dark); border-radius:10px; font:600 15px/1 Georgia, serif}
    .wb-main h3{margin:4px 0 4px; font-size:16px}
    .wb-main p{margin:0; color:var(--muted); font-size:11.5px; line-height:1.5}
    .wb-tags{display:flex; gap:6px; margin-top:6px; flex-wrap:wrap}
    .wb-tags span{background:var(--paper-2); border:1px solid var(--line); border-radius:99px; padding:3px 6px; font-size:9px; font-weight:600; color:#6b6a6e}
    .workbook-card footer{border-left:1px solid var(--line); padding-left:12px; display:grid; gap:6px; justify-items:end; color:var(--muted); font-size:11px}
    .workbook-card footer strong{color:var(--gold-dark); font-size:11px}

    .practice-progress{display:grid; grid-template-columns:110px 1fr 230px; gap:16px; align-items:center; background:#0b0c0e; color:#fff; border-radius:12px; padding:16px; border:1px solid #1f1f1f}
    .practice-progress strong{color:var(--gold); font-size:26px}
    .practice-progress span{color:#ffffff8a; font-size:9px; letter-spacing:.08em; text-transform:uppercase}
    .practice-progress > div:nth-child(2){height:5px; background:#ffffff14; border-radius:99px; overflow:hidden}
    .practice-progress > div:nth-child(2) span{display:block; height:100%; background:var(--gold)}
    .practice-progress p{margin:0; color:#ffffff8a; font-size:10.5px; line-height:1.4}
    .mission-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:12px; margin-top:12px}
    .mission-grid button{display:grid; grid-template-columns:36px 1fr; gap:12px; background:#fff; border:1px solid var(--line); border-radius:12px; padding:16px; text-align:left; cursor:pointer; transition:.18s}
    .mission-grid button:hover{border-color:#d2c7a0; transform:translateY(-1px)}
    .mission-grid button.done{background:#fff8df; border-color:#f0dd9a}
    .mission-check{width:34px; height:34px; display:grid; place-items:center; border:1px solid #d9d6ce; border-radius:8px; font-size:13px; font-weight:700}
    .mission-grid button.done .mission-check{background:var(--gold); color:#111; border-color:var(--gold)}
    .mission-grid h3{margin:4px 0 4px; font-size:14.5px}
    .mission-grid p{margin:0; color:var(--muted); font-size:11.5px; line-height:1.5}
    .eval{margin-top:6px; background:var(--paper-2); border:1px solid var(--line); border-radius:6px; padding:4px 6px; font-size:10px; color:#6b6a6e; display:inline-block}
    .mission-grid strong{grid-column:2; margin-top:6px; color:var(--gold-dark); font-size:11px}

    .roadmap-list{position:relative; background:#fff; border:1px solid var(--line); border-radius:14px; overflow:hidden}
    .roadmap-list:before{content:""; position:absolute; left:30px; top:40px; bottom:40px; width:1px; background:#e8e0b8}
    .roadmap-list article{display:grid; grid-template-columns:1fr 190px; gap:20px; padding:20px 20px 20px 74px; border-bottom:1px solid var(--line); position:relative}
    .roadmap-list article:last-child{border:0}
    .roadmap-level{position:absolute; left:10px; top:26px; width:42px; height:42px; display:grid; place-items:center; background:var(--paper); border:1px solid #e8e0b8; color:var(--gold-dark); border-radius:50%; font:600 16px/1 Georgia, serif}
    .roadmap-main h3{margin:6px 0 6px; font-size:18px}
    .roadmap-main p{margin:0 0 8px; color:var(--muted); font-size:11.5px; line-height:1.6}
    .tag-row{display:flex; gap:6px; flex-wrap:wrap}
    .tag-row span{background:var(--paper-2); border:1px solid var(--line); border-radius:99px; padding:4px 7px; font-size:9px; font-weight:600; color:#6b6a6e}
    .level-proof{margin-top:6px; font-size:10px; color:var(--gold-dark); font-weight:600}
    .roadmap-list aside{background:#fff8df; border:1px solid #f0dd9a; border-radius:10px; padding:14px; align-self:center}
    .roadmap-list aside span{color:var(--gold-dark); font-size:10px; font-weight:700; letter-spacing:.08em}
    .roadmap-list aside strong{display:block; margin:6px 0 8px; font-size:11.5px; line-height:1.3}
    .aside-cta{color:var(--gold-dark); font-size:11px; font-weight:700; cursor:pointer}
    .roadmap-note{margin-top:12px; background:#0b0c0e; color:#fff; border-radius:12px; display:grid; grid-template-columns:120px 1fr; gap:18px; padding:16px}
    .roadmap-note span{color:var(--gold); font-size:10px; letter-spacing:.1em; font-weight:700}
    .roadmap-note p{margin:0; color:#ffffffb3; font:12.5px/1.6 Georgia, serif}

    .glossary-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:10px}
    .glossary-grid article{background:#fff; border:1px solid var(--line); border-radius:12px; padding:14px}
    .glossary-grid h3{margin:0 0 6px; font-size:14px}
    .glossary-grid h3 small{color:var(--muted); font:400 11px "Instrument Sans", sans-serif; margin-left:6px}
    .def{margin:0; color:var(--muted); font-size:11.5px; line-height:1.5}
    .journalist{margin:6px 0 0; font-size:11px; line-height:1.5; background:#fff8df; border:1px solid #f0dd9a; border-radius:6px; padding:6px 8px}
    .risk{margin-top:8px; display:inline-block; font-size:9px; font-weight:700; letter-spacing:.06em; padding:3px 6px; border-radius:99px; border:1px solid var(--line)}
    .risk.high{background:#ffe8e0; color:#a33a1a; border-color:#ffd0bc}
    .risk.med{background:#fff3c2; color:#7a5a00; border-color:#f0dd9a}
    .risk.low{background:#e9f7ef; color:#1a6b3a; border-color:#c8e8d6}

    .stuck-grid{display:grid; grid-template-columns:repeat(2,1fr); gap:10px}
    .stuck-grid button{display:grid; grid-template-columns:40px 1fr 16px; gap:12px; background:#fff; border:1px solid var(--line); border-radius:12px; padding:16px; text-align:left; cursor:pointer; align-items:start}
    .stuck-grid button:hover{border-color:#d2c7a0}
    .stuck-icon{width:36px; height:36px; display:grid; place-items:center; background:#fff3c2; border:1px solid #f0dd9a; color:var(--gold-dark); border-radius:8px; font-size:16px}
    .stuck-grid strong{font-size:13.5px; display:block; margin-bottom:4px}
    .stuck-grid p{margin:0; color:var(--muted); font-size:11.5px; line-height:1.45}
    .stuck-grid small{display:block; margin-top:6px; background:#f8f7f5; border:1px solid var(--line); border-radius:6px; padding:6px 8px; font-size:11px; line-height:1.4}
    .stuck-grid i{color:var(--gold-dark); font-style:normal; font-weight:700; margin-top:8px}
    .help-cta{margin-top:12px; background:#0b0c0e; color:#fff; border-radius:12px; padding:14px 16px; display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap}
    .help-cta p{margin:0; font-size:12px; color:#ffffffb3}

    .home-bottom{margin-top:24px; display:grid; grid-template-columns:.55fr 1.45fr; gap:24px; align-items:center; background:#fff; border:1px solid var(--line); border-radius:14px; padding:20px}
    .home-bottom h2{margin:8px 0 6px; font-size:26px}
    .home-bottom p{margin:0; color:var(--muted); font-size:12px; line-height:1.6}
    .learning-loop{display:flex; align-items:center; justify-content:space-between; gap:8px}
    .learning-loop span{display:grid; justify-items:center; gap:4px; min-width:100px; text-align:center}
    .learning-loop b{width:32px; height:32px; display:grid; place-items:center; background:#fff3c2; border:1px solid #f0dd9a; color:var(--gold-dark); border-radius:50%; font-size:11px}
    .learning-loop strong{font-size:12px}
    .learning-loop small{color:var(--muted); font-size:9px}
    .learning-loop i{color:#b0aeb6; font-style:normal}
    .toast{position:fixed; bottom:18px; left:50%; transform:translateX(-50%); background:#0b0c0e; color:var(--gold); border:1px solid #2a2616; padding:10px 14px; border-radius:99px; font-size:12px; box-shadow:0 20px 50px rgba(0,0,0,.2); z-index:60}

    @media(max-width: 1100px){
      .hero{grid-template-columns:1fr}
      .roadmap-form .roadmap-grid{grid-template-columns:1fr}
      .week-grid{grid-template-columns:1fr}
      .lib-grid{grid-template-columns:1fr}
      .lib-card.feature{grid-row:auto}
      .topic-grid{grid-template-columns:1fr}
      .anchor-3{grid-template-columns:1fr; gap:12px}
      .anchor-3 div{border-left:0; border-top:1px solid #ffffff14; padding:12px 0 0}
      .anchor-3 div:first-child{border:0; padding-top:0}
      .try-card{grid-template-columns:1fr}
      .workbook-card{grid-template-columns:48px 1fr; gap:12px}
      .workbook-card footer{grid-column:2; justify-items:start; border-left:0; border-top:1px solid var(--line); padding:12px 0 0; margin-top:4px}
      .practice-progress{grid-template-columns:1fr; gap:10px}
      .mission-grid{grid-template-columns:1fr}
      .roadmap-list article{grid-template-columns:1fr}
      .roadmap-list aside{justify-self:start}
      .glossary-grid{grid-template-columns:1fr}
      .stuck-grid{grid-template-columns:1fr}
      .home-bottom{grid-template-columns:1fr}
      .learning-loop{flex-wrap:wrap}
      .section-head.with-filters{flex-direction:column; align-items:stretch}
      .filters{width:100%}
      .filters input{flex:1}
    }
  `]
})
export class HomeComponent {
  // Roadmap state (Do/React)
  role = signal('Investigative Reporter');
  goal = signal('Research & verification at speed');
  hours = signal(6);
  risk = signal('Publish-grade — citations required');
  planReady = signal(false);
  weeks = computed(() => {
    const h = this.hours();
    const r = this.role();
    if(h < 5) return [
      { week:'WEEK 01', title:'Foundations — Generalist Toolkit', detail:'LLM + retrieval + human gate. Beat: '+r, proof:'Concept memo with 3 sources' },
      { week:'WEEK 02', title:'Craft — Prompt vs Context', detail:'Editorial prompts + evidence windows for your beat', proof:'Prompt library (5) with evals' },
      { week:'WEEK 03', title:'Evidence Locker', detail:'Archive/FOIA/transcripts → citable context', proof:'RAG over 20 docs, citation coverage 90%' },
      { week:'WEEK 04', title:'Ship — Fact-Checked Brief', detail:'Research → draft → standards gate → publish', proof:'1 bylined brief, Do-not-publish checklist' },
    ];
    if(h < 10) return [
      { week:'WEEK 01', title:'Foundations + Ethics', detail:'Generalist toolkit + bias/PII guardrails', proof:'Risk sheet for 1 story' },
      { week:'WEEK 02', title:'Investigative Research System', detail:'Tip triage to source graph', proof:'Source graph + interview synthesis' },
      { week:'WEEK 03', title:'Agent for the Desk', detail:'Inbox → brief agent with human gate', proof:'Agent demo, cost/log review' },
      { week:'WEEK 04', title:'Publish & Reflect', detail:'FOIA brief + audience explainer, measured', proof:'2 proofs, distribution test' },
    ];
    return [
      { week:'WEEK 01', title:'Foundations → Systems', detail:'Toolkit + workflow orchestration', proof:'Workflow map, failure modes' },
      { week:'WEEK 02', title:'RAG & Evaluation', detail:'Evidence locker + eval harness', proof:'Eval dashboard, hallucination < 5%' },
      { week:'WEEK 03', title:'Newsroom Product', detail:'Archive copilot or briefing agent', proof:'Internal copilot, pilot users' },
      { week:'WEEK 04', title:'Deploy & Lead', detail:'VCA deploy + standards rollout', proof:'VCA deploy, rollout memo' },
    ];
  });
  generate(){ this.planReady.set(true); this.toast.set('Newsroom roadmap generated — '+this.hours()+' hrs/week, '+this.role()+'. Follow Level 01 → Lab.'); setTimeout(()=>this.toast.set(''), 2600); }

  libCards = [
    { kicker:'LEARN', title:'Learning Topics', desc:'105 sections across 6 editorial pillars — from foundations to audience & ethics.', cta:'Explore topics', icon:'◈', tone:'', anchor:'learning-topics' },
    { kicker:'BUILD WITH GUIDANCE', title:'Guided Workbooks', desc:'Exact steps, prompts, checks, fixes, and proof — for the 9am deadline.', cta:'Open workbooks', icon:'≡', tone:'', anchor:'workbooks' },
    { kicker:'CREATE PROOF', title:'Practice Lab', desc:'Six proofs an editor can verify — with citation and PII evals.', cta:'Start a proof', icon:'◆', tone:'', anchor:'lab' },
    { kicker:'SEE THE BIG PICTURE', title:'Five-Level Roadmap', desc:'Foundations → Leadership, each gate requires a bylined artifact.', cta:'Explore levels', icon:'⟡', tone:'', anchor:'roadmap' },
  ];

  pillars = ['Foundations','Reporting','Verification','Production','Audience','Ethics'];
  pillar = signal('all');
  topicFilter = signal('');
  // 18 representative of 105 (grouped + counted)
  allTopics = [
    { pillar:'Foundations', level:'L1', time:'18 min', title:'The AI Generalist Toolkit for Newsrooms', desc:'Models + prompts + context + evals as a desk. When to prompt, when to orchestrate.', job:'Explain AI to your newsroom', format:'Read + Try' },
    { pillar:'Foundations', level:'L1', time:'22 min', title:'How LLMs Actually Work (For Reporters)', desc:'Tokens, attention, and why the model “sounds right” is not evidence.', job:'Interview an AI source', format:'Read' },
    { pillar:'Foundations', level:'L1', time:'25 min', title:'Prompt Engineering vs Context Engineering', desc:'Precision instruction vs evidence window — the twin levers for reliability.', job:'Write a standards-grade prompt', format:'Workshop' },
    { pillar:'Reporting', level:'L2', time:'20 min', title:'Research at Speed — Synthesis without Fabrication', desc:'Turn 20 tabs into a cited synthesis with a standards checklist.', job:'Background a breaking story', format:'Workshop' },
    { pillar:'Reporting', level:'L2', time:'30 min', title:'Interview Synthesis — From Transcript to Nut Graf', desc:'Transcript → claims → gap analysis → follow-up questions.', job:'Produce a post-interview brief', format:'Lab' },
    { pillar:'Reporting', level:'L2', time:'28 min', title:'FOIA to Context Window', desc:'Chunk, de-duplicate, and cite FOIA dumps for RAG.', job:'Build a FOIA evidence locker', format:'Lab' },
    { pillar:'Verification', level:'L2', time:'24 min', title:'Verification Protocols for Generative Output', desc:'Citation coverage, confidence tags, and the Do-not-publish gate.', job:'Fact-check an AI draft', format:'Checklist' },
    { pillar:'Verification', level:'L2', time:'20 min', title:'PII & Source Protection', desc:'Redaction, permissions, and when not to paste a source.', job:'Handle sensitive material', format:'Policy' },
    { pillar:'Verification', level:'L3', time:'26 min', title:'Bias & Framing Audits', desc:'Audit prompt and retrieval for framing, omission, and amplification.', job:'Audit a generated explainer', format:'Eval' },
    { pillar:'Production', level:'L3', time:'32 min', title:'From Prompt to Newsroom Workflow', desc:'Single prompt → multi-step system with human gate and logs.', job:'Design a tip-to-brief workflow', format:'System' },
    { pillar:'Production', level:'L3', time:'35 min', title:'Agents for the Assignment Desk', desc:'Build an inbox → brief agent with cost, latency, and fallback.', job:'Automate the morning brief', format:'Build' },
    { pillar:'Production', level:'L4', time:'40 min', title:'RAG — Your Archive as Context', desc:'Your 10 years of clips as a citable retrieval layer.', job:'Launch an archive copilot', format:'Build' },
    { pillar:'Audience', level:'L4', time:'22 min', title:'Explain Like I’m a Reader — Controlled Generation', desc:'Brand voice + explainer generation with legal-reviewed constraints.', job:'Produce an explainer series', format:'System' },
    { pillar:'Audience', level:'L4', time:'18 min', title:'Distribution & Analytics with AI', desc:'Headline, hed, and audience tests without clickbait.', job:'Test 3 heds with evals', format:'Lab' },
    { pillar:'Ethics', level:'L5', time:'20 min', title:'Editorial Policy for Generative AI', desc:'Attribution, disclosure, and when to byline the system.', job:'Draft your newsroom policy', format:'Policy' },
    { pillar:'Ethics', level:'L5', time:'18 min', title:'Leadership — ROI & Risk for Editors', desc:'Cost, latency, trust, and team enablement metrics.', job:'Pitch the budget', format:'Memo' },
    { pillar:'Foundations', level:'L1', time:'15 min', title:'Evals & Red-Teaming for Journalists', desc:'Make reliability measurable: evals before anecdotes.', job:'Red-team your beat prompt', format:'Eval' },
    { pillar:'Production', level:'L4', time:'30 min', title:'VCA Article Server — From Demo to Deploy', desc:'Containerize, health-check, and hand off to VCA with rollback.', job:'Deploy to VCA', format:'Deploy' },
  ];
  filteredTopics = computed(() => {
    const q = this.topicFilter().toLowerCase();
    const p = this.pillar();
    return this.allTopics.filter(t => (p==='all' || t.pillar===p) && (!q || (t.title+t.desc+t.job).toLowerCase().includes(q)));
  });

  workbooks = [
    { n:'01', title:'Source to Story — The Provenance Co-Pilot', desc:'Draft that cites. Verifies. Never invents a source. With a standards desk gate before publish.', time:'~90 min', proof:'1 cited draft + source map', guardrail:'Citation coverage ≥90% • Confidence tags', level:'Starter', editorial:'For reporters & fact-checkers' },
    { n:'02', title:'Evidence Locker — Context Engineering Lab', desc:'Turn archives, FOIA, and transcripts into a citable retrieval layer. Chunking that preserves meaning.', time:'~75 min', proof:'RAG over 20 docs', guardrail:'PII redaction • Permissions', level:'Core', editorial:'For researchers & archivists' },
    { n:'03', title:'Tip to Brief — Agent for the Desk', desc:'An assignment-desk agent: tip → triage → brief → human gate. Logged, cost-tracked, fallback-ready.', time:'~110 min', proof:'Brief agent demo', guardrail:'Human gate • Cost caps', level:'Builder', editorial:'For editors & producers' },
    { n:'04', title:'Standards Desk — Eval & Red-Team Sprint', desc:'Design evals, red-team your prompts, and ship with a fabrication-risk report your editor trusts.', time:'~60 min', proof:'Eval dashboard', guardrail:'Hallucination <5% • Bias audit', level:'Safety', editorial:'For standards & ethics' },
    { n:'05', title:'From Demo to Deploy — VCA Newsroom Handoff', desc:'Containerize, monitor, and deploy to the VCA article server with health checks and rollback.', time:'~95 min', proof:'VCA deploy + runbook', guardrail:'Health + rollback • Audit log', level:'Enterprise', editorial:'For product & dev' },
  ];

  missions = signal([
    { tag:'PORTFOLIO', title:'Fact-Checked Brief Generator', desc:'Tip + 3 sources → cited brief with Do-not-publish checklist. Standards desk reviews.', eval:'Citation ≥90%, fabrication 0', done:false },
    { tag:'PORTFOLIO', title:'Archive Copilot (Citable RAG)', desc:'10 years of clips as a retrieval layer — with permissions and PII redaction.', eval:'Retrieval precision + redaction', done:false },
    { tag:'PORTFOLIO', title:'Interview Synthesis Agent', desc:'Transcript → claims → gap analysis → follow-up questions — in 10 minutes.', eval:'Claim recall + gap detection', done:false },
    { tag:'PORTFOLIO', title:'Bias & Framing Audit', desc:'Stress-test a political explainer for omission and amplification. Ship the report.', eval:'Bias rubric, before/after', done:false },
    { tag:'PORTFOLIO', title:'Controlled Explainer System', desc:'Consistent voice + legal-reviewed constraints for explainers at scale.', eval:'Voice consistency + constraint pass', done:false },
    { tag:'PORTFOLIO', title:'VCA Deploy — Newsroom Product', desc:'Deploy a containerized product to VCA with health, logs, and rollback.', eval:'Deploy success + runbook', done:false },
  ]);
  labProgress = computed(()=> Math.round(this.missions().filter(m=>m.done).length/6*100));

  levels = [
    { n:'01', title:'Foundations — The Generalist Reporter Toolkit', desc:'LLM, diffusion, and the generalist stack. Learn when to prompt, when to orchestrate, and when to demand a citation.', meta:'Prompt × Context × Evals', proof:'Concept memo + prompt library', includes:'Session 01 • 18 topics • Evals' },
    { n:'02', title:'Craft — Research, Verification & Writing', desc:'Turn AI into a rigorous thought partner. Synthesis, interview, FOIA, and provenance-first drafting.', meta:'Research • Verify • Draft', proof:'Cited brief + source map', includes:'Workbooks 01–02 • Verification labs' },
    { n:'03', title:'Systems — Newsroom Workflows & Agents', desc:'From single prompts to multi-step systems. Pipelines with checks, human gates, and fallbacks.', meta:'Workflows • Agents • Logs', proof:'Tip-to-brief agent', includes:'Workbook 03 • Agent labs' },
    { n:'04', title:'Products — From Prototype to Published', desc:'Ship internal copilots, briefing products, and archive tools with observability and cost controls.', meta:'Ship • Observe • Scale', proof:'Archive copilot or briefing product', includes:'Workbooks 04–05 • RAG' },
    { n:'05', title:'Leadership — Standards & Transformation', desc:'Governance, policy, team enablement, and ROI — the editor’s playbook for responsible scale.', meta:'Govern • Enable • Measure', proof:'Policy memo + rollout plan', includes:'Ethics pillar • Leadership labs' },
  ];

  glossaryQ = signal('');
  allGlossary = [
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
  filteredGlossary = computed(()=> {
    const q = this.glossaryQ().toLowerCase();
    return !q ? this.allGlossary : this.allGlossary.filter(g => (g.term+g.alias+g.def+g.journalist).toLowerCase().includes(q));
  });

  stuck = [
    { icon:'◈', title:'I’m new — where do I start?', desc:'You’re a reporter, not an engineer. Start with the 90-second roadmap.', fix:'Action: Click “Create my newsroom roadmap” → answer 8 questions → start Level 01. No install.' },
    { icon:'≡', title:'My prompt sounds right but isn’t cited', desc:'Hallucination risk. The model is drafting without evidence.', fix:'Fix: Add context window (2–3 sources, 800 tokens) + demand citations + confidence tags. Open Workbook 01.' },
    { icon:'◎', title:'My source won’t verify / PII worry', desc:'Sensitive material or archive won’t pass the gate.', fix:'Fix: Redact PII before paste. Use Evidence Locker (Workbook 02) for permissioned RAG. Check glossary: PII.' },
    { icon:'⟡', title:'My deploy to VCA fails', desc:'Container builds locally but fails on VCA.', fix:'Fix: Check Dockerfile healthcheck + base-href. See Workbook 05 → VCA runbook. Test /health.' },
    { icon:'⬡', title:'My brief fails the Do-not-publish gate', desc:'Citation coverage <90% or confidence low.', fix:'Fix: Add 1–2 sources, shrink context, re-run eval. If still low, escalate to standards desk — don’t publish.' },
    { icon:'⬢', title:'I don’t know which of the 105 to do', desc:'Tool sprawl. You’re doing too much.', fix:'Fix: Re-run onboarding with tighter hours. Filter Learning Topics by pillar (Verification) and job (Fact-check).' },
  ];

  toast = signal('');
  samplePrompt = `You are an enterprise editorial assistant for AI Accelerator Hub — JOURNALISM EDITION.
GOAL: Transform the user’s raw tip + sources into a publish-ready brief.
GUARDRAILS: Cite every claim [1][2], flag uncertainty (high/med/low), redact PII, refuse off-scope, add “Do not publish if…” checklist.
CONTEXT: <paste 2–3 trusted sources, max 800 tokens, with titles + dates>
TASK: 1) List claims needing verification 2) Draft 180-word brief with citations 3) Confidence tags 4) Open questions for the reporter
OUTPUT: Markdown with [citations], confidence tags, and a “Do not publish if citation coverage <90% or any PII remains” gate.`;

  scrollTo(id: string){ document.getElementById(id)?.scrollIntoView({behavior:'smooth', block:'start'}); }
  openTopic(title: string){ this.toast.set('“'+title+'” — open in Learning Topics. Filters and search persist.'); setTimeout(()=>this.toast.set(''), 2200); }
  openWorkbook(n: string){ this.toast.set('Workbook '+n+' — exact steps, prompts, checks, fixes, and proof. Standards desk included.'); setTimeout(()=>this.toast.set(''), 2400); }
  openStuck(title: string){ this.toast.set(title+' — fix copied to clipboard pattern. Try it, then re-evaluate.'); setTimeout(()=>this.toast.set(''), 2400); }
  copyPrompt(){ navigator.clipboard.writeText(this.samplePrompt).then(()=> { this.toast.set('Editorial starter prompt copied — paste into Workbook 01.'); setTimeout(()=>this.toast.set(''), 2200); }); }
  toggleMission(m: any){
    m.done = !m.done;
    this.missions.set([...this.missions()]);
    this.toast.set(m.done ? 'Proof marked complete — portfolio updated (standards review queued).' : 'Proof reopened.');
    setTimeout(()=>this.toast.set(''), 1800);
  }
}
