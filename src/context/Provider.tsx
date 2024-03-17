import React, { createContext, useState, ReactNode} from 'react';


export interface AppContextProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: TaskI[];
  setTasks: React.Dispatch<React.SetStateAction<TaskI[]>>;
  taskVisible:boolean,
  setTaskVisible:React.Dispatch<React.SetStateAction<boolean>>;
  selectedTask : TaskI | undefined,
  setSelectedTask:React.Dispatch<React.SetStateAction<TaskI | undefined>>;
}

export interface SubTaskI {
  name:string,
  id:number,
  completed:boolean
}

 export interface TaskI {
  title: string;
  description: string;
  status: any;
  subtasks: SubTaskI[];
  id:number
}

export type TasksType = TaskI[]

export const appContext = createContext<AppContextProps>({
  isVisible: false,
  setIsVisible: () => {},
  tasks: [],
  setTasks: () => {},
  taskVisible:false,
  setTaskVisible:()=>{},
  selectedTask:undefined ,
  setSelectedTask:()=>{}
});

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [taskVisible,setTaskVisible] = useState(false)
  const [tasks, setTasks] = useState<TaskI[]>([]);
  const [selectedTask,setSelectedTask] = useState<TaskI>()


 

  return (
    <appContext.Provider value={{ isVisible, setIsVisible, tasks, setTasks,taskVisible,setTaskVisible,selectedTask,setSelectedTask}}>
      {children}
    </appContext.Provider>
  );
};

export default Provider;
