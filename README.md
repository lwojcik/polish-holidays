# polish-holidays

Polish public holidays, state and national days, other days set by law and trading Sundays, for any year, each with its legal basis. It computes the days from the statutes (nothing is fetched), has no dependencies and runs on Node 24 or newer.

## Install

```sh
npm install polish-holidays
```

## Use

Every function takes a year and gives the days of that year as plain objects with the date as `YYYY-MM-DD`. No time zone is involved.

```ts
import {
  easterSunday,
  holidaysOf,
  otherDaysOf,
  stateDaysOf,
  tradingDaysOf,
} from 'polish-holidays';

easterSunday(2026); // '2026-04-05'

holidaysOf(2026)[0];
// {
//   date: '2026-01-01',
//   slug: 'nowy-rok',
//   name: 'Nowy Rok',
//   article: 'art. 1 pkt 1 lit. a',
// }

tradingDaysOf(2026).slice(0, 2);
// [
//   { date: '2026-03-29', kind: 'sunday', rule: 'niedziela przed Wielkanocą', article: 'art. 7 ust. 1' },
//   { date: '2026-01-25', kind: 'sunday', rule: 'ostatnia niedziela stycznia', article: 'art. 7 ust. 1' },
// ]
```

- **`holidaysOf(year)`** gives the days off work under the act of 18 January 1951 on days off work, Art. 1 pkt 1: 13 days, and 14 from 2025, when Christmas Eve became one. A day has a `slug` (stable, ASCII), the `name` people use, the `article` that names it, the `officialName` where the act's name differs (1 May is `Święto Państwowe` in the act) and the `stateAct` that set it where it is also a state day (1 May, 3 May, 11 November). Easter, Easter Monday, Pentecost and Corpus Christi are computed from `easterSunday`.
- **`stateDaysOf(year)`** gives the 19 state and national days of the current list, by date, each with the `act` that set it (`signed`, `about`, `address`, `eli`). `isDayOff` is true for the three that are also days off work, and `fallsOnDayOff` for the Armed Forces Day, which falls on the Assumption.
- **`otherDaysOf(year)`** gives the 38 other days that a statute or a resolution of the Sejm set (Police Day, National Education Day, ...), with `kind` (`statute` or `resolution`), the `basis` as the act or the article is cited, the `eli` address and `days`, how many days the observance runs (3 for the December commemoration of 1970). None of them is a day off work.
- **`tradingDaysOf(year)`** gives the Sundays when shops may open under the act of 10 January 2018 on limiting trade on Sundays, Art. 7 (the Sunday before Easter, the last Sunday of January, April, June and August unless it is a holiday, and the three Sundays before Christmas Eve), and the Saturday before Easter, when shops close at 14:00 (Art. 8). `rule` says which rule gave the day. **Every other Sunday is closed**, so a list of these days names the rare ones.
- **`easterSunday(year)`** is the Gregorian computus.
- **`HOLIDAYS_ACT`** and **`TRADE_ACT`** give the title and the address of the two acts in ISAP, **`actTitle(act)`** writes an act reference as a title and **`eliUrl(eli)`** gives its address on `eli.gov.pl`.

The names, rules and titles are in Polish, as the law is.

## When the law changes

The rules are in the code, read from the consolidated texts of the acts of 18 January 1951 (Dz. U. 2025 poz. 296) and 10 January 2018 (Dz. U. 2025 poz. 301) on 2026-11-16, and from Polish Wikipedia's lists of state and other days. A change of an act is a release of this package, with the tests' tables updated. Issues about a day that is missing or wrong are welcome.

This is not an official source and not legal advice: check the act when it matters.

## Development

```sh
npm ci
npm test
npm run typecheck
npm run lint
npm run build
```

## Licence

[MIT](LICENSE)
