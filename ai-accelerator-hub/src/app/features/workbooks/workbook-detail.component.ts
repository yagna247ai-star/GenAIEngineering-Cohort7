import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { WORKBOOK_DETAILS } from '../../core/data';

@Component({
  selector: 'app-workbook-detail',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    @if(wb(); as w){
      <div class="view">
        <a routerLink="/workbooks" class="back">← All Workbooks</a>
        <app-page-header [kicker]="'WORKBOOK ' + w.n + ' • ' + w.level + ' • ' + w.time" [title]="w.title" [desc]="w.subtitle"></app-page-header>
        <p class="overview">{{w.overview}}</p>

        <div class="meta">
          <span>{{w.time}}</span><span>{{w.level}}</span><span>{{w.editorial}}</span>
        </div>

        <div class="reading">
          <h3>Relative reading — journalism-grade, researched</h3>
          <p class="reading-intro">More appropriate than AI Accelerator Hub’s generic handout — each reading is curated for a newsroom job, with time, source, and what you’ll retain.</p>
          @for(r of w.reading; track r.title){
            <article>
              <div class="reading-head">
                <strong>{{r.title}}</strong>
                <span class="reading-meta">{{r.time}} • {{r.source}}</span>
              </div>
              <p>{{r.desc}}</p>
            </article>
          }
        </div>

        <div class="steps">
          @for(s of w.steps; track s.t){
            <article>
              <h3>{{s.t}}</h3>
              <p>{{s.d}}</p>
              @if(s.prompt){
                <pre><code>{{s.prompt}}</code></pre>
              }
              @if(s.check){
                <div class="check">✓ Check: {{s.check}}</div>
              }
            </article>
          }
        </div>

        <div class="fixes">
          <h3>Fixes — when it fails</h3>
          <ul>
            @for(f of w.fixes; track f){<li>{{f}}</li>}
          </ul>
        </div>

        <div class="proof">
          <h3>Proof — deliverable</h3>
          <p>{{w.proof}}</p>
          <div class="next">{{w.next}}</div>
        </div>

        <div class="actions">
          <a routerLink="/workbooks" class="btn-ghost">← Back</a>
          <a routerLink="/lab" class="btn-primary">Go to Practice Lab →</a>
        </div>
      </div>
    } @else {
      <div class="view"><p>Workbook not found. <a routerLink="/workbooks">Back to workbooks</a></p></div>
    }
  `,
  styles: [`
    .view{padding:24px;max-width:900px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-block;margin-bottom:12px}
    .overview{margin:12px 0 8px;color:var(--text);font-size:15px;line-height:1.65;max-width:760px}
    .meta{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 16px}
    .meta span{background:var(--paper-2);border:1px solid var(--line);border-radius:99px;padding:4px 8px;font-size:11px;font-weight:600;color:var(--muted-dark)}
    .reading{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px;margin:0 0 14px}
    .reading h3{margin:0 0 6px;font-size:14px}
    .reading-intro{margin:0 0 10px;color:var(--muted);font-size:12.5px;line-height:1.5}
    .reading article{background:var(--paper-2);border:1px solid var(--line);border-radius:10px;padding:12px;margin-top:10px}
    .reading-head{display:flex;justify-content:space-between;gap:12px;align-items:baseline;flex-wrap:wrap}
    .reading-head strong{font-size:13px;color:var(--ink)}
    .reading-meta{font-size:10px;color:var(--muted);font-weight:600;letter-spacing:.02em}
    .reading article p{margin:6px 0 0;color:var(--text);font-size:13px;line-height:1.55}
    .steps{display:grid;gap:14px}
    .steps article{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px}
    .steps h3{margin:0 0 6px;font-size:15px;line-height:1.3}
    .steps p{margin:0;color:var(--text);font-size:14px;line-height:1.6}
    .steps pre{margin:10px 0 0;background:#0f0f12;color:#e8e0c0;border-radius:8px;padding:12px;overflow:auto;font:12.5px/1.5 "JetBrains Mono",monospace;border:1px solid #1e1e20}
    .check{margin-top:8px;background:#fff8df;border:1px solid #f0dd9a;color:#7a5a00;border-radius:8px;padding:6px 8px;font-size:11px;font-weight:600}
    .fixes{background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px;margin-top:14px}
    .fixes h3{margin:0 0 8px;font-size:14px}
    .fixes li{margin:6px 0;color:var(--text);font-size:13.5px;line-height:1.5}
    .fixes li::marker{color:var(--gold-dark)}
    .proof{background:#0b0c0e;color:#fff;border-radius:12px;padding:16px;margin-top:14px;border:1px solid #1f1f1f}
    .proof h3{margin:0 0 6px;font-size:14px;color:var(--gold)}
    .proof p{margin:0;color:#ffffffb3;font-size:13.5px;line-height:1.6}
    .next{margin-top:8px;color:#a89a6a;font-size:11px;font-weight:600}
    .actions{display:flex;justify-content:space-between;gap:12px;margin-top:16px}
    .btn-primary{background:var(--gold);color:#111;border:0;border-radius:9px;min-height:40px;padding:0 14px;font-weight:750;display:inline-flex;align-items:center;font-size:12.5px}
    .btn-ghost{background:#fff;border:1px solid var(--line);border-radius:8px;min-height:36px;padding:0 12px;font-weight:700;font-size:11.5px;display:inline-flex;align-items:center}
  `]
})
export class WorkbookDetailComponent {
  private route = inject(ActivatedRoute);
  wb = computed(() => {
    const id = this.route.snapshot.paramMap.get('id');
    return WORKBOOK_DETAILS.find(w => w.n === id) ?? WORKBOOK_DETAILS.find(w => w.n === '01')!;
  });
}
