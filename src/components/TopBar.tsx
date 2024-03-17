import {useContext, useState}from 'react'

import "../styles/topbar.css"
import AddTask from './AddTask'
import { appContext } from '../context/Provider'
import { Box, Button, Menu, MenuItem, Stack, Typography } from '@mui/material'
import { Add, KeyboardArrowDown, MoreVert } from '@mui/icons-material'
import { BoardContext} from '../context/BoardContextProvider'
import BoardDeleteConfirm from './reusable/BoardDeleteConfirm'
import SmallSCreen from './SmallSCreen'

const TopBar = () => {

  const [anchEl,setAnchEl] = useState(null)

  const {isVisible,setIsVisible} = useContext(appContext)
  const {selectedBoard,isSmallScreen,setIsSmallScreen,isDeleting,setIsDeleting} = useContext(BoardContext)

  const showMenu =(e:any)=>{
    setAnchEl(e.currentTarget)
  }

  const handleVisibility =()=>{
    setIsVisible(state=>!state)
  }

  const handleDeleteBoard=()=>{

    if(selectedBoard){
      setIsDeleting(true)
      setAnchEl(null)
    }
  }

  
  return (
    <>
      <div className='topbar'>

        <Stack flexDirection={"row"} alignContent={"center"}>
          <Stack display={"flex"} flexDirection={"row"} gap={1}>
            <Box sx={{
              display:{
                xs:"block",
                md:"none",
                xm:"none",
              }
            }}><img src='/logo-mobile.svg' alt='test' /></Box>
            <Typography fontWeight={"bold"}>{selectedBoard?.name.toUpperCase()}</Typography>
          </Stack>
          <KeyboardArrowDown sx={{display:{xs:"block",
                xm:"none",
                md:"none"}}}
                onClick={()=>setIsSmallScreen(true)}
            />
          </Stack>
        <Stack flexDirection={"row"} alignItems={"center"}>
            <Button 
              // variant='contained' 
              disabled={selectedBoard?.status.length<1}
              sx={{borderRadius:20,whiteSpace:"nowrap",display:{
                xs:"none",
                xm:"block",
                md:"block"
              },
            background:"#635FC7",
          color:"white"}} 
              onClick={handleVisibility}
              
            >
              {isVisible? "Dismiss" : "Add new task" }
            </Button>
          
              <Button disabled={selectedBoard?.status.length<1}>
              <Add  fontSize='small' sx={{width:"40px",color:"white",borderRadius:"20px",height:"40px",bgcolor:"blue",display:{
                xs:"block",
                xm:"none",
                md:"none"
              },
            background:"#635FC7",
          color:"white"}}
              onClick={handleVisibility}
              />
              </Button>

              <MoreVert onClick={e=>showMenu(e)}/>
        
        </Stack>
      </div>

      {isVisible && <AddTask/>}

      <Menu 
        open={Boolean(anchEl)} 
        anchorEl={anchEl} 
        onClose={()=>setAnchEl(null)}
        style={{
          marginTop:"20px"
        }}
      >
          <MenuItem onClick={handleDeleteBoard}>Delete</MenuItem>
          <MenuItem onClick={()=>setAnchEl(null)}>Edit</MenuItem>
      </Menu>


        { isDeleting &&<BoardDeleteConfirm/>}

        {isSmallScreen && <SmallSCreen/>}
    </>
  )
}

export default TopBar
