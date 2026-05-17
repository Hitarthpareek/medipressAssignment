import { useState } from "react";
import { loginUser, registerUser } from "../services/api";
import { saveAuth } from "../utils/auth";

export default function Login({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = isLogin
        ? await loginUser(form)
        : await registerUser(form);

      if (res.success) {
        saveAuth(res.token, res.user);
        onLogin(res.user);
      } else {
        alert(res.message);
      }
    } catch (err) {
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>

      {!isLogin && (
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
      )}

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Loading..." : isLogin ? "Login" : "Register"}
      </button>

      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Create account" : "Already have account?"}
      </p>
    </div>
  );
}