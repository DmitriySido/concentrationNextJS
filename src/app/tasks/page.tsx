'use client'

import styles from './Tasks.module.scss'
import { useState } from 'react'
import TaskInformationPopup from '@/components/UI/popups/taskInformationPopup/TaskInformationPopup'

const tasks = [
  {
    taskName: 'Большее число',
    firstInformation: 'Сравни числа и выбери большее.',
    secondInformation: 'Смотри на центральную точку, при этом выбирай большее число. И постарайся делать это как можно быстрее.',
    progress: 0,
    taskID: 'largerNumber'
  },
  {
    taskName: 'Лишняя фигура',
    firstInformation: 'Найди лишнюю фигуру среди других фигур.',
    secondInformation: 'Ищи лишнюю фигуру и делай это как можно быстрее.',
    progress: 0,
    taskID: 'extraPiece'
  },
  {
    taskName: 'Количество квадратов',
    firstInformation: 'Посчитай количество квадратов.',
    secondInformation: 'Считай количество зелёных квадратов и отвечай как можно быстрее.',
    progress: 0,
    taskID: 'numberOfSquares'
  },
  {
    taskName: 'Активные ячейки',
    firstInformation: 'Нажми на ячейки, которые потухли.',
    secondInformation: 'Нажимай на ячейки которые загорелись и потухли после специального сигнала и делай это как можно скорее.',
    progress: 0,
    taskID: 'restoreSequence'
  },
]

const Tasks = () => {
  const [taskInfo, setTaskInfo] = useState(null)

  const getInfo = (content: any) => setTaskInfo(content)

  const closePopup = () => setTaskInfo(null)

  return (
    <div className='pages__wrapper'>
      <ul>
        {tasks.map((task) => (
          <li key={task.taskID}>
            <div className={styles.taskLink} onClick={() => getInfo(task)}>
              <div>
                <h2>{task.taskName}</h2><br />
                <p>{task.firstInformation}</p>
              </div>
              <span>{task.progress}/5</span>
            </div>
          </li>
        ))}
      </ul>
      {taskInfo && <TaskInformationPopup task={taskInfo} onClose={closePopup} />}
    </div>
  )
}

export default Tasks