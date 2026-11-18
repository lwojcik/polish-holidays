import { RESOLUTION_DAYS } from '@holidays/resolution-days';
import { STATUTE_DAYS } from '@holidays/statute-days';
import type { OtherDay } from '@holidays/types';

export const otherDaysOf = (year: number): OtherDay[] =>
  [...STATUTE_DAYS, ...RESOLUTION_DAYS].map((row) => ({
    date: `${year}-${row.monthDay}`,
    slug: row.slug,
    name: row.title,
    kind: row.kind,
    basis: row.basis,
    eli: row.eli,
    days: row.days,
  }));
