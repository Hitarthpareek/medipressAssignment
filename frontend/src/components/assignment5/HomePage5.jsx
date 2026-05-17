import { useState } from "react";
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
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          TaskFlow
        </div>
        <div className="nav-right">
          <div className="user-pill">
            <span className="user-avatar">{(user.name || "U")[0].toUpperCase()}</span>
            <span className="user-name">Hi, {user.name || "User"}</span>
          </div>
          <button
            className="logout-btn"
            onClick={() => { logout(); setUser(null); }}
          >
            Sign out
          </button>
        </div>
      </nav>
      <Dashboard />
    </div>
  );
}