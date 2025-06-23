import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
    rememberMe: false
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!loginData.login.trim()) newErrors.login = 'Login is required';
    if (!loginData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Login attempt:', loginData);
      alert('Login successful! Check console for data.');
    }
  };

  return (
    <div className="min-h-screen bg-white  from-green-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        <div className="bg-blue-350 text-black text-center py-2">
          <div className="text-xl mb-2">🔒</div>
          <h2 className="text-xl font-semibold">Log in</h2>
        </div>

        <div className="p-5">
          <div className="space-y-6">
            <div>
              <label htmlFor="login" className="block text-sm font-medium text-gray-700 mb-2">
                Login <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="login"
                name="login"
                value={loginData.login}
                onChange={handleInputChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors ${errors.login ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Enter your username or email"
              />
              {errors.login && <p className="mt-1 text-sm text-red-500">{errors.login}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors pr-12 ${errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <Link to="/passwordreset">
                <button
                  type="button"
                  className="text-sm text-green-500 hover:text-green-700 font-medium transition-colors"
                >
                  Forgot password?
                </button>
              </Link>
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-300 hover:bg-blue-500 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              LOGIN
            </button>

            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register">
                  <button
                    type="button"
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Register
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}