import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    message: { type: String, required: true, trim: true, minlength: 10, maxlength: 2000 },
  },
  // Only createdAt is needed; messages are never edited.
  { timestamps: { createdAt: true, updatedAt: false } },
);

export default mongoose.model('ContactMessage', contactMessageSchema);
