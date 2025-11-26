import React, { useState } from 'react'
import "./App.css"
export const App = () => {

    const [font, setfont] = useState("")

    
  return (
    <div >
        <h1>Live font changer</h1>

        <form onSubmit={(e)=>{
            e.preventDefault()
            setfont("")
        }}>
            <input type="text"
            placeholder='Enter a digit'
            value={font}

            onChange={(elem)=>{
                setfont(elem.target.value)
            }}
            
            />
        </form>
            <h1 style={{ fontSize : font + "px"}}>
               
               {font}
            </h1>
    </div>
  )
}

export default App