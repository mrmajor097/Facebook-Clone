import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import Feed from './Feed'
import Header from './Header'

function Home() {
    let history = useHistory()
  let user = localStorage.getItem("user");

  useEffect(() => {
    if(!user){
      history.push("/login")
    }
    // eslint-disable-next-line
  }, [])
  

  return (
      <>
        <Header /><div className="app__body"><Feed /></div> 
      </>
  )
}

export default Home    