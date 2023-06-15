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
    <>        
    <div class="main col-12" id="section-main">
        <div class="container mt-0">
            <div class="signup-content">
                <div class="signup-img pt-1"> 
              </div>
                <div class="signup-form">
                    <h1 class="heading">REQUEST</h1>
                    <form method="POST" class="register-form" id="register-form">
                        <div class="form-row">
            <div class="form-group">
                <div class="form-input">
                    <label for="first_name" class="required">First name</label>
                    <input  onkeydown="return /[a-z]/i.test(event.key)" id="Patient_name"  name="first_name" placeholder="Enter your name" required />
                </div>
                <p id="patient_name_error"></p>
                <div class="form-input mt-2">
                    <label for="email" class="required">Email</label>
                    <input id="patient_email" name="email"  type="email" placeholder="Enter your email" required  />
                </div>
                <p id="patient_email_error"></p>

                <div class="form-input">
                    <div class="label-flex">
                        <label for="blood-group" class="required">Blood Group</label>
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
                <div class="form-input">
                    <label for="no_of_units" class="required">No Of Units Required</label>
                
                    <input id="no_of_units" type="number" placeholder="Enter No of units required" required/>
                 </div>
                 <p id="patient_units_error"></p>
            </div>

            <div class="form-group">
                <div class="form-input">
                    <label for="first_name" class="required">AGE</label>
                    <input type ="number" id="patient_dob"  name="first_name" placeholder="Enter your age" required />
                </div>
                <p id="patient_dob_error"></p>
                <div class="form-input mt-2">
                    <label for="phone_number" class="required">Phone number</label>
                    <input id="patient_phone" type="tel" onkeypress='return event.charCode >= 48 && event.charCode <= 57' minlength="10" maxlength="10" placeholder="Enter your number" name="phone_number"  required />
                </div>
                <p id="patient_phone_error"></p>


                <div class="form-input mt-2">
                    <label for="DOB" class="required">REQUIRED DATE</label>
                    <input name="DOB" id="required_date" type="date" placeholder="Date of Birth" required />
                    </div>
                    <p id="patient_required_error"></p>

            <div class="form-input mt-2">
            <div class="label-flex ">
            <label for="payment" class="required" >Gender</label>
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
            <div class="form-input ml-4  col-12 ">
                <label for="pur" class="required address">Purpose </label>
         <textarea 
         name="pur"  
         id="purpose_request" 
         class="col-11" 
         placeholder="Enter the purpose">

         </textarea>

            </div>
             <p id="patient_purpose_error"></p>
             

             
           
                       
                        <div class="form-submit mt-3 ">
                             <input class="submit" id="submit_request" type="submit" value="Submit" />   
                        </div>
                    </form>
                </div>
            </div>    
</div>
</div> 
    </>
  )
}
