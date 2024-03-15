import { useContext, useState } from "react"
import "../styles/addtask.css"
import { TaskI, appContext } from "../context/Provider"

interface SubTaskI {
    name:string,
    id:number,
    completed:boolean
}

const AddTask = () => {

    const {setTasks,setIsVisible} = useContext(appContext)


    const [title,setTitle] = useState<string>("")
    const [description,setDescription] = useState<string>("")
    const [status,setStatus] = useState<"todo" | "inprogress" |"done">("todo")
    const [sub,setSub] = useState<string>("")
    const [subtasks,setSubtasks] = useState<SubTaskI[]>([])


    const addTask =()=>{
        if(!title || !description || !status || subtasks.length<0){
            alert(status)
            alert("sory")
        } else {
            const newTask : TaskI ={
                title :title,
                description:description,
                status:status,
                subtasks:subtasks,
                id:Date.now()
            }

            setTasks(prev=>[...prev,newTask])
            setIsVisible(false)

            console.log(newTask)
        }
    }

    const addSubTask =()=>{

        if(!sub){
            alert("no sub task added")
        } else {
            setSubtasks(prev=>[...prev,{
                name:sub,
                id: Date.now(),
                completed:false
            }])
      
            setSub('')
        }    
    }

    const deleteSubTask = (id : number)=>{
        setSubtasks(prev=>prev.filter(task=>task.id != id))
    }


    

  return (
    <div className='add'>
        <div className="field">
            <label>Task Title</label>
            <input placeholder='Task Title' value={title} onChange={e=>setTitle(e.target.value)}/>
        </div>

        <div className="field">
            <label>Task Description</label>
            <textarea placeholder='Task Description' value={description} onChange={e=>setDescription(e.target.value)}></textarea>
        </div>

        <div className="field">
            <label>SubTasks</label>
            {subtasks.length>0 && subtasks.map((sub)=>{
            const desc = sub.name.length > 40 ?`${sub.name.substring(0,40)}...`: sub.name
            
            return (<div key={sub.id} className="sub">
                <p>{desc}</p>
                <button onClick={()=>deleteSubTask(sub.id)}>X</button>
            </div>)}
            )}
            <input placeholder='Task Subtask' value={sub} onChange={e=>setSub(e.target.value)}/>
            <button className='btn1' onClick={addSubTask}>Add subtask</button>
        </div>

        <div className="field">

            <label>Status</label>
            
                <select  onChange={e=>setStatus(e.target.value as "todo" | "inprogress" | "done")}>
                    <option value={"todo"}>TODO</option>
                    <option value={"inprogress"}>IN PROGRESS</option>
                    <option value={"done"}>DONE</option>
                </select>

        </div>

        <div className="field">
            <button className='btn1' onClick={addTask}>
                Create New Task
            </button>
        </div>
    </div>
  )
}

export default AddTask
