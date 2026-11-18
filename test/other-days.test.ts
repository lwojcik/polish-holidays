import { describe, expect, it } from 'vitest';

import { otherDaysOf } from '@holidays/other-days';

const ofKind = (kind: string) =>
  otherDaysOf(2026).filter((day) => day.kind === kind);

describe('otherDaysOf', () => {
  it('has 19 days set by statute', () => {
    expect(ofKind('statute').map((day) => `${day.date} ${day.name}`))
      .toMatchInlineSnapshot(`
      [
        "2026-01-27 Dzień Pracownika Publicznych Służb Zatrudnienia",
        "2026-02-22 Dzień Ofiar Przestępstw",
        "2026-05-02 Dzień Flagi Rzeczypospolitej Polskiej",
        "2026-05-02 Dzień Polonii i Polaków za Granicą",
        "2026-05-04 Dzień Strażaka",
        "2026-05-16 Święto Straży Granicznej",
        "2026-05-29 Dzień Weterana Działań poza Granicami Państwa",
        "2026-06-12 Święto Służby Ochrony Państwa",
        "2026-06-13 Święto Żandarmerii Wojskowej",
        "2026-06-29 Święto Służby Więziennej",
        "2026-07-24 Święto Policji",
        "2026-07-31 Dzień Skarbowości",
        "2026-08-29 Dzień Straży Gminnej",
        "2026-09-01 Dzień Weterana Walk o Niepodległość Rzeczypospolitej Polskiej",
        "2026-09-21 Dzień Krajowej Administracji Skarbowej",
        "2026-10-13 Dzień Ratownictwa Medycznego",
        "2026-10-14 Dzień Edukacji Narodowej",
        "2026-10-16 Dzień Papieża Jana Pawła II",
        "2026-11-21 Dzień Pracownika Socjalnego",
      ]
    `);
  });

  it('has 19 days set by resolution of the Sejm, the December ones over three days', () => {
    expect(
      ofKind('resolution').map((day) => `${day.date} +${day.days} ${day.name}`),
    ).toMatchInlineSnapshot(`
      [
        "2026-03-23 +1 Dzień Przyjaźni Polsko-Węgierskiej",
        "2026-03-24 +1 Narodowy Dzień Życia",
        "2026-04-13 +1 Dzień Pamięci Ofiar Zbrodni Katyńskiej",
        "2026-04-18 +1 Dzień Pacjenta w Śpiączce",
        "2026-04-28 +1 Dzień Bezpieczeństwa i Ochrony Zdrowia w Pracy",
        "2026-05-27 +1 Dzień Samorządu Terytorialnego",
        "2026-05-30 +1 Dzień Rodzicielstwa Zastępczego",
        "2026-06-01 +1 Dzień bez Alkoholu",
        "2026-06-04 +1 Dzień Wolności i Praw Obywatelskich",
        "2026-06-14 +1 Narodowy Dzień Pamięci Ofiar Niemieckich Nazistowskich Obozów Koncentracyjnych i Obozów Zagłady",
        "2026-06-28 +1 Narodowy Dzień Pamięci Poznańskiego Czerwca 1956",
        "2026-07-11 +1 Narodowy Dzień Pamięci Ofiar Ludobójstwa dokonanego przez ukraińskich nacjonalistów na obywatelach II Rzeczypospolitej Polskiej",
        "2026-08-02 +1 Dzień Pamięci o Zagładzie Romów i Sinti",
        "2026-09-17 +1 Dzień Sybiraka",
        "2026-09-27 +1 Dzień Polskiego Państwa Podziemnego",
        "2026-10-02 +1 Narodowy Dzień Pamięci Ofiar Niemieckiej Zbrodni Pomorskiej 1939 r.",
        "2026-10-04 +1 Dzień Zwierząt",
        "2026-12-13 +1 Dzień Pamięci Ofiar Stanu Wojennego",
        "2026-12-16 +3 Dni Pamięci Grudnia 1970",
      ]
    `);
  });

  it('cites the act of a day and the address to look it up', () => {
    expect(ofKind('statute').find((day) => day.slug === 'policja')).toEqual({
      date: '2026-07-24',
      slug: 'policja',
      name: 'Święto Policji',
      kind: 'statute',
      basis:
        'ustawa o Policji, art. 13b (tekst jednolity: Dz. U. 2023 poz. 171)',
      eli: 'DU/2023/171',
      days: 1,
    });
  });
});
