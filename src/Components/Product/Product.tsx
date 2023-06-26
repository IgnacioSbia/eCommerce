import { Col, Row } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel';
import './Product.css';
import { useEffect, useState } from "react";


function Product() {

    const prodId = localStorage.getItem('prodId')
    const [selectedProduct, setSelectedProduct] = useState<any>([]);
    
    useEffect( ()=>{

        
        const getProduct = async()=>{
            var requestOptions:Object = {
                method: 'GET',
                redirect: 'follow'
              };
              
             await fetch("http://localhost:8000/api/Product?proId=5", requestOptions)
                .then(response => response.json())
                .then(result => { if(result){setSelectedProduct(result)}else{console.log("Error")}})
                .catch(error => console.log('error', error));
        }
        getProduct();
    }, [0]);
    console.log(prodId)
    console.log(selectedProduct)
    
  return (
    <main>
        ( <Row>
            <Col sm="9" className="prodctPageDetails">
                <section className="productPageMainTitle">
                    <h1>a</h1>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                </section>
            </Col>
            <Col sm="3" className="productPageDetailsToBuy">
                <aside>
                 <h3>Details</h3>
                 <p>a</p>
                </aside>
                <button>Buy</button>
            </Col>
        </Row>) 
    
  
    </main>
  )
}

export default Product