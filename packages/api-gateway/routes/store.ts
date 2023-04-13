import axios from 'axios';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.json({});
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get('/:storeId', async (req, res) => {
  try {
    const userId = req.params.storeId || '';
    const uri = `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${userId}.json`;
    const storeDetail = await axios(uri).then(response => {
      return response?.data;
    });

    res.json(storeDetail);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

export default router;
