// import mongoose from 'mongoose';

// export function mongooseConnect() {
//     if (mongoose.connection.readyState === 1) {
//         // Ya hay una conexión activa, devuelve una promesa resuelta
//         return Promise.resolve(mongoose.connection);
//     } else {
//         // No hay una conexión activa, realiza una nueva conexión
//         const uri = process.env.MONGODB_URI;
//         return mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//     }
// }

// async function mongooseConnect() {
//     if (mongoose.connection.readyState === 1) {
//         console.log('MongoDB connection already established');
//         return Promise.resolve(mongoose.connection);
//     } else {
//         const uri = process.env.MONGODB_URI;
//         const connection = await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connection established'); // Agrega este log
//         return connection;
//     }
// }



// utils/db.js
// import mongoose from 'mongoose';

// export async function connectToDatabase() {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }


// mongoose.js
import mongoose from 'mongoose';

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log('MongoDB connection established');
    return Promise.resolve(mongoose.connection);
  } else {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

export { connectToDatabase };

