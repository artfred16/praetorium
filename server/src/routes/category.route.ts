import express from "express";
import {
  getCategories
} from "../controllers/category.controller.ts";

const router = express.Router();

router.get('/', getCategories);
export default router;