import { describe, expect, it } from 'vitest';

import { actTitle, eliUrl, HOLIDAYS_ACT, TRADE_ACT } from '@holidays/acts';
import { holidayOn, holidaysOf, isHoliday } from '@holidays/holidays';

const bySlug = (year: number, slug: string) =>
  holidaysOf(year).filter((holiday) => holiday.slug === slug);

describe('holidaysOf', () => {
  it('lists the 14 days of 2026 as the act names them', () => {
    expect(holidaysOf(2026).map((holiday) => `${holiday.date} ${holiday.name}`))
      .toMatchInlineSnapshot(`
      [
        "2026-01-01 Nowy Rok",
        "2026-01-06 Trzech Króli",
        "2026-04-05 Wielkanoc",
        "2026-04-06 Poniedziałek Wielkanocny",
        "2026-05-01 Święto Pracy",
        "2026-05-03 Święto Konstytucji 3 Maja",
        "2026-05-24 Zielone Świątki",
        "2026-06-04 Boże Ciało",
        "2026-08-15 Wniebowzięcie Najświętszej Maryi Panny",
        "2026-11-01 Wszystkich Świętych",
        "2026-11-11 Narodowe Święto Niepodległości",
        "2026-12-24 Wigilia Bożego Narodzenia",
        "2026-12-25 Boże Narodzenie",
        "2026-12-26 Drugi dzień Bożego Narodzenia",
      ]
    `);
  });

  it('derives Pentecost, Corpus Christi and Easter Monday from Easter', () => {
    expect(bySlug(2026, 'zielone-swiatki')[0]?.date).toBe('2026-05-24');
    expect(bySlug(2026, 'boze-cialo')[0]?.date).toBe('2026-06-04');
    expect(bySlug(2026, 'poniedzialek-wielkanocny')[0]?.date).toBe(
      '2026-04-06',
    );
  });

  it('has Christmas Eve only from 2025, the year the act took effect', () => {
    expect(bySlug(2024, 'wigilia')).toEqual([]);
    expect(bySlug(2025, 'wigilia')[0]?.date).toBe('2025-12-24');
    expect(holidaysOf(2024)).toHaveLength(13);
    expect(holidaysOf(2025)).toHaveLength(14);
  });

  it('names each day by its article and the May days also by their name in the act', () => {
    expect(bySlug(2026, 'nowy-rok')[0]).toEqual({
      date: '2026-01-01',
      slug: 'nowy-rok',
      name: 'Nowy Rok',
      article: 'art. 1 pkt 1 lit. a',
    });
    expect(bySlug(2026, 'swieto-panstwowe')[0]).toMatchObject({
      name: 'Święto Pracy',
      officialName: 'Święto Państwowe',
      stateAct: { eli: 'DU/1950/157' },
    });
    expect(bySlug(2026, 'trzeci-maja')[0]).toMatchObject({
      name: 'Święto Konstytucji 3 Maja',
      officialName: 'Święto Narodowe Trzeciego Maja',
    });
  });

  it('attaches the establishing act to the three state days that are days off', () => {
    expect(
      holidaysOf(2026)
        .filter((holiday) => holiday.stateAct)
        .map((holiday) => holiday.date),
    ).toEqual(['2026-05-01', '2026-05-03', '2026-11-11']);
  });
});

describe('acts', () => {
  it('gives the title and the address of both acts', () => {
    expect(HOLIDAYS_ACT.title).toContain('18 stycznia 1951');
    expect(TRADE_ACT.title).toContain('10 stycznia 2018');
    expect(TRADE_ACT.url).toContain('isap.sejm.gov.pl');
  });

  it('writes the title of an act and the link to it', () => {
    expect(
      actTitle({
        signed: '9 stycznia 2025',
        about:
          'o ustanowieniu Narodowego Dnia Pamięci Żołnierzy Armii Krajowej',
        address: 'Dz. U. 2025 poz. 165',
        eli: 'DU/2025/165',
      }),
    ).toBe(
      'ustawa z dnia 9 stycznia 2025 r. o ustanowieniu Narodowego Dnia Pamięci Żołnierzy Armii Krajowej (Dz. U. 2025 poz. 165)',
    );
    expect(eliUrl('DU/2025/165')).toBe(
      'https://eli.gov.pl/eli/DU/2025/165/ogl/pol',
    );
  });
});

describe('holidayOn and isHoliday', () => {
  it('finds a fixed and a movable holiday', () => {
    expect(holidayOn('2026-05-03')?.slug).toBeDefined();
    expect(isHoliday('2026-04-06')).toBe(true);
  });

  it('is false on an ordinary day', () => {
    expect(holidayOn('2026-03-10')).toBeUndefined();
    expect(isHoliday('2026-03-10')).toBe(false);
  });
});
