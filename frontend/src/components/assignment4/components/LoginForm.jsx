import { useState } from "react";

export default function LoginForm({ onLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onLogin(formData);
  };

  return (
    <div className="login-container">
      <form
        className="login-card"
        onSubmit={handleSubmit}
              >
        <h1>Welcome Back</h1>

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
                   value={formData.password}
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}