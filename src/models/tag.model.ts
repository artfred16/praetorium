import mangoose from 'mongoose';

const tagSchema = new mangoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

const Tag = mangoose.model('Tag', tagSchema, 'tags');

export default Tag;