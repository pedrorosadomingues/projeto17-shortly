import { Router } from 'express';
import { shortenUrl } from '../controller/url.controller.js';
import { validateToken } from '../middleware/validateToken.js';
import { urlSchema } from '../Schema/urlSchema.js';
import { validateSchema } from '../middleware/validateSchema.js';

const router = Router();

router.post('/urls/shorten', validateToken, validateSchema(urlSchema), shortenUrl);

export default router;