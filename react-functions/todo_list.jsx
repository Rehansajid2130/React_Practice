import React, { useState } from 'react'

import "./App.css"
export const App = () => 
  {

  const [task, setTask] = useState("")

  const [tasks, setTasks] = useState([])

  function addTasks (){
    if(task.trim()=== "" )
      return;
    setTasks([...tasks , task]);
    setTask("")

  }

  function removetask( index){
    setTasks (tasks.filter((_, i)=> i !== index))

  }

  return (
    <div style={{display:"flex" , flexDirection:"column", padding: "50px" , margin:"20px", gap:"20px", alignItems:"center" , alignContent:"center" , border:"2px solid black"}}>

    <h2>     Todo List
    </h2>
    <input
     type="text"
    value = {task}
    placeholder='Enter tasks'
    onChange={function(elem)
      {
        setTask(elem.target.value)
      }
    }

    />  
    <button onClick={addTasks}  >
      Add task
    </button>
     
      <ul style={{listStyle:"none" , padding:"5px", margin:"20px", gap:"20px"}}>
        {tasks.map((t , index ) => (
          <li key={index} style={{padding:"2px", }}>
            {t}

          <button style={{gap:'2px' , padding:'10px'}} onClick={() => removetask(index) }
          >
             ❌
          </button>

            </li>
        ))}
      </ul>

    </div>
  )
}

export default App