import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
function Header() {
  return (
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home" style={{color:'white',fontSize:'25px',fontWeight:'bold'}}>
          <i class="fa-regular fa-note-sticky"></i>&nbsp;
            Notes
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header