import React, { useContext } from "react";
import {color_change} from "../App"

const colorChanger = () => {
  const [color , setColor]= useContext(color_change);

  console.log({color});

  const ChangeColor = () => {

    setColor( color === "black"? "white": "lightblue" )
    }
  return (
    <div 
    style={{backgroundColor: color}}
    >
      <h1>bg will change on click</h1>
      <button onClick={ChangeColor}>Click</button>
    </div>
  );
};

export default colorChanger;
