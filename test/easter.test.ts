import { describe, expect, it } from 'vitest';

import { easterSunday } from '@holidays/easter';

describe('easterSunday', () => {
  it.each([
    [2024, '2024-03-31'],
    [2025, '2025-04-20'],
    [2026, '2026-04-05'],
    [2027, '2027-03-28'],
    [2028, '2028-04-16'],
    [2038, '2038-04-25'],
    [2285, '2285-03-22'],
  ])('puts Easter %i on %s', (year, date) => {
    expect(easterSunday(year)).toBe(date);
  });
});
