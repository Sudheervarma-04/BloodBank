import React,{useEffect} from "react";
import "../project_styles/Login.css";

export default function AdminLogin() {
    useEffect(() => {
      const handleBackButton = (e) => {
        e.preventDefault();
        // Optionally, show a message to the user indicating that the back button is disabled.
      };
  
      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', handleBackButton);
  
      return () => {
        window.removeEventListener('popstate', handleBackButton);
      };
    }, []);
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
