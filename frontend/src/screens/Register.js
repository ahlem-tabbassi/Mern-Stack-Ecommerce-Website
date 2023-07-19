import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const register = () => {
    axios.post('http://localhost:5000/api/register', user)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to register user');
      });
  };

  return (
    <>
      <div className="register-container">
        <div className="register-title">Create An Account</div>
        
        <div className="register-form">
          <form>
            <div className="form-field">
              
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>
            <div className="form-field">
              
              <input
                type="text"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="form-field">
              
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            
            <div className="form-field">
              <button type="submit" onClick={register}>
                Register
              </button>
            </div>
            <span className="register-text">
          Already have an account? <a href="/login">Sign in</a>
        </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

