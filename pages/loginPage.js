// pages/loginPage.js
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import Header from '@/components/Header';
import { useRouter } from 'next/router'; // Importa el enrutador de Next.js

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Obtiene una instancia del enrutador

  async function handleLoginSubmit(ev) {
    ev.preventDefault();

    try {
      // Realiza la solicitud al servidor para verificar las credenciales
      await axios.post('/api/login', { email, password });

      // Si el inicio de sesión es exitoso, muestra una alerta
      alert('Login successful');

      // Redirige al usuario a la página '/'
      router.push('/'); // Realiza la redirección
    } catch (error) {
      console.error('Login error:', error);

      // Si el inicio de sesión falla, muestra una alerta de error
      alert('Login failed');
    }
  }

  return (
    <div>
      <Header />
      <div className="mt-4 grow flex items-center justify-around flex-col min-h-screen">
        <div className="mb-64">
          <h1 className="text-center text-4xl mb-4">Login</h1>
          <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button className="primary">Login</button>
            <div className="text-center py-2 text-gray-500">
              Don&apos;t have an account yet?{' '}
              <Link href="/registerPage" className="underline text-black">
                Register now
              </Link>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}
