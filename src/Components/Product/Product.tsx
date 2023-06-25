import { Col, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import './Product.css';


function Product() {
  return (
    <main>
        <Row>
            <Col sm="9" className="prodctPageDetails">
                <section className="productPageMainTitle">
                    <h1>Product</h1>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </section>
            </Col>
            <Col sm="3">
                <aside>
                 <h3>Details</h3>
                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, qui cumque. Ipsam adipisci ab porro ullam. Soluta illum commodi quis?</p>
                </aside>
                <button>Buy</button>
            </Col>
        </Row>
    </main>
  )
}

export default Product