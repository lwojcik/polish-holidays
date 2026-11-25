import { addDays, isSunday, lastSundayOf } from '@holidays/dates';
import { easterSunday } from '@holidays/easter';
import { holidaysOf } from '@holidays/holidays';
import type { TradingDay } from '@holidays/types';

const DAYS_IN_WEEK = 7;
const SUNDAYS_BEFORE_CHRISTMAS = 3;
const LAST_SUNDAY_MONTHS = [
  { month: 1, name: 'stycznia' },
  { month: 4, name: 'kwietnia' },
  { month: 6, name: 'czerwca' },
  { month: 8, name: 'sierpnia' },
];
const SUNDAY_ARTICLE = 'art. 7 ust. 1';
const SATURDAY_ARTICLE = 'art. 8 ust. 1';
const YEAR_LENGTH = 4;

const sunday = ({
  date,
  rule,
}: {
  date: string;
  rule: string;
}): TradingDay => ({
  date,
  kind: 'sunday',
  rule,
  article: SUNDAY_ARTICLE,
});

export const tradingDaysOf = (year: number): TradingDay[] => {
  const easter = easterSunday(year);
  const holidays = new Set(holidaysOf(year).map(({ date }) => date));
  const christmasEve = `${year}-12-24`;
  const beforeChristmas = Array.from(
    { length: DAYS_IN_WEEK * SUNDAYS_BEFORE_CHRISTMAS },
    (_, index) => addDays({ date: christmasEve, days: -(index + 1) }),
  )
    .filter(isSunday)
    .slice(0, SUNDAYS_BEFORE_CHRISTMAS);

  return [
    sunday({
      date: addDays({ date: easter, days: -DAYS_IN_WEEK }),
      rule: 'niedziela przed Wielkanocą',
    }),
    ...LAST_SUNDAY_MONTHS.map(({ month, name }) =>
      sunday({
        date: lastSundayOf({ year, month }),
        rule: `ostatnia niedziela ${name}`,
      }),
    ).filter(({ date }) => !holidays.has(date)),
    ...beforeChristmas.map((date) =>
      sunday({ date, rule: 'jedna z trzech niedziel przed Wigilią' }),
    ),
    {
      date: addDays({ date: easter, days: -1 }),
      kind: 'easter-saturday',
      rule: 'sobota przed Wielkanocą',
      article: SATURDAY_ARTICLE,
    },
  ];
};

export const isTradingSunday = (date: string): boolean =>
  tradingDaysOf(Number(date.slice(0, YEAR_LENGTH))).some(
    (day) => day.kind === 'sunday' && day.date === date,
  );
