import { Col, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import './Product.css';
import { useEffect, useState } from "react";
import cardPlaceHolder from '../NavBar/NavImgs/carr.png';
import { useNavigate } from "react-router";
import leftArrow from '../../assets/Imgs/leftArrow.svg';
import NavBar from "../NavBar/NavBar";

function Product() {

    const prodId = localStorage.getItem('prodId')
    const [selectedProduct, setSelectedProduct] = useState<any>([]);
    const navigate = useNavigate();
    useEffect( ()=>{

        
        const getProduct = async()=>{
            var requestOptions:Object = {
                method: 'GET',
                redirect: 'follow'
              };
              
             await fetch(`http://localhost:8000/api/Product?proId=${prodId}`, requestOptions)
                .then(response => response.json())
                .then(result => { if(result){setSelectedProduct(result.product)}else{console.log("Error")}})
                .catch(error => console.log('error', error));
        }
        getProduct();
    }, [0]);
    console.log(prodId)
    console.log(selectedProduct)
    const handleBack = ()=>{
        localStorage.clear();
        setSelectedProduct([''])
        navigate('/')
    }
  return (
    
    <main>
        <NavBar/>
         <Row>
            <Col sm="9" className="prodctPageDetails">
                <section className="productPageMainTitle">
                    <aside className="productPageTitleBack">
                     <button onClick={handleBack} className="productPageGoBackButton"><img src={leftArrow}/></button>{selectedProduct.map((prod:any)=>(<h1>{prod.product_name}</h1>))}
                    </aside>
                  <Carousel slide={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={cardPlaceHolder}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={cardPlaceHolder}
                        alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={cardPlaceHolder}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                </section>
            </Col>
            <Col sm="3" className="productPageDetailsToBuy">
                <aside>
                 <h3>Details</h3>
                 {selectedProduct.map((prod:any)=>(<p>{prod.product_description}</p>))}
                </aside>
                <button className="productPageBuyButton">Buy</button>
            </Col>
        </Row>
    
  
    </main>
  )
}

export default Product