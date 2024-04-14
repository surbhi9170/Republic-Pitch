import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo Column */}
        <div className="footer-section logo-section">
          <img src="your-logo.png" alt="Company Logo" />
          <h1>Republic</h1>
          <p>Giving everyone access to early-stage startup investing</p><br></br>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>For Investors</h3>
          <ul>
            <li>
              <a href="#">Why Invest</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Risks</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Form CRS</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>For Startups</h3>
          <ul>
            <li>
              <a href="#">Why Raise</a>
            </li>
            <li>
              <a href="#">Learn</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Instruments</a>
            </li>
            <li>
              <a href="#">Crowd SAFE</a>
            </li>
            <li>
              <a href="#">Tokenized Assets</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Crypto</h3>
          <ul>
            <li>
              <a href="#">For Investors</a>
            </li>
            <li>
              <a href="#">For Companies</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Token DPA</a>
            </li>
            <li>
              <a href="#">Tokenization</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">We're Hiring!</a>
            </li>
            <li>
              <a href="#">Refer a Startup, Get $2,500</a>
            </li>
            <li>
              <a href="#">
                Invest in the App
                <div className="app-links">
                  <img src="android-icon.png" alt="Android App" />
                  <img src="ios-icon.png" alt="iOS App" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-disclaimer">
        {/* Add your disclaimer content here */}
      </div>
    </footer>
  )
}

export default Footer
