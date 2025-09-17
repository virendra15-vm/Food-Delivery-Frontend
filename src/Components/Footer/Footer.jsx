import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos reprehenderit obcaecati! Nisi velit quam explicabo quibusdam. Possimus, alias sit! Quaerat assumenda eligendi est blanditiis maiores nulla corporis asperiores soluta!</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+19-212-345-9878</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">© 2025 tomato.com. All rights reserved.</p>
    </div>
  )
}

export default Footer