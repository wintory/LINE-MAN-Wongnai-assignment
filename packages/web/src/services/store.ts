import { FullMenuDetail, StoreValue } from '../types/store';
import ApiClient from './client';

export const fetchAllStore = async () => {
  try {
    const data: StoreValue[] = await ApiClient.get(`/store`).then(response => {
      return response.data.stores;
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchStoreDetail = async (id: number | string) => {
  try {
    const data: StoreValue = await ApiClient.get(`/store/${id}`).then(
      response => {
        return response.data;
      }
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMoreStoreDetail = async (
  id: number | string,
  page: number
) => {
  try {
    const data: StoreValue = await ApiClient.get(
      `/store/${id}?page=${page}`
    ).then(response => {
      return response.data;
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchFullMenuDetail = async (
  storeId: number | string,
  menuName: string
) => {
  try {
    const data: FullMenuDetail = await ApiClient.get(
      `/store/${storeId}/${menuName}`
    )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
        return undefined;
      });

    return data;
  } catch (error) {
    console.error(error);
  }
};
