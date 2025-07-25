import express from 'express';
import tag from "./tag.route.js";
import category from "./category.route.js";


const router = express.Router();

router.use('/tags', tag)
router.use('/categories', category)

export default router;