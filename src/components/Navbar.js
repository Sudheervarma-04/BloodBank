import React from 'react'
import img1 from "../assets/img/bloodbank logo.png"
// import { Link } from "react-router-dom";
import "../assets/css/styles.css"
import "../assets/css/Advanced-NavBar---Multi-dropdown.css"
import "../assets/css/dh-row-text-image-right-responsive.css"
import "../assets/css/dh-row-text-image-right-responsive-1.css"
import "../assets/css/dh-card-image-left-dark.css"
import "../assets/css/Advanced-NavBar---Multi-dropdown.css"
import "../assets/css/4-Column-Team-Block---Circles.css"
import "../assets/css/Advanced-NavBar---Multi-dropdown.css"
import "../assets/css/Pretty-Footer-.css"
import "../assets/css/Pretty-Footer--1.css"
import "../assets/css/Image_center.css"
import "../assets/css/divider-text-middle.css"
import "../assets/css/Timeline---Gabriela-Carvalho.css"
import "../assets/css/Team-with-rotating-cards.css"
import "../assets/css/Team-with-rotating-cards-1.css"
import "../assets/css/Team-icons.css"
import "../assets/css/Swipe-Slider-6-styles.min.css"
import "../assets/css/Simple-Slider-Simple-Slider.css"
import "../assets/css/Projects-Grid-images.css"
import "../assets/css/Pretty-Registration-Form-.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
        <>
             <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
        <div class="container-fluid">
          <img src={img1} alt="Logo" class="d-inline-block align-text-top"/>
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" to="/">Home</Link>
              <Link class="nav-link active" to="/about">About</Link>
              <Link class="nav-link active" to="/donate">Donate</Link>
              <Link class="nav-link active" to="/request">Request</Link>
            </div>
          </div>
        </div>
      </nav>
        </>
  )
}
