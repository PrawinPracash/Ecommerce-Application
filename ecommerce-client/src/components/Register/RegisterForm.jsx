import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import axios from "axios";
import './index.css';


function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage]= useState("");
  const navigate= useNavigate();
  function handleNameChange(e) {
    setName(e.target.value);
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
      name: name,
      email: email,
      password: password,
    };
    try{
        const res = await axios.post(`${config.backendAPI}/api/v1/register`, data);
        console.log(res.data);
        navigate('/login')
        
    }catch(err){
        setErrorMessage(err.response.data.message);
        console.log(err.response.data.message)
    }
           
  }

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
          src="https://www.tforce.com.sa/wp-content/uploads/2020/08/Ecommerce-Logo-Vector.png"
          className="login-website-logo-desktop-image"
          alt="website logo"
        />
        { errorMessage && <div className="error-message">
          {errorMessage}
          </div>}
        
        <div className="input-container">
          <label className="input-label" htmlFor="name">
            Name
          </label>
          <input    
            type="text"
            id="name"
            className="email-input-filed"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
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
            required={true}
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
        <button type="submit" className="login-button" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
export default RegisterForm;
