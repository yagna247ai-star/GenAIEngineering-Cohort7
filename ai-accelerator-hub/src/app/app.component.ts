import { Component, ErrorHandler } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { GlobalErrorHandler } from './core/error-handler';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  template: `
    <a href="#main" class="skip-link">Skip to content</a>
    <app-layout>
      <main id="main" tabindex="-1">
        <router-outlet />
      </main>
    </app-layout>
  `,
  styles: [`
    .skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}
    .skip-link:focus{left:12px;top:12px;width:auto;height:auto;background:var(--ink);color:#fff;padding:8px 12px;border-radius:8px;z-index:9999}
    main:focus{outline:none}
  `]
})
export class AppComponent {}
