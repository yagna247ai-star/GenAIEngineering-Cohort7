import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { MISSIONS } from '../../core/data';
import { ProgressService } from '../../core/progress.service';

@Component({
  selector: 'app-lab-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/" class="back">← Back to Home</a>
      <app-page-header kicker="CREATE PROOF — PRACTICE LAB" title="Six portfolio proofs you can show an editor." desc="Confidence comes from shipped work. Each proof is evaluated for citation coverage, fabrication risk, and PII handling."></app-page-header>
      <div class="count-top">All 6 portfolio proofs on this page — click any to open exact steps, prompt, checks, fixes.</div>

      <div class="progress-wrap">
        <div><strong>{{prog.pct()}}%</strong><span>Lab completion</span></div>
        <div class="bar"><span [style.width.%]="prog.pct()"></span></div>
        <p>Complete 2 proofs to unlock your AI Accelerator certificate. Standards desk reviews all proofs.</p>
      </div>

      <div class="grid">
        @for(m of missions; track m.title){
          <a [routerLink]="['/lab', getIdx(m) + 1]" class="lab" [class.done]="isDone(m)">
            <div class="check">{{isDone(m) ? '✓' : '+'}}</div>
            <div>
              <div class="eyebrow gold"><i></i> {{m.tag}}</div>
              <h3>{{m.title}}</h3>
              <p>{{m.desc}}</p>
              <div class="eval">Eval: {{m.eval}}</div>
            </div>
            <strong>{{isDone(m) ? 'Completed — View proof' : 'Start proof →'}}</strong>
          </a>
        }
        <div class="hint">Tip: Click a proof to open exact steps, prompt, checks, fixes. Toggle complete inside detail.</div>
      </div>
    </div>
  `,
  styles: [`
    .view{padding:24px;max-width:1400px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-flex;align-items:center;gap:6px;margin-bottom:10px}
    .back:hover{color:var(--ink);border-color:var(--muted)}
    .count-top{margin:10px 0 4px;background:var(--paper-2);border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:12.5px;color:var(--muted);font-weight:500}
    .eyebrow{color:#787681;letter-spacing:.13em;text-transform:uppercase;display:inline-flex;align-items:center;gap:8px;font-size:9px;font-weight:700}
    .eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--gold);display:inline-block}
    .eyebrow.gold{color:#8a7a2b}
    .progress-wrap{display:grid;grid-template-columns:110px 1fr 230px;gap:16px;align-items:center;background:#0b0c0e;color:#fff;border-radius:12px;padding:16px;border:1px solid #1f1f1f;margin-top:12px}
    .progress-wrap strong{color:var(--gold);font-size:26px}
    .progress-wrap span{color:#ffffff8a;font-size:9px;letter-spacing:.08em;text-transform:uppercase}
    .bar{height:5px;background:#ffffff14;border-radius:99px;overflow:hidden}
    .bar span{height:100%;background:var(--gold);display:block}
    .progress-wrap p{margin:0;color:#ffffff8a;font-size:10.5px;line-height:1.4}
    .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:12px}
    .lab{display:grid;grid-template-columns:36px 1fr;gap:12px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px;text-align:left;cursor:pointer;transition:.18s}
    .lab:hover{border-color:#d2c7a0;transform:translateY(-1px)}
    .lab.done{background:#fff8df;border-color:#f0dd9a}
    .check{width:34px;height:34px;display:grid;place-items:center;border:1px solid #d9d6ce;border-radius:8px;font-size:13px;font-weight:700}
    .lab.done .check{background:var(--gold);color:#111;border-color:var(--gold)}
    .lab h3{margin:4px 0 4px;font-size:14.5px}
    .lab p{margin:0;color:var(--muted);font-size:11.5px;line-height:1.5}
    .eval{margin-top:6px;background:var(--paper-2);border:1px solid var(--line);border-radius:6px;padding:4px 6px;font-size:10px;color:#6b6a6e;display:inline-block}
    .lab strong{grid-column:2;margin-top:6px;color:var(--gold-dark);font-size:11px}
    .hint{grid-column:1/-1;color:var(--muted);font-size:11px;text-align:center;margin-top:4px}
    @media(max-width:900px){.progress-wrap{grid-template-columns:1fr}.grid{grid-template-columns:1fr}}
  `]
})
export class LabComponent {
  prog = inject(ProgressService);
  missions = MISSIONS;
  private map = new Map<string, number>();
  constructor() { MISSIONS.forEach((m, i) => this.map.set(m.title, i)); }
  isDone(m: typeof MISSIONS[number]) { return this.prog.missionsDone()[this.map.get(m.title)!]; }
  getIdx(m: typeof MISSIONS[number]) { return this.map.get(m.title)!; }
}
