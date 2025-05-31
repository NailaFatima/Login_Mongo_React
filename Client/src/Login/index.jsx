import './index.css';
import React, { useState } from 'react';
import {useNavigate}  from "react-router-dom";
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});  
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/auth/signIn', {email, password})
    .then(result => {
      console.log(result.data.status);
      if(result.data.status === "success"){
        navigate("/podcast")
        console.log("Success");
      }
    })
  }

  return <div className="login-page">
      <div className="login-page__left">
        <div className="login-page__wave">
          <svg viewBox="0 0 800 600">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
            </defs>
            <path d="M0,300 Q200,200 400,300 T800,300 L800,600 L0,600 Z" fill="url(#waveGradient)" />
            <path d="M0,400 Q300,250 600,400 T800,350 L800,600 L0,600 Z" fill="rgba(255,255,255,0.05)" />
          </svg>
        </div>
        <div className="login-page__logo-container">
          <div className="login-page__logo">
            <span className="login-page__logo-text">Q</span>
          </div>
          <span className="login-page__brand">Ques.AI</span>
        </div>
        <div className="login-page__content">
          <h1 className="login-page__title">
            Your podcast
            <br />
            will no longer
            <br />
            be just a hobby.
          </h1>
          <p className="login-page__subtitle">
            Supercharge Your Distribution
            <br />
            using our AI assistant!
          </p>
        </div>
      </div>
      <div className="login-page__right">
        <div className="login-form">
          <div className="login-form__logo">
            <span className="login-form__logo-text">Q</span>
          </div>
          <div className="login-form__welcome">
            Welcome to
            <br />
            <span className="login-form__brand">Ques.AI</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-form__group">
              <input type="email" 
              placeholder="Email Address" 
              className="login-form__input" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="login-form__group">
              <div className="login-form__password-container">
                <input type={showPassword ? 'text' : 'password'} 
                placeholder="Password" 
                className="login-form__input" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="login-form__password-toggle">
                  {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
              </div>
            </div>
            <div className="login-form__options">
              <label className="login-form__remember">
                <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="login-form__checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="login-form__forgot">
                Forgot password?
              </a>
            </div>
            <button type="submit" className="login-form__submit">
              Login
            </button>
            <div className="login-form__divider">
              <div className="login-form__divider-line"></div>
              <span className="login-form__divider-text">or</span>
              <div className="login-form__divider-line"></div>
            </div>
            <button type="button" className="login-form__google">
              {/*<svg className="w-5 h-5" viewBox="0 0 24 24">*/}
              {/*  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />*/}
              {/*  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />*/}
              {/*  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />*/}
              {/*  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />*/}
              {/*</svg>*/}
              <FcGoogle />
              <span>Continue with Google</span>
            </button>


            <div className="login-form__signup">
              Don't have an account?{' '}
              <a href="#" className="login-form__signup-link">
                Create Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>;
}