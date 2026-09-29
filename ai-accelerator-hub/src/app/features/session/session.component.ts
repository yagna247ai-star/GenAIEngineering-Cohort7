import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { SESSION_PROMPT } from '../../core/data';

@Component({
  selector: 'app-session-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/learning-topics" class="back">← Back to All Learning Topics</a>
      <app-page-header kicker="SESSION 01 • FOUNDATIONS — JOURNALISM FOCUS" title="Foundations of Generative AI and the AI Generalist Toolkit" desc="For journalists, generative AI is not a chatbot. It is a generalist toolkit — models + prompts + context + evals — that turns reporting labor into verifiable systems."></app-page-header>

      <div class="anchor">
        <div class="eyebrow gold"><i></i> SESSION 01 • 45 MIN • PUBLISH-GRADE</div>
        <h2>Why this session is the newsroom’s foundation</h2>
        <p class="lead">This is the mental model every later workflow depends on. Master the Generalist Reporter Lens before you touch a prompt.</p>

        <div class="three">
          <div><strong>01 — The Generalist Reporter Lens</strong><span>Compose LLM, retrieval, and human judgment like a desk: researcher + drafter + standards editor. <em>Example:</em> Tip → Retrieval → Draft → Gate → Publish.</span></div>
          <div><strong>02 — Prompt Engineering <em>vs</em> Context Engineering</strong><span><b>Prompt</b> = precise instruction (role, task, format, guardrail). <b>Context</b> = evidence window (sources, transcripts, FOIA). Reliability lives in context; leverage lives in prompt.</span></div>
          <div><strong>03 — Editorial Guardrails</strong><span>Every output carries citations + confidence (high/med/low) + a <em>Do-not-publish-if…</em> checklist. Verification is the product. <a routerLink="/glossary">Glossary: Hallucination</a></span></div>
        </div>

        <div class="meta"><span>Prerequisite: None</span><span>Next: <a routerLink="/workbooks">Workbook 01 →</a></span><span>Lab: <a routerLink="/lab">Fact-Checked Brief</a></span></div>

        <div class="try">
          <div>
            <div class="eyebrow"><i></i> TRY IT NOW — EDITORIAL PROMPT</div>
            <h3>Turn a vague brief into a standards-ready system prompt.</h3>
            <p>Copy, paste your 2–3 sources, run, and check the <em>Do-not-publish</em> gate. Do/React: you do the paste, system reacts with citations.</p>
            <div class="try-actions">
              <button (click)="copy()">Copy starter prompt</button>
              <a routerLink="/workbooks" class="btn-ghost">Open Workbook 01 →</a>
            </div>
          </div>
          <pre><code>{{prompt}}</code></pre>
        </div>
      </div>

      <div class="nav-row">
        <a routerLink="/learning-topics" class="btn-ghost">← Back to Learning Topics</a>
        <a routerLink="/workbooks" class="btn-primary">Continue to Workbooks →</a>
      </div>
      @if(toast()){
        <div class="toast">{{toast()}}</div>
      }
    </div>
  `,
  styles: [`
    .view{padding:24px;max-width:1400px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-flex;align-items:center;gap:6px;margin-bottom:10px}
    .back:hover{color:var(--ink);border-color:var(--muted)}
    .eyebrow{color:#787681;letter-spacing:.13em;text-transform:uppercase;display:inline-flex;align-items:center;gap:8px;font-size:9px;font-weight:700}
    .eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--gold);display:inline-block}
    .eyebrow.gold{color:#8a7a2b}
    .anchor{background:#0b0c0e;color:#fff;border-radius:16px;padding:24px;border:1px solid #1f1f1f;margin-top:12px}
    .anchor h2{margin:8px 0 8px;font-size:clamp(22px,3vw,28px)}
    .lead{color:#ffffffb3;font-size:12.5px;max-width:760px}
    .three{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px}
    .three div{border-left:1px solid #ffffff16;padding-left:16px;display:grid;gap:6px}
    .three div:first-child{border:0;padding-left:0}
    .three strong{color:var(--gold);font-size:11px}
    .three span{color:#ffffffb3;font-size:11.5px;line-height:1.5}
    .meta{margin-top:12px;color:#ffffff66;font-size:10px;display:flex;gap:12px;flex-wrap:wrap}
    .meta a{color:var(--gold);text-decoration:underline}
    .try{margin-top:16px;background:var(--gold);color:#111;border-radius:12px;display:grid;grid-template-columns:.9fr 1.1fr;gap:16px;padding:16px}
    .try h3{margin:6px 0 6px;font-size:16px}
    .try p{margin:0 0 10px;font-size:11.5px;opacity:.8}
    .try-actions{display:flex;gap:8px;flex-wrap:wrap}
    .try button{background:#111;color:var(--gold);border:1px solid #111;border-radius:8px;min-height:34px;padding:0 10px;font-weight:700;cursor:pointer}
    .btn-ghost{background:#fff;border:1px solid var(--line);border-radius:8px;min-height:36px;padding:0 12px;font-weight:700;font-size:11.5px;display:inline-flex;align-items:center}
    .btn-primary{background:var(--gold);color:#111;border:0;border-radius:9px;min-height:36px;padding:0 14px;font-weight:750;display:inline-flex;align-items:center}
    .try pre{margin:0;background:#111;color:#e8e0c0;border-radius:9px;padding:12px;overflow:auto;font:11px/1.5 "JetBrains Mono",monospace;border:1px solid #222}
    .nav-row{display:flex;justify-content:space-between;gap:12px;margin-top:16px;flex-wrap:wrap}
    .toast{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);background:#0b0c0e;color:var(--gold);border:1px solid #2a2616;padding:10px 14px;border-radius:99px;font-size:12px}
    @media(max-width:900px){.three{grid-template-columns:1fr}.three div{border-left:0;border-top:1px solid #ffffff14;padding:12px 0 0}.try{grid-template-columns:1fr}}
  `]
})
export class SessionComponent {
  prompt = SESSION_PROMPT;
  toast = signal('');
  copy() {
    navigator.clipboard.writeText(this.prompt).then(() => {
      this.toast.set('Editorial starter prompt copied — paste into Workbook 01.');
      setTimeout(() => this.toast.set(''), 2200);
    });
  }
}
