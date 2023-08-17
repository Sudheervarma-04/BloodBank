import React from "react";
import "../project_styles/Admin-page.css";
import "../assets/img/bloodbank logo.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="adminbody">
      <div className="logo">
        <i className="bx bx-menu menu-icon"></i>
        <span className="logo-name">GITAM Blood Bank</span>
      </div>

        <div className="sidebar-content">
          <ul className="lists">
            <li className="list">
              <Link to="/admindonatepage" className="nav-link">
                <i className="bx bxs-donate-blood donate-blood"></i>
                <span className="link">Donations</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/adminrequestpage" className="nav-link">
                <i className="bx bx-donate-blood donate-blood"></i>
                <span className="link">Requests</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/admin" className="nav-link">
                <i className="bx bx-log-out log-out"></i>
                <span className="link">Log-out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
}
