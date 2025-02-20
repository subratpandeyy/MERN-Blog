import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Register() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const changeInputHandle = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="register">
      <div className="container register-container form-container">
        <h2>Sign Up</h2>
        <form className="form register-form">
          <p className="form-message">This is the invalid message</p>

          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandle}
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandle}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandle}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandle}
          />

          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>

        <small>
          Already have an account? <Link to={'/login'}>Login here</Link>
        </small>
      </div>
    </section>
  );
}

export function Login() {
  return (
    <section className="login">
      <div className="container login-container form-container">
        <h2>Login</h2>
        <form className="form login-form">
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit" className="btn btn-primary">Login</button>
        </form>

        <small>
          Don't have an account? <Link to={'/register'}>Sign up here</Link>
        </small>
      </div>
    </section>
  );
}
