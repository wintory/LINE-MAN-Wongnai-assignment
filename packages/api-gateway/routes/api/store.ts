import express from 'express';
import StoreController from '../../controllers/store.controller';

const router = express.Router();

router.get('/', StoreController.getAllStore);
router.get('/:storeId', StoreController.getStoreDetail);
router.get('/:storeId/:menuNames', StoreController.getMenuDetail);

export default router;
