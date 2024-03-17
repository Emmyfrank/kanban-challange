import React, { ReactNode, createContext, useReducer, useState } from 'react'
import { TaskI } from './Provider'
import dummyTasks from '../constants/tasks'

interface BoardI {
    id:number,
    name:string,
    tasks:TaskI[],
    status:{id:number,name:string}[]
}

interface ReceiveI {
    name:string,
    status:{id:number,name:string}[]
}

interface BoardContextProps {
    boards: BoardI[],
    addBoard : (payload:ReceiveI) => void,
    deleteBoard : (id:number) => void,
    isCreating:boolean,
    setIsCreating : React.Dispatch<React.SetStateAction<boolean>>;
    selectedBoard : BoardI | null,
    setSelectedBoard : React.Dispatch<React.SetStateAction<BoardI | null>>;
    isDeleting :boolean,
    setIsDeleting :React.Dispatch<React.SetStateAction<boolean>>;
    isSmallScreen:boolean,
    setIsSmallScreen:React.Dispatch<React.SetStateAction<boolean>>;
}

export const initialState : BoardI[] =[
    {
        id:324,
        name:"Platform Launch",
        tasks : dummyTasks,
        status:[{name:"todo",id:398756},{name:"inprogress",id:87654},{name:"done",id:4566}]
    },
    {
        id:56,
        name:"Marketing",
        tasks : [],
        status:[{name:"todo",id:3333456},{name:"inprogress",id:87654},{name:"done",id:4566},{name:"notsure",id:8765435}]
    },
    {
        id:3243356,
        name:"Roadmap",
        tasks : [],
        status:[{name:"todo",id:346},{name:"inprogress",id:87654},{name:"done",id:4566},{name:"review",id:76345}]
    }
]

enum ActionsTpye {
    ADD_BOARD = "ADD_BOARD",
    DELETE_BOARD = "DELETE_BOARD"
}

type Action ={
    type:ActionsTpye,
    payload:any
}

const boardReducer = (state: BoardI[] ,action:Action) : BoardI[] =>{

    switch(action.type){

        case ActionsTpye.ADD_BOARD :
            const newBoard : BoardI ={
                id:Date.now(),
                name:action.payload.name,
                tasks:[],
                status:action.payload.status
            }

            return [...state,newBoard];

        case ActionsTpye.DELETE_BOARD :
            return state.filter(board=>board.id != action.payload);

        default:
            return state
    }

}


export const BoardContext = createContext<BoardContextProps>({
    boards:[],
    addBoard:()=>{},
    deleteBoard:()=>{},
    isCreating:false,
    setIsCreating:()=>{},
    selectedBoard: null,
    setSelectedBoard : ()=>{},
    isDeleting : false,
    setIsDeleting:()=>{},
    isSmallScreen:false,
    setIsSmallScreen:()=>{}
})

const BoardContextProvider : React.FC<{children:ReactNode}> = ({children}) => {
    const [boards,dispatch] = useReducer(boardReducer,initialState)
    const [isCreating,setIsCreating] = useState(false)
    const [selectedBoard,setSelectedBoard] = useState<BoardI | null>(initialState[0])
    const [isDeleting,setIsDeleting] = useState(false)
    const [isSmallScreen,setIsSmallScreen] = useState(false)


    const addBoard =(data:ReceiveI)=>{
        dispatch({type:ActionsTpye.ADD_BOARD,payload:data})
    }

    const deleteBoard = (id : number)=>{
        dispatch({type:ActionsTpye.DELETE_BOARD,payload:id})
    }

  return (
    <BoardContext.Provider 
        value={{boards,
                addBoard,
                deleteBoard,
                isCreating,
                setIsCreating,
                selectedBoard,
                setSelectedBoard,
                isDeleting,
                setIsDeleting,
                isSmallScreen,setIsSmallScreen
            }}>
        {children}
    </BoardContext.Provider>
  )
}

export default BoardContextProvider
