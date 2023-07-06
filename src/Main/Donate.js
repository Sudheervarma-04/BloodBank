import React from "react";
import "../project_styles/Donate.css";
import "../project_scripts/db_transactions";

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
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-row">
                    <div className="form-group">
                      <div className="form-input">
                        <label className="required">
                          First name
                          <input
                            onKeyDown={(event) => {
                              return /[a-z]/i.test(event.key);
                            }}
                            id="Donator_name"
                            name="first_name"
                            placeholder="Enter your name"
                            required
                          />
                        </label>
                      </div>
                      <p id="donator_name_error"></p>
                      <div className="form-input mt-2">
                        <label className="required">
                          Email
                          <input
                            id="Donator_email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                          />
                        </label>
                      </div>
                      <p id="donator_email_error"></p>

                      <div className="form-input mt-2">
                        <label className="required">
                          Phone number
                          <input
                            id="Donator_phone"
                            type="tel"
                            onKeyDown={(event) => {
                              return (
                                event.charCode >= 48 && event.charCode <= 57
                              );
                            }}
                            minLength="10"
                            maxLength="10"
                            placeholder="Enter your number"
                            name="phone_number"
                            required
                          />
                        </label>
                      </div>
                      <p id="donator_phone_error"></p>
                    </div>

                    <div className="form-group">
                      <div className="form-input">
                        <div className="label-flex">
                          <label className="required">
                            Blood Group
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
                          </label>
                        </div>
                      </div>
                      <p id="donator_blood_error"></p>

                      <div className="form-input mt-2">
                        <div className="label-flex ">
                          <label className="required">
                            Gender
                            <select id="Gender">
                              <option>Enter Gender</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </select>
                          </label>
                        </div>
                      </div>
                      <p id="donator_gender_error"></p>

                      <div className="form-input mt-2">
                        <label className="required">
                          DATE OF BIRTH
                          <input
                            name="DOB"
                            id="Donator_dob"
                            type="date"
                            placeholder="Date of Birth"
                            required
                          />
                        </label>
                      </div>
                      <p id="donator_dob_error"></p>
                    </div>

                    <p id="donator_address_error"></p>
                  </div>
                  <div className="form-input d-flex flex-column justify-content-right ml-5 col-12">
                    <label className="required address">
                      Address
                      <textarea
                        name="ADD"
                        id="Donator_address"
                        className="col-11"
                        placeholder="Enter Address"
                      ></textarea>
                    </label>
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
