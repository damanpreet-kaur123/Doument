import {
    uploadImage,
    uploadMiddleware,
} from '../controllers/controller.js';

import express from 'express';

const router = express.Router();

router.post('/upload', uploadMiddleware, uploadImage);
export default router;
