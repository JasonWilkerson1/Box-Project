import React, { useState } from 'react';
import './style.css'; // Import your local CSS file here

import { login } from './api/login';
import { useNavigate } from 'react-router-dom';

const MyLogin = () => {
  const [loginActive, setLoginActive] = useState(true);

  let navigate = useNavigate();


  // Add a state to manage the username and password fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    login(email, password)

    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-wrapper">
      <div className="wrapper">
        {/* Logo */}
        <div className="logo">
          <img src="/BoxProject.jpg" alt="Company Logo" />
        </div>

        <div className="title-text">
          <div className={`title ${loginActive ? 'login' : 'signup'}`}></div>
          <div className={`title ${loginActive ? 'signup' : 'login'}`}></div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked={loginActive} readOnly />
            <label
              htmlFor={loginActive ? 'signup' : 'login'}
              className={`slide ${loginActive ? 'login' : 'signup'}`}
            >
              {loginActive ? 'Login' : 'Signup'}
            </label>
            <div className="slider-tab"></div>
          </div>
          <div className="form-inner">
            <form onSubmit={handleSubmit} className={loginActive ? 'login' : 'signup'}>
              <div className="field">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="field btn">
                {/* Updated Login Button */}
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLogin;