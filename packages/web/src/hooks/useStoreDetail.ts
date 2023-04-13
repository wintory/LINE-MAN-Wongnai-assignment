import axios from 'axios';
import { useCallback, useState, useEffect } from 'react';
import { getIsActiveTime } from '../utilities/store';

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
      // Todo: get data from api gateway
      // Todo: add data type
      const data = await axios
        .get(`http://localhost:8081/store/${id}`)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          console.error(error);
          return undefined;
        });
      console.log({ data });
      setStoreDetail(data);
    },
    [storeId]
  );

  useEffect(() => {
    if (storeId) {
      getStoreDetail(storeId);
    }
  }, [storeId]);

  return { storeDetail };
};

export default useStoreDetail;
