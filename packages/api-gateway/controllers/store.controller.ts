import axios from 'axios';
import { Request, Response } from 'express';
import AppConfig from '../config/app';

const StoreController = {
  getAllStore: async (req: Request, res: Response) => {
    try {
      res.send({});
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
  getStoreDetail: async (req: Request, res: Response) => {
    try {
      const userId = req.params.storeId || '';
      const uri = `${AppConfig.apiBaseUrl}/api/restaurants/${userId}.json`;
      const storeDetail = await axios(uri).then(response => {
        return response?.data;
      });

      res.json(storeDetail);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  },
};

export default StoreController;
