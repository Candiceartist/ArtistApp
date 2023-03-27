
import React from 'react'
import { useContext,useEffect, useState } from 'react'
import ActivityContext from '../context/ActivityContext'

function Activities(today) {


  const {activityData} = useContext(ActivityContext)
    console.log(activityData)

  
   return (
    <div className='dailyActs'>
      
      {activityData.map((key) => {
     return(
      <div className='museBox'>
        <div className='imgBox'>
          <img className='museimg' src={key.pic}/>
        </div>
      <div className='textBox'>
       <h2>{key.name}</h2>
       <h4>{key.address}</h4>
       < a href={key.link}>{key.link}</a>
       </div>
       </div>
      ) })}
      
    </div>
  )
  

}

export default Activities




  