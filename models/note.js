const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  backgroundColor: { type: String, default: '#ffffff' },
  isArchived: { type: Boolean, default: false },
  isTrashed: { type: Boolean, default: false },
  reminderDate: { type: Date, default: null },
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema);
