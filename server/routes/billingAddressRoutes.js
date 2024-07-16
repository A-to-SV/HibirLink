import { Router } from 'express';
import { createBillingAddress, getBillingAddress, updateBillingAddress, deleteBillingAddress } from '../controllers/billingAddressController.js';
// import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/', createBillingAddress);
router.get('/', getBillingAddress);
router.put('/:id', updateBillingAddress);
router.delete('/:id', deleteBillingAddress);

export default router;
