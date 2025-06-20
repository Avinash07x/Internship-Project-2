import React, { useState } from 'react';

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
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    
    if (!loginData.login.trim()) {
      newErrors.login = 'Login is required';
    }
    
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Login attempt:', loginData);
      // Handle login logic here
      alert('Login successful! Check console for data.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        {/* Header */}
        <div className="bg-teal-700 text-white text-center py-6">
          <div className="text-2xl mb-2">🔒</div>
          <h2 className="text-xl font-semibold">Log in</h2>
        </div>

        {/* Form Content */}
        <div className="p-8">
          <div className="space-y-6">
            {/* Login Field */}
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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
                  errors.login ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your username or email"
              />
              {errors.login && <p className="mt-1 text-sm text-red-500">{errors.login}</p>}
            </div>

            {/* Password Field */}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors pr-12 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
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

            {/* Forgot Password & Remember Me */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              LOGIN
            </button>

            {/* Register Link */}
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Register
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from 'react';

// export default function Login() {
//   const [activeTab, setActiveTab] = useState('login');
//   const [loginData, setLoginData] = useState({
//     login: '',
//     password: '',
//     rememberMe: false
//   });
  
//   const [registerData, setRegisterData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleLoginChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setLoginData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleRegisterChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setRegisterData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validatePassword = (password) => {
//     return password.length >= 8;
//   };

//   const handleLoginSubmit = () => {
//     const newErrors = {};
    
//     if (!loginData.login.trim()) {
//       newErrors.login = 'Login is required';
//     }
    
//     if (!loginData.password) {
//       newErrors.password = 'Password is required';
//     }
    
//     setErrors(newErrors);
    
//     if (Object.keys(newErrors).length === 0) {
//       console.log('Login attempt:', loginData);
//       // Handle login logic here
//     }
//   };

//   const handleRegisterSubmit = () => {
//     const newErrors = {};
    
//     if (!registerData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     }
    
//     if (!registerData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     }
    
//     if (!registerData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(registerData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }
    
//     if (!registerData.username.trim()) {
//       newErrors.username = 'Username is required';
//     } else if (registerData.username.length < 3) {
//       newErrors.username = 'Username must be at least 3 characters';
//     }
    
//     if (!registerData.password) {
//       newErrors.password = 'Password is required';
//     } else if (!validatePassword(registerData.password)) {
//       newErrors.password = 'Password must be at least 8 characters';
//     }
    
//     if (!registerData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (registerData.password !== registerData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }
    
//     if (!registerData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to the terms and conditions';
//     }
    
//     setErrors(newErrors);
    
//     if (Object.keys(newErrors).length === 0) {
//       console.log('Registration attempt:', registerData);
//       // Handle registration logic here
//     }
//   };

//   const handleClose = () => {
//     console.log('Modal closed');
//     // Handle modal close
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
//         {/* Close button */}
//         <button 
//           onClick={handleClose}
//           className="absolute top-4 right-4 z-10 bg-orange-300 hover:bg-orange-400 text-white w-8 h-8 rounded flex items-center justify-center transition-colors"
//         >
//           ✕
//         </button>

//         {/* Tabs */}
//         <div className="flex">
//           <button
//             onClick={() => setActiveTab('login')}
//             className={`flex-1 py-4 px-6 text-center font-medium transition-colors border-b-2 ${
//               activeTab === 'login'
//                 ? 'text-teal-700 border-orange-400 bg-white'
//                 : 'text-gray-500 border-transparent bg-gray-50 hover:text-gray-700'
//             }`}
//           >
//             🔒 Login
//           </button>
//           <button
//             onClick={() => setActiveTab('register')}
//             className={`flex-1 py-4 px-6 text-center font-medium transition-colors border-b-2 ${
//               activeTab === 'register'
//                 ? 'text-teal-700 border-orange-400 bg-white'
//                 : 'text-gray-500 border-transparent bg-gray-50 hover:text-gray-700'
//             }`}
//           >
//             👤 Register
//           </button>
//         </div>

//         {/* Form Content */}
//         <div className="p-8">
//           {activeTab === 'login' ? (
//             <div className="space-y-6">
//               {/* Login Field */}
//               <div>
//                 <label htmlFor="login" className="block text-sm font-medium text-gray-700 mb-2">
//                   Login <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="login"
//                   name="login"
//                   value={loginData.login}
//                   onChange={handleLoginChange}
//                   required
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
//                     errors.login ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter your username or email"
//                 />
//                 {errors.login && <p className="mt-1 text-sm text-red-500">{errors.login}</p>}
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     name="password"
//                     value={loginData.password}
//                     onChange={handleLoginChange}
//                     required
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors pr-12 ${
//                       errors.password ? 'border-red-500' : 'border-gray-300'
//                     }`}
//                     placeholder="Enter your password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   >
//                     {showPassword ? '👁️' : '👁️‍🗨️'}
//                   </button>
//                 </div>
//                 {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
//               </div>

//               {/* Forgot Password & Remember Me */}
//               <div className="flex items-center justify-between">
//                 <button
//                   type="button"
//                   className="text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
//                 >
//                   Forgot password?
//                 </button>
//               </div>

//               {/* Login Button */}
//               <button
//                 type="button"
//                 onClick={handleLoginSubmit}
//                 className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//               >
//                 LOGIN
//               </button>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {/* First Name & Last Name */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
//                     First Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={registerData.firstName}
//                     onChange={handleRegisterChange}
//                     required
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
//                       errors.firstName ? 'border-red-500' : 'border-gray-300'
//                     }`}
//                     placeholder="First name"
//                   />
//                   {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
//                 </div>
//                 <div>
//                   <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
//                     Last Name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={registerData.lastName}
//                     onChange={handleRegisterChange}
//                     required
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
//                       errors.lastName ? 'border-red-500' : 'border-gray-300'
//                     }`}
//                     placeholder="Last name"
//                   />
//                   {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
//                 </div>
//               </div>

//               {/* Email */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={registerData.email}
//                   onChange={handleRegisterChange}
//                   required
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
//                     errors.email ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="Enter your email address"
//                 />
//                 {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//               </div>

//               {/* Username */}
//               <div>
//                 <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
//                   Username <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={registerData.username}
//                   onChange={handleRegisterChange}
//                   required
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors ${
//                     errors.username ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="Choose a username"
//                 />
//                 {errors.username && <p className="mt-1 text-sm text-red-500">{errors.username}</p>}
//               </div>

//               {/* Password */}
//               <div>
//                 <label htmlFor="registerPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="registerPassword"
//                     name="password"
//                     value={registerData.password}
//                     onChange={handleRegisterChange}
//                     required
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors pr-12 ${
//                       errors.password ? 'border-red-500' : 'border-gray-300'
//                     }`}
//                     placeholder="Create a password (min 8 characters)"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   >
//                     {showPassword ? '👁️' : '👁️‍🗨️'}
//                   </button>
//                 </div>
//                 {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
//               </div>

//               {/* Confirm Password */}
//               <div>
//                 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
//                   Confirm Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={registerData.confirmPassword}
//                     onChange={handleRegisterChange}
//                     required
//                     className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors pr-12 ${
//                       errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
//                     }`}
//                     placeholder="Confirm your password"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                   >
//                     {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
//                   </button>
//                 </div>
//                 {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
//               </div>

//               {/* Terms Agreement */}
//               <div>
//                 <label className="flex items-start">
//                   <input
//                     type="checkbox"
//                     name="agreeToTerms"
//                     checked={registerData.agreeToTerms}
//                     onChange={handleRegisterChange}
//                     className={`w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 mt-1 ${
//                       errors.agreeToTerms ? 'border-red-500' : ''
//                     }`}
//                   />
//                   <span className="ml-2 text-sm text-gray-600">
//                     I agree to the{' '}
//                     <button type="button" className="text-teal-600 hover:text-teal-700 underline">
//                       Terms of Service
//                     </button>
//                     {' '}and{' '}
//                     <button type="button" className="text-teal-600 hover:text-teal-700 underline">
//                       Privacy Policy
//                     </button>
//                     {' '}<span className="text-red-500">*</span>
//                   </span>
//                 </label>
//                 {errors.agreeToTerms && <p className="mt-1 text-sm text-red-500">{errors.agreeToTerms}</p>}
//               </div>

//               {/* Register Button */}
//               <button
//                 type="button"
//                 onClick={handleRegisterSubmit}
//                 className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
//               >
//                 CREATE ACCOUNT
//               </button>

//               {/* Login Link */}
//               <div className="text-center">
//                 <span className="text-sm text-gray-600">
//                   Already have an account?{' '}
//                   <button
//                     type="button"
//                     onClick={() => setActiveTab('login')}
//                     className="text-teal-600 hover:text-teal-700 font-medium"
//                   >
//                     Log in
//                   </button>
//                 </span>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }