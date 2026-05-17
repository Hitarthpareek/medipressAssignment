import { useState } from "react";

export default function LoginForm({
  onLogin,
  onSignup,
}) {

  const [isLogin, setIsLogin] =
    useState(true);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (isLogin) {

      onLogin({
        email: formData.email,
        password: formData.password,
      });

    } else {

      onSignup(formData);

    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-top">

          <h1>
            {isLogin
              ? "Welcome Back"
              : "Create Account"}
          </h1>

          <p>
            {isLogin
              ? "Login to continue"
              : "Signup to access PMIS"}
          </p>

        </div>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">

            {isLogin
              ? "Login"
              : "Create Account"}

          </button>

        </form>

        <div className="auth-toggle">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() =>
              setIsLogin(!isLogin)
            }
          >

            {isLogin
              ? " Sign Up"
              : " Login"}

          </span>

        </div>

      </div>

    </div>
  );
}