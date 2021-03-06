import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Row, Col, Card, Container } from "react-bootstrap"

import hackernoon from "../images/hackernoon-icon.png"
import medium from "../images/medium-icon.png"
import youtube from "../images/youtube-icon.png"
import reddit from "../images/reddit-icon.png"
import coindesk from "../images/coindesk-icon.png"
import discord from "../images/discord-icon.png"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Resources" />
    <div className="Hero Hero-Resources">
      <Row>
        <Col
          sm={{ span: 8, ofsset: 4 }}
          md={{ span: 7, offset: 5 }}
          lg={{ span: 6, offset: 6 }}
        >
          <div className="Resources">
            <h1>Blockchain Resources</h1>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={4}>
            <a target="_blank" href="https://discord.com/invite/EQnAG3D">
              <Card className="resource-icons">
                <Card.Img variant="top" src={discord} />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <a target="_blank" href="https://hackernoon.com/">
              <Card className="resource-icons">
                <Card.Img variant="top" src={hackernoon} />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <a target="_blank" href="https://medium.com/">
              <Card className="resource-icons">
                <Card.Img variant="top" src={medium} />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCUqBF-dLJDR2oe0GeicKVnA"
            >
              <Card className="resource-icons">
                <Card.Img variant="top" src={youtube} />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <a target="_blank" href="https://www.reddit.com/">
              <Card className="resource-icons">
                <Card.Img variant="top" src={reddit} />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <a target="_blank" href="https://www.coindesk.com/">
              <Card className="resource-icons">
                <Card.Img variant="top" src={coindesk} />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
           
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default ResourcesPage
