import React from "react";

import { useSelector } from "react-redux";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App(){
    const data = useSelector(state=> state)
    console.log(data, "app data")

    return (
        <div className="app">
            <Login />
        </div>
    )
}

export default App