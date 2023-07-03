import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <>  
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>E - Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"} className='navBarToAbotUs'>Home</Link></Nav.Link>
            <Nav.Link >Categories</Nav.Link>
            <Nav.Link><Link to={'/AboutUs'} className='navBarToAbotUs'>About Us</Link></Nav.Link>
          </Nav>
          <Nav>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default NavBar