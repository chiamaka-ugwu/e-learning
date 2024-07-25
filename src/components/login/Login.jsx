import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="container">
        <div class="left-side">
          <h3 style={{ fontSize: "35px" }}>
            Welcome Back to
            <br />
            UNIPORT LEARNING
          </h3>
          <div class="decorative-bar"></div>
          <p style={{ fontSize: "15px" }}>Sign In to continue your learning</p>
        </div>

        <div class="right-side">
          <form id="loginform">
            <div class="form-group">
              <input
                type="ID"
                id="ID"
                placeholder="Matriculation Number/Staff ID"
                required
              />
            </div>
            <div class="form-group">
              <input type="ID" id="ID" placeholder="Password" required />
            </div>
            <input type="checkbox" id="keep-signed-in" />
            <span class="checkmark"></span>
            <label for="keep-signed-in" class="checkbox-container">
              Keep me signed in until I sign out
            </label>
            <Link to='/dashboard'>
              <button type="submit" style={{ fontSize: "16px" }}>
                Sign In
              </button>
            </Link>

            <label>
              <p>
                <a href="" style={{ textAlign: "center" }}>
                  Forgot Password?
                </a>
              </p>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
