import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  template: `
    <div role="status" aria-live="polite" class="loading">
      <span class="dot" aria-hidden="true"></span>
      <span>Loading AI Accelerator Hub…</span>
    </div>
  `,
  styles: [`
    .loading{display:flex;align-items:center;gap:10px;padding:24px;color:var(--muted);font-size:13px}
    .dot{width:10px;height:10px;border-radius:50%;background:var(--gold);animation:pulse 1.2s infinite}
    @keyframes pulse{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}
    @media (prefers-reduced-motion: reduce){.dot{animation:none}}
  `]
})
export class LoadingComponent {}
