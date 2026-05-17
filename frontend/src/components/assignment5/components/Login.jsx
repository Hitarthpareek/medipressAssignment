import { useState } from "react";
import { loginUser, registerUser } from "../services/api";
import { saveAuth } from "../utils/auth";

export default function Login({ setUser }) {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const payload = mode === "signup"
      ? { name, email, password }
      : { email, password };

    const res = mode === "signup"
      ? await registerUser(payload)
      : await loginUser(payload);

    setLoading(false);

    if (res.success) {
      saveAuth(res.token, res.user);
      setUser(res.user);
    } else {
      setError(res.message || "Something went wrong.");
    }
  };

  const switchMode = () => {
    setError("");
    setName("");
    setEmail("");
    setPassword("");
    setMode(mode === "login" ? "signup" : "login");
  };

  return (
    <div className="auth-page">
      <div className="auth-bg-pattern" />

      <div className="auth-card">
        <div className="auth-brand">
          <span className="logo-icon">✦</span>
          <span className="brand-name">TaskFlow</span>
        </div>

        <div className="auth-header">
          <h1>{mode === "login" ? "Welcome back" : "Create account"}</h1>
          <p>{mode === "login" ? "Sign in to your workspace" : "Start managing your tasks"}</p>
        </div>

        <form className="auth-form" onSubmit={submit}>
          {mode === "signup" && (
            <div className="field-group">
              <label>Full Name</label>
              <input
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="field-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button className="auth-submit" disabled={loading}>
            {loading ? <span className="btn-spinner" /> : (mode === "login" ? "Sign In" : "Create Account")}
          </button>
        </form>

        <div className="auth-switch">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}
          <button onClick={switchMode}>
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}