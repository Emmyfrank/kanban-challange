import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Stack } from '@mui/material'
import { useContext } from 'react'
import { BoardContext } from '../../context/BoardContextProvider'

const BoardDeleteConfirm = () => {

    const {selectedBoard,boards,setIsDeleting,deleteBoard,setSelectedBoard} = useContext(BoardContext)

    const handleDeleteBoard =()=>{
        if(selectedBoard){
            deleteBoard(selectedBoard.id)
            setSelectedBoard(boards[0])
            setIsDeleting(false)
        }
    }

  return (
    <Dialog open onClose={()=>setIsDeleting(false)}>
        <DialogTitle sx={{color:"red"}}>Delete This Board?</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Are you sure you want to delete the 
            ‘{selectedBoard?.name}’ board?
             This action will remove all columns and tasks
            and cannot be reversed.
            </DialogContentText>
            <Stack gap={2} mt={4} flexDirection={{xs:"column",sm:"row",md:"row"}} width={"100%"}>
                <Button 
                    // variant='contained' 
                    // color='error'
                    sx={{borderRadius:30,width:"100%",background:"#FF9898",color:"white"}}
                    onClick={handleDeleteBoard}
                >Delete</Button>
                <Button 
                    // variant='contained' 
                    
                    sx={{borderRadius:30,width:"100%",background:'rgba(99, 95, 199, 0.3)',color:"blue"}}
                    onClick={()=>setIsDeleting(false)}
                >Cancel</Button>
            </Stack>
        </DialogContent>
    </Dialog>
  )
}

export default BoardDeleteConfirm
