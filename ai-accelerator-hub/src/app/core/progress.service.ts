import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private _done = signal<boolean[]>(Array(6).fill(false));
  readonly missionsDone = this._done.asReadonly();
  readonly pct = computed(() => Math.round(this._done().filter(Boolean).length / 6 * 100));
  readonly count = computed(() => this._done().filter(Boolean).length);

  toggle(i: number) {
    const a = [...this._done()];
    a[i] = !a[i];
    this._done.set(a);
  }
  reset() { this._done.set(Array(6).fill(false)); }
}
