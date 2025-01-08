import React from 'react'
import './index.css'

 const ContactUs = () => {
  return (
    <div className='contact-container'>
        <h1 className='contact-heading'>Contact Us</h1>
        <form>
          <input type='text' placeholder='Name' /> <br/> <br/>
          <input type='email' placeholder='Email' /><br/> <br/>
          <textarea placeholder='Message' /> <br/> <br/>
          <button className='submit-button' type='submit'>Submit</button>
        </form>
        <p>Phone: (123) 456-7890</p>
        <p>Email:  info@example.com</p>
        <p>Address: 123 Main St, City, State, ZIP</p>
        <p>Hours: Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Sunday: Closed</p>

  

    </div>
  )

}
export default ContactUs