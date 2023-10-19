// pages/api/register.js
import { connectToDatabase } from '@/lib/mongoose';
import User from '../../models/User';


async function registerUser(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    await connectToDatabase(); // Llama a la función para conectar a MongoDB

    try {
      const user = new User({ name, email, password });
      const newUser = await user.save();

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export default registerUser;
