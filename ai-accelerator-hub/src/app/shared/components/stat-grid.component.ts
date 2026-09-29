import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-grid',
  standalone: true,
  template: `
    <div class="sg">
      @for(s of stats; track s.label){
        <div><strong>{{s.value}}</strong><span>{{s.label}}</span></div>
      }
    </div>
  `,
  styles: [`
    .sg{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
    .sg div{display:grid;justify-items:center;gap:2px;background:var(--paper-2);border:1px solid var(--line);border-radius:10px;padding:10px}
    .sg strong{color:var(--gold-dark);font:700 18px/1 Georgia,serif}
    .sg span{color:var(--muted);font-size:8px;letter-spacing:.06em;text-transform:uppercase}
    @media(max-width:600px){.sg{grid-template-columns:repeat(2,1fr)}}
  `]
})
export class StatGridComponent {
  @Input() stats: { value: string; label: string }[] = [];
}
