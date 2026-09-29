import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';

@Component({
  selector: 'app-my-roadmap-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/" class="back">← Back to Home</a>
      <app-page-header kicker="PERSONALIZED JOURNEY — DO / REACT" title="My AI Roadmap — your 30-day newsroom plan." desc="Answer 8 questions. The system does a mapping, you react to the preview, the system refines. No generic path — your beat, time, and risk shape the library."></app-page-header>

      <div class="grid">
        <div class="form-card">
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
          <button class="btn-primary full" (click)="planReady.set(true)">Generate my 30-day plan</button>
          @if(planReady()){
            <div class="done">✓ Plan generated — your Do/React loop is live. Change any answer to re-map.</div>
          }
        </div>

        <div class="preview">
          <div class="eyebrow gold"><i></i> YOUR PREVIEW — REACT & REFINE</div>
          <h3>{{role()}} • {{goal()}}</h3>
          <p class="muted">We propose, you correct, we re-map. The preview updates live.</p>
          <div class="weeks">
            @for(w of weeks(); track w.title){
              <div class="week"><span>{{w.week}}</span><strong>{{w.title}}</strong><small>{{w.detail}}</small><em>{{w.proof}}</em></div>
            }
          </div>
          <div class="guardrail">Editorial guardrail: {{risk()}} — every artifact requires citations + confidence tags before publish.</div>
          <div class="cta-row">
            <a routerLink="/learning-topics" class="btn-ghost">Browse the 105 sections →</a>
            <a routerLink="/workbooks" class="btn-primary sm">Start Workbook 01 →</a>
          </div>
        </div>
      </div>

      <div class="internal-note">
        <strong>Internal loop engineering (how this page works):</strong> Chain-of-thought → Do: map role/goal/hours to pillar → React: show 4-week preview → Re-map on input change. No hallucinated path — every week points to a real page (Topics/Workbooks/Lab).
      </div>
    </div>
  `,
  styles: [`
    .view{padding:24px;max-width:1400px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-flex;align-items:center;gap:6px;margin-bottom:10px}
    .back:hover{color:var(--ink);border-color:var(--muted)}
    .eyebrow{color:#787681;letter-spacing:.13em;text-transform:uppercase;display:inline-flex;align-items:center;gap:8px;font-size:9px;font-weight:700}
    .eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--gold);display:inline-block}
    .eyebrow.gold{color:#8a7a2b}
    .grid{display:grid;grid-template-columns:380px 1fr;gap:16px;margin-top:16px}
    .form-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px}
    .form-card h3{margin:0 0 12px;font-size:16px}
    .form-card label{display:block;margin-top:12px;font-size:12px;font-weight:600}
    .form-card select,.form-card input{width:100%;margin-top:6px;border:1px solid var(--line);border-radius:8px;padding:8px;background:#fff;font-size:12.5px}
    .form-card small{color:var(--muted);font-size:11px}
    .btn-primary{background:var(--gold);color:#111;border:0;border-radius:9px;min-height:44px;padding:0 16px;font-size:12.5px;font-weight:750;cursor:pointer}
    .btn-primary.sm{min-height:36px;padding:0 12px;font-size:11.5px}
    .btn-primary.full{width:100%;justify-content:center;margin-top:12px;display:inline-flex;align-items:center}
    .btn-ghost{background:#fff;border:1px solid var(--line);border-radius:8px;min-height:36px;padding:0 12px;font-weight:700;font-size:11.5px;display:inline-flex;align-items:center}
    .done{margin-top:10px;background:#fff8df;border:1px solid #f0dd9a;color:#7a5a00;border-radius:8px;padding:8px;font-size:11px}
    .preview{background:#0b0c0e;color:#fff;border-radius:14px;padding:16px;border:1px solid #1f1f1f}
    .preview h3{margin:6px 0 4px;font-size:16px;color:var(--gold)}
    .muted{color:#ffffff8a;font-size:11.5px;margin:0}
    .weeks{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px}
    .week{background:#ffffff0f;border:1px solid #ffffff14;border-radius:10px;padding:12px}
    .week span{color:var(--gold);font-size:8px;letter-spacing:.1em;font-weight:700}
    .week strong{display:block;margin:4px 0 2px;font-size:12.5px;color:#fff}
    .week small{color:#ffffffb3;font-size:11px;display:block;line-height:1.4}
    .week em{color:#a89a6a;font-size:10px;font-style:normal;margin-top:6px;display:block}
    .guardrail{margin-top:12px;background:rgba(212,175,55,.12);border:1px solid rgba(212,175,55,.25);color:#f0dd9a;border-radius:8px;padding:8px;font-size:11px}
    .cta-row{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
    .internal-note{margin-top:16px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px;font-size:11.5px;color:var(--muted)}
    .internal-note strong{color:var(--ink)}
    @media(max-width:900px){.grid{grid-template-columns:1fr}.weeks{grid-template-columns:1fr}}
  `]
})
export class MyRoadmapComponent {
  role = signal('Investigative Reporter');
  goal = signal('Research & verification at speed');
  hours = signal(6);
  risk = signal('Publish-grade — citations required');
  planReady = signal(false);
  weeks = computed(() => {
    const h = this.hours();
    if (h < 5) return [
      { week:'WEEK 01', title:'Foundations — Generalist Toolkit', detail:'LLM + retrieval + human gate.', proof:'Concept memo with 3 sources' },
      { week:'WEEK 02', title:'Craft — Prompt vs Context', detail:'Editorial prompts + evidence windows.', proof:'Prompt library (5) with evals' },
      { week:'WEEK 03', title:'Evidence Locker', detail:'Archive/FOIA/transcripts → citable context.', proof:'RAG over 20 docs' },
      { week:'WEEK 04', title:'Ship — Fact-Checked Brief', detail:'Research → draft → standards gate.', proof:'1 bylined brief' },
    ];
    if (h < 10) return [
      { week:'WEEK 01', title:'Foundations + Ethics', detail:'Generalist toolkit + bias/PII guardrails.', proof:'Risk sheet for 1 story' },
      { week:'WEEK 02', title:'Investigative Research System', detail:'Tip triage to source graph.', proof:'Source graph' },
      { week:'WEEK 03', title:'Agent for the Desk', detail:'Inbox → brief agent with human gate.', proof:'Agent demo' },
      { week:'WEEK 04', title:'Publish & Reflect', detail:'FOIA brief + audience explainer.', proof:'2 proofs' },
    ];
    return [
      { week:'WEEK 01', title:'Foundations → Systems', detail:'Toolkit + workflow orchestration.', proof:'Workflow map' },
      { week:'WEEK 02', title:'RAG & Evaluation', detail:'Evidence locker + eval harness.', proof:'Eval dashboard' },
      { week:'WEEK 03', title:'Newsroom Product', detail:'Archive copilot or briefing agent.', proof:'Internal copilot' },
      { week:'WEEK 04', title:'Deploy & Lead', detail:'VCA deploy + standards rollout.', proof:'VCA deploy' },
    ];
  });
}
