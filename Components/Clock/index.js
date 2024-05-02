import React from 'react'
import { useState, useEffect } from 'react'
import './index.css'

export default function Clock() {
    const [date, setDate]=useState(new Date())

    useEffect(()=>{
        const timerId = setInterval(()=>tick(),1000)
        return ()=>clearInterval(timerId)
    },[])

    const tick=()=>{
        setDate(new Date())
    }
    
  return (
    <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className='time'>{date.toLocaleTimeString()}</p>
      </div>
  )
}
