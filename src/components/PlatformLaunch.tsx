import SingleTask from "./reusable/SingleTask"
import "./launch.css"
import { useContext } from "react"
import { AppContextProps, appContext } from "../context/Provider"
import ViewTask from "./reusable/ViewTask"
import { BoardContext } from "../context/BoardContextProvider"

const PlatformLaunch = () => {

  const {taskVisible,setIsVisible} = useContext<AppContextProps>(appContext)
  const {selectedBoard} = useContext(BoardContext)


  const allColumns = selectedBoard?.status

  return (
    <div className="container">

{selectedBoard && selectedBoard?.status.length > 0 ? 

(<div className="launch">

  {allColumns?.map(t=>(
  

    <div key={t.id} className="todo">
      <h3>{t.name}</h3>
      {selectedBoard?.tasks.filter(y=>{
        const filtered = y.status === t.name
        return filtered   
      }).map(task=><SingleTask key={task.id} task={task}/>)}
      { taskVisible &&<ViewTask/>}
    </div>




  ))}

</div>
)
:
(
  <div className="empty">
    <p>This Board is empty create new column to get started</p>
    <button onClick={()=>setIsVisible(true)}>Create New Column</button>
  </div>
)
}
</div> 
  )
}

export default PlatformLaunch


{/* <div className="container">

{selectedBoard?.columns.length > 0 ? 

(<div className="launch">

  {allColumns?.map(t=>(
  <div key={t.id} className="launch"> 

    <div className="todo">
      <h3>{t.name}</h3>
      {selectedBoard?.tasks.filter(y=>{
        const filtered = y.status === t.name
        return filtered   
      }).map(task=><SingleTask key={task.id} task={task}/>)}
    </div>



    { taskVisible &&<ViewTask/>}
  </div>
  ))}

</div>
)
:
(
  <div className="empty">
    <p>This Board is empty create new column to get started</p>
    <button onClick={()=>setIsVisible(true)}>Create New Column</button>
  </div>
)
}
</div> */}