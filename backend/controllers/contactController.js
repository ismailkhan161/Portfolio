import ContactMessage from '../models/ContactMessage.js';

// POST /api/contact  (body already validated by validateContact)
export async function createContactMessage(req, res, next) {
  try {
    const { name, email, message } = req.body;
    const saved = await ContactMessage.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: 'Message received. Thank you!',
      data: { id: saved.id },
    });
  } catch (error) {
    next(error);
  }
}
