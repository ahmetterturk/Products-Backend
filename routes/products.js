import express from 'express';

import { getProducts, getProduct, addProduct, editProduct } from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.get('/:id', getProduct);
router.patch('/:id', editProduct);

export default router;