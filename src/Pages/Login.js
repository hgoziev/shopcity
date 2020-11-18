import { Link, useHistory } from "react-router-dom";
import React from "react";
import "../Style/Login.css";
import logo from "../Assets/images/shop.png";
import { useState } from "react";
import { auth } from "../Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/" className="login__link">
        <img src={logo} alt="" className="login__login__image" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__singin__button"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in , you agree to Shop City's Conditions of Use & Sale .
          Please see our Privacy Notice, our Cookie Notice and our Internet
          Based Ads Notice.
        </p>
        <button className="login__createAccount__button" onClick={register}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
