import SingleTask from "./reusable/SingleTask"
import "./launch.css"
import { useContext } from "react"
import { AppContextProps, appContext } from "../context/Provider"

const PlatformLaunch = () => {

  const {tasks} = useContext<AppContextProps>(appContext)

  const todoTasks = tasks.filter(task=>task.status==="todo")
  const inprogresstasks =tasks.filter(task=>task.status==='inprogress')
  const donetasks = tasks.filter(task=>task.status==='done')

  return (
    <div className="launch">

      <div className="todo">
        <h3>Todo</h3>

        {todoTasks.map(task=><SingleTask key={task.id} task={task}/>)}
      </div>

      <div className="inprogress">
        <h3>In Progress</h3>

        {inprogresstasks.map(task=><SingleTask key={task.id} task={task}/>)}
      </div>

      <div className="done">
      <h3>Done</h3>

      {donetasks.map(task=><SingleTask key={task.id} task={task}/>)}
      </div>
   
      
    </div>
  )
}

export default PlatformLaunch
