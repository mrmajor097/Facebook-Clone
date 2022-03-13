import React from 'react'
import "./css/storyReel.css"
import Story from './Story'

function StoryReel() {
  return (
    <div className='storyReel'>
    <Story title="Jamil Gamer" profileSrc="http://source.unsplash.com/500x500/?coding,gaming" image="http://source.unsplash.com/120x200/?coding,gaming" />
    <Story title="Harry" profileSrc="http://source.unsplash.com/500x500/?coding" image="http://source.unsplash.com/120x200/?gaming" />
    <Story title="Frank" profileSrc="http://source.unsplash.com/500x500/?minecraft" image="http://source.unsplash.com/120x200/?coding,laptop" />
    <Story title="Gamer" profileSrc="http://source.unsplash.com/500x500/?nature" image="http://source.unsplash.com/120x200/?bird,laptop" />
    <Story title="Coder" profileSrc="http://source.unsplash.com/500x500/?nature,water" image="http://source.unsplash.com/120x200/?water,flower" />
    </div>
  )
}

export default StoryReel