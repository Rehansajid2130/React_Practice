import React, { useContext } from 'react'
import { ThemeContext } from '../App'


const Theme_User = () => {
    const [theme , setTheme] = useContext(ThemeContext)
    const ChangeTheme = () =>{

        
        setTheme( theme === "black " ? "white " : "lightblue")
        console.log("Theme has been changed");

      }
  return (
    <div style={{
        backgroundColor : theme
      }}>
       <h1>Click to change theme</h1>
      <button onClick={ChangeTheme}>
        Click
      </button>

    </div>
  )
}

export default Theme_User