import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Row, Col, Button } from "react-bootstrap";

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="Hero">
        <Row>
          <Col xs={12} sm={9} md={7} lg={5}>
            <div className="HeroGroup">
              <h1>Blockchain GSU</h1>
              <p>Georgia State University’s Blockchain club providing the lastest and greatest information on all things blockchain.</p>
              <span></span>
              <a target="_blank" href="https://pin.gsu.edu/organization/bgsu" className="continue">Join</a>
            </div>
          </Col>
        </Row>
      </div>
  </Layout>
)

export default HomePage