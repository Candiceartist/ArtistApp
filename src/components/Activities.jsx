import React from 'react'
import { useContext } from 'react'
import ActivityContext from '../context/ActivityContext'

function Activities() {
  const today = {useContext,ActivityContext}
    
  return (
    <div className='dailyActs'>
      {Object.keys(today).map((key) => {
       <h2>Where:{key.activity.name} </h2>
      })}
    </div>
  )
  

}

export default Activities