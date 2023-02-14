import React from 'react'
import ActionIcon from './ActionIcon'

export default function ActionButton({action = "rock" , onActionSelected}) {
  return (
	<button className="round-btn" onClick={() => onActionSelected(action)}>
		<ActionIcon action={action} size={37} />
          </button>
  )
}
