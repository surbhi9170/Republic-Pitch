import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="text-center">About Peak Ski Company</h1>
      <div className="about-content mt-4">
        <div className="about-section">
          <ul>
            <li>
              <p className="text-secondary">Legal Name</p>
              <span>Peak Ski Company, LLC</span>
            </li>
            <li>
              <p className="text-secondary">Founded</p>
              <span>Jul 2021</span>
            </li>
            <li>
              <p className="text-secondary">Form</p>
              <span>Montana LLC</span>
            </li>
          </ul>
        </div>
        <div className="about-section">
          <ul>
            <li>
              <p className="text-secondary">Employees</p>
              <span>12</span>
            </li>
            <li>
              <p className="text-secondary">Website</p>
              <a href="https://www.peakskis.com">peakskis.com</a>
            </li>
            <li>
              <p className="text-secondary">Social Media</p>
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
            </li>
          </ul>
        </div>
        <div className="about-section">
          <ul>
            <li>
              <p className="text-secondary">Headquarters</p>
              <div className="google-map">
                <iframe
                  title="Peak Ski Company Location"
                  width="100%"
                  height="200px"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.2266463902296!2d-111.0404856843777!3d45.661135079102076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53456f78b6cb4487%3A0xd231027861ad97e4!2s245%20Quail%20Run%20Rd%2C%20Bozeman%2C%20MT%2059702%2C%20USA!5e0!3m2!1sen!2suk!4v1649923189458!5m2!1sen!2suk"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
