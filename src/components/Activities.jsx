import React from 'react'
import { useContext,useEffect, useState } from 'react'
import ActivityContext from '../context/ActivityContext'

function Activities(today) {


  const {activityData} = useContext(ActivityContext)
    console.log(activityData)

  const [filteredActivites,setFilteredActivities] = useState({activityData})

   return (
    <div className='dailyActs'>
      
      {activityData.map((key) => {
     return(
      <div>
       <h2>{key.name}</h2>
       <h4>{key.address}</h4>
       </div>
      ) })}
      
    </div>
  )
  

}

export default Activities




  
  

