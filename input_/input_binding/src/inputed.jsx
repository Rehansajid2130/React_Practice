import React, { useState } from 'react'
import "./App.css"


export const App = () => {

    const [input_val, setInput_val] = useState("")
    const submitHandler = (elem) => {
        
        elem.preventDefault() 
        console.log("sumitted");
        
    }
    const display = (elem) =>{

        setInput_val(elem.target.value)
    }

  return (
    <div className='container'>
        <form onSubmit={ (e) =>{
            submitHandler(e)
        }}
        >
        <input type="text"
        placeholder='write discription'

        value={input_val}
        onChange={(elem)=>{
           setInput_val(elem.target.value)
        }}
        className='form_input'
        />
        <input type="text" 
        placeholder='Add notess'
        />
        <button className='btn1'>
            Submit
        </button>
        <button className='btn2'>
            Add note
        </button>
        <h1>{input_val}</h1>
        </form>
    </div>
  )
}

export default App