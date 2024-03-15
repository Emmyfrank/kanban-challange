

import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import "../styles/sidebar.css"
import TopBar from './TopBar'


const Homepage = () => {
  return (
    <div className='home'>

        <Sidebar/>
   
      <div className='outlet'>
        <TopBar/>
        <Outlet/>
        {/* <AddTask/> */}
      </div>
    </div>
  )
}

export default Homepage

