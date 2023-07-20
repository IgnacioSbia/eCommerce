import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import './CheckOutPage.css';
import productPlaceHolder from '../../assets/Imgs/productBox.svg';
import { useState } from "react";
import { useNavigate } from "react-router";

function CheckOutPage() {
  /*Data*/
  const [currentStage, setCurrentStage] = useState('Product Overview');
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [adress, setAdress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  
  const handleClickStage = (stage:string)=>{
      if(stage && stage == 'Product Overview'){
        setCurrentStage('Delivery Information')
      }else if(stage && currentStage && stage == 'Delivery Information'){
        setCurrentStage('Payment')
      }else if(stage &&  currentStage && stage == 'Payment'){
        navigate('/PostPayment')
      }

  }
  /*Event handlers*/

  const handleFirstName = (e:any)=>{
    if(e.target.value.match(/^[a-zA-Z\s]*$/)){
      setFirstName(e.target.value);
    }
    
  };

  const handleLastName = (e:any)=>{
    setLastName(e.target.value);
  };

  const handleAdress = (e:any)=>{
    setAdress(e.target.value);
  };

  const handlePostalCode = (e:any)=>{
    if(e.target.value.match("^[0-9]*$") != null){
      setPostalCode(e.target.value);
    }
  };

  const handleCity = (e:any)=>{
    setCity(e.target.value);
  };

  const handlePhoneNumber = (e:any)=>{
    if(e.target.value.match("^[0-9]*$") != null){
      setPhoneNumber(e.target.value);
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
                  <input 
                  className="checkOutPageInformationInput" 
                  placeholder="Laura" 
                  type="text"
                  value={firstName}
                  onChange={handleFirstName}
                  />

                  <label className="checkOutPageInformationParagraph">Last Name</label>
                  <input 
                  className="checkOutPageInformationInput"
                  placeholder="Joldins" 
                  type="text"
                  value={lastName}
                  onChange={handleLastName}
                  />
                  
                </div>

                <div className="checkOutPageEveryInformation" id="checkOutPageGeoInfo">

                  <label className="checkOutPageInformationParagraph">Adress</label>
                  <input 
                  className="checkOutPageInformationInput" 
                  placeholder="adress. 123"
                  value={adress}
                  onChange={handleAdress}
                  />
                  
                  <label className="checkOutPageInformationParagraph">Postal Code</label>
                  <input 
                  maxLength={10} 
                  className="checkOutPageInformationInput" 
                  placeholder="ZIP" 
                  type="text" 
                  value={postalCode}
                  onChange={handlePostalCode}
                  />

                </div>

                <div className="checkOutPageEveryInformation" id="checkOutPageNumberInfo">

                  <label className="checkOutPageInformationParagraph">City</label>
                  <input 
                  className="checkOutPageInformationInput" 
                  type="text"
                  value={city}
                  onChange={handleCity}
                  />

                  <label className="checkOutPageInformationParagraph">Phone Number</label>
                  <input 
                  className="checkOutPageInformationInput" 
                  placeholder="123456789" 
                  type="number"
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                  />

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