import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
                <Dashboard />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
