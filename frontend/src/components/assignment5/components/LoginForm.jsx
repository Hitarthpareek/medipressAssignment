import { useState } from "react";

export default function LoginForm({
  onLogin,
}) {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      await onLogin({
        email,
        password,
      });

      setLoading(false);
    };

  return (
    <form
      className="login-card"
      onSubmit={handleSubmit}
    >

      <h1>
        Task Manager
      </h1>

      <p>
        Login to continue
      </p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <button type="submit">

        {loading
          ? "Loading..."
          : "Login"}

      </button>

    </form>
  );
}