// pages/api/login.js

import axios from 'axios';
import { connectToDatabase } from '@/lib/mongoose';
import User from '@/models/User';

export default async function handleLogin(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Paso 1: Conectarse a la base de datos
      await connectToDatabase();

      // Paso 2: Verificar las credenciales del usuario
      const user = await User.findOne({ email });

      if (!user) {
        // Si el usuario no se encuentra, devolver un error 401 (no autorizado)
        res.status(401).json({ error: 'Credenciales incorrectas' });
        return;
      }

      // Paso 3: Verificar la contraseña del usuario
      if (user.password !== password) {
        // Si la contraseña no coincide, devolver un error 401
        res.status(401).json({ error: 'Credenciales incorrectas' });
        return;
      }

      // Paso 4: Autenticación exitosa, devolver un código 200
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
      // Paso 5: Manejo de errores
      console.error('Error en la autenticación:', error);
      res.status(500).json({ error: 'Error en la autenticación' });
    } finally {
      // Paso 6: Cerrar la conexión a la base de datos
      mongoose.connection.close();
    }
  } else {
    // Paso 7: Manejar métodos no permitidos
    res.status(405).json({ error: 'Método no permitido' });
  }
}
