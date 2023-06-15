import React from "react";
import "../project_styles/Donate.css";
export default function Donate() {
  return (
    <>
    <div className="body">
      <div className="main" id="section-main">
        <div className="container mt-0">
          <div className="signup-content">
            <div className="signup-img pt-1"></div>
            <div className="signup-form">
              <h1 className="heading">DONATE</h1>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-row">
                  <div className="form-group">
                    <div className="form-input">
                      <label for="first_name" className="required">
                        First name
                      </label>
                      <input
                        onkeydown="return /[a-z]/i.test(event.key)"
                        id="Donator_name"
                        name="first_name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <p id="donator_name_error"></p>
                    <div className="form-input mt-2">
                      <label for="email" className="required">
                        Email
                      </label>
                      <input
                        id="Donator_email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <p id="donator_email_error"></p>

                    <div className="form-input mt-2">
                      <label for="phone_number" className="required">
                        Phone number
                      </label>
                      <input
                        id="Donator_phone"
                        type="tel"
                        onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                        minlength="10"
                        maxlength="10"
                        placeholder="Enter your number"
                        name="phone_number"
                        required
                      />
                    </div>
                    <p id="donator_phone_error"></p>
                  </div>

                  <div className="form-group">
                    <div className="form-input">
                      <div className="label-flex">
                        <label for="blood-group" className="required">
                          Blood Group
                        </label>
                      </div>

                      <select name="blood-group" id="Blood_group">
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
                    </div>
                    <p id="donator_blood_error"></p>

                    <div className="form-input mt-2">
                      <div className="label-flex ">
                        <label for="payment" className="required">
                          Gender
                        </label>
                      </div>
                      <select id="Gender">
                        <option>Enter Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <p id="donator_gender_error"></p>

                    <div className="form-input mt-2">
                      <label for="DOB" className="required">
                        DATE OF BIRTH
                      </label>
                      <input
                        name="DOB"
                        id="Donator_dob"
                        type="date"
                        placeholder="Date of Birth"
                        required
                      />
                    </div>
                    <p id="donator_dob_error"></p>
                    </div>
                  
                    
                  <p id="donator_address_error"></p>
                </div>
                <div className="form-input d-flex flex-column justify-content-right ml-5 col-12">
                    <label for="ADD" className="required address">
                      Address
                    </label>
                    <textarea
                      name="ADD"
                      id="Donator_address"
                      className="col-11"
                      placeholder="Enter Address"
                    ></textarea>
                  </div>
                
                <div className="form-submit mt-3 ">
                  <input
                    className="submit"
                    id="submit_donate"
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
    </>
  );
}
