import { Avatar } from '@mui/material'
import React from 'react'
import "./css/story.css"

function Story({image , profileSrc , title}) {
  return (
    <div className='story' style={{background:`url(${image})`}}>
    <Avatar className='story__avatar' src={profileSrc} />  
    <h4>{title}</h4>
    </div>
  )
}

export default Story