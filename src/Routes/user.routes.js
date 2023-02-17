import { Router } from 'express';
import { createUser } from '../controller/user.controller.js';
import { validateEmail } from '../middleware/validateUser.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { userSchema } from '../Schema/userSchema.js';

const router = Router();

router.post('/signup', validateSchema(userSchema), validateEmail, createUser);

export default router;