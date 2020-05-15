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
                <Card>
                    <Card.Img src="" />
                    <Card.Body>
                    <Card.Title>Article Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col className="content_card-side">
                <Card>
                    <Card.Img src=""/>
                    <Card.Body>
                        <Card.Title>Article Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>             
                        </Card.Body>
                </Card>
            </Col>
          </Row>
 
          <Row className="content-card-row">
            <Col className="content-card">
    
            </Col>

            <Col className="content-card" >
                
            </Col>

            <Col className="content-card">
                
            </Col>
         </Row>

        </Container>
      </div>
  </Layout>
)

export default ContentPage