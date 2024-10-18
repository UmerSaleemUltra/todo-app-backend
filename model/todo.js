// model/Todo.js
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false // Adding completed field with default value as false
  }
});

export default mongoose.model('Todo', TodoSchema);
