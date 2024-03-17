
import "../styles/sidebar.css"
import { useContext } from 'react'
import { BoardContext } from '../context/BoardContextProvider'
import { Add, DarkMode, LightMode} from '@mui/icons-material'
import AddNewBoard from './AddNewBoard'
import { Switch } from '@mui/material'

const Sidebar = () => {

  const {boards,isCreating,setIsCreating,setSelectedBoard,selectedBoard} = useContext(BoardContext)




  return (
    <>
    <div className='sidebar'>

      <h3 className='header-1'>
        <img src="/logo-dark.svg" alt='sds'/>
      </h3>

      <p className='p'>All board ({boards.length})</p>

      <div className='board-container'>

        {boards.map(board=>(
        <div key={board.id} className={`name ${selectedBoard?.id === board.id?"active-board":""}`} onClick={()=>
          
        (console.log(board),setSelectedBoard(board))}>
            <img src="/icon-board.svg" alt="board"/>
            <p>{board.name}</p>
        </div>))}

      </div>


      <button className='add-board' onClick={()=>setIsCreating(true)}>
        <Add/>
        <p>Create new Board</p>
      </button>

      

      <div className='bottom'>
        <LightMode/>
        <Switch/>
        <DarkMode/>
      </div>
    </div>

      {isCreating && <AddNewBoard/>}
    </>
  )
}

export default Sidebar

