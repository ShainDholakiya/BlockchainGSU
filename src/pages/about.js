import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import "../components/layout.css"
import { Row, Col, Container } from "react-bootstrap";

const AboutUsPage = () => (
  <Layout>
    <SEO title="About Us" />
      <div className="Hero-AboutUs Hero">
        <Row>
          <Col sm={12} md={7} lg={5}>
            <div className="HeroGroup">
              <h1>About Us</h1>
              <p className="description">We do a whole lot of cool stuff. But this is really just a paragraph to simulate what our real about us would look like.</p>
              <a target="_blank" href="https://www.linkedin.com/company/blockchaingsu/about/"><FontAwesomeIcon icon={faLinkedinIn} size="4x"/></a>
              <a target="_blank" href="https://www.instagram.com/gsublockchain/"><FontAwesomeIcon icon={faInstagram} size="4x"/></a>
              <a target="_blank" href="https://www.youtube.com/channel/UCUqBF-dLJDR2oe0GeicKVnA"><FontAwesomeIcon icon={faYoutube} size="4x"/></a>
              <a target="_blank" href="https://twitter.com/blockchaingsu"><FontAwesomeIcon icon={faTwitter} size="4x"/></a>
            </div>
          </Col>
          <Col xs={{span: 7, offset: 1}} sm={{span: 8, offset: 1}} md={{span: 10, offset: 1}} lg={{span: 6, offset: 1}}>
              <Row>
                <Col sm={10} md={10} lg={8}>
                    <div className="about-us-content">
                        <h2>Tariq Waseem</h2>
                        <h3>Founder and CEO</h3>
                        {/* <h3>Class of 2021</h3> */}
                        <p>Tariq is studying Interdisciplinary Studies in Media Entrepreneurship with a focus in Project Management.</p>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col sm={10} md={10} lg={8}>
                  <div className="about-us-content">
                      <h2>Jeraldo Akinboro</h2>
                      <h3>COO</h3>
                      {/* <h3>Class of 2021</h3> */}
                      <p>Jeraldo is studying Interdisciplinary Studies in Media Entrepreneurship with a focus in Graphic Design.</p>
                  </div>
                </Col>
              </Row>
              <Row className="about-us-content">
                <Col sm={10} md={10} lg={8}>
                  <div className="about-us-content">
                      <h2>Shain Dholakiya</h2>
                      <h3>CTO</h3>
                      {/* <h3>Class of 2021</h3> */}
                      <p>Shain is studying Computer Science with a focus in Database and Knowledge-Based Systems with a minor in Economics.</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={10} md={10} lg={8}>
                  <div className="about-us-content">
                      <h2>Deralyn Swiley</h2>
                      <h3>CIO</h3>
                      {/* <h3>Class of 2023</h3> */}
                      <p>Deralyn is studying Marketing with a focus in Entertainment Marketing, Management, and Entrepreneurship.</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={10} md={10} lg={8}>
                  <div className="about-us-content-last">
                      <h2>Fatima Darbo</h2>
                      <h3>CMO</h3>
                      {/* <h3>Class of 2021</h3> */}
                      <p>Fatima is studying Managerial Science with a focus in Management and Business Analytics.</p>
                  </div>
                </Col>
              </Row>
          </Col>
        </Row>
      </div>
  </Layout>
)

export default AboutUsPage