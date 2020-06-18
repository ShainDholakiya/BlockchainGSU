import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import "../components/layout.css"
import { Row, Col, Container } from "react-bootstrap";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const date = new Date().getMonth()

const CalendarPage = () => (
  <Layout>
    <SEO title="Calendar" />
    <div className="Hero Hero-Resources">
        <Row>
          <Col sm={{span: 8}} md={{span: 7}} lg={{span: 6}}>
            <div className="Calendar">
              <h1><u>{monthNames[date]}</u></h1>
            </div>
          </Col>
        </Row>
          <Col xs={{span: 10, offset: 1}} sm={{span: 10, offset: 1}} md={{span: 10, offset: 1}} lg={{span: 10, offset: 1}}>
              <Row className="about-us-content">
                <Col sm={10} md={10} lg={8}>
                    <div>
                        <h2>General Body Meeting</h2>
                        <h3>BCGSU</h3>
                        <p>Pull up for some vibes and good food.</p>
                    </div>
                </Col>
                <Col sm={2} md={2} lg={4}>
                    <div className="calendar-meeting-day">
                        <h2>Mon</h2>
                        <h2>12</h2>
                    </div>
                </Col>
              </Row>
              <Row className="about-us-content">
                <Col sm={10} md={10} lg={8}>
                    <div>
                        <h2>General Body Meeting</h2>
                        <h3>BCGSU</h3>
                        <p>Pull up for some vibes and good food.</p>
                    </div>
                </Col>
                <Col sm={2} md={2} lg={4}>
                    <div className="calendar-meeting-day">
                        <h2>Mon</h2>
                        <h2>12</h2>
                    </div>
                </Col>
              </Row>
              <Row className="about-us-content">
                <Col sm={10} md={10} lg={8}>
                    <div>
                        <h2>General Body Meeting</h2>
                        <h3>BCGSU</h3>
                        <p>Pull up for some vibes and good food.</p>
                    </div>
                </Col>
                <Col sm={2} md={2} lg={4}>
                    <div className="calendar-meeting-day">
                        <h2>Mon</h2>
                        <h2>12</h2>
                    </div>
                </Col>
              </Row>
          </Col>
      </div>
  </Layout>
)

export default CalendarPage