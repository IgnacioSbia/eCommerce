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
       <></>
        }{currentStage == 'Delivery Information' ?
          <>
            <aside>
              <h1>{currentStage}</h1>
            </aside>
            <section className="checkOutPageFormInformationSection">
              <form className="checkOutPageFormInformation">
                <div className="checkOutPageEveryInformation" id="checkOutPageNameInfo">
                  <label className="checkOutPageInformationParagraph">First Name</label>
                  <input className="checkOutPageInformationInput" placeholder="Laura"/>
                  <label className="checkOutPageInformationParagraph">Last Name</label>
                  <input className="checkOutPageInformationInput" placeholder="Joldins"/>
                </div>
                <div className="checkOutPageEveryInformation" id="checkOutPageGeoInfo">
                  <label className="checkOutPageInformationParagraph">Adress</label>
                  <input className="checkOutPageInformationInput" placeholder="adress. 123"/>
                  <label className="checkOutPageInformationParagraph">Postal Code</label>
                  <input className="checkOutPageInformationInput" placeholder="ZIP"/>
                </div>
                <div className="checkOutPageEveryInformation" id="checkOutPageNumberInfo">
                  <label className="checkOutPageInformationParagraph">City</label>
                  <input className="checkOutPageInformationInput"/>
                  <label className="checkOutPageInformationParagraph">Phone Number</label>
                  <input className="checkOutPageInformationInput" placeholder="123456789"/>
                </div>
                
              </form>
            </section>
          </>
          :
          <></>
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