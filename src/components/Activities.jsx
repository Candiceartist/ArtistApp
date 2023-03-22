import React from 'react'

function Activities() {
    const todaysActivity = useContext(ActivityContext);

  return (
    <div>Parent
        <h2>Where: </h2>
        <h3>What to do: </h3>
        <Scores/>
    </div>
  )
}

export default Activities