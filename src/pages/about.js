import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import "../components/layout.css"
import { Row, Col, Container } from "react-bootstrap";

const AboutUsPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="Hero-AboutUs Hero">
        <Row>
          <Col sm={12} md={7} lg={5}>
            <div className="HeroGroup">
              <h1>About Us</h1>
              <p className="description">We do a whole lot of cool stuff. But this is really just a paragraph to simulate what our real about us would look like.</p>
              <a target="_blank" href="https://www.instagram.com/enigsu/?hl=en"><FontAwesomeIcon icon={faInstagram} size="4x"/></a>
              <a target="_blank" href="https://twitter.com/blockchaingsu"><FontAwesomeIcon icon={faYoutube} size="4x"/></a>
              <a target="_blank" href="https://twitter.com/blockchaingsu"><FontAwesomeIcon icon={faTwitter} size="4x"/></a>
            </div>
          </Col>
          <Col xs={{span: 7, offset: 1}} sm={{span: 8, offset: 1}} md={{span: 10, offset: 1}} lg={{span: 6, offset: 1}}>
              <Row>
                <Col sm={10} md={10} lg={8}>
                    <div className="about-us-content">
                        <h2>Tariq Waseem</h2>
                        <h3>BCGSU</h3>
                        <p>This guy is cool as heck really awesome chill guy. Lowkey weird sometimes but he cool.</p>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col sm={10} md={10} lg={8}>
                  <div className="about-us-content">
                      <h2>Ryan Sims</h2>
                      <h3>BCGSU</h3>
                      <p>This guy is also cool as heck reall chill guy.</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={10} md={10} lg={8}>
                  <div className="about-us-content">
                      <h2>Deralyn Swiley</h2>
                      <h3>BCGSU</h3>
                      <p>This gal is cool as heck reall awesome chill gal.</p>
                  </div>
                </Col>
              </Row>
          </Col>
        </Row>
      </div>
  </Layout>
)

export default AboutUsPage