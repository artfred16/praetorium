import Tag from "../models/tag.model";
import mongoose from "mongoose";
import {Request, Response} from "express";


export async function getTags(_: Request , res: Response) {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export async function getTagById(
    { params: { id } } : Request,
    res: Response
) {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid tag ID' });
    }

    const tag = await Tag.findById(id);
    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.json(tag);
  } catch (error) {
    console.error("Error fetching tag:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export function createTag(
    { body: { name, description }}: Request,
    res: Response
) {
  try {
    const newTag = new Tag({ name, description});
    newTag.save();
    res.status(201).json(newTag);
  } catch (error) {
    console.error("Error creating tag:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export async function updateTag(
    { params: { id }, body: { name, description }}: Request,
    res: Response
) {
  try {
    const updatedTag = await Tag.findByIdAndUpdate(id, { name, description });
    if (!updatedTag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.json(updatedTag);
  } catch (error) {
    console.error("Error updating tag:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}


export async function deleteTag(
    { params: { id }}: Request,
    res: Response
) {
  try {
    const deletedTag = await Tag.findByIdAndDelete(id);
    if (!deletedTag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.json({ message: "Tag deleted successfully" });
  } catch (error) {
    console.error("Error deleting tag:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}