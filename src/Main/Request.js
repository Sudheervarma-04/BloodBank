import React from 'react'
import "../project_styles/Request.css"
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
export default function Request() {
  return (
    <div className='reqbody'>        
    <div className="main col-12" id="section-main">
        <div className="container mt-0">
            <div className="signup-content">
                <div className="signup-img pt-1"> 
              </div>
                <div className="signup-form pt-5">
                    <h1 className="heading">REQUEST</h1>
                    <form method="POST" className="register-form" id="register-form">
                        <div className="form-row">
            <div className="form-group">
                <div className="form-input">
                    <label for="first_name" className="required">First name</label>
                    <input  onkeydown="return /[a-z]/i.test(event.key)" id="Patient_name"  name="first_name" placeholder="Enter your name" required />
                </div>
                <p id="patient_name_error"></p>
                <div className="form-input mt-2">
                    <label for="email" className="required">Email</label>
                    <input id="patient_email" name="email"  type="email" placeholder="Enter your email" required  />
                </div>
                <p id="patient_email_error"></p>

                <div className="form-input">
                    <div className="label-flex">
                        <label for="blood-group" className="required">Blood Group</label>
                    </div>
                    
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
                    
                </div>
                <p id="patient_blood_error"></p>
                <div className="form-input">
                    <label for="no_of_units" className="required">No Of Units Required</label>
                
                    <input id="no_of_units" type="number" placeholder="Enter No of units required" required/>
                 </div>
                 <p id="patient_units_error"></p>
            </div>

            <div className="form-group">
                <div className="form-input">
                    <label for="first_name" className="required">AGE</label>
                    <input type ="number" id="patient_dob"  name="first_name" placeholder="Enter your age" required />
                </div>
                <p id="patient_dob_error"></p>
                <div className="form-input mt-2">
                    <label for="phone_number" className="required">Phone number</label>
                    <input id="patient_phone" type="tel" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength="10" maxlength="10" placeholder="Enter your number" name="phone_number"  required />
                </div>
                <p id="patient_phone_error"></p>


                <div className="form-input mt-2">
                    <label for="DOB" className="required">REQUIRED DATE</label>
                    <input name="DOB" id="required_date" type="date" placeholder="Date of Birth" required />
                    </div>
                    <p id="patient_required_error"></p>

            <div className="form-input mt-2">
            <div className="label-flex ">
            <label for="payment" className="required" >Gender</label>
            </div>  
            <select  id="PGender" >
            <option>Enter Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>    
            </select>
                                  
            </div>            
            </div>

            <p id="patient_gender_error"></p>
            </div>
            <div className="form-input ml-4  col-12 ">
                <label for="pur" className="required address">Purpose </label>
         <textarea 
         name="pur"  
         id="purpose_request" 
         className="col-11" 
         placeholder="Enter the purpose">

         </textarea>

            </div>
             <p id="patient_purpose_error"></p>
             

             
           
                       
                        <div className="form-submit mt-3 ">
                             <input className="submit" id="submit_request" type="submit" value="Submit" />   
                        </div>
                    </form>
                </div>
            </div>    
</div>
</div> 
    </div>
  )
}
