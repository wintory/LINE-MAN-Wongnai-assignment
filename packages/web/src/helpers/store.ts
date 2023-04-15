import dayjs from 'dayjs';

export const getIsActiveTime = (openTime: string, closeTime: string) => {
  // const openDateTime = new Date(null, null, null, [...openTime.split(':')]);
  // const closeDateTime = new Date(null, null, null, [...closeTime.split(':')]);
  const result = dayjs(openTime).diff(dayjs(closeTime), 'hours');
  console.log({ result });

  return false;
};
