import React, { useState } from 'react'

export const App = () => {
  
  const [ tex, settex] = useState("text")

  function chang (elem){

    console.log(elem.target.value);
    
    settex(elem.target.value)
    
  }

  return (
    <div>
      <input type="text" onChange={chang}/>
      <h1 >
        {tex}
        </h1>  
    </div>
  )
}

export default App