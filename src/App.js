import { Route, BrowserRouter, Routes } from "react";
import { useSelector } from "react-redux";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import './App.css'



function App() {
  debugger
  const isAuthenticated  = useSelector(
    (globalState) => globalState.authSlice.isAuthenticated
  );
  console.log(isAuthenticated, "app data");

  return (
    <div className="app-container">
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  );

  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route exact path="/login" element={<Login />} />
  //         <ProtectedRoute exact path="/dashboard" component={<Dashboard />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </>
  // );
}

export default App;
