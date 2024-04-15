import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import { Tab, TabContainer, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './home.css'
import Pitch from './Pitch'
import Updates from './Updates'
import Reviews from './Reviews'

import 'react-awesome-slider/dist/styles.css'

function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider)

  return (
    <>
      <div className="container-fluid">
        {/* First Part: Company Profile */}
        <div id="companyprofile" className="container-fluid">
          <div className="home container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <img src="your-logo.png" alt="Company Logo" />
                <h1>Peak Ski Company</h1>
                <h6>
                  Revolutionary skis with proprietary technology by Olympian
                  Bode Miller
                </h6>

                <AutoplaySlider
                  play={true}
                  cancelOnInteraction={false}
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
              <div className="col-lg-4 col-md-12 col-sm-12 p-4">
                <div className="mt-4 ml-4 funding-status ">
                  <div className="green">FULLY FUNDED</div>

                  <h1 className="mt-4">
                    <b>$1,235,000</b>
                  </h1>
                  <span>Raised</span>

                  <h2 className="mt-4">
                    <b>560</b>
                  </h2>
                  <span>Investors</span>
                </div>
                <div className="mt-4 ml-4">
                  <hr></hr>

                  <h4 className="successfund mt-4 text-secondary">
                    Successfully funded and closed on February 27, 2024.
                  </h4>

                  <button
                    type="button"
                    className="invest_b btn btn-primary mt-4"
                  >
                    Invest in Peak Ski Company
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Part: Tabbed Content */}
        <div id="pitch" className="container-fluid bg-light">
          <TabContainer id="tabs-container" defaultActiveKey="pitch">
            <Nav className="nav nav-tabs">
              <Nav.Item>
                <Nav.Link
                  eventKey="pitch"
                  className="nav-link"
                  aria-current="page"
                >
                  Pitch
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="updates" className="nav-link">
                  Updates
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reviews" className="nav-link">
                  Reviews
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="pitch">
                <Pitch />
              </Tab.Pane>
              <Tab.Pane eventKey="updates">
                <Updates />
              </Tab.Pane>
              <Tab.Pane eventKey="reviews">
                <Reviews />
              </Tab.Pane>
            </Tab.Content>
          </TabContainer>
        </div>
      </div>
    </>
  )
}

export default Home
