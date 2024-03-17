import { useContext, useState } from "react"
import "./viewtask.css"
import { Checkbox, Dialog, DialogContent, DialogContentText, Menu, MenuItem, Stack, TextField, Typography } from "@mui/material"
import { appContext } from "../../context/Provider"
import {  MoreVert} from "@mui/icons-material";
import { BoardContext } from "../../context/BoardContextProvider";
// import { Dialog, DialogContent } from "@mui/material";


function ViewTask() {
    const [anchEl,setAnchEl] = useState(null)

    const showMenu =(e:any)=>{
        setAnchEl(e.currentTarget)
      }
  
    const handleClose = () => {
        setAnchEl(null);
        setTaskVisible(false)
    };
  
    const {setTaskVisible,taskVisible,selectedTask} = useContext(appContext)
    const {selectedBoard} = useContext(BoardContext)
  return (
   <>
<Dialog hideBackdrop  sx={{
    background:'rgba(151,151,151,0.3)'
    }} open={taskVisible} onClose={handleClose} fullWidth>

    <DialogContent >

    <Stack flexDirection="row" mb={2} justifyContent={"space-between"}>
        <DialogContentText fontSize={20}sx={{ fontWeight: "bold", whiteSpace: "normal" }}>
            {selectedTask?.title}
        </DialogContentText>

        <MoreVert onClick={e=>showMenu(e)}/>
       
    </Stack>


        <DialogContentText> {selectedTask?.description} </DialogContentText>
        <DialogContentText mt={2}>
            Subtasks(3 of 5)
        </DialogContentText>

        <Stack spacing={1}>
        {selectedTask?.subtasks.map(sub=>(
            <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            borderRadius={1}
            bgcolor={"#f4f7fd"}
            sx={{
                
                textAlign: 'center', 
            }}
        >
            <Checkbox defaultChecked={sub.completed} />
            <Typography>{sub.name}</Typography>
        </Stack>
        ))}
        </Stack>

        <DialogContentText my={1}>
            Current Status
        </DialogContentText>

        <TextField size="small" select fullWidth value={selectedTask?.status}>    
            {selectedBoard?.status.map(t=><MenuItem key={t.id} value={t.name}>{t.name.toUpperCase()}</MenuItem>)}
        </TextField>

    </DialogContent>

    
</Dialog>

<Menu 
    open={Boolean(anchEl)} 
    anchorEl={anchEl} 
    onClose={()=>setAnchEl(null)}
>
  <MenuItem onClick={()=>setAnchEl(null)}>Delete Task</MenuItem>
  <MenuItem onClick={()=>setAnchEl(null)}>Edit Task</MenuItem>
</Menu>
</> 
  )
}

export default ViewTask



