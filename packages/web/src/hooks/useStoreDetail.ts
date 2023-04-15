import axios from 'axios';
import { useCallback, useState, useEffect, useMemo } from 'react';
import { MenuDetail, StoreValue } from '../types/store';
import { getIsActiveTime } from '../helpers/store';

const useStoreDetail = (storeId?: number | string) => {
  const [storeDetail, setStoreDetail] = useState<StoreValue>();
  const [selectedMenu, setSelectedMenu] = useState<MenuDetail>();
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const isActiveStore = useMemo(() => {
    return (
      getIsActiveTime(
        storeDetail?.activeTimePeriod?.open,
        storeDetail?.activeTimePeriod?.close
      ) || false
    );
  }, [storeDetail?.activeTimePeriod]);

  const getStoreDetail = useCallback(
    async (id: number | string) => {
      const data: StoreValue = await axios
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

  const handleGetFullMenu = useCallback(
    async (storeId: number, menuName: string) => {
      const data: MenuDetail = await axios
        .get(`http://localhost:8081/api/store/${storeId}/${menuName}`)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          console.error(error);
          return undefined;
        });

      if (data) {
        setIsOpenPopup(true);
        setSelectedMenu(data);
      }
    },
    [storeId]
  );

  useEffect(() => {
    if (storeId) {
      getStoreDetail(storeId);
    }
  }, [storeId]);

  return {
    storeDetail,
    isActiveStore,
    handleGetFullMenu,
    selectedMenu,
    isOpenPopup,
  };
};

export default useStoreDetail;
