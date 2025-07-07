import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Stay tune and get the latest update</h1>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding '>
          <div className='box logo'>
            <h1>GrowMyTherapy</h1>
            <span>Illuminating Online Success for Therapists</span>
            <p>Schedule a call to discover how an optimized website and effective marketing startegy can help your practice grow. </p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore Us</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Have some Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                India
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 1010101010
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@grow.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Made with <i className='fa fa-heart'></i> by MB
        </p>
      </div>
    </>
  )
}

export default Footer
