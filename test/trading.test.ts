import { describe, expect, it } from 'vitest';

import { addDays, lastSundayOf, weekdayOf } from '@holidays/dates';
import { isTradingSunday, tradingDaysOf } from '@holidays/trading';

const sundays = (year: number) =>
  tradingDaysOf(year)
    .filter((day) => day.kind === 'sunday')
    .map((day) => day.date);

describe('tradingDaysOf', () => {
  it.each([
    [
      2026,
      [
        '2026-01-25',
        '2026-03-29',
        '2026-04-26',
        '2026-06-28',
        '2026-08-30',
        '2026-12-06',
        '2026-12-13',
        '2026-12-20',
      ],
    ],
    [
      2027,
      [
        '2027-01-31',
        '2027-03-21',
        '2027-04-25',
        '2027-06-27',
        '2027-08-29',
        '2027-12-05',
        '2027-12-12',
        '2027-12-19',
      ],
    ],
    [
      2028,
      [
        '2028-01-30',
        '2028-04-09',
        '2028-04-30',
        '2028-06-25',
        '2028-08-27',
        '2028-12-03',
        '2028-12-10',
        '2028-12-17',
      ],
    ],
  ])('lists the trading Sundays of %i', (year, dates) => {
    expect(sundays(year).toSorted()).toEqual(dates);
  });

  it('closes the last Sunday of April when it is Easter (2038)', () => {
    expect(sundays(2038).toSorted()).toEqual([
      '2038-01-31',
      '2038-04-18',
      '2038-06-27',
      '2038-08-29',
      '2038-12-05',
      '2038-12-12',
      '2038-12-19',
    ]);
  });

  it('counts the three Sundays before Christmas Eve, not Christmas Eve itself, when it is a Sunday (2022)', () => {
    expect(sundays(2022).toSorted().slice(-3)).toEqual([
      '2022-12-04',
      '2022-12-11',
      '2022-12-18',
    ]);
  });

  it('adds the shortened Saturday before Easter, with its own article', () => {
    expect(tradingDaysOf(2026).find((day) => day.kind !== 'sunday')).toEqual({
      date: '2026-04-04',
      kind: 'easter-saturday',
      rule: 'sobota przed Wielkanocą',
      article: 'art. 8 ust. 1',
    });
  });

  it('names the rule of each Sunday and cites article 7', () => {
    expect(
      tradingDaysOf(2026)
        .filter((day) => day.kind === 'sunday')
        .map((day) => `${day.date} ${day.rule} ${day.article}`),
    ).toMatchInlineSnapshot(`
      [
        "2026-03-29 niedziela przed Wielkanocą art. 7 ust. 1",
        "2026-01-25 ostatnia niedziela stycznia art. 7 ust. 1",
        "2026-04-26 ostatnia niedziela kwietnia art. 7 ust. 1",
        "2026-06-28 ostatnia niedziela czerwca art. 7 ust. 1",
        "2026-08-30 ostatnia niedziela sierpnia art. 7 ust. 1",
        "2026-12-20 jedna z trzech niedziel przed Wigilią art. 7 ust. 1",
        "2026-12-13 jedna z trzech niedziel przed Wigilią art. 7 ust. 1",
        "2026-12-06 jedna z trzech niedziel przed Wigilią art. 7 ust. 1",
      ]
    `);
  });
});

describe('dates', () => {
  it('finds the last Sunday of a month, across a leap day', () => {
    expect(lastSundayOf({ year: 2028, month: 1 })).toBe('2028-01-30');
    expect(lastSundayOf({ year: 2024, month: 8 })).toBe('2024-08-25');
  });

  it('adds days over month and year ends', () => {
    expect(addDays({ date: '2026-12-31', days: 1 })).toBe('2027-01-01');
    expect(addDays({ date: '2028-03-01', days: -1 })).toBe('2028-02-29');
    expect(weekdayOf('2026-11-18')).toBe(3);
  });
});

describe('isTradingSunday', () => {
  it('is true for a trading Sunday', () => {
    expect(isTradingSunday('2026-03-29')).toBe(true);
  });

  it('is false for a closed Sunday, the Easter Saturday and a weekday', () => {
    expect(isTradingSunday('2026-03-15')).toBe(false);
    expect(isTradingSunday('2026-04-04')).toBe(false);
    expect(isTradingSunday('2026-03-10')).toBe(false);
  });
});
