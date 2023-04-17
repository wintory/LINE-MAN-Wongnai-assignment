import { fetchAllStore } from './../services/store';
import { useCallback, useState, useEffect } from 'react';
import { StoreValue } from '../types/store';
import { getIsActiveTime } from '../helpers/store';

const useStore = () => {
  const [stores, setStores] = useState<StoreValue[]>();

  const getAllStore = useCallback(async () => {
    // Todo: improve with react-query
    const data: StoreValue[] | undefined = await fetchAllStore();

    if (data) {
      const result = data.map(storeDetail => {
        const isActiveStore =
          getIsActiveTime(
            storeDetail?.activeTimePeriod?.open,
            storeDetail?.activeTimePeriod?.close
          ) || false;

        return { ...storeDetail, isActive: isActiveStore };
      });

      setStores(result);
    }
  }, []);

  useEffect(() => {
    getAllStore();
  }, []);

  return {
    stores,
  };
};

export default useStore;
