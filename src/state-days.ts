import { holidaysOf } from '@holidays/holidays';
import { STATE_ROWS } from '@holidays/state-table';
import type { StateDay } from '@holidays/types';

const listed = (year: number): StateDay[] =>
  STATE_ROWS.map((row) => ({
    date: `${year}-${row.monthDay}`,
    slug: row.slug,
    name: row.title,
    act: row.act,
    isDayOff: false,
    fallsOnDayOff: row.alsoDayOff === true,
  }));

const daysOff = (year: number): StateDay[] =>
  holidaysOf(year)
    .filter(({ stateAct }) => stateAct !== undefined)
    .map(({ date, slug, name, stateAct }) => ({
      date,
      slug,
      name,
      act: stateAct as StateDay['act'],
      isDayOff: true,
      fallsOnDayOff: false,
    }));

export const stateDaysOf = (year: number): StateDay[] =>
  [...listed(year), ...daysOff(year)].toSorted((first, second) =>
    first.date.localeCompare(second.date),
  );
