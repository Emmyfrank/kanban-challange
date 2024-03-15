import React, { createContext, useState, ReactNode } from 'react';

export interface AppContextProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  tasks: TaskI[];
  setTasks: React.Dispatch<React.SetStateAction<TaskI[]>>;
}

export interface SubTaskI {
  name:string,
  id:number,
  completed:boolean
}

 export interface TaskI {
  title: string;
  description: string;
  status: "inprogress" | "done" | "todo";
  subtasks: SubTaskI[];
  id:number
}

export type TasksType = TaskI[]

export const appContext = createContext<AppContextProps>({
  isVisible: false,
  setIsVisible: () => {},
  tasks: [],
  setTasks: () => {},
});

const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tasks, setTasks] = useState<TaskI[]>([]);


 

  return (
    <appContext.Provider value={{ isVisible, setIsVisible, tasks, setTasks}}>
      {children}
    </appContext.Provider>
  );
};

export default Provider;
