import { Link } from 'react-router-dom';
import './Footer.css';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className='footerSection'><Link to={"/aboutUs"} className='footerAboutUs'>About Us</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='footerSection'>
            Contact Us
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4">E-Commerce</p>
      
    </>
  )
}

export default Footer