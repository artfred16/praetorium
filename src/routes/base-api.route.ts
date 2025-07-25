import express from 'express';
import tag from "./tag.route";
import category from "./category.route";


const router = express.Router();

router.use('/tags', tag)
router.use('/categories', category)

export default router;