import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login({ setIsLogin }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://cimple-card.onrender.com/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();

    if (data.success) {
      router.push('/dashboard'); // Navigate to dashboard on successful login
    } else {
      alert(data.message); // Show an error message if login fails
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-center text-gray-800">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-gray-700">Email</label>
          <input
            type="email"
            className="p-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700">Password</label>
          <input
            type="password"
            className="p-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-end">
          
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md">Login</button>
      </form>

      <div className="text-center">
        <span>Don't have an account?</span>
        <button
          onClick={() => setIsLogin(false)} 
          className="text-blue-500 ml-1"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
