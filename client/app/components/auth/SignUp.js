import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp({ setIsLogin }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ email, username, password } , "use sign data")
    const response = await fetch('https://cimple-card.onrender.com/api/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password })
    });
    const data = await response.json();

    if (data.success) {
      router.push('/dashboard'); // Navigate to dashboard on successful signup
    } else {
      alert(data.message); // Show an error message if signup fails
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-center text-gray-800">Create Account</h2>
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
          <label className="text-gray-700">Username</label>
          <input
            type="text"
            className="p-2 border rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-md">Create Account</button>
      </form>

      <div className="text-center">
        <span>Already have an account?</span>
        <button
          onClick={() => setIsLogin(true)}
          className="text-blue-500 ml-1"
        >
          Login
        </button>
      </div>
    </div>
  );
}
