import React from 'react'
import { FaHandLizard, FaHandPaper, FaHandRock, FaHandScissors, FaHandSpock } from "react-icons/fa";

export default function ActionIcon({action , ...props}) {
	const icons = {
		rock : FaHandRock,
		paper:FaHandPaper,
		scissors :FaHandScissors,
		lizard : FaHandLizard,
		spock : FaHandSpock
	}
	const Icon = icons[action];
  return (
	<Icon {...props}/>
  )
}