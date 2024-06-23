import ToggleButton from "../buttons/buttonStart/ToggleButton"
import Timer from "../timer/Timer"
import './TopPanel.scss'

interface ITopPanelProps {
  wrongAnswers: number,
  rightAnswers: number,
}

const TopPanel = ({wrongAnswers, rightAnswers} : ITopPanelProps) => {
  return(
    <div className="top-panel">
      <ToggleButton buttonClass='in-panel' path='/' tilte='Выйти'/>
      <Timer rightAnswers={rightAnswers} wrongAnswers={wrongAnswers}/>
    </div>
  )
}

export default TopPanel