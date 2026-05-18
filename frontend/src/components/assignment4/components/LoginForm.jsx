import { useState } from "react";
import {
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginForm({
  onLogin,
  onSignup,
}) {

  const [isLogin, setIsLogin] =
    useState(true);

    const [loading,setLoading] = useState(false);
    const [showPassword, setShowPassword] =
  useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

const handleChange = (e) => {

  const { name, value } = e.target;

  setFormData({
    ...formData,

    [name]:
      name === "email"
        ? value.toLowerCase()
        : value,
  });
};
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    setLoading(true);
    /* LOGIN */

    if (isLogin) {

      onLogin({
        email: formData.email,

        password:
          formData.password,
      });
      setLoading(false)
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
      setLoading(false);
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
            ? "Employee Login"
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

 <div className="password-field">

  <input
    type={
      showPassword
        ? "text"
        : "password"
    }

    name="password"

    placeholder="Password"

    value={formData.password}

    onChange={handleChange}

    required
  />

  <button
    type="button"

    className="show-password-btn"

    onClick={() =>
      setShowPassword(
        !showPassword
      )
    }
  >
    {showPassword
  ? <EyeOff size={17} />
  : <Eye size={17} />
}

  </button>

</div>

        <button type="submit">

          { loading?"Loading....": isLogin
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