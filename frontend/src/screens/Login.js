import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [isError, setIsError] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false); // Declare isLoginSuccess state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const login = () => {
    axios.post("http://localhost:5000/api/login", user)
      .then((res) => {
        alert(res.data.message);
        setLoginUser(res.data.user);
        setIsLoginSuccess(true); // Set isLoginSuccess to true on successful login
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  };

  useEffect(() => {
    if (isLoginSuccess) {
      history.push("/"); // Redirect to home page on successful login
    }
  }, [isLoginSuccess, history])

  return (
    <>
      <div className="login-container">
        <div className="login-title">Login To Your Account</div>
        <div className="login-form">
          <form autoComplete="off">
            <div className="form-field">
              <div className="flex relative">
                <input
                  type="text"
                  id="sign-in-email"
                  className="input-field"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div className="form-field">
              <div className="flex relative">
                <input
                  type="password"
                  id="sign-in-password"
                  className="input-field"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Your password"
                />
              </div>
            </div>
            <div className="form-field">
              <button type="button" className="login-button" onClick={login}>
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="register-link">
          <a href="/register" onClick={() => history.push("/register")}>
            You don't have an account?
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
