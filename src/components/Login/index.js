import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { login } from "../../features/Auth/authSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const data = useSelector((state) => state.auth);
  console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({username, password}))
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>USERNAME</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>USERNAME</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit"  >Login</button>
      </form>
      <div className="help-text">
        <p>Try these credentials</p>
        <p>username: user1 . userPassword: password</p>
      </div>
    </div>
  );
}

export default Login;
