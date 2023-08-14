import React from "react";
import "../project_styles/Login.css";

export default function AdminLogin() {
  return (
    <div className="adminloginbody">
    <div className="login-page">
      <div className="form">
        <div className="text">Login Form</div>
        <form className="login-form" action="">
          <input id="login-id" type="text" placeholder="User Name" required />
          <input
            id="Login-Password"
            type="password"
            placeholder="Password"
            required
          />
          <button id="login-button">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}
