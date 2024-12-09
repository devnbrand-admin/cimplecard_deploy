import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import img from "./../../assets/auth/signup/image.png";
import eye_cross from "../../assets/auth/eye_cross.png"
import google_icon from "../../assets/auth/signin/google-removebg-preview 1.svg"
import eye from "../../assets/auth/eye.png"



export default function SignUp({ setIsLogin }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [isPwdVisible, setIsPwdVisible] = useState(false)
  const [isConfirmPwdVisible, setIsConfirmPwdVisible] = useState(false)


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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Invalid email address.';
    if (!formData.password.trim()) newErrors.password = 'Password is required.';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch('/api/user/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (data.success) {
          router.push('/dashboard'); // Navigate to dashboard on successful signup
        } else {
          alert(data.message); // Show an error message if signup fails
        }
      } catch (error) {
        alert('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-7">

        <form
          className="mt-6 space-y-4 w-full max-w-md"
          onSubmit={handleSubmit}
          noValidate
        >
          <h1 className="text-3xl font-semibold text-left">Create an Account</h1>
          <p className="mt-2 pb-3 text-gray-600 text-left">
            Fill up the information to start the journey with us
          </p>
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              aria-invalid={errors.name ? 'true' : 'false'}
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

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
                type={isPwdVisible ? "text" : "password"}
                name="password"
                aria-invalid={errors.password ? "true" : "false"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none ${errors.password ? "border-red-500" : "border-gray-300"
                  }`}
              />
              <span
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setIsPwdVisible(!isPwdVisible)}
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

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={isConfirmPwdVisible ? "text" : "password"}
                name="confirmPassword"
                aria-invalid={errors.confirmPassword ? "true" : "false"}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full px-3 py-2 mt-1 border rounded-md focus:outline-none ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
              />
              <span
                className="absolute top-3 right-3 cursor-pointer"
                onClick={() => setIsConfirmPwdVisible(!isConfirmPwdVisible)}
              >
                <span className=" relative h-6 w-6" style={{display:"block"}}>
          <Image
            src={isConfirmPwdVisible ? eye : eye_cross}
            alt="eye_cross"
            fill
            className="object-cover"
          />
        </span>
              </span>
            </div>

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-600">
              By creating an account, you agree to the{' '}
              <a href="#" className="text-[#9847cb] underline">
                terms of use
              </a>{' '}
              and our{' '}
              <a href="#" className="text-[#9847cb] underline">
                privacy policy
              </a>
              .
            </label>
          </div>
          {errors.terms && (
            <p className="mt-1 text-sm text-red-500">{errors.terms}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-4 py-2 text-white rounded-md ${loading ? 'bg-gray-500' : 'bg-[#9847cb]'
              } hover:bg-[#69308d]`}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          {/* Divider */}
          <div className="flex items-center w-full mb-3">
            <span className="h-[2px] w-full bg-gray-800"></span>
            <span className="mx-2 text-gray-500 font-normal text-sm md:text-base text-nowrap">
              Or, Signup with
            </span>
            <span className="h-[2px] w-full bg-gray-800"></span>
          </div>

          {/* Google Button */}
          <button className="flex items-center justify-center w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-md hover:bg-gray-200">
          <span className="relative h-6 w-6"> 
             <Image
                src={google_icon}
                alt="Google icon"
                fill
                className="object-cover "
              /></span>            <span className=" ml-2 text-sm">Sign up with Google</span>
          </button>

          {/* Toggle Login */}
          <div className="flex items-center justify-center w-full px-4 py-2 mt-2">
            <span className="text-sm">
              Already have an account?{' '}
              <span
                className="text-sm underline text-[#9847cb] cursor-pointer"
                onClick={() => setIsLogin(true)}
              >
                Log in
              </span>
            </span>
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image src={img} alt="Signup Background" fill className="object-cover" />
      </div>
    </div>
  );
}
