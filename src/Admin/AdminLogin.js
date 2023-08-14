import React from "react";
import "../project_styles/Login.css";

export default function AdminLogin() {
  return (
    <div class="login-page">
      <div class="form">
        <div class="text">Login Form</div>
        <form class="login-form" action="">
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
  );
}
