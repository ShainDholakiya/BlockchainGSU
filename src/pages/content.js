import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"
import { Row, Col, Card, Container } from "react-bootstrap";


const ContentPage = () => (
  <Layout>
    <SEO title="Content" />
      <div className="Hero-Content">
        <Container>
          <Row className="content-card-row">
            <Col sm={2} md={5} lg={8} className="content-card-main">
                {/*these are props need to be created*/}
                {/*articleTitle,  articleBG , articleAuthor  articleTime ,  articleAuthor, authorIMG*/}

    
  
            </Col>

            <Col sm={1} md={2} lg={4} className="content-card-side">
                
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