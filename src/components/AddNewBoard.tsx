
            
            import { useState, useContext, useRef, useEffect } from 'react';
            import { BoardContext } from '../context/BoardContextProvider';
            import "./addnewboard.css"
            
            const AddNewBoard = () => {
                const [title, setTitle] = useState("");
                const [text, setText] = useState('');
                const [column, setColumn] = useState<{id:number,name:string}[]>([]);
    const [isTextError, setIsTextError] = useState(false);
    const [isTitleError, setIsTitleError] = useState(false);
    const { setIsCreating, addBoard, setIsSmallScreen } = useContext(BoardContext);

    const dialogRef = useRef(null);

    const addColumn = () => {
        if (!text) {
            setIsTextError(true);
            setTimeout(() => {
                setIsTextError(false);
            }, 2000);
        } else {
            const newCol = {
                id: Date.now(),
                name: text
            }
            setColumn(prev => [...prev, newCol]);
            setText("");
        }
    }

    const deleteCol = (id:number) => {
        setColumn(state => state.filter(c => c.id !== id));
    }

    const createNewBoard = () => {
        if (!title) {
            setIsTitleError(true);
            setTimeout(() => {
                setIsTitleError(false);
            }, 2000);
        } else {
            const newBoard = {
                name: title,
                status: column
            }
            addBoard(newBoard);
            setIsCreating(false);
            setIsSmallScreen(false);
            // setSelectedBoard(boards[boards.length-1])
        }
    }


    

    useEffect(() => {
        function handleClickOutside(event:any) {
            //@ts-ignore
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                setIsCreating(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsCreating]);

    return (
        <div id="dialog" className="dialogs">
            <div ref={dialogRef} className="dialog-content">
                <div className="stack mb-2">
                    <div className="dialog-content-text">Name</div>
                    <input 
                        className="text-field" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Board name"
                    />
                    {isTitleError && <div className="error-text">Field can not be Empty</div>}
                </div>
                <div className="stack mb-2">
                    <div className="dialog-content-text">Columns</div>
                    {column.length > 0 && (
                        column.map(col => (
                            <div key={col.id} className="stack stack2" style={{ flexDirection: "row", marginBottom: "10px", alignItems: "center" }}>
                                <div style={{ flex: "1", border: "1px solid", padding: "4px", borderRadius: "4px" }}>{col.name}</div>
                                <button onClick={() => deleteCol(col.id)}><img src='/icon-cross.svg' alt='delete'/></button>
                            </div>
                        ))
                    )}
                    <input 
                        className="text-field" 
                        value={text} 
                        onChange={e => setText(e.target.value)} 
                        placeholder="e.g : todo,inprogress,done"
                    />
                    {isTextError && <div className="error-text">Field can not be Empty</div>}
                </div>
                    <button className=" new-button rr" onClick={addColumn}>Add New Column</button>
                <button className="new-button" onClick={createNewBoard}>ADD NEW BOARD</button>
            </div>
        </div>
    );
}

export default AddNewBoard;
