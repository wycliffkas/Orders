import React, { useContext, useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router";
import { AuthContext } from "../Auth";
import LoginForm from "../components/LoginForm";
import app from "../config/firebaseConfig";

const Login = ({ history }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null)

  const onHandleLogin = async (event) => {
    event.preventDefault();
    try {
      await app.auth().signInWithEmailAndPassword(email, password);
      history.push("/orders");
    } catch (error) {
      console.log(error);
      setError("Invalid Username or Password")
    }
    setPassword("")
    setEmail("")
  };

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/orders" />;
  }

  return (
    <LoginForm
      handleLogin={onHandleLogin}
      email={email}
      password={password}
      onSetEmail={setEmail}
      onSetPassword={setPassword}
      error={error}
    />
  );
};

export default withRouter(Login);
