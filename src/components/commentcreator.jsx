import { useState } from "react";

const CommentCreator = (props) => {
    const [newTaskName, setNewTaskName] = useState("")
    
    const handleSubmit = (e) => {
        if (newTaskName.trim() === "") {
            alert("Please enter a task name")
        return
        }
        e.preventDefault()
        props.callback(newTaskName)
        setNewTaskName("")
    }
    
    return (
        <form className="my-2 row" onSubmit={handleSubmit}>
            <div className="col-9">
                <input
                    type="text"
                    className="form-control"
                    value={newTaskName}
                    onChange={(e) => setNewTaskName(e.target.value)}
                    placeholder="Enter a new comment..."
                    autoFocus
                />
            </div>
            <div className="col-3 p-0 d-flex align-items-center">
                <button className="btn btn-primary btn-sm" type="submit">
                    Save Task
                </button>
            </div>
        </form>
    )
    }
    
    export default CommentCreator