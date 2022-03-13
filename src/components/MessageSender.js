import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./css/messageSender.css"
import db from '../firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"


function MessageSender() {
    let user =  JSON.parse(localStorage.getItem("user"));
    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const handleSubmit = e =>{
        e.preventDefault()
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            image: imageUrl,
            profilePic: user.photoURL,
            username: user.displayName
        })
        setInput("")
        setImageUrl("")

    }
    
  return (
    <div className='messageSender'>
        <h3 className='heading'>Send a Message here!!!</h3>
    <div className="messageSender__top">
     <Avatar  src={user.photoURL.toString()}/>
    <form onSubmit={handleSubmit}>
        <input value={input}  onChange={(e) =>{setInput(e.target.value)}} className='messageSender__input' placeholder={`What's in your mind ${user.displayName}?`} required />
        <input value={imageUrl}  onChange={(e) =>{setImageUrl(e.target.value)}} placeholder='Image URL (Optional) ' />     
        <button type='submit'>Hidden Submit</button>
    </form>    
    </div>
    </div>
  )
}

export default MessageSender