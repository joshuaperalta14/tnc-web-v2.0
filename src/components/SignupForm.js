import React, { useState } from 'react';
import './SignupForm.css';
import { Link } from 'react-router-dom';

function SignupForm() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.userName.trim() === '' || formData.email.trim() === '' || formData.password === '' || formData.confirmPassword === '') {
      alert('Please fill in all required fields.');
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    console.log('Sending form data to server:', formData);
    alert('Registration successful!');
  };

  return (
    <div className="signup-background">
      <div className="signup-wrapper">
        <h1>Sign Up</h1>
        <h3>Create an account</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="userName" className="signup-label">Username:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your username"
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-box">
            <label htmlFor="email" className="signup-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your e-mail address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="phone" className="signup-label">Phone Number:</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="password" className="signup-label">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label htmlFor="confirmPassword" className="signup-label">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-type your password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Sign up</button>

          <div className="signup-register-link">
            <p>
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;