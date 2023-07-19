import{ useState } from 'react'

function PostPaymentPage() {
    const [time, setTime] = useState(10);

    const redirectToMain = ()=>{
        if(time){
            for(let i = 0; i <= time; i++ ){
                setTime(time-1);
            }
           
        }else if(time === 0){
            alert('yes')
        }
    }
    redirectToMain()

  return (
    <>
        <main>
            <h1>Thank you very much!</h1>
            <h1>You will be redirected to the main Page in{time}</h1>
        </main>
    </>
  )
}

export default PostPaymentPage