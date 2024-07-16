import { Router } from 'express';
import {create, getProduct, updateProduct, deleteProduct, getFilteredProducts, getProductByName} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/')
    .post(create);

router.route('/:id')
    .get(getProduct)
    .patch(updateProduct)
    .delete(deleteProduct);

router.get('/', getFilteredProducts);
router.get('/search', getProductByName);

export default router;