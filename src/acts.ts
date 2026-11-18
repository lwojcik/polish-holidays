import type { ActReference } from '@holidays/types';

/* eslint-disable pii/no-phone-number -- the statutes' Dz. U. addresses and ISAP ids are not phone numbers */
export const HOLIDAYS_ACT = {
  title:
    'ustawa z dnia 18 stycznia 1951 r. o dniach wolnych od pracy (Dz. U. 2025 poz. 296)',
  url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU19510040028',
};

export const TRADE_ACT = {
  title:
    'ustawa z dnia 10 stycznia 2018 r. o ograniczeniu handlu w niedziele i święta oraz w niektóre inne dni (Dz. U. 2025 poz. 301)',
  url: 'https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20180000305',
};

const ELI_PAGE_URL = 'https://eli.gov.pl/eli';

export const actTitle = (act: ActReference) =>
  `ustawa z dnia ${act.signed} r. ${act.about} (${act.address})`;

export const eliUrl = (eli: string) => `${ELI_PAGE_URL}/${eli}/ogl/pol`;
