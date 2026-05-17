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

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    /* LOGIN */

    if (isLogin) {

      onLogin({
        email: formData.email,

        password:
          formData.password,
      });

      return;
    }

    /* SIGNUP */

    const success =
      await onSignup(formData);

    /* SWITCH TO LOGIN */

    if (success) {

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setIsLogin(true);
    }
  };

  return (
    <div className="auth-container">

      <form
        className="auth-card"
        onSubmit={handleSubmit}
      >

        <h1>

          {isLogin
            ? "Login"
            : "Create Account"}

        </h1>

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
          placeholder="Email"
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
            : "Signup"}

        </button>

        <p className="auth-switch">

          {isLogin
            ? "Don't have account?"
            : "Already have account?"}

          <span
            onClick={() =>
              setIsLogin(
                !isLogin
              )
            }
          >

            {isLogin
              ? " Signup"
              : " Login"}

          </span>

        </p>

      </form>

    </div>
  );
}