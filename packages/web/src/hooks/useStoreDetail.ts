import { useCallback, useState, useEffect, useMemo } from 'react';
import { FullMenuDetail, StoreValue } from '../types/store';
import { getIsActiveTime } from '../helpers/store';
import {
  fetchFullMenuDetail,
  fetchMoreStoreDetail,
  fetchStoreDetail,
} from '../services/store';

const useStoreDetail = (storeId?: number | string) => {
  const [storeDetail, setStoreDetail] = useState<StoreValue>();
  const [selectedMenu, setSelectedMenu] = useState<
    FullMenuDetail | undefined
  >();
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

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
      setIsFetching(true);
      // Todo: improve with react-query
      const data: StoreValue | undefined = await fetchStoreDetail(id);

      if (data) {
        setStoreDetail(data);
      }
      setIsFetching(false);
    },
    [storeId]
  );

  const handleLoadMoreStoreDetail = useCallback(
    async (id?: number, page?: number) => {
      if (!id || !page) return;

      setIsFetching(true);
      // Todo: improve with react-query
      const data: StoreValue | undefined = await fetchMoreStoreDetail(id, page);

      if (data && data?.menus.length > 0) {
        setStoreDetail({
          ...data,
          menus: [...(storeDetail?.menus || []), ...data.menus],
        });
      } else {
        setHasNextPage(false);
      }

      setIsFetching(false);
    },
    [storeId, storeDetail?.menus]
  );

  const handleGetFullMenu = useCallback(
    async (storeId: number, menuName: string) => {
      setIsFetching(true);
      const shortData = storeDetail?.menus.find(({ id }) => id === menuName);
      // Todo: improve with react-query
      const data: FullMenuDetail | undefined = await fetchFullMenuDetail(
        storeId,
        menuName
      );

      if (data) {
        // Note: we cannot use all key of full data because some key was not the same value as short e.g. sold
        setSelectedMenu({ ...data, sold: shortData?.sold || data.sold });
        setIsOpenPopup(true);
      }
      setIsFetching(false);
    },
    [storeId]
  );

  const handleClosePopup = () => {
    setSelectedMenu(undefined);
    setIsOpenPopup(false);
  };

  useEffect(() => {
    if (storeId) {
      getStoreDetail(storeId);
    }
  }, [storeId]);

  return {
    storeDetail,
    isActiveStore,
    handleGetFullMenu,
    handleLoadMoreStoreDetail,
    selectedMenu,
    isOpenPopup,
    isFetching,
    hasNextPage,
    handleClosePopup,
  };
};

export default useStoreDetail;
