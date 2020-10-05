import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"
import "../components/layout.css"
import { Row, Col, Container, Card } from "react-bootstrap"

import Tariq from "../images/about-us-tariq.png"
import Deralyn from "../images/about-us-deralyn.png"
import Shain from "../images/about-us-shain.png"
import Jeremiah from "../images/about-us-jeremiah.png"
import Hamza from "../images/about-us-hamza.png"

const AboutUsPage = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="Hero-AboutUs Hero">
      <Row>
        <Col xs={12} sm={12} md={{ offset: 2, span: 10 }} lg={{ offset: 4, span: 5 }}>
          <div className="HeroGroup">
            <h1>About Us</h1>
            <p className="description">
              BlockchainGSU is a collective of students at GSU who believe in financial freedom thrpugh the use of Cryptocurrency and the 
              utilization of Blockchain technologies in their various fields of interest! We pride ourselves in offering free, high quality, 
              and engaging events for anyone interested in learning about this new engaging space. We also strive to deliver our members/community 
              the resources necessary to breakout and get ahead of the curve. 
            </p>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/blockchaingsu/about/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
            </a>
            <a target="_blank" href="https://www.instagram.com/gsublockchain/">
              <FontAwesomeIcon icon={faInstagram} size="3x" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCUqBF-dLJDR2oe0GeicKVnA"
            >
              <FontAwesomeIcon icon={faYoutube} size="3x" />
            </a>
            <a target="_blank" href="https://twitter.com/blockchaingsu">
              <FontAwesomeIcon icon={faTwitter} size="3x" />
            </a>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Card className="about-us-cards">
              <Card.Img src={Tariq} alt="Card image" />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Card className="about-us-cards">
              <Card.Img src={Deralyn} alt="Card image" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Card className="about-us-cards">
              <Card.Img src={Shain} alt="Card image" />
            </Card>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Card className="about-us-cards">
              <Card.Img src={Jeremiah} alt="Card image" />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <Card className="about-us-cards">
              <Card.Img src={Hamza} alt="Card image" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default AboutUsPage
