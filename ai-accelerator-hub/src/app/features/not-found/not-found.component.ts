import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header.component';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink, PageHeaderComponent],
  template: `
    <div class="view">
      <a routerLink="/" class="back">← Back to Home</a>
      <app-page-header kicker="404 — NOT FOUND" title="This page does not exist." desc="The newsroom has moved. Check your link or return to the library — every route is verified and typed."></app-page-header>
      <div class="actions">
        <a routerLink="/" class="btn-primary">Go to Home →</a>
        <a routerLink="/learning-topics" class="btn-ghost">Browse 105 topics →</a>
        <a routerLink="/stuck" class="btn-ghost">Get help →</a>
      </div>
    </div>
  `,
  styles: [`
    .view{padding:24px;max-width:900px;margin:0 auto}
    .back{color:var(--muted);font-size:13px;font-weight:600;border-bottom:1px solid var(--line);padding-bottom:4px;display:inline-flex;align-items:center;gap:6px;margin-bottom:10px}
    .actions{display:flex;gap:12px;margin-top:16px;flex-wrap:wrap}
    .btn-primary{background:var(--gold);color:#111;border:0;border-radius:9px;min-height:40px;padding:0 14px;font-weight:750;display:inline-flex;align-items:center}
    .btn-ghost{background:#fff;border:1px solid var(--line);border-radius:8px;min-height:36px;padding:0 12px;font-weight:700;display:inline-flex;align-items:center}
  `]
})
export class NotFoundComponent {}
