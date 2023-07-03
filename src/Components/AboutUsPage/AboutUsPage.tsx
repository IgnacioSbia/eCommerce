import { Col, Row } from "react-bootstrap"
import NavBar from "../NavBar/NavBar"
import './AboutUsPage.css';
import aboutUsImg from '../../assets/Imgs/aboutUsTheImg.jpg'
import Footer from "../Footer/Footer";

function AboutUsPage() {
  return (
    <>
        <header>
            <NavBar/>
        </header>
        <main>
            <Row>
                <Col sm="8" className="aboutUsPresentation">
                    <h1 className="aboutUsTitle">About Our Work</h1>
                    <img src={aboutUsImg} className="aboutUsTheImg" alt="Image about Us"/>
                </Col>
                
                <Col sm="4" className="aboutUsPresentationInformation">
                    <h2>We are...</h2>
                    <p className="aboutUsPresentationDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa totam illo molestias dolores deleniti quam assumenda minus obcaecati inventore, molestiae voluptatum sapiente quia tempore excepturi atque accusamus quaerat! Exercitationem in, cupiditate quisquam, optio quae molestiae iure illum repellat voluptates magnam amet odit dolorum laudantium? Eveniet ex minus laboriosam voluptates sint!</p>
                </Col>
            </Row>
        </main>
        <footer className="aboutUsFooter">
            <Footer/>
        </footer>
    </>
  )
}

export default AboutUsPage