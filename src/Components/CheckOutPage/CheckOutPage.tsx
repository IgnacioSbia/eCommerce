import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import './CheckOutPage.css';
import productPlaceHolder from '../../assets/Imgs/productBox.svg';
import { useState } from "react";
import { useNavigate } from "react-router";

function CheckOutPage() {
  const [currentStage, setCurrentStage] = useState('Product Overview');
  const navigate = useNavigate();
  
  const handleClickStage = (stage:string)=>{
      if(stage && stage == 'Product Overview'){
        setCurrentStage('Delivery Information')
      }else if(stage && currentStage && stage == 'Delivery Information'){
        setCurrentStage('Payment')
      }else if(stage &&  currentStage && stage == 'Payment'){
        navigate('/PostPayment')
      }

  }
  return (
    <>
      <header>
        <NavBar/>
      </header>

      <main className="checkOutMainPage">
        { currentStage == 'Product Overview' ?
        <>
        <aside>
          <h1>{currentStage}</h1>  
        </aside>


        <aside className="checkOutProductInfo">
          <img className="checkOutProductImg" src={productPlaceHolder}/>
          <h2 className="checkOutPageProductTitle">Product</h2>
        </aside>
        </>
        
       :
       <h1>hi</h1>
        }
       
        <button className="checkOutPageNextButton" onClick={()=>handleClickStage(currentStage)}>NEXT</button>
      </main>

      <footer>
        <Footer/>
      </footer>
    
    </>
  )
}

export default CheckOutPage