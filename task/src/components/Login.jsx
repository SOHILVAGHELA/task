import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for Password
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem(email));
    if (storedUser && storedUser.password === password) {
      localStorage.setItem("loggedInUser", email);
      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <h2 className="my-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
