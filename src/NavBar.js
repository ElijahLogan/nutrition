import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Landing from './Landing';
import Nutrition from './Nutrition';


import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';



//link will replace href

const NavBar = () => {
  const [color, setColor] = useState(true)



  const toggleHover = () => setColor(!color)

  let linkStyle;
  if (color) {
    linkStyle = {
      transition: 'background-color 0.5s ease',
      backgroundColor: 'hsl(147, 64%, 61%)'
    }
  } else {
    linkStyle = {
      backgroundColor: 'white',
      transition: 'background-color 0.5s ease'
    }
  }
  return (
    <Navbar style={linkStyle} sticky="top" 
      onMouseEnter={toggleHover} onMouseLeave={toggleHover} onScroll={toggleHover} onTap={toggleHover} 
      expand="lg">
      <Navbar.Brand href="#home"><Link to='/'> Lockscreen Nutrition </Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link> <Link to='/'> Home </Link></Nav.Link>
          <Nav.Link> <Link to='/Log'> Log </Link> </Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar