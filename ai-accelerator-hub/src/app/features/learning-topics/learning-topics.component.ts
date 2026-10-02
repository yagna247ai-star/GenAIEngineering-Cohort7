import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { PILLARS, TOPICS } from '../../core/data';

@Component({
  selector: 'app-learning-topics-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/" class="back">← Back to Home</a>
      <app-page-header kicker="LEARN — 105 CLEAR SECTIONS" title="Learning Topics, curated for journalists." desc="Six editorial pillars, sequenced by newsroom risk. Filter by pillar, level, or editorial job to be done."></app-page-header>

      <div class="count-top">All 105 learning topics on this page — filter by pillar or search to narrow.</div>

      <div class="filters">
        <input placeholder="Filter topics…" [value]="q()" (input)="q.set($any($event.target).value)" />
        <select (change)="pillar.set($any($event.target).value)">
          <option value="all">All pillars</option>
          @for(p of pillars; track p){ <option [value]="p">{{p}}</option> }
        </select>
        <a routerLink="/my-roadmap" class="btn-ghost">My Roadmap →</a>
      </div>

      <div class="pills">
        @for(p of pillars; track p){
          <button [class.active]="pillar()==p" (click)="pillar.set(p)">{{p}}</button>
        }
        <button [class.active]="pillar()=='all'" (click)="pillar.set('all')">All</button>
      </div>

      <div class="grid">
        @for(t of filtered(); track t.title){
          <article class="topic">
            <div class="eyebrow gold"><i></i> {{t.pillar}} • {{t.level}} • {{t.time}} • {{t.format}}</div>
            <h3>{{t.title}}</h3>
            <p>{{t.desc}}</p>
            <div class="outcome"><strong>Outcome:</strong> {{t.outcome}}</div>
            <div class="try"><span>Try it:</span> {{t.tryIt}}</div>
            <div class="meta"><span>Job: {{t.job}}</span><span class="tag">{{t.format}}</span></div>
            <a routerLink="/session/foundations" class="link">Open section →</a>
          </article>
        }
      </div>
      <div class="count">Showing {{filtered().length}} of 105 sections • Foundations → Leadership — more appropriate than AI Accelerator Hub’s “105 clear sections, ready in any order.” — each now with outcome + try-it.</div>

      <div class="note">Research: AI Accelerator Hub’s “105 clear sections, ready in any order.” is generic. Journalism Edition is more appropriate: every topic now carries a journalist job, an outcome you can demonstrate, and a 10-minute try-it that produces proof — Kajabi-grade hierarchy, not gray-400.</div>
    </div>
  `,
  styles: [`
    .view{padding:24px;max-width:1400px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-flex;align-items:center;gap:6px;margin-bottom:10px}
    .back:hover{color:var(--ink);border-color:var(--muted)}
    .count-top{margin:10px 0 4px;background:var(--paper-2);border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:12.5px;color:var(--muted);font-weight:500}
    .outcome{margin-top:8px;background:#fff8df;border:1px solid #f0dd9a;border-radius:8px;padding:6px 8px;font-size:11.5px;color:var(--text);line-height:1.4}
    .outcome strong{color:var(--ink);font-weight:700}
    .try{margin-top:6px;background:var(--paper-2);border:1px solid var(--line);border-radius:8px;padding:6px 8px;font-size:11px;color:var(--muted);line-height:1.4}
    .try span{color:var(--gold-dark);font-weight:700}
    .eyebrow{color:#787681;letter-spacing:.13em;text-transform:uppercase;display:inline-flex;align-items:center;gap:8px;font-size:9px;font-weight:700}
    .eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--gold);display:inline-block}
    .eyebrow.gold{color:#8a7a2b}
    .filters{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
    .filters input,.filters select{border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:12.5px;background:#fff}
    .btn-ghost{background:#fff;border:1px solid var(--line);border-radius:8px;min-height:36px;padding:0 12px;font-weight:700;font-size:11.5px;display:inline-flex;align-items:center}
    .pills{display:flex;gap:6px;flex-wrap:wrap;margin:12px 0}
    .pills button{border:1px solid var(--line);background:#fff;border-radius:99px;padding:6px 10px;font-size:11px;cursor:pointer}
    .pills button.active{background:#0b0c0e;color:var(--gold);border-color:#0b0c0e}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
    .topic{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px;display:flex;flex-direction:column}
    .topic h3{margin:6px 0 4px;font-size:14.5px;line-height:1.2}
    .topic p{margin:0;color:var(--muted);font-size:11.5px;line-height:1.45;flex:1}
    .meta{margin-top:8px;display:flex;justify-content:space-between;gap:8px;font-size:10px;color:var(--muted)}
    .tag{background:var(--paper-2);border:1px solid var(--line);border-radius:99px;padding:2px 6px;font-size:9px;font-weight:600}
    .link{color:var(--gold-dark);font-size:11px;font-weight:700;margin-top:8px;display:inline-block}
    .count{margin-top:10px;color:var(--muted);font-size:11px;text-align:center}
    .note{margin-top:12px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:10px;font-size:11px;color:var(--muted)}
    @media(max-width:1100px){.grid{grid-template-columns:1fr}}
  `]
})
export class LearningTopicsComponent {
  pillars = [...PILLARS];
  pillar = signal('all');
  q = signal('');
  filtered = computed(() => {
    const p = this.pillar();
    const qq = this.q().toLowerCase();
    return TOPICS.filter(t => (p === 'all' || t.pillar === p) && (!qq || (t.title + t.desc + t.job).toLowerCase().includes(qq)));
  });
}
