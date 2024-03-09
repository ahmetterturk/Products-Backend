import express from 'express';

import { getProducts, getProductById, addProduct, editProduct } from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.patch('/:id', editProduct);

export default router;