import React, { useState } from "react";
import handleValidation from "../../helpers/handleValidation";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorHighlighter, setHighlighter] = useState(false);
  const [isRegister, setRegister] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const errorsData = handleValidation(user);

    const isInvalidForm = Object.keys(errorsData).length;
    if (isInvalidForm) {
      setHighlighter(true);
      setErrors({ ...errorsData });
    } else if (isInvalidForm && user.password !== user.passwordConfirm) {
      setErrors({
        password: "The passwords do not match",
        passwordConfirm: "The passwords do not match",
      });
      setHighlighter(true);
      setRegister(false);
    } else {
      setHighlighter(false);
      setRegister(true);
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
      case "passwordConfirm":
        setUser({ ...user, passwordConfirm: target.value });
        break;
      default:
        break;
    }
  };

  const renderContent = () => {
    if (isRegister) {
      return (
        <div className="logged-in">
          <div className="registered-user">
            <h3>Congratulations, you have been registered on our site, your</h3>
            <div className="user-access">
              <div className="user-box">
                <legend>email:</legend>
                <span>{user.email}</span>
              </div>
              <div className="user-box">
                <legend>password:</legend>
                <span>{user.password}</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <form onSubmit={onSubmit} className="main-form">
        <div className="input-box">
          <label htmlFor="email">
            <span>email</span>
            <input
              type="text"
              name="email"
              id="email"
              value={user.email}
              onChange={onInputChange("email")}
            />
          </label>
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>

        <div className="input-box">
          <label htmlFor="password">
            <span>Password</span>
            <input
              type="password"
              name="password"
              id="password"
              value={user.password}
              onChange={onInputChange("password")}
            />
          </label>
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>

        <div className="input-box">
          <label htmlFor="password-confirm">
            <span>Password confirm</span>
            <input
              type="password"
              name="password"
              id="password-confirm"
              value={user.passwordConfirm}
              onChange={onInputChange("passwordConfirm")}
            />
          </label>
          {errors.passwordConfirm && (
            <div className="error-message">{errors.passwordConfirm}</div>
          )}
        </div>

        <div className="button-box">
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  };
  return (
    <div className={`form-wrapper ${errorHighlighter ? "error" : ""}`}>
      <h2>Registration form</h2>
      {renderContent()}
    </div>
  );
};

export default Register;
