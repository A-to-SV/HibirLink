import { Router } from 'express';
import { createBillingAddress, getBillingAddress, updateBillingAddress, deleteBillingAddress, fetchCartSummary } from '../controllers/billingAddressController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', protect, createBillingAddress);
router.get('/', getBillingAddress);
router.put('/:id', updateBillingAddress);
router.delete('/:id', deleteBillingAddress);
router.get('/summary', fetchCartSummary)

export default router;
