import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for Password
  const navigate = useNavigate(); // useNavigate hook for navigation

  // Handle register form submission
  const handleRegister = (e) => {
    e.preventDefault();
    if (localStorage.getItem(email)) {
      alert("Email already registered");
    } else {
      const user = { name, email, password };
      localStorage.setItem(email, JSON.stringify(user));
      navigate("/login");
    }
  };

  return (
    <div>
      <h2 className="my-4">Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
