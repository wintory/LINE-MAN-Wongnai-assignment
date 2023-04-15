import axios from 'axios';
import { FullMenuDetail, MenuDetail, StoreValue } from '../types/store';
import ServiceConfig from '../configs/service';

export const fetchAllStore = async () => {
  try {
    const data: StoreValue[] = await axios
      .get(`${ServiceConfig.API_GATEWAY_PATH}/api/store`)
      .then(response => {
        return response.data.stores;
      });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchStoreDetail = async (id: number | string) => {
  try {
    const data: StoreValue = await axios
      .get(`${ServiceConfig.API_GATEWAY_PATH}/api/store/${id}`)
      .then(response => {
        return response.data;
      });

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
    const data: StoreValue = await await axios
      .get(`${ServiceConfig.API_GATEWAY_PATH}/api/store/${id}?page=${page}`)
      .then(response => {
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
    const data: FullMenuDetail = await axios
      .get(`${ServiceConfig.API_GATEWAY_PATH}/api/store/${storeId}/${menuName}`)
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
