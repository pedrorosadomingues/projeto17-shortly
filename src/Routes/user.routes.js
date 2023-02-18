import { Router } from 'express';
import { createUser, userLogin } from '../controller/user.controller.js';
import { validateSignup } from '../middleware/validateSignup.js';
import { validateSignin } from '../middleware/validateSignin.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { signupSchema } from '../Schema/userSchema.js';
import { signinSchema } from '../Schema/userSchema.js';

const router = Router();

router.post('/signup', validateSchema(signupSchema), validateSignup, createUser);
router.post('/signin', validateSchema(signinSchema), validateSignin, userLogin);

export default router;