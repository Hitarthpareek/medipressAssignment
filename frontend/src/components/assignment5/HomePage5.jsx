import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getUser, logout } from "./utils/auth";
import "./HomePage5.css";


export default function HomePage5() {
  const [user, setUser] = useState(getUser());

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="app">
     
      <nav className="navbar">
        <div className="logo">
          <div className="logo-mark">T</div>
          TaskFlow
        </div>

        <div className="nav-center">
          <button className="nav-link active">Dashboard</button>
        </div>

        <div className="nav-right">
          <div className="nav-avatar">{(user.name || "U")[0].toUpperCase()}</div>
          <span className="nav-user-name">{user.name || "User"}</span>
          <div className="nav-divider" />
          <button className="btn-signout" onClick={() => { logout(); setUser(null); }}>
            Sign out
          </button>
        </div>
      </nav>
      <Dashboard />
    </div>
  );
}