import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, LogIn } from 'lucide-react';
import './login.css';
import Navbar from '../components/navbar';
//import { supabase } from './supabaseClient';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);
  //  async function signInUser(username, password) {
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     username,
  //     password,
  //   });
  
  //   if (error) {
  //     console.error('Error signing in:', error.message);
  //   } else {
  //     console.log('User signed in:', data);
  //     // data.session contains session details such as access token, user info, etc.
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    console.log('Login attempt with:', { username, password });
    //signInUser(username,password);
    navigate('/Home');
  };

  return (
    <div>
        <Navbar />
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <LogIn className="logo-icon" />
          </div>
          <h2 className="login-title">Welcome back</h2>
          <p className="login-subtitle">Please sign in to your account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
            username
            </label>
            <div className="input-container">
              <Mail className="input-icon" />
              <input
                id="username"
                name="username"
                type="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-input"
                placeholder="John123"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-container">
              <Lock className="input-icon" />
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="checkbox"
              />
              <label htmlFor="remember-me" className="form-label">
                Remember me
              </label>
            </div>

            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </div>

          <button type="submit" className="submit-button">
            Sign in
          </button>
        </form>

        <div className="signup-container">
          <p className="signup-text">
            Don't have an account?
            <a href="#" className="signup-link">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div></div>
  );
};

export default Login;