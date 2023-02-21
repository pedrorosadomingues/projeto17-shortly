import { Router } from 'express';
import { shortenUrl,  getUrlById, redirectToUrl, deleteUrlById } from '../controller/url.controller.js';
import { validateToken } from '../middleware/validateToken.js';
import { urlSchema } from '../Schema/urlSchema.js';
import { validateSchema } from '../middleware/validateSchema.js';
import { validatePostUrl } from '../middleware/validatePostUrl.js';
import { validateGetUrl } from '../middleware/validateGetUrl.js';
import { validateDeleteUrl } from '../middleware/validateDeleteUrl.js';



const router = Router();

router.post('/urls/shorten', validateToken, validateSchema(urlSchema), validatePostUrl, shortenUrl);
router.get('/urls/:id', validateGetUrl, getUrlById);
router.get('/urls/open/:shortUrl', validateGetUrl, redirectToUrl);
router.delete('/urls/:id', validateToken, validateDeleteUrl, deleteUrlById);


export default router;