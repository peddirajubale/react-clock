import React, { useState } from 'react'
import Clock from '../Clock'
import './index.css'

export default function Clockapp() {
    const [showClock, setShowClock] = useState(false)

    const onToggelClock=()=>{
        setShowClock(showClock=>!showClock)
    }

  return (
    <div className="app-container">
        <button type="button" className="toggle-button" onClick={onToggelClock}>
          {showClock?"Hide Clock":"Show Clock"}
        </button>
        {
            showClock && <Clock />
        }
      </div>
  )
}
