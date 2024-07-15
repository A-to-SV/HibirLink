import { Router } from 'express';
import {create, getProduct, updateProduct, deleteProduct} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/')
    .post(protect, create);

router.route('/:id')
    .get(getProduct)
    .put(protect, updateProduct)
    .delete(protect, deleteProduct);

export default router;
