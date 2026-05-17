import { useEffect, useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getUser, logout } from "./utils/auth";
import "./HomePage5.css"

export default function HomePage5() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = getUser();
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
<div className="app-shell">

  <aside className="sidebar">
    <h2>TaskFlow</h2>

    <nav>
      <button>Dashboard</button>
      <button>Tasks</button>
      <button>Settings</button>
    </nav>
  </aside>

  <main className="main">
    {/* Login OR Dashboard */}
  </main>

</div>
  );
}