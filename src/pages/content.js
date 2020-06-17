import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Row, Col, Card, Container,} from "react-bootstrap";
import articleimage from '../images/articleimage.png'

const ContentPage = () => (
  <Layout>
    <SEO title="Content" />
    <div className="Hero-Content">
    <Container >
        <Row className="Content-Header">

            <Col sm={1} md={8}> 
            <div ><h1 className="ontent-heading">Latest Content</h1></div>
            </Col>
    
        </Row>
            {/* H1 Needs more margin at the top*/}
        <Row className="content-card-row">

            <Col className="content-card_main"  sm={7} lg={7}>
            {/*these are props need to be created*/}
            {/*articleTitle,  articleBG , articleAuthor  articleTime ,  articleAuthor, authorIMG*/}
                <Card className="content-card">
                    <Card.Img src={articleimage} alt="Card Image"/>
                    <Card.ImgOverlay>
                    <Card.Title className="card-title">Title</Card.Title>
                    <Card.Text className="card-text"> Author</Card.Text>
                    </Card.ImgOverlay>          
                </Card>
            </Col>
            

            <Col className="content_card-side">
                <Card className="content-card">
                    <Card.Img src={articleimage} alt="Card Image" className="card-image"/>
                    <Card.ImgOverlay >
                    <Card.Title>Title</Card.Title>
                    <Card.Text> Author</Card.Text>
                    </Card.ImgOverlay>          
                </Card>
            </Col>     

          </Row>
 
        <Row className="content-card-row">
            <Col className="content-card">
            <Card className="content-card">
                    <Card.Img src={articleimage} alt="Card Image" className="card-image"/>
                    <Card.ImgOverlay >
                    <Card.Title>Title</Card.Title>
                    <Card.Text>Author</Card.Text>
                    </Card.ImgOverlay>          
                </Card>
            </Col>

            <Col className="content-card">
            <Card className="content-card">
                    <Card.Img src={articleimage} alt="Card Image" className="card-image"/>
                    <Card.ImgOverlay >
                    <Card.Title>Title</Card.Title>
                    <Card.Text>Author</Card.Text>
                    </Card.ImgOverlay>          
                </Card>
            </Col>

            <Col className="content-card">
            <Card className="content-card">
                    <Card.Img src={articleimage} alt="Card Image" className="card-image"/>
                    <Card.ImgOverlay >
                    <Card.Title>Title</Card.Title>
                    <Card.Text>Author</Card.Text>
                    </Card.ImgOverlay>          
                </Card>
            </Col>
         </Row>

        </Container>
    </div>
  </Layout>
)

export default ContentPage