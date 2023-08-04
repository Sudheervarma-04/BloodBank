import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../project_styles/donatepage.css';
import Button from 'react-bootstrap/Button';
import { get_donation } from '../project_scripts/donation_db';

export default function DonateNew() {
  return (
    <>
    <div className='bg-black'>
    <div className='row col-12 image'>
    </div>
    <div className='class1 col-md-7 col-12 p-5'>
        <h1 style={{color: "white", fontSize: 50}} className='pt-5'>Donate</h1>
        <br/>
        <Row>
        <Col className='col-md-6 col-12'>
    <Form.Label style={{color: "white"}}>First Name</Form.Label>
      <Form.Control
        type="text"
        id="Donatorname"
        placeholder='Enter your first name'
        className='pb-2'
      />
      </Col>
      <Col className='col-md-6 col-12'>
      <Form.Label style={{color: "white"}}>Blood Group</Form.Label>
      <Form.Select aria-label="BloodGroup" id="Blood_group">
      <option>Select Blood Group</option>
      <option value="1">A+</option>
      <option value="2">A-</option>
      <option value="3">B+</option>
      <option value="3">B-</option>
      <option value="3">O+</option>
      <option value="3">O-</option>
      <option value="3">AB+</option>
      <option value="3">AB-</option>
      <option value="3">Other</option>

    </Form.Select>
    <p id="donator_blood_error"></p>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col className='col-md-6 col-12'>
        <Form.Label style={{color: "white"}}>Email</Form.Label>
      <Form.Control
        type="email"
        id="Donator_email"
        placeholder='Enter Email'
        className='pb-2'
      />
      <p id="donator_email_error"></p>
        </Col>
        <Col className='col-md-6 col-12'>
    <Form.Label style={{color: "white"}}>Gender</Form.Label>
      <Form.Select aria-label="Gender" id="Gender">
      <option>Select Gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
      <option value="3">Other</option>
      </Form.Select>
      <p id="donator_gender_error"></p>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col className='col-md-6 col-12'>
        <Form.Label style={{color: "white"}}>Phone number</Form.Label>
      <Form.Control
        type="number"
        id="Donator_phone"
        placeholder='Enter Phone Number'
        className='pb-2'
      />
      <p id="donator_phone_error"></p>
        </Col>
        <Col className='col-md-6 col-12'>
        <Form.Label style={{color: "white"}}>Date of Birth</Form.Label>
      <Form.Control
        type="date"
        id="Donator_dob"
        placeholder='Enter Date of Birth'
        className='pb-2'
      />
      <p id="donator_dob_error"></p>
        </Col>
      </Row>
      <br/>
      <Row>
      <Form.Label style={{color: "white"}}>Address</Form.Label>
    <Form.Control as="textarea" rows={3} id="Donator_address"/>
    <p id="donator_address_error"></p>
    </Row>
    <div>
    <center>
    <Button type="submit" className='col-7 mt-5' onClick={get_donation()}>Submit form</Button>
    </center>
    </div>
    </div>
    
    </div>
    </>
  );
}