import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Tab, TabContainer, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Pitch from './Pitch'
import Updates from './Updates'
import Reviews from './Reviews'

import 'react-awesome-slider/dist/styles.css'

function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider)

  return (
    <>
      <div class="container-fluid">
        {/* this is the first part */}
        <div id="companyprofile" class="container-fluid ">
          <div class="container">
            <div class="row">
              <div class="col-8">
                <img></img>
                <h1>Peak Ski Company</h1>
                <h6>
                  Revolutionary skis with proprietary technology by Olympian
                  Bode Miller
                </h6>

                <AutoplaySlider
                  play={true}
                  cancelOnInteraction={false} // should stop playing on user interaction
                  interval={5000}
                >
                  <div class="ratio vid">
                    <iframe
                      width="100%"
                      height="505"
                      src="https://www.youtube.com/embed/VVFWFRFIdsI?si=kRgNLL5-4ntJ2koh"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="ratio vid">
                    <iframe
                      width="100%"
                      height="505"
                      src="https://www.youtube.com/embed/FgzT3P84ysE?si=3C8gnLSqJJFF678d&amp;autoplay=1&start=6"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </AutoplaySlider>
              </div>
              <div class="col-4 p-4 ">
                <div className=" mt-4 ml-4">
                  <div className="green">FULLY FUNDED</div>

                  <h1 className="mt-4">
                    <b>$1,235,000</b>
                  </h1>
                  <span>Raised</span>

                  <h2 className="mt-4">
                    <b>560</b>
                  </h2>
                  <span>Investors</span>

                  <hr className="mt-4 mb-4"></hr>

                  <h4 className="mt-4 text-secondary">
                    Successfully funded and closed on February 27, 2024.
                  </h4>

                  <button type="button" class="invest_b btn btn-primary ">
                    Invest in Peak sky company
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* this the end of 1 part */}

        {/* start of 2nd part */}
        <div id="pitch" className="container-fluid bg-light">
      <TabContainer id="tabs-container" defaultActiveKey="pitch">
        <Nav className="nav nav-tabs">
          <Nav.Item>
            <Nav.Link eventKey="pitch" className="nav-link " aria-current="page">
              Pitch
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="updates" className="nav-link" >
              Updates
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews" className="nav-link" >
              Reviews
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="pitch">
            <Pitch/>
            {/* Add Pitch data display here */}
          </Tab.Pane>
          <Tab.Pane eventKey="updates">
            <Updates/>
            {/* Add Updates data display here */}
          </Tab.Pane>
          <Tab.Pane eventKey="reviews">
            <Reviews/>
            {/* Add Reviews data display here */}
          </Tab.Pane>
        </Tab.Content>
      </TabContainer>
      
    </div>
    
      </div>
    </>
  )
}

export default Home
