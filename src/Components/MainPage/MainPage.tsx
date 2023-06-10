import { Row, Col } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import './MainPage.css';

function MainPage() {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <body className="container-sm">
       <Row>
        
           <Col xs sm="10">
                <Col sm="10" className="mainPageProducts">
                    <aside className="mainPageAdvertismentProducts">
                        <p>You may be interested in</p>
                    </aside>
                    <h1>Products</h1>
                </Col>
                <Col sm="10" className="mainPageAllProducts">
                    <Col sm="4" className="mainPageSideProductsShow">
                        <h1>Hellooooo</h1>
                        <h1>Hellooooo</h1>
                        <h1>Hellooooo</h1>
                        <h1>Hellooooo</h1>
                        <h1>Hellooooo</h1>

                        
                    </Col>
                    <Col sm="6" className="mainPageMainProductsShow">
                        <div><h1>aaa</h1></div>
                        <div><h1>aaa</h1></div>
                        <div><h1>aaa</h1></div>
                        <div><h1>aaa</h1></div>
                        <div><h1>aaa</h1></div>
                        <div><h1>aaa</h1></div>
                    </Col>
                </Col>
                
           </Col>
           
       </Row>
    </body>
    </>
    )
}

export default MainPage