import Category from "../models/category.model.ts";

export async function getCategories(_, res) {
  try {
    const categories = await Category.find()

    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}