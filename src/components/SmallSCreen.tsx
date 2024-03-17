import { Dialog, DialogContent, Stack, Switch } from '@mui/material'
import { useContext } from 'react'
import { BoardContext } from '../context/BoardContextProvider'
import { Add, DarkMode, LightMode } from '@mui/icons-material'

const SmallSCreen = () => {

    const {boards,setSelectedBoard,isSmallScreen,setIsSmallScreen,setIsCreating,selectedBoard} = useContext(BoardContext)
  return (
    <Dialog fullWidth open={isSmallScreen} onClose={()=>setIsSmallScreen(false)} sx={{
        position:'absolute',
        top:"-200px"
    }}>
        <Stack my={2}>
        {boards.map(board=>(
        <div key={board.id} className={`name ${selectedBoard?.id === board.id?"active-board":""} `} onClick={()=>
          
        (setIsSmallScreen(false),setSelectedBoard(board))}>
            <img src="/icon-board.svg" alt="board"/>
            <p>{board.name}</p>
        </div>))}
        </Stack>
        <DialogContent>
        
        <Stack mb={2}>
        <button className='add-board' onClick={()=>(setIsSmallScreen(false),setIsCreating(true))}>
            <Add/>
            <p>Create new Board</p>
        </button>
        </Stack>

        <Stack flexDirection={"row"} 
            alignItems={"center"} 
            bgcolor={"#F4F7FD"}
            p borderRadius={2}
            justifyContent={"space-between"}
        >
            <LightMode/>
            <Switch/>
            <DarkMode/>
        </Stack>

        </DialogContent>
    </Dialog>
  )
}

export default SmallSCreen
