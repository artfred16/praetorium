import mangoose from "mongoose";

const categorySchema = new mangoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
}, { timestamps: true })

const Category = mangoose.model("Category", categorySchema);

export default Category;