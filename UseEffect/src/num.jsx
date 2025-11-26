import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const num = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(function (){
    console.log("useEffect is running" );
    
  },[num])
  return (
    <div>
      <button onClick={()=>{
        setNum(num +1) 
      }}>
         Add num1
      </button>  
      <button onClick={()=>{
        setNum2(num2 +1) 
      }}>
         Add num2
      </button>
      <h1> 
        
        Num {num}
        <br />
        num2 {num2}
      </h1>
      UseEffect is only working on Num1
    </div>
  )
}

export default num
