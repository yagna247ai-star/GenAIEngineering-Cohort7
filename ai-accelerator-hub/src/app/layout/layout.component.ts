import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProgressService } from '../core/progress.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <div class="portal-shell">
      <aside class="sidebar" aria-label="Primary">
        <div class="sidebar-brand">
          <div class="brand-mark" aria-hidden="true">◆</div>
          <div class="brand-text"><strong>AI ACCELERATOR</strong><span>HUB</span></div>
          <span class="brand-edition">JOURNALISM EDITION</span>
        </div>
        <div class="program-title">
          <span>GENERATIVE AI</span><strong>LEARNING<br>PORTAL</strong>
          <small>FOR JOURNALISTS • YOUR AI NEWSROOM OS</small><div class="gold-rule"></div>
        </div>

        <nav>
          <div class="nav-group-label">YOUR JOURNEY</div>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
          <a routerLink="/my-roadmap" routerLinkActive="active">My AI Roadmap <em class="pill">NEW</em></a>

          <div class="nav-group-label">LIBRARY</div>
          <a routerLink="/learning-topics" routerLinkActive="active">Learning Topics</a>
          <a routerLink="/workbooks" routerLinkActive="active">Guided Workbooks</a>
          <a routerLink="/lab" routerLinkActive="active">Practice Lab</a>
          <a routerLink="/roadmap" routerLinkActive="active">Five-Level Roadmap</a>

          <div class="nav-group-label">SUPPORT</div>
          <a routerLink="/glossary" routerLinkActive="active">Beginner Glossary</a>
          <a routerLink="/stuck" routerLinkActive="active">I'm Stuck</a>
        </nav>

        <div class="side-progress">
          <div><span>{{prog.pct()}}% Practice progress</span><small>{{prog.count()}} of 6</small></div>
          <div class="progress-track"><span [style.width.%]="prog.pct()"></span></div>
        </div>
        <div class="side-note">“Verify first. Accelerate second.”<br><small>Black & Gold • Editorial standard</small></div>
      </aside>

      <div class="portal-main">
        <header class="topbar">
          <a routerLink="/" class="mobile-logo"><span class="brand-mark sm">◆</span> AI ACCELERATOR HUB</a>
          <div class="search-box" role="search">
            <span aria-hidden="true">⌕</span>
            <input placeholder="Search — try RAG, hallucination, FOIA" aria-label="Search" (input)="onSearch($event)" />
            <kbd>⌘ K</kbd>
            @if(results.length){
              <div class="search-results">
                @for(r of results; track r.title){
                  <a [routerLink]="r.route" (click)="results=[]"><span>{{r.tag}}</span><strong>{{r.title}}</strong><small>{{r.desc}}</small></a>
                }
              </div>
            }
          </div>
          <div class="unlocked"><i></i> Editorial Guardrails Active</div>
        </header>
        <div class="content-wrap"><ng-content /></div>
        <footer class="portal-footer">
          <div class="footer-inner">
            <div><strong>AI ACCELERATOR HUB — JOURNALISM EDITION</strong><span>© {{year}} • Black & Gold • Verification is the product.</span></div>
            <div class="footer-links"><a routerLink="/glossary">Glossary</a><a routerLink="/stuck">Help</a></div>
          </div>
        </footer>
      </div>
    </div>
  `,
  styles: [`
    .portal-shell{min-height:100vh}
    .sidebar{position:fixed;inset:0 auto 0 0;width:268px;background:#0b0c0e;color:#fff;z-index:20;display:flex;flex-direction:column;padding:22px 16px 18px;overflow:auto;border-right:1px solid #1f1f21}
    .sidebar-brand{display:flex;align-items:center;gap:10px;padding:8px 8px 10px;border-bottom:1px solid #1e1e20}
    .brand-mark{width:34px;height:34px;display:grid;place-items:center;border:1px solid var(--gold);color:var(--gold);border-radius:8px;background:rgba(212,175,55,.08)}
    .brand-mark.sm{width:28px;height:28px;font-size:13px}
    .brand-text{line-height:1}.brand-text strong{font-size:12px;letter-spacing:.14em;display:block}.brand-text span{font-size:12px;letter-spacing:.14em;color:var(--gold);font-weight:700}
    .brand-edition{margin-left:auto;font-size:7px;letter-spacing:.12em;color:#a89a6a;border:1px solid #2a2616;padding:4px 6px;border-radius:99px;background:#1a1810}
    .program-title{margin:22px 8px 20px}.program-title span{color:#fff6;letter-spacing:.15em;font-size:8px;font-weight:700}.program-title strong{color:#fff;font-size:28px;line-height:.9;display:block;margin:7px 0 6px}.program-title small{color:#d4c9a0;letter-spacing:.1em;font-size:7.5px;font-weight:600}.gold-rule{height:2px;width:36px;background:linear-gradient(90deg,var(--gold),transparent);margin-top:10px;border-radius:99px}
    .nav-group-label{color:#9a989e;letter-spacing:.13em;font-size:8px;font-weight:700;margin:16px 8px 6px}
    nav{display:grid;gap:3px}
    nav a{color:#ffffffa8;display:flex;align-items:center;gap:8px;padding:10px 11px;border-radius:9px;font-size:12.2px;border:1px solid transparent}
    nav a:hover{color:#fff;background:#ffffff0f}
    nav a.active{color:#fff;background:#1e1b0f;border-color:#2d2814}
    .pill{background:var(--gold);color:#111;font-size:7px;font-weight:800;letter-spacing:.08em;padding:3px 5px;border-radius:4px;margin-left:auto}
    .side-progress{margin-top:auto;border-top:1px solid #1f1f21;padding:16px 8px 8px}
    .side-progress>div:first-child{display:flex;justify-content:space-between;gap:8px;align-items:baseline}
    .side-progress span,.side-progress small{color:#ffffff6b;font-size:9px}
    .progress-track{background:#ffffff14;border-radius:10px;height:4px;margin:10px 0 6px;overflow:hidden}
    .progress-track span{background:var(--gold);height:100%;display:block}
    .side-note{color:#d4c9a0;margin:10px 8px 0;font:italic 12px/1.4 Georgia,serif;opacity:.9}
    .portal-main{margin-left:268px;min-height:100vh;display:flex;flex-direction:column}
    .topbar{position:sticky;top:0;z-index:10;backdrop-filter:blur(14px);background:rgba(248,247,245,.92);border-bottom:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:16px;height:70px;padding:0 24px}
    .mobile-logo{display:none;align-items:center;gap:8px;font-size:12px;letter-spacing:.12em}
    .search-box{position:relative;display:flex;align-items:center;gap:10px;width:min(480px,52vw);background:#fff;border:1px solid var(--line);border-radius:10px;padding:0 12px;height:40px}
    .search-box input{flex:1;border:0;outline:0;background:transparent;font-size:13px}
    .search-box kbd{color:#8e8c92;background:#f8f7f5;border:1px solid #d7d4cd;border-radius:6px;padding:4px 7px;font-size:9px}
    .search-results{position:absolute;top:46px;left:0;right:0;background:#fff;border:1px solid var(--line);border-radius:12px;padding:8px;max-height:360px;overflow:auto;box-shadow:0 20px 50px rgba(0,0,0,.14)}
    .search-results a{display:grid;gap:2px;padding:10px;border-radius:8px}
    .search-results a:hover{background:var(--paper)}
    .search-results span{color:var(--gold-dark);letter-spacing:.1em;text-transform:uppercase;font-size:8px;font-weight:700}
    .unlocked{color:#5a5a5e;letter-spacing:.08em;font-size:9px;font-weight:700;display:flex;align-items:center;gap:8px}
    .unlocked i{width:7px;height:7px;border-radius:50%;background:#0a7a3a;box-shadow:0 0 0 4px rgba(10,122,58,.12)}
    .content-wrap{flex:1}
    .portal-footer{border-top:1px solid var(--line);background:#0b0c0e;color:#c8c6c0;padding:16px 24px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
    @media(max-width:980px){.sidebar{display:none}.portal-main{margin-left:0}.mobile-logo{display:flex}.topbar{height:auto;flex-wrap:wrap;padding:14px 16px}.search-box{width:100%}.unlocked{display:none}}
  `]
})
export class LayoutComponent {
  prog = inject(ProgressService);
  year = new Date().getFullYear();
  results: { tag: string; title: string; desc: string; route: string }[] = [];
  private index = [
    { tag:'Session 01', title:'Foundations — Journalist Toolkit', desc:'Generalist lens, prompt vs context', route:'/session/foundations' },
    { tag:'Topic', title:'Prompt vs Context Engineering', desc:'Twin levers for reliability', route:'/learning-topics' },
    { tag:'Workbook', title:'Evidence Locker', desc:'Context for archives', route:'/workbooks' },
    { tag:'Lab', title:'Archive Copilot (RAG)', desc:'10 years clips, citable', route:'/lab' },
    { tag:'Glossary', title:'Hallucination', desc:'Fabrication risk', route:'/glossary' },
    { tag:'Stuck', title:'I’m Stuck — Newsroom triage', desc:'Fix for PII, VCA', route:'/stuck' },
  ];
  onSearch(e: Event) {
    const v = (e.target as HTMLInputElement).value.toLowerCase().trim();
    if (!v) { this.results = []; return; }
    this.results = this.index.filter(x => (x.title + x.desc).toLowerCase().includes(v)).slice(0, 6);
  }
}
