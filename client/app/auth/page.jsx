'use client';
import { useState } from 'react';
import Login from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Manage login/signup toggle

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
    //   <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
    <div>
      <div className=''>
        

        {isLogin ? <Login setIsLogin={setIsLogin} /> : <SignUp setIsLogin={setIsLogin} />}
      </div>
    </div>
  );
}
