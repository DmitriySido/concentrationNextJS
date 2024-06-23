'use client'

import { useEffect, useState } from 'react';
import './numberOfSquares.scss'
import TopPanel from '@/components/UI/topPanel/TopPanel';

const NumberOfSquares = () => {
  // 0 - transparent
  // 1 - red
  // 2 - green

  const [squareListState, setSquareListState] = useState<number[]>([]) 
  const [elementCountsState, setElementCountsState] = useState<{ [key: number]: number }>({})
  const [answerListState, setAnswerListState] = useState<number[]>([])

  const [rightAnswers, setRightAnswers] = useState<number>(0)
  const [wrongAnswers, setWrongAnswers] = useState<number>(0)

  const generateSquareList = () => { // Функция генерирует случайное количество квадратов
    const array = [];
    for (let i = 0; i < 16; i++) {
      array.push(Math.floor(Math.random() * 3));
    }
    return array;
  };

  useEffect(() => {
    setSquareListState(generateSquareList());
  }, []);

  function countElements(arr: number[]) { // Получаем количество квадратов с разными цветами
    return arr.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {} as { [key: number]: number });
  }

  useEffect(() => {
    setElementCountsState(countElements(squareListState));
  }, [squareListState]);

  function generateAnswerList() { // Генерируем правильные и неправильные ответы
    const answerList = [];
    for (let i = 0; i < 3; i++) {
      answerList.push((elementCountsState[2] || 0) + i);
    }
    return answerList.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    setAnswerListState(generateAnswerList());
  }, [elementCountsState]);

  const getAnswer = (answer: number) => { // Получаем ответ от пользователя
    answer === elementCountsState[2] ? setRightAnswers(rightAnswers + 1) : setWrongAnswers(wrongAnswers + 1)
    
    setSquareListState(generateSquareList()); // Regenerate squares
  };

  return (
    <div className='task-pages__wrapper'>
      <TopPanel rightAnswers={rightAnswers} wrongAnswers={wrongAnswers}/>
      <div className='numbers-squares__inner'>
        <div className='squares-list'>
          {squareListState.map((square, index) => {
            return <div key={index} className={`square${square === 1 ? ' square-red' : square === 2 ? ' square-green' : ''}`}></div>
          })}
        </div>

        <div className='answer-list'>
          {answerListState.map((answer) => (
            <button key={answer + 'answer'} onClick={() => getAnswer(answer)} className='answer-button'>
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberOfSquares;