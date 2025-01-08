import React from 'react'
import { FaTwitter ,  FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

import './index.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-social-media-container'>
      <div className ="follow-us-section pt-5 pb-5">
      <div className ="container">
        <div className ="row">
          <div className ="col-12">
            <h1 className ="follow-us-section-heading">Follow Us</h1>
          </div>
          <div className ="col-12">
            <div className ="d-flex flex-row justify-content-center">
              <div className ="follow-us-icon-container">
                <i className ="fab fa-twitter icon"><FaTwitter /></i>
              </div>
              <div className ="follow-us-icon-container">
                <i className ="fab fa-instagram icon">
                <IoLogoInstagram />
                </i>
              </div>
              <div className ="follow-us-icon-container">
                <i className ="fab fa-facebook icon">
                  <FaFacebookF />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      </div>
      <div className='footer-content'>
      <p className='footer-description'>Copyright &copy; 2021 My Website. All rights reserved.</p>
      <p className='footer-description'>Powered by React</p>
      <p className='footer-description'>Designed by Me</p>
      <p className='footer-description'>Email:  contact@example.com</p>
      <p className='footer-description'>Phone: 123-456-7890</p>
      <p className='footer-description'>Address: 123 Main St, Anytown, USA</p>
      <p className='footer-description'>Hours: Monday - Friday: 9:00 AM - 5:00 PM</p>

      </div>

    </div>
  )
}

export default Footer