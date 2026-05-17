import { useState } from "react";
import { loginUser } from "../services/api";
import { saveAuth } from "../utils/auth";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const res = await loginUser({ email, password });

    if (res.success) {
      saveAuth(res.token, res.user);
      setUser(res.user);
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={submit}>
        <h2>Welcome Back</h2>
        <p>Login to manage your tasks</p>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
      </form>
    </div>
  );
}