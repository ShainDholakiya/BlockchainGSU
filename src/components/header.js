import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {Navbar, Nav, Button} from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <div>
    {/* <Navbar fixed="top" expand="lg"> */}
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/" className="brand">BGSU</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links">
          <Nav.Link href="/home">Home</Nav.Link>
          {/* <Nav.Link href="/content">Content</Nav.Link> */}
          <Nav.Link href="/resources">Resources</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/events">Events</Nav.Link>
        </Nav>
        <Nav className="nav-icons">
          <a target="_blank" href="https://pin.gsu.edu/organization/bgsu"><Button className="header-button">Join</Button></a>
          <a target="_blank" href="https://www.linkedin.com/company/blockchaingsu/about/"><FontAwesomeIcon icon={faLinkedinIn} size="2x"/></a>
          <a target="_blank" href="https://www.instagram.com/gsublockchain/"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCUqBF-dLJDR2oe0GeicKVnA"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
          <a target="_blank" href="https://twitter.com/blockchaingsu"><FontAwesomeIcon icon={faTwitter} size="2x"/></a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
