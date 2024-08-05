'use client'

import './Profile.scss'

import LoadingItem from '@/components/loader/loadingItem/LoadingItem'
import { useState, useEffect } from 'react'

interface IUserData {
  correctAnswers: number,
  wrongAnswers: number,
  totalTime: number,
  passed: number,
};

const Profile = () => {

  const [loaderState, setLoaderState] = useState<boolean>(true)
  const [userData, setUserData] = useState<IUserData | null>()
  const [correctAnswers, setCorrectAnswers] = useState<number>(0)
  const [wrongAnswers, setWrongAnswers] = useState<number>(0)

  useEffect(()=>{
    const storedData = localStorage.getItem('userData');
    const timer = setTimeout(() => {
      setLoaderState(false)
    }, 300)
    
    storedData && setUserData(JSON.parse(storedData))
    return () => clearTimeout(timer)
  },[])

  useEffect(()=>{
    if(userData){
      setCorrectAnswers(((userData?.correctAnswers / (userData?.correctAnswers + userData?.wrongAnswers)) * 100))
      setWrongAnswers(((userData?.wrongAnswers / (userData?.correctAnswers + userData?.wrongAnswers)) * 100))
    }
  }, [userData])

  return(
    <div className='pages__wrapper'>

      {loaderState && <LoadingItem/>}
      <div className={`${loaderState ? 'profile-inner' : 'profile-inner--active'}`}>
        <ul className='average-values__list'>
          <li className='average-value__item'>
            <h2 className='average-value__text'>Правильных ответов:</h2>
            <p className='procent'>{correctAnswers ? correctAnswers.toFixed(1) : '0'}%</p>
          </li>
          <li className='average-value__item'>
            <h2 className='average-value__text'>Неправильных ответов:</h2>
            <p className='procent'>{wrongAnswers ? wrongAnswers.toFixed(1) : '0'}%</p>
          </li>
          <li className='average-value__item'>
            <h2 className='average-value__text'>Общее время:</h2>
            <p className='procent'>00:19:42</p>
          </li>
          <li className='average-value__item'>
            <h2 className='average-value__text'>Пройдено:</h2>
            <p className='procent'>13%</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile