import { Router } from 'express';
import { createCartItem, getCartItemsByUserId, updateCartItem, deleteCart } from '../controllers/cartController.js';

const router = Router();

router.post('/cart', createCartItem);

router.get('/cart/:userId', getCartItemsByUserId);

router.patch('/cart/:id', updateCartItem);

router.delete('/cart/:id', deleteCart);

export default router;
