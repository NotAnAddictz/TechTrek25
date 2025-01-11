import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, UserPlus } from 'lucide-react';
import './register.css';
import Navbar from '../components/navbar';
import { createClient } from '@supabase/supabase-js';

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [companyid, setCompanyid] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Register attempt with:', { username, password, companyid });
        //registerUser(username, password, companyid);
        navigate('/Home');
    };

    return (
        <div>
            <Navbar />
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <img 
                            src="/carbon.png"  
                            style={{ width: '80px', height: 'auto' }} 
                        />         
                        <h2 className="login-title">Create an account</h2>
                        <p className="login-subtitle">Please fill in the details to register</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Company id
                            </label>
                            <div className="input-container">
                                <Mail className="input-icon" />
                                <input
                                    id="companyid"
                                    name="companyid"
                                    type="companyid"
                                    required
                                    value={companyid}
                                    onChange={(e) => setCompanyid(e.target.value)}
                                    className="form-input"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <div className="input-container">
                                <UserPlus className="input-icon" />
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
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

                        <button type="submit" className="submit-button">
                            Register
                        </button>
                    </form>

                    <div className="signup-container">
                        <p className="signup-text">
                            Already have an account?
                            <a href="#" className="signup-link"           onClick={() => navigate('/')}
                            >
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

