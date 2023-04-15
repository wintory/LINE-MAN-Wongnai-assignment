import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import { StoreWithMenuData } from '../types/store';
import { getIsActiveTime } from '../helpers/store';

const useStoreDetail = (storeId?: number | string) => {
  // Todo: add state type
  const [storeDetail, setStoreDetail] = useState<any>();
  const isActiveStore =
    getIsActiveTime(
      storeDetail?.activeTimePeriod?.open,
      storeDetail?.activeTimePeriod?.close
    ) || false;

  const getStoreDetail = useCallback(
    async (id: number | string) => {
      // Todo: add data type
      const data: StoreWithMenuData = await axios
        .get(`http://localhost:8081/api/store/${id}`)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          console.error(error);
          return undefined;
        });
      setStoreDetail(data);
    },
    [storeId]
  );

  useEffect(() => {
    if (storeId) {
      getStoreDetail(storeId);
    }
  }, [storeId]);

  return { storeDetail, isActiveStore };
};

export default useStoreDetail;
