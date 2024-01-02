import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import config from "../../config";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./index.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    console.log("here");
    return <Navigate to="/" />;
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    console.log(data);
    let res = null;
    try {
      res = await axios.post(`${config.backendAPI}/api/v1/login`, data);
      localStorage.setItem("token", res.data.data);
      setIsLoading(false)
      navigate("/");
    } catch (err) {
      setIsLoading(false)
      setErrorMessage(err.response.data.message);
    }
  }

  function spinner() {
    return (
      <div className="container">
      <Box sx={{ color: "white" }}>
        <CircularProgress />
      </Box>
      </div>
    );
  }
  console.log(isLoading)

  return (
    <div className="login-form-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="login-website-logo-mobile-image"
        alt="website logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        className="login-image"
        alt="website login"
      />
      <form className="form-container">
        <img
          src="https://drive.google.com/uc?=view=export&id=1TXDxk_NafVxW4ckRlcna0sw7zcX4pca8"
          className="login-website-logo-desktop-image"
          alt="website logo"
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="input-container">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="email-input-filed"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-filed"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className={`login-button ${ isLoading ? "login-bg-spinner" : "login-bg-spinner2"}`}  onClick={handleSubmit}>
          {isLoading ? spinner() : "Login" }
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
