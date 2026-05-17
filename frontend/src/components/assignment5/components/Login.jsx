import { useState } from "react";
import { loginUser, registerUser } from "../services/api";
import { saveAuth } from "../utils/auth";

export default function Login({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    const res = isLogin
      ? await loginUser(form)
      : await registerUser(form);

    if (res.success) {
      saveAuth(res.token, res.user);
      setUser(res.user);
    } else {
      alert(res.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={submit}>
        <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
        <p>{isLogin ? "Login to continue" : "Start managing your tasks"}</p>

        {!isLogin && (
          <input
            placeholder="Full Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        )}

        <input
          placeholder="Email"
          type="email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          placeholder="Password"
          type="password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="primary-btn">
          {isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="switch" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "New user? Create account"
            : "Already have account? Login"}
        </p>
      </form>
    </div>
  );
}