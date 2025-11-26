import React, { useState } from 'react'
import "./App.css"
export const App = () => {

    const [len, setlen] = useState("")
    const [char, setChar] = useState("")

  return (
    <div>
        <div>
            <form >

                <h2>
                    Character count
                </h2>
                <input 
                className='form_input'
                type="text" 
                placeholder='Enter some characters'
                value={char}
                onChange={(elem)=>{
                setChar(elem.target.value);
                console.log(char);
                
                setlen(elem.target.value.length)
                console.log(len);
                }}
                
                
                />
                <h2>
                    Your Character count is {len}
                </h2>

            </form>
        </div>
    </div>
  )
}

export default App
