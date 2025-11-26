import React, { useState } from 'react'

export const App = () => {

  const [Clicked, setClick] = useState("you did'nt clicked")


  function onclicking (){

    setClick("You clicked")
  }
  function onduble(){
    setClick("You double clicked")
  }
  function hove(){
    setClick("You did'nt clicked")  
  }

  return (
    <div>
      <button onClick={onclicking}
      onDoubleClickCapture={onduble}
      onMouseOver={hove}>
        {Clicked}
      </button>
    </div>
  )
}
export default App