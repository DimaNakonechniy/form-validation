import React, { useState } from "react";
import handleValidation from "../../helpers/handleValidation";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    checkbox: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [errorHighlighter, setHighlighter] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const errorsData = handleValidation(user);
    const isInvalidForm = Object.keys(errorsData).length;
    if (isInvalidForm) {
      setHighlighter(true);
      setErrors({ ...errorsData });
    } else {
      setLogin(true);
      setHighlighter(false);
    }
  };

  const onInputChange = (type) => ({ target }) => {
    switch (type) {
      case "email":
        setUser({ ...user, email: target.value });
        break;
      case "password":
        setUser({ ...user, password: target.value });
        break;
      case "checkbox":
        setUser({ ...user, checkbox: !user.checkbox });
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    if (isLogin) {
      return (
        <div className="logged-in">
          <h3>Congratulations, you have been logged in</h3>
        </div>
      );
    }
    return (
      <form onSubmit={onSubmit} className="main-form">
        <div className="input-box">
          <label htmlFor="email-login">
            <span>email</span>
            <input
              type="text"
              name="email"
              id="email-login"
              value={user.email}
              onChange={onInputChange("email")}
            />
          </label>
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="input-box">
          <label htmlFor="password-login">
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password-login"
              value={user.password}
              onChange={onInputChange("password")}
            />
          </label>
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        <div className="input-box-checkbox">
          <label htmlFor="remember" className="checkbox">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              defaultChecked={user.checkbox}
              onClick={onInputChange("checkbox")}
            />
            <span>Remember me</span>
          </label>
        </div>

        <div className="button-box">
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  };
  return (
    <div className={`form-wrapper ${errorHighlighter ? "error" : ""}`}>
      <h2>Log in form</h2>
      {renderContent()}
    </div>
  );
};

export default Login;
