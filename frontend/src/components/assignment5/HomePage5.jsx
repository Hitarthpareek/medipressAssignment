import { useEffect, useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getUser, logout } from "./utils/auth";
import "./HomePage5.css"

export default function HomePage5() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const u = getUser();
    setUser(u);
    setLoading(false);
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  if (loading) return <div className="loader">Loading...</div>;

  return (
    <div className="app-shell">

      {/* SIDEBAR ONLY WHEN LOGGED IN */}
      {user && (
        <aside className="sidebar">
          <h2>TaskFlow</h2>

          <nav>
            <button>Dashboard</button>
            <button>Tasks</button>
            <button onClick={handleLogout}>Logout</button>
          </nav>
        </aside>
      )}

      <main className="main">
        {!user ? (
          <Login onLogin={setUser} />
        ) : (
          <Dashboard user={user} />
        )}
      </main>

    </div>
  );
}