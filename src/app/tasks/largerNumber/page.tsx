"use client"

import React, { useState, useEffect } from 'react';
import './largerNumber.scss'
import TopPanel from '@/components/UI/topPanel/TopPanel';

function LargerNumber(){
  useEffect(()=>{
    randomTwoNumber('none')
  },[])

  // Two Number
  const [firstNumber, setFirstNumber] = useState<number>(0)
  const [secondNumber, setSecondNumber] = useState<number>(0)

  const [answer, setAnswer] = useState<boolean>(false)
  
  const [rightAnswers, setRightAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)


  const compareNumbers = (side: string) => {
    if(side === 'left-field'){
      if(firstNumber >= secondNumber){
        setRightAnswers(rightAnswers + 1)
        setAnswer(true)
        setTimeout(() => {setAnswer(false)}, 350);
      }else{
        setWrongAnswers(wrongAnswers + 1)
      }
    }else if(side === 'right-field'){
      if(firstNumber <= secondNumber){
        setRightAnswers(rightAnswers + 1)
        setAnswer(true)
        setTimeout(() => {setAnswer(false)}, 350);
      }else{
        setWrongAnswers(wrongAnswers + 1)
      }
    }
  }

  function randomTwoNumber(side: string){
    setFirstNumber(Math.floor(Math.random() * 101))
    setSecondNumber(Math.floor(Math.random() * 101))

    compareNumbers(side)
  }
  
  return(
    <div className="task-pages__wrapper">
      <TopPanel rightAnswers={rightAnswers} wrongAnswers={wrongAnswers}/>
      <div className='larger-number__inner'>
        <div className='playing-field'>
          <div className='left-field' onClick={() => randomTwoNumber('left-field')}>
            <p className='field-text'>{firstNumber}</p>
          </div>
          <div className={`center-point ${answer && 'green'}`}></div>
          <div className='right-field' onClick={() => randomTwoNumber('right-field')}>
            <p className='field-text'>{secondNumber}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LargerNumber