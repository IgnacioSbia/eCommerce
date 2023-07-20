import{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import './PostPaymentPage.css';

function PostPaymentPage() {
    const [time, setTime] = useState(10);
    const navigate = useNavigate()

useEffect(()=>{
    time > 0 && setTimeout(()=> setTime(time - 1), 1000);
    if(time == 0){
        navigate("/")

    }
  }, [time]);


  return (
    <>
        <main className='postPaymentPageMain'>
            <aside className='postPaymentSectionContent'>
                <h1>Thank you very much!</h1>
                <h1>You will be redirected to the home Page</h1>
                <h1>{time}</h1>
            </aside>    
        </main>
    </>
  )
}

export default PostPaymentPage