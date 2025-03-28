import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login } from "../../features/Auth/authSlice";
import EmailSignIn from "./EmailSignIn";

import './index.css'
import { useNavigate } from "react-router-dom";

const user1 = 
  { username: "Akhil", password: "Akhil@123" }

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((globalState) => globalState.authSlice.isAuthenticated);
  const navigate = useNavigate()
  useEffect(() => {
    if(isAuthenticated){
     navigate("/dashboard")
    }
  
  }, [isAuthenticated])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({username, password}))
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form-card">
        <div className="input-container">
          <label htmlFor="username" className="label">USERNAME</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="input"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="password" className="label">PASSWORD</label>
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* {errMsg !== null ? <p className="err-msg">{errMsg}</p> : null} */}
        <button type="submit"  className="login-btn" >Login</button>
        <p> -----------Or----------</p>
        <EmailSignIn  />
      </form>
      <div className="help-text">
        <p>Try these credentials</p>
        <p>username: {user1.username}: password: {user1.password}</p>
      </div>
    </div>
  );
}

export default Login;
