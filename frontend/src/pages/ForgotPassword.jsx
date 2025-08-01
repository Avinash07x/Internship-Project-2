import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);

      // Simulate OTP Send API
      setTimeout(() => {
        setIsLoading(false);
        setOtpSent(true); // move to OTP verification page or section
        console.log("OTP sent to:", email);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-white from-green-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        {/* Header */}
        <div className="bg-blue-350 text-black text-center py-2">
          <div className="text-xl mb-2">🔑</div>
          <h2 className="text-xl font-semibold">Forgot Password</h2>
        </div>

        {/* Form Content */}
        <div className="p-5">
          <div className="space-y-6">
            {/* Instructions */}
            <div className="text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                Enter your email address and we'll send you a verification code.
              </p>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Send OTP Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-blue-300 hover:bg-blue-500 disabled:bg-blue-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                'Send OTP'
              )}
            </button>

            {/* Back to Login Link */}
            <div className="text-center">
              <Link to="/login">
                <button
                  type="button"
                  onClick={() => console.log("Back to login")}
                  className="text-sm text-green-600 hover:text-green-700 font-medium"
                >
                  ← Back to Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
