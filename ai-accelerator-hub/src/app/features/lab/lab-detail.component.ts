import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { MISSIONS } from '../../core/data';
import { ProgressService } from '../../core/progress.service';

@Component({
  selector: 'app-lab-detail',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    @if(m(); as item){
      <div class="view">
        <a routerLink="/lab" class="back">← All Proofs</a>
        <app-page-header kicker="PRACTICE LAB • PORTFOLIO PROOF" [title]="item.title" [desc]="item.desc"></app-page-header>
        <div class="eval">Eval: {{item.eval}} — Journalist-grade rubric, not a demo.</div>

        <div class="steps">
          <article>
            <h3>Exact steps</h3>
            <ol>
              <li>Gather 2–3 sources (max 800 tokens). Tag permission.</li>
              <li>Run provenance prompt — demand citations [1][2] + confidence.</li>
              <li>Check citation coverage ≥90% + PII 0 + eval pass.</li>
              <li>Export proof + source map for portfolio.</li>
            </ol>
          </article>
          <article>
            <h3>Prompt to copy</h3>
            <pre><code>Tip + [1][2][3] sources (800 tokens) → 180-word brief [citations] + confidence high/med/low + Do-not-publish if &lt;90%</code></pre>
          </article>
          <article>
            <h3>Fixes</h3>
            <ul>
              <li>Coverage &lt;90%: Add one more source, shrink to 600 tokens.</li>
              <li>Hallucinated span: Re-chunk on sentences, demand verbatim.</li>
              <li>PII leak: Redact before paste, use Evidence Locker retrieval.</li>
            </ul>
          </article>
        </div>

        <div class="actions">
          <button class="btn-primary" (click)="toggle()">{{done() ? '✓ Completed — View proof' : 'Mark as complete'}}</button>
          <a routerLink="/lab" class="btn-ghost">Back to Lab</a>
        </div>
        @if(done()){
          <div class="done">Proof complete — portfolio updated. Standards desk queued.</div>
        }
      </div>
    }
  `,
  styles: [`
    .view{padding:24px;max-width:900px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-block;margin-bottom:12px}
    .eval{margin-top:8px;background:var(--paper-2);border:1px solid var(--line);border-radius:8px;padding:8px;font-size:11px;font-weight:600;color:var(--muted-dark);display:inline-block}
    .steps{display:grid;gap:12px;margin-top:16px}
    .steps article{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px}
    .steps h3{margin:0 0 8px;font-size:14px}
    .steps ol,.steps ul{margin:0;padding-left:18px}
    .steps li{margin:6px 0;color:var(--text);font-size:13.5px;line-height:1.5}
    .steps li::marker{color:var(--gold-dark)}
    .steps pre{margin:8px 0 0;background:#0f0f12;color:#e8e0c0;border-radius:8px;padding:12px;overflow:auto;font:12.5px/1.5 "JetBrains Mono",monospace}
    .actions{display:flex;gap:12px;margin-top:16px}
    .btn-primary{background:var(--gold);color:#111;border:0;border-radius:9px;min-height:40px;padding:0 14px;font-weight:750;cursor:pointer}
    .btn-ghost{background:#fff;border:1px solid var(--line);border-radius:8px;min-height:36px;padding:0 12px;font-weight:700;display:inline-flex;align-items:center}
    .done{margin-top:12px;background:#fff8df;border:1px solid #f0dd9a;color:#7a5a00;border-radius:8px;padding:8px;font-size:11px}
  `]
})
export class LabDetailComponent {
  private route = inject(ActivatedRoute);
  prog = inject(ProgressService);
  toast = signal('');
  m = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    const idx = Number(id) - 1;
    if (!isNaN(idx) && idx >= 0 && idx < MISSIONS.length) return MISSIONS[idx];
    return MISSIONS[0];
  });
  done = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id') ?? '1') - 1;
    return this.prog.missionsDone()[id] ?? false;
  });
  toggle() {
    const id = Number(this.route.snapshot.paramMap.get('id') ?? '1') - 1;
    this.prog.toggle(id);
  }
}
