import { getIsActiveTime } from './store';
import * as dayjs from 'dayjs';

describe('store', () => {
  beforeEach(() => {
    jest.mock('dayjs', () => ({
      extend: dayjs.extend,
    }));
  });

  describe('getIsActiveTime', () => {
    it('should return true if current time is between open and close time', () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-04-14 2:30 PM'));
      const openTime = '9:00';
      const closedTime = '20:00';
      const result = getIsActiveTime(openTime, closedTime);

      expect(result).toBeTruthy();
    });

    it('should return false if current time is not between open and close time', () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-04-14 9:30 PM'));
      const openTime = '9:00';
      const closedTime = '20:00';
      const result = getIsActiveTime(openTime, closedTime);

      expect(result).toBeFalsy();
    });

    it('should return false if no open and close time', () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-04-14 9:30 PM'));
      const openTime = undefined;
      const closedTime = undefined;
      const result = getIsActiveTime(openTime, closedTime);

      expect(result).toBeFalsy();
    });

    it('should return false if only has open time', () => {
      jest.useFakeTimers().setSystemTime(new Date('2023-04-14 9:30 PM'));
      const openTime = '9:00';
      const closedTime = undefined;
      const result = getIsActiveTime(openTime, closedTime);

      expect(result).toBeTruthy();
    });
  });
});
