import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { WORKBOOKS } from '../../core/data';

@Component({
  selector: 'app-workbooks-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/" class="back">← Back to Home</a>
      <app-page-header kicker="BUILD WITH GUIDANCE — 5 WORKBOOKS" title="Exact steps, prompts, checks, fixes, and proof." desc="Each workbook is a newsroom workflow you can run on tomorrow’s story. Not a tutorial — a bylinable system with a standards desk."></app-page-header>
      <div class="count-top">All 5 guided workbooks on this page — each with steps, prompt, checks, fixes, and proof.</div>
      <div class="grid">
        @for(w of wbs; track w.n){
          <a [routerLink]="['/workbooks', w.n]" class="wb">
            <div class="wb-num">{{w.n}}</div>
            <div class="wb-main">
              <div class="eyebrow gold"><i></i> WORKBOOK {{w.n}} • {{w.level}}</div>
              <h3>{{w.title}}</h3>
              <p>{{w.desc}}</p>
              <div class="tags"><span>{{w.time}}</span><span>{{w.proof}}</span><span>{{w.guardrail}}</span></div>
            </div>
            <footer>
              <span>{{w.editorial}}</span>
              <strong>Open workbook →</strong>
            </footer>
          </a>
        }
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
    .grid{display:grid;grid-template-columns:1fr;gap:10px;margin-top:12px}
    .wb{display:grid;grid-template-columns:48px 1fr 140px;gap:14px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:13px;padding:16px;cursor:pointer;text-align:left;transition:.18s}
    .wb:hover{transform:translateY(-1px);box-shadow:0 12px 24px rgba(0,0,0,.06);border-color:#d2c7a0}
    .wb-num{width:42px;height:42px;display:grid;place-items:center;background:#fff3c2;border:1px solid #f0dd9a;color:var(--gold-dark);border-radius:10px;font:600 15px/1 Georgia,serif}
    .wb-main h3{margin:4px 0 4px;font-size:16px}
    .wb-main p{margin:0;color:var(--muted);font-size:11.5px;line-height:1.5}
    .tags{display:flex;gap:6px;margin-top:6px;flex-wrap:wrap}
    .tags span{background:var(--paper-2);border:1px solid var(--line);border-radius:99px;padding:3px 6px;font-size:9px;font-weight:600;color:#6b6a6e}
    .wb footer{border-left:1px solid var(--line);padding-left:12px;display:grid;gap:6px;justify-items:end;color:var(--muted);font-size:11px}
    .wb footer strong{color:var(--gold-dark);font-size:11px}
    .toast{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);background:#0b0c0e;color:var(--gold);border:1px solid #2a2616;padding:10px 14px;border-radius:99px;font-size:12px;box-shadow:0 20px 50px rgba(0,0,0,.2)}
    @media(max-width:700px){.wb{grid-template-columns:48px 1fr}.wb footer{grid-column:2;justify-items:start;border-left:0;border-top:1px solid var(--line);padding:12px 0 0;margin-top:4px}}
  `]
})
export class WorkbooksComponent {
  wbs = WORKBOOKS;
}
