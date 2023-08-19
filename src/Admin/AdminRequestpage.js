import React from 'react'
import '../project_styles/AdminRequest.css'
import '../project_scripts/dashboard'

export default function AdminRequestPage(){
    return(
        <div className='admindonationbody'>
            <h1 className="Donation_details">REQUEST DETAILS</h1>
            <p className="select">Select blood group to view details</p>
            <div className="dropbtn">
            <select id="Blood_group_request" required>
                <option value="">Select the blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="Others">Others</option>
                <option value="all">All</option>
            </select>
            <button id="check_donate">Show Details</button>
            <div id="table_div">
            </div>
            </div>
        </div>
    )
}