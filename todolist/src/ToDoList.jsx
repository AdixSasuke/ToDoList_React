import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState(["Sample 1","Sample 2", "Sample 3"])
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveUp(index){

    }

    function moveDown(index){

    }


  return (
    <div className='todo-list'>

        <h1>ToDo List</h1>

        <div className="container">
            <input 
            type="text" 
            className="task-inp" 
            value={newTask}
            placeholder='Enter task here'
            onChange={handleInputChange}
            />

            <button className="add-btn" onClick={addTask}>Add</button>

            <ol>
                {tasks.map((task,index) => 
                <li key={index}>
                    <span>{task}</span>
                    <button className="del-btn" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="mvup-btn" onClick={() => moveUp(index)}><img src="./assets/up.png"/></button>
                    <button className="mvdown-btn" onClick={() => moveDown(index)}><img src="./assets/down.png"/></button>
                </li>)}
            </ol>

        </div>

    </div>
  )
}

export default ToDoList