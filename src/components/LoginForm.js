import React from 'react';
import './LoginForm.css';
import { Link, useNavigate, useMatch } from 'react-router-dom';
import loginlogo from "../assets/TNC_2020_Logo_Landscape_Group_white2.png";
import googlelogo from "../assets/G for google.png";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const navigate = useNavigate();
  const match = useMatch('/google-signin-success');

  React.useEffect(() => {
    if (match) {
      navigate('/sidebar');
    }
  }, [match, navigate]);

  const handleGoogleSignIn = () => {
    window.location.href = 'https://accounts.google.com';
  };

  return (
    <div className='login-background'>
      <div className='login-wrapper'>
        <form action="">
          <img src={loginlogo} alt="Logo" className="login-logo" />
          <h1 className="login-title">Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='login-icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required />
            <FaLock className='login-icon'/>
          </div>
          <div className="remember-forgot">
            <label className="remember-me"><input type="checkbox" />Remember me</label>
            <Link to="/forgotpassword">Forgot password?</Link>
          </div>

          <Link to="/sidebar">
          <button type="submit" className="login-button">
            <p className="login-button-text">Login</p>
          </button>
          </Link>

          <div className="login-divider">
          <p className="login-text">or</p>
          </div>

          <div>
            <button onClick={handleGoogleSignIn} className="google-signin-button">
              <img src={googlelogo} alt="Google Logo" className="google-logo" />
              <span>Sign in with Google</span>
            </button>
          </div>

          <div className="login-register-link">
            <p className="register-now">Don't have an account?&nbsp;
              <Link to="/signup">Register now</Link>
            </p>
            <h3 style={{ marginTop: '30px'}}><Link to="/">↩&nbsp;Back to Home</Link></h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;