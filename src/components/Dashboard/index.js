import {  useDispatch, useSelector } from "react-redux";
import { Navigate, replace } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { logout } from "../../features/Auth/authSlice";
import './index.css'
import { Box, Grid } from "@mui/material";
import DashboardCard from "../DashboardCard/DashboardCard";

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
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
        <DashboardCard />         
        </Grid>
        <Grid size={12}>
          <DashboardCard />
        </Grid>
        <Grid size={12}>
        <DashboardCard />
        </Grid>
        <Grid size={12}>
        <DashboardCard />
        </Grid>
      </Grid>
    </Box>
      
    </div>
  );
}

export default Dashboard;
