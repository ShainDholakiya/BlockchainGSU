import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Row, Col, Card, Container,} from "react-bootstrap"

import ArticlePic1 from "../images/ArticleBG.png"
// import ArticlePic2 from "../images/ArticleBG-Main.png"


const ContentPage = () => (
  <Layout>
    <SEO title="Content" />
      <div className="Hero Hero-Resources">
        <Row>
          <Col sm={{span: 8}} md={{span: 7}} lg={{span: 6}}>
            <div className="Resources">
              <h1><u>Latest Content</u></h1>
            </div>
          </Col>
        </Row>
        <Container >
          <Row className="content-card-row">
            <Col xs={12} sm={12} md={12} lg={6}>
                <Card className="bg-dark article-icons">
                    <Card.Img src={ArticlePic1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Article Title</Card.Title>
                        <Card.Text>Article Author</Card.Text>
                        <Card.Text>Article time</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
                <Card className="bg-dark article-icons">
                    <Card.Img src={ArticlePic1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Article Title</Card.Title>
                        <Card.Text>Article Author</Card.Text>
                        <Card.Text>Article time</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                <Card className="bg-dark article-icons">
                    <Card.Img src={ArticlePic1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Article Title</Card.Title>
                        <Card.Text>Article Author</Card.Text>
                        <Card.Text>Article time</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                <Card className="bg-dark article-icons">
                    <Card.Img src={ArticlePic1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Article Title</Card.Title>
                        <Card.Text>Article Author</Card.Text>
                        <Card.Text>Articlp time</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4}>
                <Card className="bg-dark article-icons">
                    <Card.Img src={ArticlePic1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Article Title</Card.Title>
                        <Card.Text>Article Author</Card.Text>
                        <Card.Text>Article time</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
         </Row>
        </Container>
      </div>
  </Layout>
)

export default ContentPage