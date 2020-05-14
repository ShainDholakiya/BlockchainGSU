import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Row, Col } from "react-bootstrap";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="Hero">
        <Row>
          <Col sm={9} md={7} lg={5}>
            <div className="HeroGroup">
              <h1>Blockchain GSU</h1>
              <p>Georgia State University’s Blockchain club providing the lastest and greatest information on all things blockchain.</p>
              <span></span>
              <Link to="/page-2/" className="continue">Continue</Link>
            </div>
          </Col>
        </Row>
      </div>
  </Layout>
)

export default IndexPage
