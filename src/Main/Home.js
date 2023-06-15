import React from "react";
import img2 from "../assets/img/Homepage_blood.gif";
import img3 from "../assets/img/blood-5053771.webp";
import img4 from "../assets/img/Blood7.webp";
import img5 from "../assets/img/GITAM Drone.webp";
import "../assets/css/styles.css";
import "../assets/css/Advanced-NavBar---Multi-dropdown.css";
import "../assets/css/dh-row-text-image-right-responsive.css";
import "../assets/css/dh-row-text-image-right-responsive-1.css";
import "../assets/css/dh-card-image-left-dark.css";
import "../assets/css/Advanced-NavBar---Multi-dropdown.css";
import "../assets/css/4-Column-Team-Block---Circles.css";
import "../assets/css/Advanced-NavBar---Multi-dropdown.css";
import "../assets/css/Pretty-Footer-.css";
import "../assets/css/Pretty-Footer--1.css";
import "../assets/css/Image_center.css";
import "../assets/css/divider-text-middle.css";
import "../assets/css/Timeline---Gabriela-Carvalho.css";
import "../assets/css/Team-with-rotating-cards.css";
import "../assets/css/Team-with-rotating-cards-1.css";
import "../assets/css/Team-icons.css";
import "../assets/css/Swipe-Slider-6-styles.min.css";
import "../assets/css/Simple-Slider-Simple-Slider.css";
import "../assets/css/Projects-Grid-images.css";
import "../assets/css/Pretty-Registration-Form-.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div
        id="post_carousel"
        className="carousel slide animate_text post_carousel_wrapper swipe_x ps_easeOutCirc"
        data-ride="carousel"
      >

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src={img2} alt="video" />
          </div>
        </div>
      </div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 style={{ fontSize: 35 }}>
              <span style={{ textDecoration: "underline" }}>Facilities</span>
            </h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          <div className="col">
            <div>
              <img
                className="rounded img-fluid d-block w-100 fit-cover"
                style={{ height: 200 }}
                src={img3}
                alt="$"
              />
              <div className="py-4">
                <center>
                  <h4>
                    <Link to="/donate" style={{ color: "#000000" }}>
                      <strong>Donate</strong>
                    </Link>
                  </h4>
                </center>
                <p>
                  <span
                    style={{
                      color: "rgb(0, 0, 0)",
                      fontWeight: 500,
                      fontSize: 18,
                    }}
                  >
                    Donors who want to donate Blood can donate via Donate option
                    in our Homepage.
                  </span>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <img
                className="rounded img-fluid d-block w-100 fit-cover"
                style={{ height: 200 }}
                src={img5}
                alt="$"
              />
              <div className="py-4">
                <center>
                  <h4>
                    <Link to="/about" style={{ color: "#000000" }}>
                      <strong>About Us</strong>
                    </Link>
                  </h4>
                </center>
                <p>
                  <span
                    style={{
                      color: "rgb(0, 0, 0)",
                      fontWeight: 500,
                      fontSize: 18,
                    }}
                  >
                    An initiative by a group of Computer Science and Engineering
                    undergrads from GITAM University, Visakhapatnam!
                  </span>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <img
                className="rounded img-fluid d-block w-100 fit-cover"
                style={{ height: 200 }}
                src={img4}
                alt="$"
              />
              <div className="py-4">
                <center>
                  <h4>
                    <Link to="/request" style={{ color: "#000000" }}>
                      <strong>Request</strong>
                    </Link>
                  </h4>
                </center>
                <p>
                  <span
                    style={{
                      color: "rgb(0, 0, 0)",
                      fontWeight: 500,
                      fontSize: 18,
                    }}
                  >
                    Anyone who is in need of blood can request blood through our
                    website via Request Blood option.
                  </span>
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="row">
          <div className="col-sm-6 col-md-4 footer-navigation">
            <h3 style={{fontFamily: "sans-serif"}}>GITAMBloodBank</h3>
            <p className="links">
              <Link to="/donate">Donate</Link>
              <strong> · </strong>
              <Link to="/request">Request</Link>
              <strong> · </strong>
              <Link to="/about">About</Link>
              <strong>&nbsp;</strong>
            </p>
          </div>
          <div className="col-sm-6 col-md-4 footer-contacts">
            <div>
              <Link href="https://goo.gl/maps/bFanvvmbxhrSjWVC7" target="_blank">
                <span className="fa fa-map-marker footer-contacts-icon"> </span>
              </Link>
              <Link href="https://goo.gl/maps/bFanvvmbxhrSjWVC7" target="_blank">
                <p>
                  <span className="new-line-span">Gandhi Nagar,Rushikonda</span>
                  Visakhapatnam, Andhra Pradesh-530045
                </p>
              </Link>
            </div>
            <div>
              <i className="fa fa-phone footer-contacts-icon"></i>
              <p className="footer-center-info email text-start">
                <Link href="#" style={{ color: "#ffffff" }}>
                  +91 98850 96787
                </Link>
              </p>
            </div>
            <div>
              <i className="fa fa-envelope footer-contacts-icon"></i>
              <p>
                {" "}
                <Link style={{ color: "rgb(255, 255, 255)" }}>
                  gitambloodbank@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-4 footer-about">
            <h4>
              <Link href="./aboutus.html" style={{ color: "#ffffff" }}>
                About
              </Link>
            </h4>
            <p>
              This Blood Bank is an initiative by a group of GITAM B.Tech CSE
              students to provide the city with a solution for any issue related
              with Blood Donation/Acceptance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
