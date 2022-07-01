import Form from './components/form'
import BmiScore from './components/bmiscore'
import BmiList from './components/bmilist'
import {useState} from 'react'
import './App.css';


function App() {
  //let mybmi=77;
  const [bmi, setBmi] = useState("00")
  const [show, setShow] = useState(false)
  const [changeWeight, setChangeWeight] = useState({weight:'',type:''})
  const [bmiType, setBmiType] = useState('Not Calculated')
  const [bmiRange, setBmiRange] = useState({
    underWeight:{low:'',high:''},
    normal:{low:'',high:''},
    overWeight:{low:'',high:''},
    obesityOne:{low:'',high:''},
    obesityTwo:{low:'',high:''},
    obesityThree:{low:'',high:''}
  })
  const onFormSub=(w,h)=>{
    setShow(true)
   let bmi=calBmi(w,h);
   setBmi(bmi);
   setBmiType(weightType(bmi))
    console.log(w,h);
    const range={
      underWeight:{low:calWeight(18.5,h)},
      normal:{low:calWeight(18.5,h),high:calWeight(24.9,h)},
      overWeight:{low:calWeight(25,h),high:calWeight(29.9,h)},
      obesityOne:{low:calWeight(30,h),high:calWeight(34.9,h)},
      obesityTwo:{low:calWeight(35,h),high:calWeight(39.9,h)},
      obesityThree:{low:calWeight(40,h)}
      
    }
    setBmiRange(range);
    setChangeWeight(weighttToChange(bmi,w,range))
  }
  //'over-Weight'e.log(mybmi);
  /*const changeBmi=()=>{
    //bmi=10;
    setbmi(bmi+10)
    console.log( bmi);
  }*/
  const weighttToChange=(bmi,w,range)=>{
    let changeObj;
    if(bmi<18.5){
      changeObj={
        weight:(range.normal.low-w).toFixed(2),
        type:'negative'
      }
    }else if(bmi>24.9){
      changeObj={
        weight:(w-range.normal.high).toFixed(2),
        type:'positive'
      }
    }else{
      changeObj={
        weight:0,
        type:'normal'
      }
    }
    return changeObj;
  }
  const calBmi=(w,h)=>{
    return(w/(h*h)).toFixed(2);
  };
  const calWeight=(bmi,height)=>{
    return (bmi*height*height).toFixed(2);
  }
  
  const weightType=(bmi)=>{
    if(bmi<18.5){
      return 'Underweight'
    }else if (bmi>18.5 && bmi< 24.9){
      return 'Normal'
    }else if (bmi>24.5 && bmi<29.9){
      return 'Over Weight'
    }else if(bmi>29.9 && bmi<34.9){
      return 'Obesity Class I'
    }else if(bmi>34.9 && bmi<39.9){
      return 'Obesity Class II'
    }else if(bmi>39.9){
      return 'Obesity Class III'
    }
  }

  return (
    <>
    <Form getData={onFormSub}/>
    {show &&(
    <div className='row mt-3'>
    <div className='col-md-6 p-5'>
    <BmiScore bmiNo={bmi} bmiName={bmiType} changeWeight={changeWeight}/>
    </div>
    <div className='col-md-6 p-4'>
    <BmiList range={bmiRange} bmi={bmi}/>
    </div>
    </div>
    )}
 
    </>
    
  );
}

export default App;
