import { useEffect, useState } from "react"
import ToggleButton from "../../buttons/buttonStart/ToggleButton"
import './PopupResults.scss'
import popupResultsLogic from './popupResultsLogic';


interface IResults {
  wrongAnswers: number,
  rightAnswers: number,
}

export interface IUserData {
  correctAnswers: number,
  wrongAnswers: number,
  totalTime: number,
  passed: number,
  largerNumber: number,
  extraPiece: number,
  numberOfSquares: number,
  restoreSequence: number,
};

const PopupResults = ({ wrongAnswers, rightAnswers } : IResults) => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData')
    storedData && setUserData(JSON.parse(storedData))
  }, []);

  useEffect(() => {
    userData && popupResultsLogic({ rightAnswers, wrongAnswers, userData, setUserData })
  }, [userData === null]);

  const closePopup = () => false;

  return (
    <div className='popup-overlay' onClick={closePopup}>
      <div className='popup' onClick={(e) => e.stopPropagation()}>
        <h2 className="popup-tilte">Ваши результаты: </h2>
        <h3 className="right-answer">Правильных ответов: <strong>{rightAnswers}</strong></h3>
        <h3 className="wrong-answer">Неправильных ответов: <strong>{wrongAnswers}</strong></h3>
        <ToggleButton buttonClass='in-popup' path='/tasks' tilte='Выйти'/>
      </div>
    </div>
  )
}

export default PopupResults;