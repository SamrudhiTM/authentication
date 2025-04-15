// import React, { useState } from 'react';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmitSignup = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior
//     try {
//       const response = await fetch('http://localhost:5000/auth/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password, name }),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) { // Check if the response status is not 2xx
//         throw new Error(data.message || 'Signup failed'); // Display the specific error message
//       }
  
//       if (data.token) {
//         localStorage.setItem('token', data.token);
//         window.location.href = '/dashboard'; // Redirect to dashboard after signup
//       }
//     } catch (error) {
//       console.error('Error during signup:', error); // Log the error for debugging
//       alert(error.message); // Show the specific error message from the backend
//     }
//   };
  
//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmitSignup}> {/* Ensure the form is being submitted */}
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Sign Up</button> {/* This should trigger the form submission */}
//       </form>

//       <h2>Or</h2>
//       <div>
//         <a href="http://localhost:5000/auth/google">
//           <button>Sign Up with Google</button>
//         </a>
//         <a href="http://localhost:5000/auth/facebook">
//           <button>Sign Up with Facebook</button>
//         </a>
//         <a href="http://localhost:5000/auth/apple">
//           <button>Sign Up with Apple</button>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
"use client"

import { useState } from "react"
import "./signup.css"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmitSignup = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Signup failed")
      }

      if (data.token) {
        localStorage.setItem("token", data.token)
        window.location.href = "/dashboard"
      }
    } catch (error) {
      console.error("Error during signup:", error)
      setError(error.message || "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="card-header">
          <h2 className="card-title">Create an account</h2>
          <p className="card-description">Enter your information to get started</p>
        </div>

        <div className="card-content">
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmitSignup} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          <div className="divider">
            <span>Or continue with</span>
          </div>

          <div className="social-buttons">
            <a href="http://localhost:5000/auth/google" className="social-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Google
            </a>
            <a href="http://localhost:5000/auth/facebook" className="social-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </a>
            <a href="http://localhost:5000/auth/apple" className="social-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                <path d="M10 2c1 .5 2 2 2 5" />
              </svg>
              Apple
            </a>
          </div>
        </div>

        <div className="card-footer">
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
