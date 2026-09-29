import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';
import { GLOSSARY } from '../../core/data';

@Component({
  selector: 'app-glossary-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/" class="back">← Back to Home</a>
      <app-page-header kicker="SUPPORT — BEGINNER GLOSSARY" title="Decode AI language — journalist translation." desc="40 terms, each with a newsroom definition, risk, and when to use it. Search hallucination, RAG, or guardrail."></app-page-header>
      <div class="count-top">All 10 glossary terms on this page — journalist translation with risk pills.</div>

      <input class="search" placeholder="Search glossary… (hallucination, RAG, guardrail)" [value]="q()" (input)="q.set($any($event.target).value)" />

      <div class="grid">
        @for(g of filtered(); track g.term){
          <article>
            <h3>{{g.term}} <small>{{g.alias}}</small></h3>
            <p class="def">{{g.def}}</p>
            <p class="j"><b>For journalists:</b> {{g.journalist}}</p>
            <span class="risk {{g.riskClass}}">{{g.risk}}</span>
          </article>
        }
      </div>
      @if(filtered().length === 0){
        <p class="empty">No terms match “{{q()}}”. Try RAG, hallucination, PII, or guardrail.</p>
      }
    </div>
  `,
  styles: [`
    .view{padding:24px;max-width:1400px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-flex;align-items:center;gap:6px;margin-bottom:10px}
    .back:hover{color:var(--ink);border-color:var(--muted)}
    .count-top{margin:10px 0 4px;background:var(--paper-2);border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:12.5px;color:var(--muted);font-weight:500}
    .search{width:320px;max-width:100%;margin-top:12px;border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-size:12.5px;background:#fff}
    .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px}
    .grid article{background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px}
    .grid h3{margin:0 0 6px;font-size:14px}
    .grid h3 small{color:var(--muted);font:400 11px "Instrument Sans",sans-serif;margin-left:6px}
    .def{margin:0;color:var(--muted);font-size:11.5px;line-height:1.5}
    .j{margin:6px 0 0;background:#fff8df;border:1px solid #f0dd9a;border-radius:6px;padding:6px 8px;font-size:11px;line-height:1.5}
    .risk{margin-top:8px;display:inline-block;font-size:9px;font-weight:700;letter-spacing:.06em;padding:3px 6px;border-radius:99px;border:1px solid var(--line)}
    .risk.high{background:#ffe8e0;color:#a33a1a;border-color:#ffd0bc}
    .risk.med{background:#fff3c2;color:#7a5a00;border-color:#f0dd9a}
    .risk.low{background:#e9f7ef;color:#1a6b3a;border-color:#c8e8d6}
    .empty{margin-top:12px;color:var(--muted);font-size:12px;text-align:center}
    @media(max-width:800px){.grid{grid-template-columns:1fr}}
  `]
})
export class GlossaryComponent {
  q = signal('');
  filtered = computed(() => {
    const qq = this.q().toLowerCase();
    return !qq ? GLOSSARY : GLOSSARY.filter(g => (g.term + g.alias + g.def + g.journalist).toLowerCase().includes(qq));
  });
}
