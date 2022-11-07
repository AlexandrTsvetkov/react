import { Button, TextField, Box, Link, Alert } from "@mui/material";
import React, { useState } from "react";
import useInput from "../../hooks/use-input";

type User = { email: string; password: string };
const DUMMY_USER: User = { email: "aa@aa.aa", password: "123456" };

const validateEmail = (email: string) => email.includes("@");
const validatePassword = (password: string) => password.length >= 6;

const LoginForm = () => {
  const emailInput = useInput(validateEmail);
  const passwordInput = useInput(validatePassword);

  const [isLoginFailed, setLoginFailed] = useState(false);

  const isFormValid = emailInput.isValid && passwordInput.isValid;

  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();

    emailInput.blurChangedHandler();
    passwordInput.blurChangedHandler();

    if (!isFormValid) return;

    if (
      emailInput.value !== DUMMY_USER.email ||
      passwordInput.value !== DUMMY_USER.password
    ) {
      setLoginFailed(true);

      passwordInput.reset();

      return;
    }

    setLoginFailed(false);
    emailInput.reset();
    passwordInput.reset();
    alert("You are logged in");
  };

  return (
    <React.Fragment>
      <Box component="form" onSubmit={loginHandler} noValidate sx={{ mt: 1 }}>
        <TextField
          value={emailInput.value}
          margin="normal"
          error={emailInput.hasError}
          required
          fullWidth
          id="email"
          type="email"
          label="Email"
          helperText={
            emailInput.hasError && "Email must contains '@' character"
          }
          onChange={emailInput.valueChangedHandler}
          onBlur={emailInput.blurChangedHandler}
        />
        <TextField
          value={passwordInput.value}
          margin="normal"
          error={passwordInput.hasError}
          required
          fullWidth
          id="password"
          type="password"
          label="Heslo"
          helperText={
            passwordInput.hasError &&
            "Password must contains at least 6 characters"
          }
          onChange={passwordInput.valueChangedHandler}
          onBlur={passwordInput.blurChangedHandler}
        />
        <Link fontSize={13} href="#">
          Zapomenuté heslo
        </Link>

        <Button
          sx={{ marginTop: 2 }}
          size="large"
          fullWidth
          variant="contained"
          color="success"
          type="submit"
        >
          Přihlásit
        </Button>
        {isLoginFailed && <Alert severity="error">Email or password is not correct!</Alert>} 
      </Box>
    </React.Fragment>
  );
};

export default LoginForm;
