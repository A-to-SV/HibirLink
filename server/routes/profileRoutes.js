import { Router } from 'express';
import {create, getProfile, updateProfile} from '../controllers/profileController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();

router.route('/')
    .post(create)
    .get(getProfile)
    .patch(updateProfile);

export default router;
