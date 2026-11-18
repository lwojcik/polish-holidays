export interface ActReference {
  signed: string;
  about: string;
  address: string;
  eli: string;
}

export interface Holiday {
  date: string;
  slug: string;
  name: string;
  officialName: string | undefined;
  article: string;
  stateAct: ActReference | undefined;
}

export interface StateDay {
  date: string;
  slug: string;
  name: string;
  act: ActReference;
  isDayOff: boolean;
  fallsOnDayOff: boolean;
}

export type OtherDayKind = 'statute' | 'resolution';

export interface OtherDay {
  date: string;
  slug: string;
  name: string;
  kind: OtherDayKind;
  basis: string;
  eli: string;
  days: number;
}

export type TradingDayKind = 'sunday' | 'easter-saturday';

export interface TradingDay {
  date: string;
  kind: TradingDayKind;
  rule: string;
  article: string;
}

export interface OtherDayRow {
  monthDay: string;
  slug: string;
  title: string;
  kind: OtherDayKind;
  basis: string;
  eli: string;
  days: number;
}
