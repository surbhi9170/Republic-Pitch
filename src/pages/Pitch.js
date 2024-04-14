import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import './pitch.css'
import About from './About'
import Team from './Team'

function Pitch() {
  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">Highlights</h1>
      <Row className="mb-4">
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Huge Market</Card.Title>
              <Card.Text>
                1M skis sold in the US annually + another 2.2M in Europe.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Strong Year One Performance</Card.Title>
              <Card.Text>
                4k+ skis sold, $3M in revenue + 5-star reviews.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Bode Miller's "Q Rating"</Card.Title>
              <Card.Text>Highest of any winter athlete in the world.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4 mb-md-0">
          <Card className="bg-light">
            <Card.Body>
              <Card.Title>Featured In</Card.Title>
              <Card.Text>
                Bloomberg, Forbes, Outside, Geekwire, Freeskier, Snow Magazine.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div class="container">
        <div class="row">
          <div class="col-8">
            <h1 className="text-left my-4">Opportunity</h1>
            <Row className="mb-4">
              <Col md={8}>
                <Card className="bg-light">
                  <Card.Body>
                    <Card.Text>
                      Invest in the Future of Skiing. Skis have existed for
                      thousands of years, but for too long their design for and
                      delivery to consumers has been stagnant.
                    </Card.Text>
                    <Card.Text>
                      Until now. Welcome to Peak Ski Company, the most
                      innovative, customer-focused, and forward-thinking ski
                      company on earth.
                    </Card.Text>
                    <Card.Text>
                      In 2022, former ski area CEO Andy Wirth and six-time
                      Olympian Bode Miller launched Peak Ski Company. Peak’s
                      goal is to reinvent your skis and the way you buy them. In
                      Year 1, Peak launched with its first six models of skis,
                      containing technology and construction that made them
                      perform unlike any other ski on the market. At the same
                      time, we also established the first “at-scale”
                      direct-to-consumer, e-commerce ski company, giving
                      consumers a more contemporary and entirely new way to
                      purchase skis.
                    </Card.Text>
                    <Card.Text>
                      We want every Peak model to outperform the top skis on the
                      market. To do that, we test them against the best of the
                      rest—repeatedly—from phase one prototypes, to early
                      production, to the final skis we send you.
                    </Card.Text>
                    <Card.Text>
                      Our patented KeyHole Technology™ and PEAK Loc8™ represent
                      just the initial steps in our journey to reshape the ski
                      industry. Our future strategic plans include a
                      comprehensive reengineering of the entire ski
                      manufacturing process and related machinery. Our goal? To
                      reduce energy consumption, increase production speed,
                      improve manufacturing precision, utilize environmentally
                      conscious materials, and introduce the ability to
                      repurpose the materials from retired skis.
                    </Card.Text>
                    <Button variant="primary">Invest Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div className="row mt-4">
              <div className="col-8">
                <img
                  src="./images/graph.png"
                  alt="Opportunity Image"
                  className="img-fluid"
                />
              </div>
            </div>

            <h1 className="text-left my-4">Product</h1>
            <Row className="mb-4">
              <Col md={8}>
                <Card className="bg-light">
                  <Card.Body>
                    <Card.Title>
                      Unique Design. Revolutionary Technology.
                    </Card.Title>
                    <Card.Text>
                      Peak Skis incorporates Bode Miller's 30 years of design
                      acumen into a quiver of ripping all-mountain skis.
                    </Card.Text>
                    <Card.Text>
                      Our core products for the 2023/24 winter season include
                      skis designed for skiers in every region.
                    </Card.Text>
                    <Card.Text>
                      Peak's Proprietary Technology: KeyHole Technology™ -
                      unique below-the-surface cutaway discovered by Bode
                      Miller.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* The Competition Section */}
            <h1 className="text-left my-4">The Competition</h1>
            <Row className="mb-4">
              <Col md={8}>
                <Card className="bg-light">
                  <Card.Body>
                    <Card.Text>
                      The ski market, particularly in North America, is
                      dominated by European-based, large-scale manufacturers.
                      Most of these companies produce high-quality skis but
                      haven’t focused on developing and funding strategic-level
                      ski innovation.
                    </Card.Text>
                    <Card.Text>
                      We aim to capitalize on market opportunities resulting
                      from low levels of innovation in the industry. Peak has
                      achieved great results in our first year, led by our
                      award-winning line of 22/23 skis.
                    </Card.Text>
                    <Card.Text>
                      Join us in this movement. Investing in Peak Ski Company is
                      a unique opportunity to become an integral part of a ski
                      company that's driving dramatic levels of innovation.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="row mt-4">
              <div className="col-8">
                <img
                  src="./images/skicomInvest.png"
                  alt="Investment Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="deal-terms">
              <h2 class="deal-heading">Deal Terms</h2>
              <div class="deal-term">
                <strong>Valuation Cap:</strong>
                <br></br>
                <span>$36,000,000</span>
                <button class="info-button" title="Learn more">
                  ℹ️
                </button>
                <p class="info-text">
                  The maximum valuation at which your investment converts into
                  equity shares or cash.
                </p>
              </div>
              <div class="deal-term">
                <strong>Minimum Investment:</strong>
                <br></br>
                <span>$250</span>
                <button class="info-button" title="Learn more">
                  ℹ️
                </button>
                <p class="info-text">
                  The smallest investment amount that Peak Ski Company is
                  accepting.
                </p>
              </div>
              <div class="deal-term">
                <strong>Maximum Investment:</strong>
                <br></br>
                <span>$124,000</span>
                <button class="info-button" title="Learn more">
                  ℹ️
                </button>
                <p class="info-text">
                  The largest investment amount that Peak Ski Company is
                  accepting.
                </p>
              </div>
              <div class="deal-term">
                <strong>Funding Goal:</strong>
                <br></br>
                <span>$1.24M</span>
                <button class="info-button" title="Learn more">
                  ℹ️
                </button>
                <p class="info-text">
                  Peak Ski Company must achieve its minimum goal of $100K before
                  the deadline. The maximum amount the offering can raise is
                  $1.24M.
                </p>
              </div>
              <div class="deal-term">
                <strong>Deadline:</strong>
                <br></br>
                <span>February 27, 2024</span>
                <button class="info-button" title="Learn more">
                  ℹ️
                </button>
                <p class="info-text">
                  Peak Ski Company needs to reach their minimum funding goal
                  before the deadline (February 27, 2024 at 1:29 PM IST). If
                  they don’t, all investments will be refunded.
                </p>
              </div>
              <div class="deal-term">
                <strong>Type of Security:</strong>
                <br></br>
                <span>Crowd SAFE</span>
                <button class="info-button" title="Learn more">
                  ℹ️
                </button>
                <p class="info-text">
                  A SAFE allows an investor to make a cash investment in a
                  company, with rights to receive certain company stock at a
                  later date, in connection with a specific event.
                </p>
              </div>
            </div>

            <div class="bonus-perks">
              <div class="perk-item">
                <h3>Invest $500</h3>
                <p>Receive:</p>
                <ul>
                  <li>Peak Ski Company Hat</li>
                  <li>Peak Poster signed by Bode Miller</li>
                </ul>
                <p>Limited (29 left of 250)</p>
                <p>100 investors</p>
              </div>
              <div class="perk-item sold-out">
                <h3>Invest $1,000</h3>
                <p>Receive:</p>
                <ul>
                  <li>All bonus perks above</li>
                  <li>
                    A uniquely Peak branded insulated vest as curated with our
                    good friends at Stio
                  </li>
                </ul>
                <p>Sold out (0 left of 100)</p>
                <p>99 investors</p>
              </div>
              <div class="perk-item">
                <h3>Invest $2,500</h3>
                <p>Receive:</p>
                <ul>
                  <li>All bonus perks above</li>
                  <li>
                    Exclusive 15% Value Discount against any one-time purchase
                  </li>
                  <li>Custom Peak Brand Carbon Fiber Ski Poles</li>
                </ul>
                <p>Limited (1 left of 100)</p>
                <p>Investors: 1</p>
              </div>
              <div class="perk-item">
                <h3>Invest $5,000</h3>
                <p>Receive:</p>
                <ul>
                  <li>All bonus perks above</li>
                  <li>
                    Exclusive 20% exclusive value discount against any two
                    transactions
                  </li>
                </ul>
                <p>Investors: 22</p>
              </div>
              <div class="perk-item">
                <h3>Invest $15,000</h3>
                <p>Receive:</p>
                <ul>
                  <li>All bonus perks above</li>
                  <li>Two pairs of 2023-24 Peak Skis</li>
                  <li>
                    A private tour of Peak Headquarters / Development Group
                    Innovation Center
                  </li>
                </ul>
                <p>Limited (28 left of 50)</p>
                <p>Investors: 1</p>
              </div>
              <div class="perk-item">
                <h3>Invest $50,000</h3>
                <p>Receive:</p>
                <ul>
                  <li>All bonus perks above</li>
                  <li>
                    Day of skiing with Bode Miller, JT Holmes, Chris Davenport
                    and/or Michelle Parker
                  </li>
                </ul>
                <p>Limited (9 left of 10)</p>
                <p>Investors: 1</p>
              </div>
              <div class="perk-item">
                <h3>Invest $100,000</h3>
                <p>Receive:</p>
                <ul>
                  <li>All bonus perks above</li>
                  <li>Semi-private day of skiing with Bode Miller</li>
                </ul>
                <p>Limited (1 left of 2)</p>
                <p>Investors: 1</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 class="product-heading">Product</h3>
            <div class="product-line"></div>
            <h1 className="text-center my-4">
              Unique Design. Revolutionary Technology.
            </h1>
            <div class="product-details">
              <p class="medium-text">
                Peak Skis incorporates Bode Miller's 30 years of design acumen
                into a quiver of ripping all-mountain skis.
              </p>
              <div className="row mt-4">
                <div className="col-12">
                  <img
                    src="./images/product.png"
                    alt="Opportunity Image"
                    className="img-fluid"
                  />
                </div>
              </div>

              <p class="medium-text">
                Our core products for the 2023/24 winter season include skis
                designed for skiers in every region. For skiers in the Sierras
                of California, where wider skis tend to dominate the landscape.
                For the Rocky Mountain Region, where groomed trails, as well as
                deep powder, are key considerations. And for the eastern part of
                the U.S. and the EU market, which tend to gravitate to a
                narrower ski.
              </p>
            </div>
          </div>

          <h2 class="technology-heading text-secondary">
            PEAK'S PROPRIETARY TECHNOLOGY
          </h2>

          <div className="col-6">
            <div className="mt-4 technology-details">
              <h3 class="technology-subheading">KeyHole Technology™</h3>
              <p>
                All Peak skis feature our innovative, proprietary KeyHole
                Technology, which is a unique below-the-surface cutaway
                discovered by Bode Miller during his racing days.
              </p>
              <p>
                PEAK Lôc8 provides users with the ability to locate their Peak
                skis using their mobile device. Compatible with Apple iOS and
                Android platforms and featuring wireless external recharging,
                Peak’s revolutionary PEAK Lôc8 technology makes locating your
                skis as simple as looking at your phone. With PEAK Lôc8, we have
                integrated a state-of-the-art tracking device right into the
                construction of your skis. Whether you are searching for your
                skis in deep snow, forgetting where you've placed your skis on a
                busy day at the resort, or following your skis while flying to
                your favorite ski destination, PEAK Lôc8 ensures you can always
                track down your skis.
              </p>
              <p>
                Our announcement of PEAK Lôc8 has garnered over 5M impressions
                in earned media. Public response has also been extremely
                favorable. Within 45 days of launch, four major winter sports
                manufacturers have contacted the Company with interest in
                licensing PEAK Lôc8.
              </p>
              <blockquote>
                <p>
                  <i>
                    “I believed that if I could incorporate that thinking…that
                    design into consumer skis, it would make skiing easier and
                    more accessible for many more people. At the same time, it
                    would make the skis more fun and versatile for expert
                    skiers.” - Bode Miller
                  </i>
                </p>
              </blockquote>
            </div>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/z_CESPn4p3w?si=XerYnp9ejHIV_8Tt"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className="col-6">
            <div className="mt-4 technology-details">
              <h3 class="technology-subheading">Revolutionary PEAK Loc8™</h3>
              <p>
                In 2023, Peak introduced another groundbreaking patented
                innovation – PEAK Lôc8, a first-of-its-kind locating and
                tracking device that will be embedded within our line of
                innovative skis in 2024.
              </p>
              <p>
                Bode had been contemplating the design of the skis since 2004,
                when a manufacturing flaw in a pair of giant slalom skis helped
                him win three World Cup GS races that season and clinch his only
                overall title in that discipline. The difference? A mistake made
                by a technician that included a cutout in one of the layers of
                the ski, just in front of the binding’s toe piece. The mistaken
                cutout resulted in making turn initiation easier but didn’t
                impact the ski’s torsional rigidity, which is central to
                allowing a ski to hold an edge.
              </p>

              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/Y_ZCU-JdZBY?si=qi21LiZViU8CS42w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p>
                Now, after years of extensive design and engineering, Peak has
                been able to build the consumer version of Bode’s dream skis.
                The KeyHole Technology makes the tips of the skis softer and
                conforms to the terrain which subsequently helps skiers initiate
                turns more easily and gives them enhanced control, stability,
                and confidence.
              </p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <img
                src="./images/news.png"
                alt="Investment Image"
                className="img-fluid"
              />
            </div>
          </div>

          <div class="accolades-awards text-center mt-4">
            <h2 class="product-heading">SKI ACCOLADES & AWARDS</h2>
            <p>
              Based on research, 71% of skiers are most likely to get their
              information on skis from gear reviews, both online and in
              magazines, over friends and family, ski shops, coaches, or ski
              instructors. The annual results from industry ski tests and gear
              guides from around the world have published and in its first year,
              Peak Ski Company is earning outsized levels of ratings and
              write-ups across all models.
            </p>
            <blockquote>
              <p>
                <i>
                  “This has never happened. No company comes out and hits a home
                  run in its first year. It’s unprecedented. Even when
                  established companies enter new models, those new models
                  typically don’t do this well in the ski tests. It would take
                  years for them to develop and refine their skis.”
                </i>{' '}
                - Dave Currier, a former World Cup ski racer and ski tester for
                more than 20 years
              </p>
            </blockquote>
            <div className="row mt-4">
              <div>
                <img
                  src="./images/awards.png"
                  alt="award Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="product-heading">Traction</h3>
            <div className="product-line"></div>
            <h1 className="text-center my-4">Year One's Successes</h1>
            <div className="row">
              <div className="col-8">
                <div className="product-details">
                  <p className="medium-text">
                    After its inaugural year, Peak has solidified its position
                    as a premier contender in the fiercely competitive global
                    ski market, demonstrating a proven track record that points
                    to a trajectory of remarkable success. Peak yielded
                    unprecedented favorable ratings across all the major and
                    highly-influential ski product review outlets. Due to the
                    exceptional ski test results, Peak was able to secure the
                    coveted cover placement on Outside Magazine's Winter Gear
                    Guide.
                  </p>
                  <p className="medium-text">
                    Peak has also established an engaged and passionate
                    community of customers. These customers have consistently
                    offered high praise, ratings, and reviews, contributing to
                    an exceptional customer loyalty measurement.
                  </p>
                  <p className="medium-text">
                    In its first year, Peak achieved the following milestones:
                  </p>
                  <ul className="medium-text">
                    <li>
                      <b>Extensive PR Reach:</b> Over 50 prime media features
                      spanning from Bloomberg and Forbes to Outside and Snow
                      Magazine, resulting in more than 125 million qualified
                      impressions.
                    </li>
                    <li>
                      <b>Substantial and Engaged Social Media Following:</b> A
                      strong presence with over 550,000 combined followers,
                      including accounts associated with the Peak Team members.
                      Peak also consistently outranks our long-established
                      competitors in social engagement growth.
                    </li>
                    <li>
                      <b>Strong sales:</b> Strong sales in year one equated to
                      over 4,000 skis sold and $3M in revenue. Sales were not
                      confined to the United States but spanned countries and
                      continents including Europe, Canada, Australia, and New
                      Zealand.
                    </li>
                    <li>
                      <b>High Net Promoter Score:</b> Earned a strong score of
                      73, reflecting a deep level of trust and customer
                      satisfaction. By way of comparison, according to a study
                      conducted by NPS Benchmarks, the average NPS for
                      e-commerce companies in North America was 30 in 2020.
                    </li>
                    <li>
                      <b>Consistent 5-Star Reviews:</b> Peak's community of
                      customers consistently delivers glowing praise, 5-star
                      ratings, and reviews across all platforms and channels.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <div className="mag">
                  <img
                    src="./images/mag.png"
                    alt="Opportunity Image"
                    className="img-fluid"
                    id="magImage"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="product-heading">
              <strong>Vision and Strategy</strong>
            </h3>
            <div className="product-line"></div>
            <h1 className="text-center my-4">
              Nonstop innovation, EU Expansion
            </h1>

            <div className="row centered-image">
              <h5 className="text-secondary">STRATEGIC INITIATIVES</h5>
              <div className="product-details">
                <p className="medium-text">
                  Developing industry-leading skis in our first year was the
                  first (and very important!) element of our vision and plans
                  for Peak. Our bold strategic vision, however, includes
                  executing on several other globally impactful strategic
                  initiatives.
                </p>
                <div className="vision-container">
                  <img
                    src="./images/vision.png"
                    alt="Opportunity Image"
                    className="img-fluid"
                    id="visionimage"
                  />
                </div>
              </div>
            </div>

            <div className="row aboutp">
              <About />
            </div>

            <div className="row ">
              <Team />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Pitch
