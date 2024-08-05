'use client'

import ToggleButton from '../../buttons/buttonStart/ToggleButton'
import './TaskInformationPopup.scss'
import { ITask } from '@/app/tasks/page'


interface ITaskInfo {
  task : ITask,
  onClose: () => void
}

const TaskInformationPopup = ({ task, onClose }: ITaskInfo) => {
  console.log(task)

  return (
    <div className='popup-overlay' onClick={onClose}>
      <div className='popup' onClick={(e) => e.stopPropagation()}>
        <h2 className='popup__title'>{task.taskName}</h2>
        <p className='popup__first-info'>{task.firstInformation}</p>
        <p className='popup__second-info'>{task.secondInformation}</p>
        <button className='close-button' onClick={onClose}>X</button>
        <ToggleButton buttonClass='in-popup' path={`tasks/${task.taskID}`} tilte='Начать'/>
      </div>
    </div>
  )
}

export default TaskInformationPopup


// Вынести кнопку НАЧАТЬ в отдельный UI компоненте +
// Сделать скрытие sidePanel при открытии задания +
// Добавить кнопку выйти из задания и таймер 45 секунд +
// по окончанию таймера показыать попап с статистикой и кнопкой выхода обратно на гл. страницу +

// Добавить новый уровень +
// Добавить сохранение в localStorage
// Выложить на vercel +
// Придумать новый уровень
