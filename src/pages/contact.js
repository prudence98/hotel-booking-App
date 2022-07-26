import React from 'react'
import '../styles/contact.css'

function Contact() {
  return (
    <div>
      <div class="container">
         <h2>Thank you for visiting us... How can we help you</h2>
      <div>
      <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="country">Location</label>
    <select id="country" name="country">
      <option value="Pretoria">Pretoria</option>
      <option value="Capetown">Capetown</option>
      <option value="Durban">Durban</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    <input type="submit" value="Submit"></input>  
      </div>
    
</div>
    </div>
  )
}

export default Contact;
