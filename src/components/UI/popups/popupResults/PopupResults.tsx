import ToggleButton from "../../buttons/buttonStart/ToggleButton"
import './PopupResults.scss'

interface IResults {
  wrongAnswers: number,
  rightAnswers: number,
}

const PopupResults = ({ wrongAnswers, rightAnswers } : IResults) => {

  const closePopup = () => false

  return (
    <div className='popup-overlay' onClick={closePopup}>
      <div className='popup' onClick={(e) => e.stopPropagation()}>
        <h2 className="popup-tilte">Ваши результаты: </h2>
        <h3 className="right-answer">Правильных ответов: <strong>{rightAnswers}</strong></h3>
        <h3 className="wrong-answer">Неправильных ответов: <strong>{wrongAnswers}</strong></h3>
        <ToggleButton buttonClass='in-popup' path='/' tilte='Выйти'/>
      </div>
    </div>
  )
}

export default PopupResults