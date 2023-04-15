import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import { StoreValue } from '../types/store';
import { getIsActiveTime } from '../helpers/store';

const useStore = () => {
  const [stores, setStores] = useState<StoreValue[]>();

  const getAllStore = useCallback(async () => {
    const data: StoreValue[] = await axios
      .get(`http://localhost:8081/api/store`)
      .then(response => {
        return response.data.stores;
      })
      .catch(error => {
        console.error(error);
        return undefined;
      });

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
