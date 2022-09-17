import React from 'react'

 function bmilist({range,bmi}){
    console.log(range);
   
    return(
        <div className='text-center shadow-sm rounded'>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <div className='row'>
                        <div className='col-4 fw-bold'>Type</div>
                        <div className='col-4 fw-bold'>BMI</div>
                        <div className='col-4 fw-bold'>Weight</div>
                    </div>
                </li>
                <li className={bmi<18.5?'border border-danger border-3 list-group-item':'list-group-item'}>
                    <div className='row'>
                        <div className='col-4 '>Underweight</div>
                        <div className='col-4 '>&lt; 18.5</div>
                        <div className='col-4 '>&lt;{range.underWeight.low}</div>
                    </div>
                </li>
                <li className={bmi>18.5&&bmi<24.9?'border border-danger border-3 list-group-item':'list-group-item'}>
                    <div className='row'>
                        <div className='col-4 '>Normal</div>
                        <div className='col-4 '>18.5-24.9</div>
                        <div className='col-4 '>{range.normal.low}-{range.normal.high}</div>
                    </div>
                </li>
                <li className={bmi>24.9&&bmi<29.9?'border border-danger border-3 list-group-item':'list-group-item'}>
                    <div className='row'>
                        <div className='col-4 '>Over Weight</div>
                        <div className='col-4 '>25-29.9</div>
                        <div className='col-4 '>{range.overWeight.low}-{range.overWeight.high}</div>
                    </div>
                </li>
                <li className={bmi>29.9&&bmi<34.9?'border border-danger border-3 list-group-item':'list-group-item'}>
                    <div className='row'>
                        <div className='col-4 '>Obesity Class I</div>
                        <div className='col-4 '>30-34.9</div>
                        <div className='col-4 '>{range.obesityOne.low}-{range.obesityOne.high}</div>
                    </div>
                </li>
                <li className={bmi>34.9&&bmi<39.9?'border border-danger border-3 list-group-item':'list-group-item'}>
                    <div className='row'>
                        <div className='col-4 '>Obesity Class II</div>
                        <div className='col-4 '>35-39.9</div>
                        <div className='col-4 '>{range.obesityTwo.low}-{range.obesityTwo.high}</div>
                    </div>
                </li>
                <li className={bmi>=39.9?'border border-danger border-3 list-group-item':'list-group-item'}>
                    <div className='row'>
                        <div className='col-4 '>Obesity Class III</div>
                        <div className='col-4 '>&gt; 39</div>
                        <div className='col-4 '>&gt;{range.obesityThree.low}</div>
                    </div>
                </li>
            </ul>
          
        </div>
    )
}

export default bmilist