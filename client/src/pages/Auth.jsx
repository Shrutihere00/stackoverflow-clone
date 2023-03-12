import React from "react";

import "./auth.css";
import { useState } from "react";
import icon from "../assets/icon.png";
import AboutAuth from "../components/AboutAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Signup, Login } from "../actions/auth";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSwitch = () => {
    setIsSignup(!isSignup);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(Signup({ name, email, password }, navigate));
    } else {
      dispatch(Login({ email, password }, navigate));
    }
  };
  return (
    <div className="main">
      <section className="auth-section">
        {isSignup && <AboutAuth />}
        <div className="auth-container-2">
          {!isSignup && (
            <img
              src={icon}
              width="90"
              alt="Stack overflow"
              className="login-logo"
            />
          )}

          <form onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <label htmlFor="name">
                  {" "}
                  <h4>Display Name</h4>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </>
            )}
            <label htmlFor="email">
              {" "}
              <h4>Email</h4>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
            <div
              className=""
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {" "}
              <label htmlFor="password">
                <h4>Password</h4>{" "}
              </label>
              {!isSignup && (
                <p style={{ color: "#007ac6" }}>Forgot Password?</p>
              )}
            </div>{" "}
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must contain at least eight
                <br /> characters, including at least 1<br /> number.
              </p>
            )}
            {isSignup && (
              <>
                <label className="labelcheck" htmlFor="check">
                  <input type="checkbox" id="check" />
                  <p style={{ fontSize: "13px" }}>
                    Opt-in to receive occational <br /> product updates, user
                    research invitations ,<br /> company announcements and
                    digests.{" "}
                  </p>
                </label>
              </>
            )}
            <button type="submit" className="auth-btn">
              {isSignup ? "Signup" : "Login"}
            </button>
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                By clicking "Sign up", you agree to our{" "}
                <span style={{ color: "#007ac6" }}>terms of service </span>,
                <span style={{ color: "#007ac6" }}> privacy policy</span> and{" "}
                <span style={{ color: "#007ac6" }}>cookie policy</span>
              </p>
            )}
          </form>
          <p>
            {isSignup ? "already have an account" : "Don't have an account"}{" "}
            <button
              type="button"
              className="handle-switch-btn"
              onClick={handleSwitch}
            >
              {isSignup ? "Log in" : "Sign up"}
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Auth;
