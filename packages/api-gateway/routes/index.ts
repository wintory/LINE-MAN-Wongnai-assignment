import express from 'express';
import Api from './api';

const router = express.Router();

router.use('/api', Api);

export default router;
