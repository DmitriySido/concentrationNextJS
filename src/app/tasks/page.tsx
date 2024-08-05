'use client';

import { useEffect, useState } from "react";
import styles from './Tasks.module.scss';
import TaskInformationPopup from '@/components/UI/popups/taskInformationPopup/TaskInformationPopup';
import LoadingItem from '@/components/loader/loadingItem/LoadingItem';

export interface ITask {
  taskName: string,
  firstInformation: string,
  secondInformation: string,
  taskID: string,
  process: number,
  minCorrectAnswers: number,
  maxWrongAnswers: number,
  unlocked: boolean
}

interface IUserData {
  correctAnswers: number,
  wrongAnswers: number,
  totalTime: number,
  passed: number,
  largerNumber: number,
  extraPiece: number,
  numberOfSquares: number,
  restoreSequence: number
}



const Tasks = () => {
  const [taskInfo, setTaskInfo] = useState<ITask | null>(null);
  const getInfo = (content: ITask) => setTaskInfo(content);
  const closePopup = () => setTaskInfo(null);

  const [loaderState, setLoaderState] = useState<boolean>(true);
  const [userData, setUserData] = useState<IUserData | null>(null);

  const tasks = [
    {
      taskName: 'Большее число',
      firstInformation: 'Сравни числа и выбери большее.',
      secondInformation: 'Смотри на центральную точку, при этом выбирай большее число. И постарайся делать это как можно быстрее.',
      taskID: 'largerNumber',
      process: userData?.largerNumber ?? 0,
      minCorrectAnswers: 24,
      maxWrongAnswers: 5,
      unlocked: true,
    },
    {
      taskName: 'Лишняя фигура',
      firstInformation: 'Найди лишнюю фигуру среди других фигур.',
      secondInformation: 'Ищи лишнюю фигуру и делай это как можно быстрее.',
      taskID: 'extraPiece',
      process: userData?.extraPiece ?? 0,
      minCorrectAnswers: 18,
      maxWrongAnswers: 3,
      unlocked: userData && userData?.largerNumber >= 1,
    },
    {
      taskName: 'Количество квадратов',
      firstInformation: 'Посчитай количество квадратов.',
      secondInformation: 'Считай количество зелёных квадратов и отвечай как можно быстрее.',
      taskID: 'numberOfSquares',
      process: userData?.numberOfSquares ?? 0,
      minCorrectAnswers: 12,
      maxWrongAnswers: 4,
      unlocked: userData && userData?.extraPiece >= 1,
    },
    {
      taskName: 'Активные ячейки',
      firstInformation: 'Нажми на ячейки, которые потухли.',
      secondInformation: 'Нажимай на ячейки которые загорелись и потухли после специального сигнала и делай это как можно скорее.',
      taskID: 'restoreSequence',
      process: userData?.restoreSequence ?? 0,
      minCorrectAnswers: 55,
      maxWrongAnswers: 10,
      unlocked: userData && userData?.numberOfSquares >= 1,
    },
  ];

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }

    const timer = setTimeout(() => {
      setLoaderState(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='pages__wrapper'>
      {loaderState && <LoadingItem />}

      <ul className={`${loaderState ? styles.taskList : styles.taskListActive}`}>
        {tasks.map((task: any) => (
          <li key={task.taskID}>
            <div
              className={styles.taskLink}
              onClick={() => task.unlocked && getInfo(task)}
              style={{ opacity: task.unlocked ? 1 : 0.5 }}
            >
              <div>
                <h2>{task.taskName}</h2><br />
                <p>{task.firstInformation}</p>
              </div>
              <span>{task.process}/5</span>
            </div>
          </li>
        ))}
      </ul>
      {taskInfo && <TaskInformationPopup task={taskInfo} onClose={closePopup} />}
    </div>
  );
};

export default Tasks;