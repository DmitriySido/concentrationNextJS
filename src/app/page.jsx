'use client';

import React, { useEffect, useState } from 'react';

const Home = () => {
  const initialUserData = {
    correctAnswers: 0,
    wrongAnswers: 0,
    totalTime: 0,
    passed: 0,
    largerNumber: 0,
    extraPiece: 0,
    numberOfSquares: 0,
    restoreSequence: 0,
  };

  const [userData, setUserData] = useState(initialUserData)

  useEffect(()=>{
    const storedData = localStorage.getItem('userData')
    storedData ? setUserData(JSON.parse(storedData)) : localStorage.setItem('userData', JSON.stringify(initialUserData))
  },[])

  return (
    <div className="pages__wrapper">
      <h1>Домашняя страница</h1>
    </div>
  );
};

export default Home;