import type { ActReference } from '@holidays/types';

interface StateRow {
  monthDay: string;
  slug: string;
  title: string;
  act: ActReference;
  alsoDayOff?: boolean;
}

export const STATE_ROWS: StateRow[] = [
  {
    monthDay: '02-14',
    slug: 'zolnierze-armii-krajowej',
    title: 'Narodowy Dzień Pamięci Żołnierzy Armii Krajowej',
    act: {
      signed: '9 stycznia 2025',
      about: 'o ustanowieniu Narodowego Dnia Pamięci Żołnierzy Armii Krajowej',
      address: 'Dz. U. 2025 poz. 165',
      eli: 'DU/2025/165',
    },
  },
  {
    monthDay: '02-19',
    slug: 'dzien-nauki-polskiej',
    title: 'Dzień Nauki Polskiej',
    act: {
      signed: '9 stycznia 2020',
      about: 'o ustanowieniu Dnia Nauki Polskiej',
      address: 'Dz. U. 2020 poz. 181',
      eli: 'DU/2020/181',
    },
  },
  {
    monthDay: '03-01',
    slug: 'zolnierze-wykleci',
    title: 'Narodowy Dzień Pamięci „Żołnierzy Wyklętych”',
    act: {
      signed: '3 lutego 2011',
      about: 'o ustanowieniu Narodowego Dnia Pamięci „Żołnierzy Wyklętych”',
      address: 'Dz. U. 2011 nr 32 poz. 160',
      eli: 'DU/2011/160',
    },
  },
  {
    monthDay: '03-24',
    slug: 'polacy-ratujacy-zydow',
    title:
      'Narodowy Dzień Pamięci Polaków ratujących Żydów pod okupacją niemiecką',
    act: {
      signed: '6 marca 2018',
      about:
        'o ustanowieniu Narodowego Dnia Pamięci Polaków ratujących Żydów pod okupacją niemiecką',
      address: 'Dz. U. 2018 poz. 589',
      eli: 'DU/2018/589',
    },
  },
  {
    monthDay: '04-12',
    slug: 'dzien-inwalidy-wojennego',
    title: 'Dzień Inwalidy Wojennego',
    act: {
      signed: '23 stycznia 2026',
      about: 'o ustanowieniu Dnia Inwalidy Wojennego',
      address: 'Dz. U. 2026 poz. 179',
      eli: 'DU/2026/179',
    },
  },
  {
    monthDay: '04-14',
    slug: 'swieto-chrztu-polski',
    title: 'Święto Chrztu Polski',
    act: {
      signed: '22 lutego 2019',
      about: 'o ustanowieniu Święta Chrztu Polski',
      address: 'Dz. U. 2019 poz. 656',
      eli: 'DU/2019/656',
    },
  },
  {
    monthDay: '05-08',
    slug: 'narodowy-dzien-zwyciestwa',
    title: 'Narodowy Dzień Zwycięstwa',
    act: {
      signed: '24 kwietnia 2015',
      about: 'o ustanowieniu Narodowego Dnia Zwycięstwa',
      address: 'Dz. U. 2015 poz. 622',
      eli: 'DU/2015/622',
    },
  },
  {
    monthDay: '06-20',
    slug: 'powstania-slaskie',
    title: 'Narodowy Dzień Powstań Śląskich',
    act: {
      signed: '12 maja 2022',
      about: 'o ustanowieniu Narodowego Dnia Powstań Śląskich',
      address: 'Dz. U. 2022 poz. 1229',
      eli: 'DU/2022/1229',
    },
  },
  {
    monthDay: '07-11',
    slug: 'ofiary-ludobojstwa-oun-upa',
    title:
      'Narodowy Dzień Pamięci o Polakach – Ofiarach Ludobójstwa dokonanego przez OUN i UPA',
    act: {
      signed: '4 czerwca 2025',
      about:
        'o ustanowieniu 11 lipca Narodowym Dniem Pamięci o Polakach - Ofiarach Ludobójstwa dokonanego przez OUN i UPA na ziemiach wschodnich II Rzeczypospolitej Polskiej',
      address: 'Dz. U. 2025 poz. 891',
      eli: 'DU/2025/891',
    },
  },
  {
    monthDay: '07-12',
    slug: 'dzien-wsi-polskiej',
    title: 'Dzień Walki i Męczeństwa Wsi Polskiej',
    act: {
      signed: '29 września 2017',
      about: 'o ustanowieniu Dnia Walki i Męczeństwa Wsi Polskiej',
      address: 'Dz. U. 2017 poz. 1953',
      eli: 'DU/2017/1953',
    },
  },
  {
    monthDay: '08-01',
    slug: 'powstanie-warszawskie',
    title: 'Narodowy Dzień Pamięci Powstania Warszawskiego',
    act: {
      signed: '9 października 2009',
      about: 'o ustanowieniu Narodowego Dnia Pamięci Powstania Warszawskiego',
      address: 'Dz. U. 2009 nr 206 poz. 1588',
      eli: 'DU/2009/1588',
    },
  },
  {
    monthDay: '08-15',
    slug: 'swieto-wojska-polskiego',
    alsoDayOff: true,
    title: 'Święto Wojska Polskiego',
    act: {
      signed: '11 marca 2022',
      about: 'o obronie Ojczyzny',
      address: 'Dz. U. 2022 poz. 655',
      eli: 'DU/2022/655',
    },
  },
  {
    monthDay: '08-31',
    slug: 'solidarnosci-i-wolnosci',
    title: 'Dzień Solidarności i Wolności',
    act: {
      signed: '27 lipca 2005',
      about: 'o ustanowieniu dnia 31 sierpnia Dniem Solidarności i Wolności',
      address: 'Dz. U. 2005 nr 155 poz. 1295',
      eli: 'DU/2005/1295',
    },
  },
  {
    monthDay: '09-10',
    slug: 'dzieci-wojny',
    title: 'Narodowy Dzień Polskich Dzieci Wojny',
    act: {
      signed: '13 lipca 2023',
      about: 'o ustanowieniu Narodowego Dnia Polskich Dzieci Wojny',
      address: 'Dz. U. 2023 poz. 1537',
      eli: 'DU/2023/1537',
    },
  },
  {
    monthDay: '10-19',
    slug: 'duchowni-niezlomni',
    title: 'Narodowy Dzień Pamięci Duchownych Niezłomnych',
    act: {
      signed: '4 października 2018',
      about: 'o ustanowieniu Narodowego Dnia Pamięci Duchownych Niezłomnych',
      address: 'Dz. U. 2018 poz. 2156',
      eli: 'DU/2018/2156',
    },
  },
  {
    monthDay: '12-27',
    slug: 'powstanie-wielkopolskie',
    title: 'Narodowy Dzień Zwycięskiego Powstania Wielkopolskiego',
    act: {
      signed: '1 października 2021',
      about:
        'o ustanowieniu Narodowego Dnia Zwycięskiego Powstania Wielkopolskiego',
      address: 'Dz. U. 2021 poz. 2156',
      eli: 'DU/2021/2156',
    },
  },
];

export const DAY_OFF_STATE_ACTS = new Map<string, ActReference>(
  Object.entries({
    'swieto-panstwowe': {
      signed: '26 kwietnia 1950',
      about: 'o ustanowieniu dnia 1 maja świętem państwowym',
      address: 'Dz. U. 1950 nr 19 poz. 157',
      eli: 'DU/1950/157',
    },
    'trzeci-maja': {
      signed: '6 kwietnia 1990',
      about: 'o przywróceniu Święta Narodowego Trzeciego Maja',
      address: 'Dz. U. 1990 nr 28 poz. 160',
      eli: 'DU/1990/160',
    },
    'swieto-niepodleglosci': {
      signed: '15 lutego 1989',
      about: 'o ustanowieniu Narodowego Święta Niepodległości',
      address: 'Dz. U. 1989 nr 6 poz. 34',
      eli: 'DU/1989/34',
    },
  }),
);
