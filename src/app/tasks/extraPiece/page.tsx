'use client'

import './ExtraPiece.scss'

import { useState, useEffect } from 'react';
import figure1 from '../../../../public/piece/cube.png'
import figure2 from '../../../../public/piece/icon-3d.png'
import figure3 from '../../../../public/piece/icon-circle.png'
import figure4 from '../../../../public/piece/icon-cone.png'
import figure5 from '../../../../public/piece/icon-cylinder.png'
import figure6 from '../../../../public/piece/icon-diamond.png'
import figure7 from '../../../../public/piece/icon-hexagonal.png'
import figure8 from '../../../../public/piece/icon-prism.png'
import figure9 from '../../../../public/piece/icon-pyramid.png'
import Image from 'next/image';
import TopPanel from '@/components/UI/topPanel/TopPanel';

function ExtraPiece(){
  const allFigures1 = [
    {
      figure: figure1,
      figureID: 1
    },
    {
      figure: figure2,
      figureID: 2
    },
    {
      figure: figure3,
      figureID: 3
    },
    {
      figure: figure4,
      figureID: 4
    },
    {
      figure: figure5,
      figureID: 5
    },
    {
      figure: figure6,
      figureID: 6
    },
    {
      figure: figure7,
      figureID: 7
    },
    {
      figure: figure8,
      figureID: 8
    },
    {
      figure: figure9,
      figureID: 9
    },
  ]

  const [rightAnswers, setRightAnswers] = useState<number>(0)
  const [wrongAnswers, setWrongAnswers] = useState<number>(0)
  const [searchedFigureID, setSearchedFigureID] = useState()

  const [randomPiece, setRandomPiece] = useState(figure1)
  const [suffleArray, setSuffleArray] = useState(allFigures1)

  useEffect(()=>{
    randomFigure(allFigures1)
    setSuffleArray(allFigures1.sort(() => Math.random() - 0.5));
  },[])


  function randomFigure(arr: any){
    const randomIndex = Math.floor(Math.random() * arr.length);
    setRandomPiece(arr[randomIndex].figure);
    setSearchedFigureID(arr[randomIndex].figureID)
  }

  function getPiece(getID: number){
    getID === searchedFigureID ? setRightAnswers(rightAnswers + 1) : setWrongAnswers(wrongAnswers + 1)
    
    randomFigure(allFigures1)
    setSuffleArray(allFigures1.sort(() => Math.random() - 0.5));
  }

  
  return(
    <div className="task-pages__wrapper">
      <TopPanel rightAnswers={rightAnswers} wrongAnswers={wrongAnswers}/>
      <div className='extra-piecer__inner'>
        <div className='desired-figure figure-button'>
          <Image width={100} height={100} src={randomPiece && randomPiece} alt="Piece" priority/>
        </div>
        <div className='all-figures'>
          {
            suffleArray.map((figure: any) => {
              return(
                <div onClick={() => getPiece(figure.figureID)} key={figure.figureID + 'Piece'} className='figure-button'>
                  <Image className='figure-img' src={figure.figure} alt="" priority/>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExtraPiece