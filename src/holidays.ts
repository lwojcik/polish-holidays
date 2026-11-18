import { addDays } from '@holidays/dates';
import { easterSunday } from '@holidays/easter';
import { HOLIDAY_ROWS } from '@holidays/holiday-table';
import { DAY_OFF_STATE_ACTS } from '@holidays/state-table';
import type { Holiday } from '@holidays/types';

export const holidaysOf = (year: number): Holiday[] => {
  const easter = easterSunday(year);

  return HOLIDAY_ROWS.filter((row) => (row.fromYear ?? 0) <= year).map(
    (row) => ({
      date:
        row.fixed === undefined
          ? addDays({ date: easter, days: row.afterEaster as number })
          : `${year}-${row.fixed}`,
      slug: row.slug,
      name: row.title,
      officialName: row.officialName,
      article: `art. 1 pkt 1 lit. ${row.letter}`,
      stateAct: DAY_OFF_STATE_ACTS.get(row.slug),
    }),
  );
};
