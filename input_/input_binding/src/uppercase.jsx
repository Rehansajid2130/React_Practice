import React, { useState } from 'react'
import "./App.css"

export const App = () => {

    const [input_val, setInput_val] = useState("")

  return (
    <div>
        <div>
            <form >

                <h2>Enter Character to uppperclass them</h2>
                <input 
                className='form_input'
                type="text" 
                placeholder='Enter charaters'
                value={input_val}
                onChange={(elem)=>{
                
                setInput_val((elem.target.value.toUpperCase()))
                console.log(input_val);
                }}
                />

            </form>

            <h1>{input_val}</h1>
        </div>
    </div>
  )
}

export default App
