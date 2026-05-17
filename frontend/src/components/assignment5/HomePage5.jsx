import { useEffect, useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getUser, logout } from "./utils/auth";
import "./HomePage5.css";

export default function HomePage5() {
  const [user, setUser] = useState(getUser());

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <div className="app">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">TaskFlow</div>

        <div className="nav-right">
          <span className="user">Hi, {user.name || "User"}</span>

          <button
            className="logout-btn"
            onClick={() => {
              logout();
              setUser(null);
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* DASHBOARD */}
      <Dashboard />
    </div>
  );
}