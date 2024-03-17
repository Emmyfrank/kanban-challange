
import { useContext } from "react";
import { SubTaskI, appContext } from "../../context/Provider";
import "./singleTask.css"

export interface TaskI {
  title: string;
  description: string;
  status: {id:number,name:string}[];
  subtasks: SubTaskI[];
  id:number
}


function SingleTask({task}:{task: TaskI}) {

  const {setTasks,setTaskVisible,setSelectedTask} = useContext(appContext)

  const deletetask =(id:number)=>{
    setTasks(prev=>prev.filter(task=>task.id != id))
  }

  // const total = task.subtasks.length
  // const completed = task.subtasks.filter(c=>c.completed).length

  const handleClicked = ()=>{
    setTaskVisible(true)
    setSelectedTask(task)
  }
  
  return (
    
    <div className='task' onClick={handleClicked}>
      <h4 className="task-title">{task.title}</h4>
      {/* <p>{completed} Completed out of {total}</p> */}
      <p style={{color:"#828FA3"}}>{task.description}</p>
      {/* <p onClick={()=>deletetask(task.id)} className="delete">X</p> */}
    </div>
  )
}

export default SingleTask
