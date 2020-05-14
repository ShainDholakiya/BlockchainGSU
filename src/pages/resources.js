import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Row, Col, Card, Container } from "react-bootstrap";

import hackernoon from "../images/hackernoon-icon.jpeg"
import medium from "../images/medium-icon.png"
import youtube from "../images/youtube-icon.jpg"
import reddit from "../images/reddit-icon.png"
import coindesk from "../images/coindesk-icon.png"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="Hero Hero-Resources">
        <Row>
          <Col sm={{span: 7, offset: 5}} md={{span: 7, offset: 5}} lg={{span: 6, offset: 6}}>
            <div className="Resources">
              <h1><u>Blockchain Resources</u></h1>
            </div>
          </Col>
        </Row>
        <Container>
          <Row className="resource-icon-row">
            <Col>
                <a target="_blank" href="https://hackernoon.com/">
                    <Card className="resource-icons">
                        <Card.Img className="resource-icon-img" variant="top" src={hackernoon} />
                    </Card>
                </a>
            </Col>
            <Col>
                <a target="_blank" href="https://medium.com/">
                    <Card className="resource-icons">
                        <Card.Img variant="top" src={medium} />
                    </Card>
                </a>
            </Col>
            <Col>
                <a target="_blank" href="https://hackernoon.com/">
                    <Card className="resource-icons">
                        <Card.Img variant="top" src={hackernoon} />
                    </Card>
                </a>
            </Col>
            </Row>
            <Row>
            <Col>
                <a target="_blank" href="https://www.reddit.com/">
                    <Card className="resource-icons">
                        <Card.Img variant="top" src={reddit} />
                    </Card>
                </a>
            </Col>
            <Col>
                <a target="_blank" href="https://www.coindesk.com/">
                    <Card className="resource-icons">
                        <Card.Img variant="top" src={hackernoon} />
                    </Card>
                </a>
            </Col>
            <Col>
                <a target="_blank" href="https://medium.com/">
                    <Card className="resource-icons">
                        <Card.Img variant="top" src={medium} />
                    </Card>
                </a>
            </Col>
          </Row>
        </Container>
      </div>
  </Layout>
)

export default ResourcesPage