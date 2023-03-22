import React from 'react'
import { useContext } from 'react'
import ActivityContext from '../context/ActivityContext'

function Activities() {
    const todaysActivity = useContext(ActivityContext);

  return (
    <div>Parent
        <h2>Where: </h2>
        <h3>What to do: </h3>
    </div>
  )
}

export default Activities