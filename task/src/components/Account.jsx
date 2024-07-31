import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" }); // State for user data
  const [isEditing, setIsEditing] = useState(false); // State for edit mode
  const [name, setName] = useState(""); // State for  name input
  const [email, setEmail] = useState(""); // State for email input

  // Load user data from localStorage on component mount
  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem("loggedInUser");
    if (loggedInUserEmail) {
      const user = JSON.parse(localStorage.getItem(loggedInUserEmail));
      setUser(user);
      setName(user.name);
      setEmail(user.email);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // Handle user data update
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email };
    localStorage.setItem(email, JSON.stringify(updatedUser));
    setUser(updatedUser);
    localStorage.setItem("loggedInUser", email);
    setIsEditing(false);
  };

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div>
      <h2 className="my-4">Account Information</h2>
      {isEditing ? (
        <form onSubmit={handleUpdate}>
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
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-secondary me-2"
          >
            Edit
          </button>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;
