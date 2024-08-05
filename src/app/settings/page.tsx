'use client'

import LoadingItem from '@/components/loader/loadingItem/LoadingItem'
import { useState, useEffect } from 'react'

import './Settings.scss'

export default function Settings(){

  const [loaderState, setLoaderState] = useState<boolean>(true)

  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoaderState(false)
    }, 300)
    return () => clearTimeout(timer)
  },[])

  return(
    <div className="pages__wrapper">
      {loaderState && <LoadingItem/>}
      <div className={`${loaderState ? 'settings-inner' : 'settings-inner--active'}`}>
        <h1>Настройки</h1>
      </div>
    </div>
  )
}