import React, { useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        {/* Header */}
        <div className="bg-teal-700 text-white text-center py-6">
          <div className="text-2xl mb-2">🔑</div>
          <h2 className="text-xl font-semibold">Forgot Password</h2>
        </div>

        {/* Form Content */}
        <div className="p-8">
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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            {/* Send Reset Link Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
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
              <button
                type="button"
                onClick={() => console.log("Back to login")}
                className="text-sm text-orange-500 hover:text-orange-600 font-medium"
              >
                ← Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React, { useState, useEffect } from 'react';

// export default function OtpVerification() {
//   const [otp, setOtp] = useState('');
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [timer, setTimer] = useState(60);
//   const [canResend, setCanResend] = useState(false);

//   const email = "demo@example.com"; // यदि dynamic बनाना हो तो props से pass करें

//   useEffect(() => {
//     startTimer();
//   }, []);

//   const handleInputChange = (e) => {
//     const otpValue = e.target.value.replace(/\D/g, '').slice(0, 6);
//     setOtp(otpValue);
//     if (errors.otp) {
//       setErrors(prev => ({ ...prev, otp: '' }));
//     }
//   };

//   const handleOtpSubmit = () => {
//     const newErrors = {};
//     if (!otp.trim()) {
//       newErrors.otp = 'OTP is required';
//     } else if (otp.length !== 6) {
//       newErrors.otp = 'Please enter complete 6-digit OTP';
//     }
//     setErrors(newErrors);

//     if (Object.keys(newErrors).length === 0) {
//       setIsLoading(true);
//       setTimeout(() => {
//         setIsLoading(false);
//         setIsSubmitted(true);
//         console.log('OTP verified:', otp);
//       }, 1500);
//     }
//   };

//   const startTimer = () => {
//     setTimer(60);
//     setCanResend(false);
//     const interval = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(interval);
//           setCanResend(true);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   };

//   const handleResendOtp = () => {
//     if (!canResend) return;
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       startTimer();
//       alert('New OTP sent to your email!');
//       console.log('OTP resent to:', email);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
//         {/* Header */}
//         <div className="bg-teal-700 text-white text-center py-6">
//           <div className="text-2xl mb-2">🔢</div>
//           <h2 className="text-xl font-semibold">
//             {isSubmitted ? 'Success' : 'Enter OTP'}
//           </h2>
//         </div>

//         <div className="p-8">
//           {isSubmitted ? (
//             <div className="text-center space-y-4">
//               <p className="text-green-600 font-medium text-lg">✅ OTP Verified Successfully!</p>
//               <p className="text-gray-600">You can now proceed to reset your password.</p>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {/* Email info */}
//               <div className="text-center">
//                 <p className="text-gray-600 text-sm mb-2">We’ve sent a 6-digit verification code to:</p>
//                 <p className="text-teal-700 font-semibold text-sm">{email}</p>
//               </div>

//               {/* OTP Input */}
//               <div>
//                 <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
//                   Verification Code <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="otp"
//                   name="otp"
//                   value={otp}
//                   onChange={handleInputChange}
//                   maxLength="6"
//                   required
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 text-center text-lg font-mono tracking-widest ${
//                     errors.otp ? 'border-red-500' : 'border-gray-300'
//                   }`}
//                   placeholder="000000"
//                 />
//                 {errors.otp && <p className="mt-1 text-sm text-red-500">{errors.otp}</p>}
//               </div>

//               {/* Timer and Resend */}
//               <div className="text-center">
//                 {timer > 0 ? (
//                   <p className="text-gray-600 text-sm">
//                     Resend OTP in <span className="font-semibold text-teal-700">{timer}s</span>
//                   </p>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={handleResendOtp}
//                     disabled={isLoading}
//                     className="text-sm text-orange-500 hover:text-orange-600 font-medium disabled:text-gray-400"
//                   >
//                     {isLoading ? 'Sending...' : 'Resend OTP'}
//                   </button>
//                 )}
//               </div>

//               {/* Verify Button */}
//               <button
//                 type="button"
//                 onClick={handleOtpSubmit}
//                 disabled={isLoading}
//                 className="w-full bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white font-semibold py-3 px-4 rounded-lg flex justify-center"
//               >
//                 {isLoading ? (
//                   <>
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Verifying...
//                   </>
//                 ) : (
//                   'Verify OTP'
//                 )}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
