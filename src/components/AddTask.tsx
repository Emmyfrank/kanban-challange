import { useContext, useEffect, useRef, useState } from "react"
import "../styles/addtask.css"
import {  appContext } from "../context/Provider"
import { BoardContext } from "../context/BoardContextProvider"

interface SubTaskI {
    name:string,
    id:number,
    completed:boolean
}

const AddTask = () => {

    const {setTasks,setIsVisible} = useContext(appContext)
    const {selectedBoard} = useContext(BoardContext)




    const [title,setTitle] = useState<string>("")
    const [description,setDescription] = useState<string>("")
    const [status,setStatus] = useState(selectedBoard?.status[0].name)
    const [sub,setSub] = useState<string>("")
    const [subtasks,setSubtasks] = useState<SubTaskI[]>([])

    //erros states
    // const [setIsSubError] = useState(false)
    // const [setIsTitleError] = useState(false)
    // const [setIsDescError] = useState(false)


    const addTaskRef = useRef<HTMLDivElement>(null);


    const addTask =()=>{

        // if(!title){
        //     setIsTitleError?(true)
        //     setTimeout(() => {
        //         setIsTitleError(false)
        //     }, 2000);
        // } else if(!description){
        //     setIsDescError(true)
        //     setTimeout(() => {
        //         setIsDescError(false)
        //     }, 2000);
        // } else if(subtasks.length <0 ){
        //     setIsSubError(true)

        //     setTimeout(() => {
        //         setIsSubError(false)
        //     }, 2000);
        // } else {
            const newTask ={
                title :title,
                description:description,
                status:status,
                subtasks:subtasks,
                id:Date.now()
            }
    
            setTasks(prev=>[...prev,newTask])
            selectedBoard?.tasks.push(newTask)
            setIsVisible(false)
        // }

        
    }

    const addSubTask =()=>{

        // if(!sub){
        //     setIsSubError(true)

        //     setTimeout(() => {
        //         setIsSubError(false)
        //     }, 2000);
        // } else {
            setSubtasks(prev=>[...prev,{
                name:sub,
                id: Date.now(),
                completed:false
            }])
      
            setSub('')
        }    
    // }

    const deleteSubTask = (id : number)=>{
        setSubtasks(prev=>prev.filter(task=>task.id != id))
    }


    useEffect(() => {
        function handleClickOutside(event:any) {
            //@ts-ignore
            if (addTaskRef.current && !addTaskRef.current?.contains(event.target)) {
                setIsVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsVisible]);


    

  return (
    <div id="dialog" className="dialogs">
        
     <div className='add' ref={addTaskRef}>
        <h3 style={{
            fontWeight:"bold",
            marginBottom:"20px"
        }}>Add new Task</h3>
        <div className="field">
            <div className="nono">Task Title</div>
            <input placeholder='Task Title' value={title} onChange={e=>setTitle(e.target.value)}/>
        </div>

        <div className="field">
            <div className="nono">Task Description</div>
            <textarea placeholder='Task Description' value={description} onChange={e=>setDescription(e.target.value)}></textarea>
        </div>

        <div className="field">
            <div className="nono">SubTasks</div>
            {subtasks.length>0 && subtasks.map((sub)=>{
                const desc = sub.name.length > 20 ?`${sub.name.substring(0,25)}...`: sub.name
                
                return (
                    <div key={sub.id} 
                    style={{
                        display:"flex",
                        alignItems:"center"
                    }}
                        
                
                    >
                        <p     
                        style={{
                            flex:1,
                            border:"1px",
                            borderRadius:"5px",
                            padding:"3px"
                        }}
                          
                        >{desc}</p>
                        <img src="/icon-cross.svg" onClick={()=>deleteSubTask(sub.id)}/>
                    </div>
                )}
                )}
            <input placeholder='Task Subtask' value={sub} onChange={e=>setSub(e.target.value)}/>
            <button className='btn1 btn2' onClick={addSubTask}>Add subtask</button>
        </div>

        <div className="field">

            <label>Status</label>
            
                <select value={status} onChange={e=>setStatus(e.target.value as any)}>
                    {/* <option value={"todo"}>TODO</option>
                    <option value={"inprogress"}>IN PROGRESS</option>
                    <option value={"done"}>DONE</option> */}

                    {selectedBoard?.status.map(t=><option value={t.name}>{t.name.toUpperCase()}</option>)}
                </select>

        </div>

        <div className="field">
            <button className='btn1' onClick={addTask}>
                Create New Task
            </button>
        </div>
    </div> 

    </div>
  )
}

export default AddTask
