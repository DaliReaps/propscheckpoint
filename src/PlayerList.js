import React from 'react'
import Player from './Player'
import playersDetails from './players'

const PlayerList = () => {return (
<div style={{ display:'flex',flexWrap:'wrap',justifyContent:'space-around' }}>

{playersDetails.map((currentValue) => (
        <Player name={currentValue.name} team={currentValue.team} nationality={currentValue.nationality}  jerseyNumber={currentValue.jerseyNumber} imageURL={currentValue.imageURL} age={currentValue.age} />
      ))}
</div>



)
  ;
}
export default PlayerList