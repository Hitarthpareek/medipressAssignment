// HomePage3.jsx
import { useEffect, useState } from "react";
import Header from "../commonComponents/Header/Header";
import "./HomePage3.css";

export default function HomePage3() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Fetch Users

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Search Filter

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header/>

      <div className="users-container">
        {/* Top Section */}

        <div className="users-top">
          <h1>User Directory</h1>

          <p>Fetch and search users using API integration</p>
          <p>Fetched list from https://jsonplaceholder.typicode.com/users</p>
        </div>

        {/* Search */}

        <div className="search-box">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Loading */}

        {loading && (
          <div className="loading-state">
            Loading users...
          </div>
        )}

        {/* Error */}

        {error && (
          <div className="error-state">
            {error}
          </div>
        )}

        {/* User Cards */}

        {!loading && !error && (
          <div className="users-grid">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <div className="user-card" key={user.id}>
                  <div className="user-avatar">
                    {user.name.charAt(0)}
                  </div>

                  <div className="user-content">
                    <h2>{user.name}</h2>

                    <p>{user.email}</p>

                    <span>{user.company.name}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty-users">
                No users found
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}