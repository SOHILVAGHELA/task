import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          {/* Define routes for Login, Register, and Account components */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
