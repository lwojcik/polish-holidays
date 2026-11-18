const WIGILIA_HOLIDAY_FROM_YEAR = 2025;

interface HolidayRow {
  slug: string;
  title: string;
  letter: string;
  officialName?: string;
  fixed?: string;
  afterEaster?: number;
  fromYear?: number;
}

export const HOLIDAY_ROWS: HolidayRow[] = [
  { slug: 'nowy-rok', title: 'Nowy Rok', letter: 'a', fixed: '01-01' },
  { slug: 'trzech-kroli', title: 'Trzech Króli', letter: 'b', fixed: '01-06' },
  { slug: 'wielkanoc', title: 'Wielkanoc', letter: 'c', afterEaster: 0 },
  {
    slug: 'poniedzialek-wielkanocny',
    title: 'Poniedziałek Wielkanocny',
    letter: 'd',
    afterEaster: 1,
  },
  {
    slug: 'swieto-panstwowe',
    title: 'Święto Pracy',
    officialName: 'Święto Państwowe',
    letter: 'e',
    fixed: '05-01',
  },
  {
    slug: 'trzeci-maja',
    title: 'Święto Konstytucji 3 Maja',
    officialName: 'Święto Narodowe Trzeciego Maja',
    letter: 'f',
    fixed: '05-03',
  },
  {
    slug: 'zielone-swiatki',
    title: 'Zielone Świątki',
    letter: 'g',
    afterEaster: 49,
  },
  { slug: 'boze-cialo', title: 'Boże Ciało', letter: 'h', afterEaster: 60 },
  {
    slug: 'wniebowziecie',
    title: 'Wniebowzięcie Najświętszej Maryi Panny',
    letter: 'i',
    fixed: '08-15',
  },
  {
    slug: 'wszystkich-swietych',
    title: 'Wszystkich Świętych',
    letter: 'j',
    fixed: '11-01',
  },
  {
    slug: 'swieto-niepodleglosci',
    title: 'Narodowe Święto Niepodległości',
    letter: 'k',
    fixed: '11-11',
  },
  {
    slug: 'wigilia',
    title: 'Wigilia Bożego Narodzenia',
    letter: 'ka',
    fixed: '12-24',
    fromYear: WIGILIA_HOLIDAY_FROM_YEAR,
  },
  {
    slug: 'boze-narodzenie',
    title: 'Boże Narodzenie',
    letter: 'l',
    fixed: '12-25',
  },
  {
    slug: 'drugi-dzien-bozego-narodzenia',
    title: 'Drugi dzień Bożego Narodzenia',
    letter: 'm',
    fixed: '12-26',
  },
];
