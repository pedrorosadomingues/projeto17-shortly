import { Router } from 'express';
import { shortenUrl } from '../controller/url.controller.js';
import { validateToken } from '../middleware/validateToken.js';
import { urlSchema } from '../Schema/urlSchema.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { validateUrl } from '../middleware/validateUrl.js';

const router = Router();

router.post('/urls/shorten', validateToken, validateSchema(urlSchema), validateUrl, shortenUrl);

export default router;