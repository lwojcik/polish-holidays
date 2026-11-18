const MS_PER_DAY = 86_400_000;
const SUNDAY = 0;
const ISO_LENGTH = 10;

const pad = (value: number) => String(value).padStart(2, '0');

const toDate = (date: string) => new Date(`${date}T00:00:00Z`);

export const addDays = ({
  date,
  days,
}: {
  date: string;
  days: number;
}): string =>
  new Date(toDate(date).getTime() + days * MS_PER_DAY)
    .toISOString()
    .slice(0, ISO_LENGTH);

export const weekdayOf = (date: string) => toDate(date).getUTCDay();

export const isSunday = (date: string) => weekdayOf(date) === SUNDAY;

export const lastSundayOf = ({
  year,
  month,
}: {
  year: number;
  month: number;
}): string => {
  const monthEnd = addDays({ date: `${year}-${pad(month + 1)}-01`, days: -1 });

  return addDays({ date: monthEnd, days: -weekdayOf(monthEnd) });
};
