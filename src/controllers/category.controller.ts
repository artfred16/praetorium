import Category from "../models/category.model";
import {Request, Response} from "express";

export async function getCategories(_: Request, res: Response) {
  try {
    const categories = await Category.find()

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}