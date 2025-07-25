import express from 'express';
import tag from "./tag.route.ts";
import category from "./category.route.ts";


const router = express.Router();

router.use('/tags', tag)
router.use('/categories', category)

export default router;