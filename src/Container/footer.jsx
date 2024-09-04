import React from 'react'
import './footer.css'
import logo from './images/Screenshot 2024-08-17 124043.png'

export default function Footer() {
  return (
    <div className='footer'>
        <h1>Do you want to step into the future before others?</h1>
        <div className='request'><a href='www.carv.io'>Request Early Access</a></div>
        <div className='footer_services'>
            <div>
                <img src={logo} alt='logo'/>
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>

            </div>
            <ul>
                <li><b>Links</b></li>
                <li>Overons</li>
                <li>Social Media</li>
                <li>Counters</li>
                <li>Contacts</li>

            </ul>
            <ul>
            <li><b>Company</b></li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact</li>

            </ul>
            <ul>
            <li><b>Get in touch</b></li>
            <li>Crechterwoord K12 182 DK Alknjkcb</li>
            <li>085-132567</li>
            <li>info@payme.net</li>
            </ul>
        </div>
        <p className='reserved'>© 2024 piagroup.inc</p>
    </div>
  )
}
