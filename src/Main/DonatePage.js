import React from "react";
import Bg from "../assets/img/Background_form.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "../project_styles/donatepage.css";
import Button from "react-bootstrap/Button";
// import { db_transactions } from "../project_scripts/db_transactions";
import { add_to_donation } from "../project_scripts/donation_db";
export default function DonateNew() {
  // const [Fullname, setFullname] = useState("");
  // const [email, setemail] = useState("");

  // const handleName = (event) => {
  //   const result = event.target.value.replace(/[^a-z]/gi, "");

  //   setFullname(result);
  // };

  // const handleEmail = (event) => {
  //   const result = event.target.value.replace(/[^a-z]/gi, "");

  //   setemail(result);
  // };

  return (
    <>
      <div className=" bg-black ">
        <div className="imageclass col-2">
          <img src={Bg} alt="#" />
        </div>
        <div className="class1">
          <h1 style={{ color: "white", fontSize: 50 }}>Donate</h1>
          <br />
          <Row>
            <Col>
              <Form.Label style={{ color: "white" }}>Full Name</Form.Label>
              <Form.Control
                type="text"
                id="Donatorname"
                placeholder="Enter your name"
                className="pb-2"
                // value={Fullname}
                // onChange={handleName}
              />
              <p id="donator_name_error"></p>
            </Col>
            <Col>
              <Form.Label style={{ color: "white" }}>Blood Group</Form.Label>
              <Form.Select aria-label="BloodGroup" id="Blood_group">
                <option>Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </Form.Select>
              <p id="donator_blood_error"></p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Label style={{ color: "white" }}>Email</Form.Label>
              <Form.Control
                type="email"
                id="Donator_email"
                placeholder="Enter Email"
                className="pb-2"
                // value={email}
                // onChange={handleEmail}
              />
              <p id="donator_email_error"></p>
            </Col>
            <Col>
              <Form.Label style={{ color: "white" }}>Gender</Form.Label>
              <Form.Select aria-label="Gender" id="Gender">
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              <p id="donator_gender_error"></p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Form.Label style={{ color: "white" }}>Phone number</Form.Label>
              <Form.Control
                type="number"
                id="Donator_phone"
                placeholder="Enter Phone Number"
                className="pb-2"
              />
              <p id="donator_phone_error"></p>
            </Col>
            <Col>
              <Form.Label style={{ color: "white" }}>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                id="Donator_dob"
                placeholder="Enter Date of Birth"
                className="pb-2"
              />
              <p id="donator_dob_error"></p>
            </Col>
          </Row>
          <br />
          <Row>
            <Form.Label style={{ color: "white" }}>Address</Form.Label>
            <Form.Control as="textarea" rows={3} id="Donator_address" />

            <p id="donator_address_error"></p>
          </Row>
          <div>
            <center>
              <Button
                type="submit"
                className="col-7 mt-5"
                id="submit_donate"
                onClick={add_to_donation}
              >
                Submit form
              </Button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
}
