import { useDispatch, useSelector } from "react-redux";


import { logout } from "../../features/Auth/authSlice";

function Dashboard() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.auth)
    console.log(data)
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="dashboard">
            <h2 >Welcome, {user?.username}</h2>
            <p>you have successfully logged in.</p>
            <button onClick={handleLogout} type="button">Logout</button>
        </div>
    )
}

export default Dashboard