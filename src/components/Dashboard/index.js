import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import { logout } from "../../features/Auth/authSlice";
import Login from "../Login";
import './index.css'

function Dashboard(props) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const {user, isAuthenticated} = useSelector((globalState) => globalState.authSlice);
  console.log(user);
  const handleLogout = () => {
    dispatch(logout());
    return <Navigate to='/login' />
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.username}</h2>
      <p>you have successfully logged in.</p>
      <button onClick={handleLogout} type="button" className="logout-btn">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
