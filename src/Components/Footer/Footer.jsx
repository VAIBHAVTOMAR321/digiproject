import React from 'react'
import "./Footer.css"
import facebook from '../Assets/facebook_icon.png'
import twitter from '../Assets/twitter_icon.png'
import linkedin from '../Assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer_content">
            <div className="content_left">
                <h2>Web And Wander Solutions</h2>
                <p>Web And Wander Solutions is dedicated to providing top-notch digital marketing and web development services. Our mission is to help businesses grow and succeed in the digital world through innovative solutions and expert guidance.</p>
                <div className="footer_social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="footer_content_center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer_content_right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 8766219989</li>
                    <li>webwandersolution@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer_copyright">Copyright 2024 @Company. All right Reserved</p>
    </div>
  )
}

export default Footer