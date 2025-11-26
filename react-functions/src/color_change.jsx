import React, { useState } from 'react'

export const App = () => {
  
  const [colors, setColors] = useState("black")
  

  function chang_color(){

    setColors(prev => (prev === "white" ? "lightblue" : "white" ));
    console.log(colors);
    

  }

  return (
    <div style={{
      backgroundColor: colors,
      height:"100vh",
      width:"100vh"

    }
    }>


    <button onClick={chang_color}>
      Change Color
    </button>
      </div>
     )
}

export default App