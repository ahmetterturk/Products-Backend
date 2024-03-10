import express from 'express';

import { getProducts, getProductById, addProduct, editProduct, searchProducts } from '../controllers/productsController.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', addProduct);
router.patch('/:id', editProduct);
router.get('/search', searchProducts);

export default router;