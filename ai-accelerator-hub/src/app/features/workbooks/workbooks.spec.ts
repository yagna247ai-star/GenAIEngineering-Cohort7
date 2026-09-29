import { WORKBOOK_DETAILS } from '../../core/data';

describe('Workbooks routing contract', () => {
  it('has 5 workbooks with detail pages', () => {
    expect(WORKBOOK_DETAILS.length).toBe(5);
    for (const w of WORKBOOK_DETAILS) {
      expect(w.steps.length).toBeGreaterThanOrEqual(4);
      expect(w.fixes.length).toBeGreaterThanOrEqual(2);
      expect(w.proof).toContain('Deliverable');
      expect(w.n).toMatch(/^0[1-5]$/);
    }
  });

  it('workbook 01 uses provenance guardrail', () => {
    const wb01 = WORKBOOK_DETAILS.find(w => w.n === '01')!;
    expect(wb01.steps.some(s => s.check?.includes('Coverage'))).toBeTrue();
    expect(wb01.steps.some(s => s.prompt)).toBeTrue();
  });

  it('enterprise 404 route exists', async () => {
    const routes = await import('../../app.routes');
    const has404 = routes.routes.some(r => r.path === '404');
    const hasWildcard = routes.routes.some(r => r.path === '**');
    expect(has404).toBeTrue();
    expect(hasWildcard).toBeTrue();
  });
});
