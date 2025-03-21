import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";



function ProtectedRoute({children}) {
    const isAuthenticated = useSelector(globalState => globalState.authSlice.isAuthenticated)
    console.log(isAuthenticated, "Protectedroute")

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return children
}

export default ProtectedRoute