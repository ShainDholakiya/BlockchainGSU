import PropTypes from "prop-types"
import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {Navbar, Nav, Button} from 'react-bootstrap'

const Header = ({ siteTitle }) => (
  <div>
    <Navbar fixed="top" expand="lg">
      <Navbar.Brand href="/" className="brand">BCGSU</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/content">Content</Nav.Link>
          <Nav.Link href="/resources">Resources</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/calendar">Calendar</Nav.Link>
        </Nav>
        <Nav className="nav-icons">
          <a href="https://gsu.campuslabs.com/engage/organization/bgsu"><Button className="header-button">Join</Button></a>
          <a target="_blank" href="https://www.instagram.com/enigsu/?hl=en"><FontAwesomeIcon icon={faInstagram} size="2x"/></a>
          <a target="_blank" href="https://twitter.com/blockchaingsu"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
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
