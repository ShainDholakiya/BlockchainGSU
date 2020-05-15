import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Row, Col, Card, Container,} from "react-bootstrap";


const ContentPage = () => (
  <Layout>
    <SEO title="Content" />
      <div className="Hero-Content">
      <h1 className="content-header">Latest Content</h1>
        <Container >
        {/* H1 Needs more padding at the top*/}
          <Row className="content-card-row">
            
            <Col className="content_card-main">
            {/*these are props need to be created*/}
            {/*articleTitle,  articleBG , articleAuthor  articleTime ,  articleAuthor, authorIMG*/}
                {/*<Card bg-dark text-white>
                    <Card.Img variant="top" src="../images/ArticleBG-Main.png" />
                    <Card.Body>
                    <Card.Title>Article Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                */}
                <Card className="bg-dark text-white">
                    <Card.Img src="../images/ArticleBG" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Article Title</Card.Title>
                            <Card.Text>
                            Article Author
                            </Card.Text>
                            <Card.Text>Article time</Card.Text>
                        </Card.ImgOverlay>
                </Card>
            </Col>
            <Col className="content_card-side">
                <Card className="bg-dark text-white">
                        <Card.Img src="../images/ArticleBG" alt="Card image" />
                        <Card.ImgOverlay>
                                <Card.Title>Article Title</Card.Title>
                                <Card.Text>
                                Article Author
                                </Card.Text>
                                <Card.Text>Article time</Card.Text>
                        </Card.ImgOverlay>
                </Card>
            </Col>
          </Row>
 
          <Row className="content-card-row">
            <Col className="content-card">
            <Card className="bg-dark text-white">
                    <Card.Img src="../images/ArticleBG" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Article Title</Card.Title>
                            <Card.Text>
                            Article Author
                            </Card.Text>
                            <Card.Text>Article time</Card.Text>
                        </Card.ImgOverlay>
                </Card>
    
            </Col>

            <Col className="content-card" >
            <Card className="bg-dark text-white">
                    <Card.Img src="../images/ArticleBG" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Article Title</Card.Title>
                            <Card.Text>
                            Article Author
                            </Card.Text>
                            <Card.Text>Articl time</Card.Text>
                        </Card.ImgOverlay>
                </Card>
            </Col>

            <Col className="content-card">
            <Card className="bg-dark text-white">
                    <Card.Img src="../images/ArticleBG" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Article Title</Card.Title>
                            <Card.Text>
                            Article Author
                            </Card.Text>
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