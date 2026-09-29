import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { LEVELS } from '../../core/data';

@Component({
  selector: 'app-roadmap-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/" class="back">← Back to Home</a>
      <app-page-header kicker="FIVE-LEVEL NEWSROOM ROADMAP" title="The complete capability path — foundations to leadership." desc="Sequenced for working journalists. Each level unlocks the next; each gate requires a verifiable artifact."></app-page-header>
      <div class="count-top">All 5 newsroom levels on this page — each gate requires a bylined artifact.</div>

      <div class="list">
        @for(l of levels; track l.n){
          <article>
            <div class="lvl">{{l.n}}</div>
            <div>
              <div class="eyebrow gold"><i></i> LEVEL {{l.n}}</div>
              <h3>{{l.title}}</h3>
              <p>{{l.desc}}</p>
              <div class="tags"><span>{{l.meta}}</span><span>Guided checks</span><span>Publishing gate</span></div>
              <div class="proof">Proof: {{l.proof}}</div>
            </div>
            <aside>
              <span>Includes</span><strong>{{l.includes}}</strong>
              <a routerLink="/workbooks">Explore →</a>
            </aside>
          </article>
        }
      </div>
      <div class="note">
        <span>Newsroom guardrail</span>
        <p>Every level includes provenance, PII, and bias review — so acceleration never outruns trust. The standards desk is not optional.</p>
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
    .list{position:relative;background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;margin-top:12px}
    .list:before{content:"";position:absolute;left:30px;top:40px;bottom:40px;width:1px;background:#e8e0b8}
    .list article{display:grid;grid-template-columns:1fr 190px;gap:20px;padding:20px 20px 20px 74px;border-bottom:1px solid var(--line);position:relative}
    .list article:last-child{border:0}
    .lvl{position:absolute;left:10px;top:26px;width:42px;height:42px;display:grid;place-items:center;background:var(--paper);border:1px solid #e8e0b8;color:var(--gold-dark);border-radius:50%;font:600 16px/1 Georgia,serif}
    .list h3{margin:6px 0 6px;font-size:18px}
    .list p{margin:0 0 8px;color:var(--muted);font-size:11.5px;line-height:1.6}
    .tags{display:flex;gap:6px;flex-wrap:wrap}
    .tags span{background:var(--paper-2);border:1px solid var(--line);border-radius:99px;padding:4px 7px;font-size:9px;font-weight:600;color:#6b6a6e}
    .proof{margin-top:6px;font-size:10px;color:var(--gold-dark);font-weight:600}
    .list aside{background:#fff8df;border:1px solid #f0dd9a;border-radius:10px;padding:14px;align-self:center}
    .list aside span{color:var(--gold-dark);font-size:10px;letter-spacing:.08em}
    .list aside strong{display:block;margin:6px 0 8px;font-size:11.5px}
    .list aside a{color:var(--gold-dark);font-size:11px;font-weight:700}
    .note{margin-top:12px;background:#0b0c0e;color:#fff;border-radius:12px;display:grid;grid-template-columns:120px 1fr;gap:18px;padding:16px}
    .note span{color:var(--gold);font-size:10px;letter-spacing:.1em;font-weight:700}
    .note p{margin:0;color:#ffffffb3;font:12.5px/1.6 Georgia,serif}
    @media(max-width:900px){.list article{grid-template-columns:1fr}.list:before{display:none}}
  `]
})
export class RoadmapComponent {
  levels = LEVELS;
}
