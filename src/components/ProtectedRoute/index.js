import { useSelector } from "react-redux";

import Login from "../Login";

function ProtectedRoute({childern}) {
    const data = useSelector(state => state)
    console.log(data, "Protectedroute")

    if (!isAuthenticated) {
        return <Login />
    }
    return childern
}

export default ProtectedRoute