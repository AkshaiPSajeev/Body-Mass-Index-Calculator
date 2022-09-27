import React from 'react'
import {useState,useEffect} from 'react'

 function Form({getData}){
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [alert, setAlert] = useState(false)
    const [refresh,setRefresh]=useState(false)
    const getHeight=(e)=>{
        setHeight(e.target.value)
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        if(isNaN(weight)||isNaN(height)){
          setAlert(true)
            console.log('not a valid input');
        }else{
          getData(weight,height)
            console.log(height);
           console.log(weight);
           setHeight('');
           setWeight('');
           setRefresh(true);
        }
        
    }
    let alertMessage;
    /*if(alert){
      alertMessage= <div className='alert alert-danger mt-3 col-md-10'>Please enter valid data</div>
    }else{
      alertMessage=''
    }*/
    return(
      <div>
        <div className='d-flex justify-content-center mt-5 shadow  w-25 mx-auto p-3 bg-light rounded'>
          <div className='row mx-auto'>
            <div className='col-md-12 px-5'>
                <h4 className=''>BMI CALCULATOR</h4>
            </div>
            <form onSubmit={onSubmit}>
           
               
                <input type='text' value={weight} onChange={(e)=>setWeight(e.target.value)} className='form-control mt-3' required placeholder='Weight in kilogram' />
            
           
               
                <input type='text' className='form-control mt-3'  value={height} onChange={getHeight} required placeholder='Height in meters eg:(1.65 for 165 cm)' />
                
                <input type='submit' className='btn btn-primary mt-3 flex px-5 mx-5' value="Get Bmi"/>
         
            </form>
           {/* {alert?<div className='alert alert-danger mt-3 col-md-10'>Please enter valid data</div>:''} */
           alert && <div className='alert alert-danger mt-3 col-md-10'>Please enter valid data</div>
           }


          </div>
        
        </  div>
        
      </div>
    )
}

export default Form