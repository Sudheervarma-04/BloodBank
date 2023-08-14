import React from 'react'
import '../project_styles/Admin-page.css'
import '../assets/img/bloodbank logo.png'
import '../Admin/AdminNav'
// import 'https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css';
import {Link} from 'react-router-dom'

export default function Dashboard() {
    return(
        <nav>
      <div class="logo">
        <i class="bx bx-menu menu-icon"></i>
        <span class="logo-name">GITAM Blood Bank</span>
      </div>

      <div class="sidebar">
        <div class="logo">
          <i class="bx bx-menu menu-icon"></i>
          <span class="logo-name">GITAM Blood Bank</span>
        </div>

        <div class="sidebar-content">
          <ul class="lists">
            <li class="list">
              <Link to="/admin" class="nav-link">
                <i class='bx bxs-dashboard dash-board'></i>
                <span class="link">Dashboard</span>
              </Link>
            </li>
            <li class="list">
              <Link to="/admindonatepage" class="nav-link">
                <i class='bx bxs-donate-blood donate-blood'></i>
                <span class="link">Donations</span>
              </Link>
            </li>
            <li class="list">
              <Link to="/adminrequestpage" class="nav-link">
                <i class='bx bx-donate-blood donate-blood'></i>
                <span class="link">Requests</span>
              </Link>
            </li>
            <li class="list">
              <a href="../Login.html" class="nav-link">
                <i class='bx bx-log-out log-out'></i>
                <span class="link">Log-out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )  
}