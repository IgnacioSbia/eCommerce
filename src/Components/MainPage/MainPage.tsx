import { Row, Col } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import './MainPage.css';
import cartMrkt from '../NavBar/NavImgs/carr.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";

function MainPage() {
    const [products, setProducts] = useState<any>([])

    useEffect(()=>{
        var requestOptions:Object = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8000/api/getProducts", requestOptions)
            .then(response => response.json())
            .then(result =>{ if(result){setProducts(result.products)}else{console.log("Error")}})
            .catch(error => console.log('error', error));
    }, [0])

    console.log(products[0]);

  return (
    <>
    <header>
        <NavBar/>
    </header>
    <main className="">
       <Row>
           <Col xs sm="10">
                <Col sm="8" className="mainPageProducts">
                    <h1>Products</h1>
                </Col>
                <Col sm="10" className="mainPageAllProducts">
                    
                    <Col sm="12" className="mainPageMainProductsShow">
                        {/*Main Products Section*/}
                       {products.map((product:any)=>{
                        return(
                        <Card style={{ width: '10rem' }} className="mainPageCardProduct">
                            <Card.Img variant="top" src={cartMrkt} />
                            <Card.Body>
                                    <Card.Title>{product.product_name}</Card.Title>
                                    <Card.Text>
                                        {product.product_description}
                                    </Card.Text>
                                    <Card.Text>
                                        ${product.product_price}
                                    </Card.Text>
                                    <Button variant="primary" className="mainPageBuyProductButton">Buy</Button>
                             </Card.Body>
                        </Card>
                        )
                       })}
                    </Col>
                    <Col className="mainPageSideProducts">
                             {/*Side Products Section*/}
                        <h3>More?</h3>
                        <Card style={{ width: '10rem' }} className="mainPageSideCardProduct">
                            <Card.Img variant="top" src={cartMrkt} />
                            <Card.Body>
                                     <Card.Title>Product</Card.Title>
                                    <Card.Text>
                                        Product Description
                                    </Card.Text>
                                    <Card.Text>
                                        $Price
                                    </Card.Text>
                                    <Button variant="primary" className="mainPageBuyProductButton">Buy</Button>
                            </Card.Body>
                        </Card>
                       
                    </Col>
                </Col>
                
           </Col>
           
       </Row>
    </main>
    </>
    )
}

export default MainPage