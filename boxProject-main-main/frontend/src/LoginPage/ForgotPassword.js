import React, { useState } from 'react';
import './style.css'; // Import your local CSS file here

const Forgot = () => {
  // Add a state to manage the email field
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would send a request to your server to initiate the password reset process
    console.log("Requesting password reset for:", email);

    // Reset the email field
    setEmail('');
  };

  return (
    <div className="login-wrapper">
      <div className="wrapper">
      <div className="logo">
          <img src="/BoxProject.jpg" alt="Company Logo" />
        </div>
        <div className="title-text">
          <div className="title">Forgot Password</div>
        </div>
        <div className="form-container">
          <div className="form-inner">
            <form onSubmit={handleSubmit} className="forgot">
              {/* Email Field */}
              <div className="field">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="field btn">
                <div className="btn-layer"></div>
                <button type="submit">Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;





