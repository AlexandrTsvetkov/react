import React from "react";
import useInput from "../../hooks/use-input";

type User = { email: string; password: string };
const DUMMY_USER: User = { email: "aa@aa.aa", password: "123456" };

const validateEmail = (email: string) => email.includes("@");
const validatePassword = (password: string) => password.length >= 6;

const LoginForm = () => {
  const emailInput = useInput(validateEmail);
  const passwordInput = useInput(validatePassword);

  const isFormValid = emailInput.isValid && passwordInput.isValid;

  const loginHangler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFormValid) return;

    if (emailInput.value !== DUMMY_USER.email || passwordInput.value !== DUMMY_USER.password){
        passwordInput.reset();
        return;
    }

    emailInput.reset();
    passwordInput.reset();
    alert("You are logged in");
  };

  return (
    <React.Fragment>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={emailInput.value}
            onChange={emailInput.valueChangedHandler}
            onBlur={emailInput.blurChangedHandler}
          />
          {emailInput.hasError && <p>Email must contains '@' character</p>}
        </div>
        <div>
          <label htmlFor="password">Heslo</label>
          <input
            type="password"
            id="password"
            name="password"
            value={passwordInput.value}
            onChange={passwordInput.valueChangedHandler}
            onBlur={passwordInput.blurChangedHandler}
          />
          {passwordInput.hasError && (
            <p>Password must contains at least 6 characters</p>
          )}
        </div>
        <button type="submit" onClick={loginHangler} disabled={!isFormValid}>
          Přihlásit
        </button>
      </form>
    </React.Fragment>
  );
};

export default LoginForm;
