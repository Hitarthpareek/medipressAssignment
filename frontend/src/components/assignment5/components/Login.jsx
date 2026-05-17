import { useState } from "react";
import { loginUser, registerUser } from "../services/api";
import { saveAuth } from "../utils/auth";
import Header from "../../commonComponents/Header/Header"

export default function Login({ setUser }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const payload = mode === "signup" ? { name, email, password } : { email, password };
    const res = mode === "signup" ? await registerUser(payload) : await loginUser(payload);
    setLoading(false);
    if (res.success) { saveAuth(res.token, res.user); setUser(res.user); }
    else setError(res.message || "Something went wrong.");
  };

  const switchMode = () => {
    setError(""); setName(""); setEmail(""); setPassword("");
    setMode(mode === "login" ? "signup" : "login");
  };

  return (
    <> <Header/>
    <div className="auth-page">
      {/* Left panel */}
      <div className="auth-left">
        <div className="auth-left-brand">
          <div className="auth-left-mark">T</div>
          TaskFlow
        </div>
        <div className="auth-left-body">
          <h2>Manage work,<br />stay in flow.</h2>
          <p>A clean, fast workspace to track what matters — built for focus, not friction.</p>
        </div>
        <div className="auth-left-features">
          {["Create and organize tasks instantly", "Track pending and completed work", "Simple, distraction-free interface"].map(f => (
            <div className="auth-feature" key={f}>
              <div className="auth-feature-dot" />
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <div className="auth-right">
        <div className="auth-form-box">
          <div className="auth-form-header">
            <h1>{mode === "login" ? "Welcome back" : "Create account"}</h1>
            <p>{mode === "login" ? "Sign in to your workspace" : "Get started for free today"}</p>
          </div>

          <form className="auth-form" onSubmit={submit}>
            {mode === "signup" && (
              <div className="field-group">
                <label>Full Name</label>
                <input placeholder="John Doe" value={name} onChange={e => setName(e.target.value)} required />
              </div>
            )}
            <div className="field-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="field-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            {error && <div className="auth-error">{error}</div>}
            <button className="auth-submit" disabled={loading}>
              {loading ? <span className="btn-spinner" /> : (mode === "login" ? "Sign In" : "Create Account")}
            </button>
          </form>

          <div className="auth-switch">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            <button onClick={switchMode}>{mode === "login" ? "Sign up" : "Sign in"}</button>
          </div>
        </div>
      </div>
    </div>
 </> );
}