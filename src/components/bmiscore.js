import React from 'react'

 function bmiscore({bmiNo,bmiName,changeWeight}){
    /*console.log('inside bmi score'+props.bmiNo)
    const {bmiNo,bmiName}=props;*/
    
    return(
        <div className='text-center shadow rounded p-4 bg-light'>
            <div><strong>Your BMI Score</strong></div>
            <div className='row justify-content-md-center'>
                <div className='p-3 my-2 alert fs-1 alert-primary col-sm-4'>{bmiNo}</div>
            </div>
            <div className='fs-3 fw-bold text-primary'>{bmiName}</div>
            {changeWeight.type==='positive'&&(<div className='fs-4'>You need to loose<span>{changeWeight.weight} kg</span></div>)}
            {changeWeight.type==='negative'&&(<div className='fs-4'>You need to gain<span>{changeWeight.weight} kg</span></div>)}
            {changeWeight.type==='normal'&&(<div className='fs-4'>Your weight is normal,Good for you</div>)}
        </div>
    )
}

export default bmiscore