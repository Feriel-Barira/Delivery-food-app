import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=""/>
                <p>By combining formal education, online courses, hands-on projects, and staying updated through research papers and conferences, you'll be well on your way to mastering AI and ML.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+291845480000</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
            <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved. </p>
    </div>
  )
}

export default Footer