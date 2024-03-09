import express from 'express';

import { getProducts, addProduct, editProduct } from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.patch('/:id', editProduct);

export default router;