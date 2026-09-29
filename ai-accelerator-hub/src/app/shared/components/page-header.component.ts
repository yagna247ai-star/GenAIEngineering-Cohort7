import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `
    <div class="ph">
      <div class="eyebrow gold"><i></i> {{kicker}}</div>
      <h1>{{title}}</h1>
      @if(desc){<p>{{desc}}</p>}
      <ng-content />
    </div>
  `,
  styles: [`
    .ph{max-width:760px;margin-bottom:16px}
    .eyebrow{color:#787681;letter-spacing:.13em;text-transform:uppercase;display:inline-flex;align-items:center;gap:8px;font-size:9px;font-weight:700}
    .eyebrow i{width:7px;height:7px;border-radius:50%;background:var(--gold);display:inline-block}
    .eyebrow.gold{color:#8a7a2b}
    h1{margin:8px 0 6px;font-size:clamp(24px,3vw,34px);line-height:1}
    p{margin:0;color:var(--muted);font-size:12.5px;line-height:1.6}
  `]
})
export class PageHeaderComponent {
  @Input() kicker = '';
  @Input() title = '';
  @Input() desc = '';
}
