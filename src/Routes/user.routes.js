import { Router } from 'express';
import { createUser, userLogin, getShortenedUrlsByUser } from '../controller/user.controller.js';
import { validateToken } from '../middleware/validateToken.js';
import { validateSignup } from '../middleware/validateSignup.js';
import { validateSignin } from '../middleware/validateSignin.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { signupSchema } from '../Schema/userSchema.js';
import { signinSchema } from '../Schema/userSchema.js';

const router = Router();

router.post('/signup', validateSchema(signupSchema), validateSignup, createUser);
router.post('/signin', validateSchema(signinSchema), validateSignin, userLogin);
router.get('/users/me', validateToken, getShortenedUrlsByUser);


export default router;