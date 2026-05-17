import { useState,useEffect } from "react";

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

  const handleSubmit = (e) => {

    e.preventDefault();

    setTimeout(() => {

  setIsLogin(true);

}, 1000);

    if (isLogin) {

      onLogin(formData);

    } else {

      onSignup(formData);

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
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />
        )}

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

          {isLogin
            ? "Login"
            : "Signup"}

        </button>

        <p>

          {isLogin
            ? "Don't have account?"
            : "Already have account?"}

          <span
            onClick={() =>
              setIsLogin(!isLogin)
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