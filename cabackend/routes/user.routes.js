import { getUsersForSidebar } from '../controllers/user.controller.js';

import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';

const router = express.Router();

router.get('/', protectRoute ,getUsersForSidebar);


export default router;