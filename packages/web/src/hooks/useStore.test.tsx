import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useStore from './useStore';
import * as StoreService from '../services/store';
import { StoreValue } from '../types/store';

describe('useStore', () => {
  it('should return default value', async () => {
    const mockedReturnValue = [
      {
        name: 'ลืมเคี้ยว1',
        id: 9999,
        coverImage:
          'https://img.wongnai.com/p/1920x0/2021/08/14/f6ae0252eb0d44b79553c0dba6e56cfe.jpg',
        activeTimePeriod: {
          open: '10:30',
          close: '20:00',
        },
        menus: [],
      },
      {
        name: 'ลืมเคี้ยว2',
        id: 11111,
        coverImage:
          'https://img.wongnai.com/p/1920x0/2021/08/14/f6ae0252eb0d44b79553c0dba6e56cfe.jpg',
        activeTimePeriod: {
          open: '10:30',
          close: '20:00',
        },
        menus: [],
      },
    ];

    jest
      .spyOn(StoreService, 'fetchAllStore')
      .mockReturnValue(mockedReturnValue as unknown as Promise<StoreValue[]>);
    jest.useFakeTimers().setSystemTime(new Date('2023-04-14 2:30 PM'));

    const { result } = renderHook(() => useStore());

    const val = mockedReturnValue.map(v => ({ ...v, isActive: true }));

    await waitFor(() => {
      expect(StoreService.fetchAllStore).toBeCalled();
      expect(result.current.stores).toEqual(val);
    });
  });
});
