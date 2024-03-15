import {useContext, useState}from 'react'

import "../styles/topbar.css"
import AddTask from './AddTask'
import { appContext } from '../context/Provider'

const TopBar = () => {

  const {isVisible,setIsVisible} = useContext(appContext)

 


  const handleVisibility =()=>{
    setIsVisible(state=>!state)
  }

  
  return (
    <>
      <div className='topbar'>
        <div className='burger'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className='header'>PLATFORM LAUNCH</h3>
        <div className='btn' onClick={handleVisibility}>
          {isVisible? "Dismiss" : "Add new task" }
        </div>
      </div>

      {isVisible && <AddTask/>}

    </>
  )
}

export default TopBar
