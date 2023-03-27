import React from 'react'
import { useContext,useEffect, useState } from 'react'
import ActivityContext from '../context/ActivityContext'

function Activities(today) {


  const {activityData} = useContext(ActivityContext)
    console.log(activityData)

  const [filteredActivites,setFilteredActivities] = useState({activityData})
  const [daysactive, setDaysactive] = useState()
  
  const daysactiv = Array.from(
    new Set(({activityData}).map(({activityData}) => ({activityData}).day))
  )

  useEffect(() => {
    setFilteredActivities(
      ({activityData}).filter(({activityData}) => {
        return (
          (!daysactive || daysactive === ({activityData}).day )
        )
      })
    )
  })

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




  
  

