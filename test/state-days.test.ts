import { describe, expect, it } from 'vitest';

import { stateDaysOf } from '@holidays/state-days';

describe('stateDaysOf', () => {
  it('lists the 19 state and national days, by month and day', () => {
    expect(stateDaysOf(2026).map((day) => `${day.date} ${day.name}`))
      .toMatchInlineSnapshot(`
        [
          "2026-02-14 Narodowy Dzień Pamięci Żołnierzy Armii Krajowej",
          "2026-02-19 Dzień Nauki Polskiej",
          "2026-03-01 Narodowy Dzień Pamięci „Żołnierzy Wyklętych”",
          "2026-03-24 Narodowy Dzień Pamięci Polaków ratujących Żydów pod okupacją niemiecką",
          "2026-04-12 Dzień Inwalidy Wojennego",
          "2026-04-14 Święto Chrztu Polski",
          "2026-05-01 Święto Pracy",
          "2026-05-03 Święto Konstytucji 3 Maja",
          "2026-05-08 Narodowy Dzień Zwycięstwa",
          "2026-06-20 Narodowy Dzień Powstań Śląskich",
          "2026-07-11 Narodowy Dzień Pamięci o Polakach – Ofiarach Ludobójstwa dokonanego przez OUN i UPA",
          "2026-07-12 Dzień Walki i Męczeństwa Wsi Polskiej",
          "2026-08-01 Narodowy Dzień Pamięci Powstania Warszawskiego",
          "2026-08-15 Święto Wojska Polskiego",
          "2026-08-31 Dzień Solidarności i Wolności",
          "2026-09-10 Narodowy Dzień Polskich Dzieci Wojny",
          "2026-10-19 Narodowy Dzień Pamięci Duchownych Niezłomnych",
          "2026-11-11 Narodowe Święto Niepodległości",
          "2026-12-27 Narodowy Dzień Zwycięskiego Powstania Wielkopolskiego",
        ]
      `);
  });

  it('cites the act that set each day', () => {
    expect(stateDaysOf(2026)[0]).toEqual({
      date: '2026-02-14',
      slug: 'zolnierze-armii-krajowej',
      name: 'Narodowy Dzień Pamięci Żołnierzy Armii Krajowej',
      act: {
        signed: '9 stycznia 2025',
        about:
          'o ustanowieniu Narodowego Dnia Pamięci Żołnierzy Armii Krajowej',
        address: 'Dz. U. 2025 poz. 165',
        eli: 'DU/2025/165',
      },
      isDayOff: false,
      fallsOnDayOff: false,
    });
  });

  it('marks the Armed Forces Day as falling on a day off, and no other day', () => {
    expect(
      stateDaysOf(2026)
        .filter((day) => day.fallsOnDayOff)
        .map((day) => day.slug),
    ).toEqual(['swieto-wojska-polskiego']);
  });

  it('marks the three that are themselves days off, with the act that set them', () => {
    expect(
      stateDaysOf(2026)
        .filter((day) => day.isDayOff)
        .map((day) => `${day.date} ${day.name} ${day.act.eli}`),
    ).toEqual([
      '2026-05-01 Święto Pracy DU/1950/157',
      '2026-05-03 Święto Konstytucji 3 Maja DU/1990/160',
      '2026-11-11 Narodowe Święto Niepodległości DU/1989/34',
    ]);
  });
});
