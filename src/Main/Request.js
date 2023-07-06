import React from "react";
import "../project_styles/Request.css";
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
export default function Request() {
  return (
    <div className="reqbody">
      <div className="main col-12" id="section-main">
        <div className="container mt-0">
          <div className="signup-content">
            <div className="signup-img pt-1"></div>
            <div className="signup-form pt-5">
              <h1 className="heading">REQUEST</h1>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-row">
                  <div className="form-group">
                    <div className="form-input">
                      <label className="required">
                        First name
                        <input
                          onKeyDown={(event) => {
                            return /[a-z]/i.test(event.key);
                          }}
                          id="Patient_name"
                          name="first_name"
                          placeholder="Enter your name"
                          required
                        />
                      </label>
                    </div>
                    <p id="patient_name_error"></p>
                    <div className="form-input mt-2">
                      <label className="required">
                        Email
                        <input
                          id="patient_email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </label>
                    </div>
                    <p id="patient_email_error"></p>

                    <div className="form-input">
                      <div className="label-flex">
                        <label className="required">
                          Blood Group
                          <select name="blood-group" id="PBlood_group_request">
                            <option>Enter Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>Others</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <p id="patient_blood_error"></p>
                    <div className="form-input">
                      <label className="required">
                        No Of Units Required
                        <input
                          id="no_of_units"
                          type="number"
                          placeholder="Enter No of units required"
                          required
                        />
                      </label>
                    </div>
                    <p id="patient_units_error"></p>
                  </div>

                  <div className="form-group">
                    <div className="form-input">
                      <label className="required">
                        AGE
                        <input
                          type="number"
                          id="patient_dob"
                          name="first_name"
                          placeholder="Enter your age"
                          required
                        />
                      </label>
                    </div>
                    <p id="patient_dob_error"></p>
                    <div className="form-input mt-2">
                      <label className="required">
                        Phone number
                        <input
                          id="patient_phone"
                          type="tel"
                          onKeyPress={(event) => {
                            return event.charCode >= 48 && event.charCode <= 57;
                          }}
                          minLength="10"
                          maxLength="10"
                          placeholder="Enter your number"
                          name="phone_number"
                          required
                        />
                      </label>
                    </div>
                    <p id="patient_phone_error"></p>

                    <div className="form-input mt-2">
                      <label className="required">
                        REQUIRED DATE
                        <input
                          name="DOB"
                          id="required_date"
                          type="date"
                          placeholder="Date of Birth"
                          required
                        />
                      </label>
                    </div>
                    <p id="patient_required_error"></p>

                    <div className="form-input mt-2">
                      <div className="label-flex ">
                        <label className="required">
                          Gender
                          <select id="PGender">
                            <option>Enter Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>

                  <p id="patient_gender_error"></p>
                </div>
                <div className="form-input ml-4  col-12 ">
                  <label className="required address">
                    Purpose
                    <textarea
                      name="pur"
                      id="purpose_request"
                      className="col-11"
                      placeholder="Enter the purpose"
                    ></textarea>
                  </label>
                </div>
                <p id="patient_purpose_error"></p>

                <div className="form-submit mt-3 ">
                  <input
                    className="submit"
                    id="submit_request"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
