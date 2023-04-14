import {
  DEFAULT_STORE_PAGE,
  DEFAULT_STORE_PAGE_LIMIT,
} from './../constants/index';
import { getPaginationData } from './../helpers/index';
import axios from 'axios';
import { Request, Response } from 'express';
import AppConfig from '../config/app';
import { MockedStoreId } from '../mock/store';
import { MenuDetail, StoreValue, StoreWithMenuDatas } from '../types/store';

const StoreController = {
  getAllStore: async (req: Request, res: Response) => {
    try {
      const storeId = MockedStoreId; // Todo: improve to get from service (no service to get all store now)
      const stores: StoreValue[] = [];

      await Promise.all(
        storeId.map(async userId => {
          const uri = `${AppConfig.apiBaseUrl}/api/restaurants/${userId}.json`;
          const storeDetail: StoreValue = await axios(uri).then(response => {
            return response?.data;
          });

          if (storeDetail) stores.push(storeDetail);
        })
      );

      res.json({ stores });
    } catch (error) {
      res.status(500).json({
        message: 'internal server error',
      });
    }
  },
  getStoreDetail: async (req: Request, res: Response) => {
    try {
      const storeId = req.params.storeId || '';
      let page = req?.query?.page || DEFAULT_STORE_PAGE;
      let limit = req?.query?.limit || DEFAULT_STORE_PAGE_LIMIT;

      if (!storeId) {
        res.status(404).json({
          message: 'store not found',
        });
      }

      const uri = `${AppConfig.apiBaseUrl}/api/restaurants/${storeId}.json`;
      const storeDetail: StoreWithMenuDatas = await axios(uri).then(
        response => {
          return response?.data;
        }
      );

      const menus: string[] = storeDetail?.menus || [];
      const menuValues: string[] = [];

      if (storeDetail && menus) {
        const menuNames = getPaginationData(menus, +limit, +page);

        if (menuNames.length > 0) {
          await Promise.all(
            menuNames.map(async value => {
              const menuUri = `${AppConfig.apiBaseUrl}/api/restaurants/${storeId}/menus/${value}/short.json`;
              const menuDetail = await axios(menuUri).then(response => {
                return response?.data;
              });

              if (menuDetail) menuValues.push(menuDetail);
            })
          );
        }
      }

      const result = {
        ...storeDetail,
        menus: menuValues.length > 0 ? menuValues : storeDetail?.menus,
        page,
        limit,
      };

      res.json(result);
    } catch (error) {
      res.status(500).json({
        message: 'internal server error',
      });
    }
  },
  getMenuDetail: async (req: Request, res: Response) => {
    try {
      const userId = req.params.storeId || '';
      const menuName = req.params.menuNames || '';

      if (userId && menuName) {
        const menuUri = `${AppConfig.apiBaseUrl}/api/restaurants/${userId}/menus/${menuName}/full.json`;
        const menuFullDetail: MenuDetail = await axios(menuUri).then(
          response => {
            return response?.data;
          }
        );

        res.json(menuFullDetail);
      }

      res.status(404).json({
        message: 'menu not found',
      });
    } catch (error) {
      res.status(500).json({
        message: 'internal server error',
      });
    }
  },
};

export default StoreController;
