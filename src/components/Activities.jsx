import React from 'react'
import { useContext } from 'react'
import ActivityContext from '../context/ActivityContext'

function Activities(props) {

const {activityData} = useContext(ActivityContext)
    console.log(activityData)
  return (
    <div className='dailyActs'>
      
      {activityData.map((key) => {
     return(
       <h2>{key.name}</h2>
      ) })}
      
    </div>
  )
  

}

export default Activities


