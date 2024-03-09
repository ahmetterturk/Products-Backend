import express from 'express';

import { createSoldItem } from '../controllers/soldItemsController.js';

const router = express.Router();

router.post('/', createSoldItem);

export default router;