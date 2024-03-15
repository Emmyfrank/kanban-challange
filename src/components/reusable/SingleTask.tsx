
import { useContext } from "react";
import { SubTaskI, appContext } from "../../context/Provider";
import "./singleTask.css"

export interface TaskI {
  title: string;
  description: string;
  status: "inprogress" | "done" | "todo";
  subtasks: SubTaskI[];
  id:number
}


function SingleTask({task}:{task: TaskI}) {

  const {setTasks} = useContext(appContext)

  const deletetask =(id:number)=>{
    setTasks(prev=>prev.filter(task=>task.id != id))
  }

  // const total = task.subtasks.length
  // const completed = task.subtasks.filter(c=>c.completed).length
  
  return (
    <div className='task'>
      <h4>{task.title}</h4>
      {/* <p>{completed} Completed out of {total}</p> */}
      <p>{task.description}</p>
      <p onClick={()=>deletetask(task.id)} className="delete">X</p>
    </div>
  )
}

export default SingleTask
