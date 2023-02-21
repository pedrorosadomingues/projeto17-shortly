import { Router } from 'express';
import { shortenUrl } from '../controller/url.controller.js';
import { validateToken } from '../middleware/validateToken.js';
import { urlSchema } from '../Schema/urlSchema.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { validatePostUrl } from '../middleware/validatePostUrl.js';
import { validateGetUrl } from '../middleware/validateGetUrl.js';
import { getUrlById } from '../controller/url.controller.js';
import { redirectToUrl } from '../controller/url.controller.js';

const router = Router();

router.post('/urls/shorten', validateToken, validateSchema(urlSchema), validatePostUrl, shortenUrl);
router.get('/urls/:id', validateGetUrl, getUrlById);
router.get('/urls/open/:shortUrl', validateGetUrl, redirectToUrl);


export default router;