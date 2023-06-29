import { Row, Col } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import './MainPage.css';
import cartMrkt from '../NavBar/NavImgs/carr.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Footer from "../Footer/Footer";

function MainPage() {
    const [products, setProducts] = useState<any>([])
    const navigate = useNavigate();
    useEffect(()=>{
        var requestOptions:Object = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:8000/api/Products", requestOptions)
            .then(response => response.json())
            .then(result =>{ if(result){setProducts(result.products)}else{console.log("Error")}})
            .catch(error => console.log('error', error));
    }, [0])

    console.log(products[0]);

    const selectedProduct = (e:any)=>{
        localStorage.setItem('prodId', e )
        navigate('/Product')
    }

  return (
    <>
    <header>
        <NavBar/>
    </header>
    <main className="">
       <Row>
           <Col xs sm="12">
                <Col sm="12" className="mainPageProducts">
                    <h1>Products</h1>
                </Col>
                <Col sm="12" className="mainPageAllProducts">
                    
                    <Col sm="12" className="mainPageMainProductsShow">
                        {/*Main Products Section*/}
                       {products.map((product:any)=>{
                        return(
                        <Card style={{ width: '10rem' }} className="mainPageCardProduct"  onClick={()=>selectedProduct(product.id)} >
                            <Card.Img variant="top" src={cartMrkt} />
                            <Card.Body className="mainPageCardProductCard">
                                    <Card.Title>{product.product_name}</Card.Title>
                                    <Card.Text className="mainPageProductCardDescription">
                                        {product.product_description}
                                    </Card.Text>
                                    <Card.Text className="mainPageProductDescription" >
                                        $ {product.product_price}
                                    </Card.Text>
                                    <Button variant="primary" className="mainPageBuyProductButton">Buy</Button>
                             </Card.Body>
                        </Card>
                        )
                       })}
                    </Col>
                    
                </Col>
                
           </Col>
           
       </Row>
    </main>
    <footer>
        <Footer/>
    </footer>
    </>
    )
}

export default MainPage