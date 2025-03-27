import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute() {
    // console.log(children, "children")
    const isAuthenticated = useSelector((globalState) => globalState.authSlice.isAuthenticated)
    console.log(isAuthenticated, "Protectedroute")

   
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
    
}

export default ProtectedRoute