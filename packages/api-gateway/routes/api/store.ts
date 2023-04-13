import express, { Request, Response } from 'express';
import StoreController from '../../controllers/store.controller';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    res.json({});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get('/:storeId', StoreController.getStoreDetail);

export default router;
