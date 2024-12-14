import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import img from "../../assets/auth/signin/img.png"
import btn_img from "../../assets/auth/signin/login.png"
import google_icon from "../../assets/auth/signin/google-removebg-preview 1.svg"
import eye_cross from "../../assets/auth/eye_cross.png"
import eye from "../../assets/auth/eye.png"
import axios from '../api_resources/axios';
import {signInWithGoogle} from "../../utils/auth-firebase-logic/signInWithGoogle"
import { getSessionStorageWithExpiry, setSessionStorageWithExpiry } from '../../utils/session-storage/sessionStorage';

export default function SignIn({ setIsLogin }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError,setServerError] = useState(null)


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => setIsPwdVisible((prev) => !prev);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email address.';
    if (!formData.password.trim()) newErrors.password = 'Password is required.';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    setServerError(null)
    e.preventDefault();
    console.log("submit")
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await axios.post("/api/user/login",
          formData
        )
        console.log(response,"res")
        setSessionStorageWithExpiry("userToken", response.data.user.token, 24 * 60 * 60 * 1000);

        //to get the token
        const token = await getSessionStorageWithExpiry("userToken")


        if (response.status===200) {
          
          console.log("logged in",response.data.user.token)
          console.log("cookie",document.cookie)
      
          // router.push(`/dashboard/${response.data.user.id}`);
        } else {
          alert(data.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        console.log(error,"error")
        setServerError(error?.response?.data?.message)
        alert('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(()=>{
    
  },[])

  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-7">
        <form
          className="mt-6 space-y-4 w-full max-w-md"
          onSubmit={handleSubmit}
          noValidate
        >
          <h1 className="text-3xl font-semibold text-left">Welcome Back</h1>
          <p className="mt-2 pb-6 text-gray-600 text-left">
            Please enter your details here
          </p>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              aria-invalid={errors.email ? 'true' : 'false'}
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
  <label className="block text-sm font-medium text-gray-700">
    Password <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <input
      type={isPwdVisible ? 'text' : 'password'}
      name="password"
      aria-invalid={errors.password ? 'true' : 'false'}
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter your password"
      className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none ${
        errors.password ? 'border-red-500' : 'border-gray-300'
      }`}
    />
              {serverError && <p className='text-red-600 text-sm'>{serverError}</p>}

    <span
      className="absolute top-3 right-3 cursor-pointer"
      onClick={togglePasswordVisibility}
      aria-label="Toggle password visibility"
    >
       <span className=" relative h-6 w-6" style={{display:"block"}}>
          <Image
            src={isPwdVisible ? eye : eye_cross}
            alt="eye_cross"
            fill
            className="object-cover"
          />
        </span>
    </span>
  </div>
  {errors.password && (
    <p className="mt-1 text-sm text-red-500">{errors.password}</p>
  )}
</div>


          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-600">Remember me</label>
            </div>
            <div>
              <a href="/forgot-password" className="text-sm text-[#9445c4]">
                Forgot your password?
              </a>
            </div>
          </div>

          

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`relative w-full px-4 py-2 text-white rounded-xl ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#5a6acf]'
            } hover:bg-[#212d7b]`}

          >

            <div className="absolute h-10 w-full top-0 -left-[1.5px] z-10">
              <Image
                src={btn_img}
                alt="Signin Background"
                fill
                className="object-cover"
              />
            </div>
            <span className='absolute z-20'>
            
            </span>
            {loading ? 'Processing...' : 'Sign In'}
          </button>

          {/* Divider */}
          <div className="flex items-center w-full mb-3">
            <span className="h-[2px] w-full bg-gray-800"></span>
            <span className="mx-2 text-gray-500  text-sm md:text-sm text-nowrap">
              Or, Login with
            </span>
            <span className="h-[2px] w-full bg-gray-800"></span>
          </div>

          {/* Google Button */}
<button
  type="button" 
  onClick={async (e) => {
    e.preventDefault(); 
    try {
      await signInWithGoogle(); 
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  }}
  className="flex items-center justify-center w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md hover:bg-gray-200"
>
  <span className="relative h-6 w-6">
    <Image
      src={google_icon}
      alt="Google icon"
      fill
      className="object-cover"
    />
  </span>
  <span className="text-sm ml-1">Login with Google</span>
</button>


          {/* Toggle Login */}
          <div className="flex items-center justify-center w-full px-4 py-2 mt-2">
            <span className="text-sm">
              Don't have an account?{' '}
              <span
                className="text-sm underline text-[#9847cb] cursor-pointer"
                onClick={() => setIsLogin(false)}
              >
                Register here
              </span>
            </span>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src={img}
          alt="Signin Background"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
