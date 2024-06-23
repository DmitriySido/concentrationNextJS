import React, { useState, useEffect } from 'react';
import './Timer.scss'
import PopupResults from '../popups/popupResults/PopupResults';

interface ITimerProps {
  wrongAnswers: number,
  rightAnswers: number,
}

const Timer = ({ rightAnswers, wrongAnswers } : ITimerProps) => {
  const [timer, setTimer] = useState(35)

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(prevTimer => {
        prevTimer === 1 && clearInterval(countdown)
        return prevTimer - 1
      });
    }, 1000)

    return () => clearInterval(countdown)
  }, [])

  return(
    <>
      <div className='timer'>{timer}</div>
      {timer === 0 && <PopupResults rightAnswers={rightAnswers} wrongAnswers={wrongAnswers}/>}
    </>
  )
}

export default Timer