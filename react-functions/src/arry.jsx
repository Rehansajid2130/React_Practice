import React, { useState } from 'react'

export const App = () => {

  const [colors, setColors] = useState(["Green " , "yellow" , "Red"]) 

  const color_change = () => {

  const updcol = colors.map(
    function(colors)
    {
      if(colors === "yellow")
      {
        return "Blue"
      }
      return colors
    })

    setColors(updcol)
  }


  return (
    <div>
      <h2>
        Changing color
      </h2>
      <button onClick={color_change}>
        Change color
      </button>
      <h2>
      {colors}
      </h2>
    </div>
  )
}

export default App