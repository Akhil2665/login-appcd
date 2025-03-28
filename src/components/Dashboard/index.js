import {  useDispatch, useSelector } from "react-redux";
import { Navigate, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { logout } from "../../features/Auth/authSlice";
import './index.css'

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, isAuthenticated} = useSelector((globalState) => globalState.authSlice);
  console.log(user);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", {replace: true});
  };
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.username || "User"}</h2>
      <p>you have successfully logged in.</p>
      <button  type="button" className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
      
    </div>
  );
}

export default Dashboard;
