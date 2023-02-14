import React from 'react'
import ActionIcon from './ActionIcon';

export default function Player({name = "Player" , score = 0 , action="rock"}) {
  return (
	<div className="player">
	<div className="score"> {`${name} : ${score}`} </div>
	<div className="action">
	  {action &&<ActionIcon action={action} size ={70}/>}
	</div>
  </div>
  )
}
