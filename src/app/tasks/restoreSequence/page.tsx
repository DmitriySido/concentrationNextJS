'use client'
import { useEffect, useState } from 'react';
import './restoreSequence.scss'
import TopPanel from "@/components/UI/topPanel/TopPanel"

const RestoreSequence = () => {
  const squareListState = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  const [randomSubset, setRandomSubset] = useState<number[]>([])
  const [clickedSquares, setClickedSquares] = useState<number[]>([])
  const [inactiveSquares, setInactiveSquares] = useState<number[]>([])
  const [randomCount, setRandomCount] = useState<number>()
  const [trueAnswer, setTrueAnswer] = useState<number>(0)

  const [rightAnswers, setRightAnswers] = useState<number>(0)
  const [wrongAnswers, setWrongAnswers] = useState<number>(0)

  const getRandomSubset = (arr: number[]) => {
    const randCount = Math.floor(Math.random() * (8 - 4 + 1)) + 4
    setRandomCount(randCount)
    const shuffledArray = arr.slice().sort(() => 0.5 - Math.random())
    return shuffledArray.slice(0, randCount)
  }

  const resetGame = () => {
    setRandomSubset(getRandomSubset(squareListState))
    setClickedSquares([])
    setInactiveSquares([])
    setTrueAnswer(0)
  }

  useEffect(() => { setRandomSubset(getRandomSubset(squareListState))}, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setInactiveSquares(randomSubset)
    }, 1000)

    return () => clearTimeout(timer)
  }, [randomSubset])

  const getAnswer = (square: number) => {
    if (randomSubset.includes(square)) {
      if (randomCount) {
        setTrueAnswer(trueAnswer + 1);
        trueAnswer + 1 === randomCount && resetGame()
        setRightAnswers(rightAnswers + 1)
        setInactiveSquares(prev => prev.filter(num => num !== square))
      }
    } else {
      setWrongAnswers(wrongAnswers + 1)
      setClickedSquares(prevClickedSquares => [...prevClickedSquares, square])
    }
  }

  // Показывать какое то окошко после каждого правильного уровня на 1 секунду и скрывать

  return (
    <div className="task-pages__wrapper">
      <TopPanel rightAnswers={rightAnswers} wrongAnswers={wrongAnswers}/>
      <div className="restore-sequence__inner">
        <div className="numbers-squares__inner">
          <div className="squares-list">
            {squareListState.map((square, index) => {
              const isGreen = randomSubset.includes(square)
              const isRed = clickedSquares.includes(square)
              const isInactive = inactiveSquares.includes(square)

              return (
                <div
                  key={index}
                  onClick={() => getAnswer(square)}
                  className={`square ${isGreen ? 'square-green' : ''} ${isRed ? 'square-red' : ''} ${isInactive ? 'square-green--inactive' : ''}`}
                >
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestoreSequence