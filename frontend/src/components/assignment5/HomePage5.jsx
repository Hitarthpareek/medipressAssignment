import { useEffect, useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { getUser, logout } from "./utils/auth";

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
    <div className="homepage5">

      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <div>
          {/* HEADER */}
          <div className="top-bar">
            <h2>Welcome, {user.name}</h2>

            <button onClick={handleLogout}>
              Logout
            </button>
          </div>

          {/* DASHBOARD */}
          <Dashboard />
        </div>
      )}

    </div>
  );
}