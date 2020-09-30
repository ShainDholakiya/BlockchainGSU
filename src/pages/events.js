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

const EventsPage = () => (
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
          <Col xs={{span: 10, offset: 1}} sm={{span: 10, offset: 1}}  md={{span: 10, offset: 1}}  lg={{span: 10, offset: 1}} >
              <Row className="calendar-content">
                <Col xs={12} sm={8} md={8} lg={6}>
                    <div>
                        <h2>Mousebelt University Harmony - Guest Speaker</h2>
                        {/* <p>Pull up for some vibes and good food.</p> */}
                        <a target="_blank" href="https://zoom.us/meeting/register/tJYvdeytpjovHNHjzPb79HCLNfhqnSvJZSzU">Meeting Invitation</a>
                    </div>
                </Col>
                <Col xs={{span: 12, offset: 0}} sm={{span: 2, offset: 1}} md={{span: 2, offset: 1}} lg={{span: 2, offset: 2}}>
                    <div className="calendar-meeting-day">
                        <h2>Thu</h2>
                        <h2>1</h2>
                    </div>
                </Col>
              </Row>
              <Row className="calendar-content">
                <Col xs={12} sm={8} md={8} lg={6}>
                    <div>
                        <h2>Mousebelt University Harmony - Guest Speaker</h2>
                        {/* <p>Pull up for some vibes and good food.</p> */}
                        <a target="_blank" href="https://applications.zoom.us/addon/invitation/detail?meetingUuid=Qos8q4h4QdCnqR%2F85nCw4Q%3D%3D&signature=b37c369a9d60d67addbe2b0a23a21a00db903871d43f78e1dfe510cbfdfc84cb">Meeting Invitation</a>
                    </div>
                </Col>
                <Col xs={{span: 12, offset: 0}} sm={{span: 2, offset: 1}} md={{span: 2, offset: 1}} lg={{span: 2, offset: 2}}>
                    <div className="calendar-meeting-day">
                        <h2>Tue</h2>
                        <h2>6</h2>
                    </div>
                </Col>
              </Row>
              <Row className="calendar-content">
                <Col xs={12} sm={8} md={8} lg={6}>
                    <div>
                        <h2>Blockchain Use-Case Series</h2>
                        {/* <p>Pull up for some vibes and good food.</p> */}
                        <a target="_blank" href="">Meeting Invitation</a>
                    </div>
                </Col>
                <Col xs={{span: 12, offset: 0}} sm={{span: 2, offset: 1}} md={{span: 2, offset: 1}} lg={{span: 2, offset: 2}}>
                    <div className="calendar-meeting-day">
                        <h2>Mon</h2>
                        <h2>12</h2>
                    </div>
                </Col>
              </Row>
              <Row className="calendar-content">
                <Col xs={12} sm={8} md={8} lg={6}>
                    <div>
                        <h2>Mousebelt University Harmony - Guest Speaker</h2>
                        {/* <p>Pull up for some vibes and good food.</p> */}
                        <a target="_blank" href="https://applications.zoom.us/addon/invitation/detail?meetingUuid=Qos8q4h4QdCnqR%2F85nCw4Q%3D%3D&signature=b37c369a9d60d67addbe2b0a23a21a00db903871d43f78e1dfe510cbfdfc84cb">Meeting Invitation</a>
                    </div>
                </Col>
                <Col xs={{span: 12, offset: 0}} sm={{span: 2, offset: 1}} md={{span: 2, offset: 1}} lg={{span: 2, offset: 2}}>
                    <div className="calendar-meeting-day">
                        <h2>Tue</h2>
                        <h2>13</h2>
                    </div>
                </Col>
              </Row>
              <Row className="calendar-content">
                <Col xs={12} sm={8} md={8} lg={6}>
                    <div>
                        <h2>Mousebelt University Harmony - Guest Speaker</h2>
                        {/* <p>Pull up for some vibes and good food.</p> */}
                        <a target="_blank" href="https://applications.zoom.us/addon/invitation/detail?meetingUuid=Qos8q4h4QdCnqR%2F85nCw4Q%3D%3D&signature=b37c369a9d60d67addbe2b0a23a21a00db903871d43f78e1dfe510cbfdfc84cb">Meeting Invitation</a>
                    </div>
                </Col>
                <Col xs={{span: 12, offset: 0}} sm={{span: 2, offset: 1}} md={{span: 2, offset: 1}} lg={{span: 2, offset: 2}}>
                    <div className="calendar-meeting-day">
                        <h2>Tue</h2>
                        <h2>20</h2>
                    </div>
                </Col>
              </Row>
              <Row className="calendar-content">
                <Col xs={12} sm={8} md={8} lg={6}>
                    <div>
                        <h2>Blockchain Use-Case Series</h2>
                        {/* <p>Pull up for some vibes and good food.</p> */}
                        <a target="_blank" href="">Meeting Invitation</a>
                    </div>
                </Col>
                <Col xs={{span: 12, offset: 0}} sm={{span: 2, offset: 1}} md={{span: 2, offset: 1}} lg={{span: 2, offset: 2}}>
                    <div className="calendar-meeting-day">
                        <h2>Mon</h2>
                        <h2>26</h2>
                    </div>
                </Col>
              </Row>
              <Row className="calendar-content calendar-content-last">
                <Col xs={12} sm={8} md={8} lg={6}>
                    <div>
                        <h2>Mousebelt University Harmony - Guest Speaker</h2>
                        {/* <p>Pull up for some vibes and good food.</p> */}
                        <a target="_blank" href="https://applications.zoom.us/addon/invitation/detail?meetingUuid=Qos8q4h4QdCnqR%2F85nCw4Q%3D%3D&signature=b37c369a9d60d67addbe2b0a23a21a00db903871d43f78e1dfe510cbfdfc84cb">Meeting Invitation</a>
                    </div>
                </Col>
                <Col xs={{span: 12, offset: 0}} sm={{span: 2, offset: 1}} md={{span: 2, offset: 1}} lg={{span: 2, offset: 2}}>
                    <div className="calendar-meeting-day">
                        <h2>Tue</h2>
                        <h2>27</h2>
                    </div>
                </Col>
              </Row>
          </Col>
      </div>
  </Layout>
)

export default EventsPage