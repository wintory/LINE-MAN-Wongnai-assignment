import * as dayjs from 'dayjs';
import * as isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export const getIsActiveTime = (openTime?: string, closeTime?: string) => {
  if (!openTime && !closeTime) return false;
  if (openTime && !closeTime) return true;

  const currentDate = dayjs().format('YYYY-MM-DD');
  const openDateTime = dayjs(`${currentDate} ${openTime}`);
  const closedDateTime = dayjs(
    `${currentDate} ${closeTime}`,
    'DD-MM-YYYY HH:mm'
  );

  const isBetweenOpenAndClosedTime = dayjs().isBetween(
    openDateTime,
    closedDateTime,
    'minutes'
  );

  return isBetweenOpenAndClosedTime;
};
