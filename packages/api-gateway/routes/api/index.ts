import express from 'express';
import Store from './store';

const router = express.Router();

router.use('/store', Store);

export default router;
