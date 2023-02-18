import { Router } from "express";
import userRoute from "./user.routes.js";
import urlRoute from "./url.routes.js";

const router = Router();

router.use([userRoute, urlRoute])

export default router;