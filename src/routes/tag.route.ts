import express from "express";
import {
  createTag,
  deleteTag,
  getTagById,
  getTags,
  updateTag
} from "../controllers/tag.controller";

const router = express.Router();

router.get('/',  getTags);
router.get('/:id',  getTagById);
router.post('/', createTag);
router.put('/:id', updateTag);
router.put('/:id', deleteTag);

export default router;