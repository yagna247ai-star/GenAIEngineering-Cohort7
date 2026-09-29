import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { STUCK } from '../../core/data';

@Component({
  selector: 'app-stuck-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/" class="back">← Back to Home</a>
      <app-page-header kicker="SUPPORT — I’M STUCK" title="Find your next step — newsroom triage." desc="Choose your situation. Get a step-by-step fix built around common beginner failures — with editorial guardrails."></app-page-header>
      <div class="count-top">All 6 triage paths on this page — click any to reveal the fix.</div>

      <div class="grid">
        @for(s of stuck; track s.title){
          <button (click)="active.set(active() === s.title ? '' : s.title)">
            <div class="icon">{{s.icon}}</div>
            <div>
              <strong>{{s.title}}</strong>
              <p>{{s.desc}}</p>
              @if(active() === s.title){
                <small>{{s.fix}}</small>
              }
            </div>
            <i>{{active() === s.title ? '−' : '→'}}</i>
          </button>
        }
      </div>

      <div class="help">
        <p>Still stuck? <b>10-min debug</b> with the standards desk — bring your prompt, context, and last output.</p>
        <div class="cta">
          <a routerLink="/my-roadmap" class="btn-ghost">Re-run onboarding →</a>
          <a routerLink="/glossary" class="btn-primary">Open Glossary →</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .view{padding:24px;max-width:1400px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-flex;align-items:center;gap:6px;margin-bottom:10px}
    .back:hover{color:var(--ink);border-color:var(--muted)}
    .count-top{margin:10px 0 4px;background:var(--paper-2);border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:12.5px;color:var(--muted);font-weight:500}
    .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px}
    .grid button{display:grid;grid-template-columns:40px 1fr 16px;gap:12px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:16px;text-align:left;cursor:pointer;align-items:start}
    .grid button:hover{border-color:#d2c7a0}
    .icon{width:36px;height:36px;display:grid;place-items:center;background:#fff3c2;border:1px solid #f0dd9a;color:var(--gold-dark);border-radius:8px;font-size:16px}
    .grid strong{font-size:13.5px;display:block;margin-bottom:4px}
    .grid p{margin:0;color:var(--muted);font-size:11.5px;line-height:1.45}
    .grid small{display:block;margin-top:6px;background:#f8f7f5;border:1px solid var(--line);border-radius:6px;padding:6px 8px;font-size:11px;line-height:1.4}
    .grid i{color:var(--gold-dark);font-style:normal;font-weight:700;margin-top:8px}
    .help{margin-top:12px;background:#0b0c0e;color:#fff;border-radius:12px;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
    .help p{margin:0;font-size:12px;color:#ffffffb3}
    .cta{display:flex;gap:8px}
    .btn-ghost{background:#fff;border:1px solid var(--line);border-radius:8px;min-height:36px;padding:0 12px;font-weight:700;font-size:11.5px;display:inline-flex;align-items:center}
    .btn-primary{background:var(--gold);color:#111;border:0;border-radius:9px;min-height:36px;padding:0 14px;font-weight:750;display:inline-flex;align-items:center;font-size:11.5px}
    @media(max-width:800px){.grid{grid-template-columns:1fr}}
  `]
})
export class StuckComponent {
  stuck = STUCK;
  active = signal('');
}
