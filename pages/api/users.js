// pages/api/users.js
import { connectToDatabase } from '@/lib/mongoose';
import User from '@/models/User';

export default async function handleUsers(req, res) {
  if (req.method === 'GET') {
    try {
      // Paso 2: Conectarse a la base de datos
      await connectToDatabase();

      // Paso 3: Consulta a la base de datos para obtener todos los usuarios
      const users = await User.find({});

      // Paso 4: Devuelve la lista de usuarios en la respuesta
      res.status(200).json(users);
    } catch (error) {
      // Paso 5: Manejo de errores
      console.error('Error al obtener los usuarios:', error);
      res.status(500).json({ error: 'Error al obtener los usuarios' });
    } finally {
      // Paso 6: Cerrar la conexión a la base de datos
      mongoose.connection.close();
    }
  } else {
    // Paso 7: Manejar métodos no permitidos
    res.status(405).json({ error: 'Método no permitido' });
  }
}
