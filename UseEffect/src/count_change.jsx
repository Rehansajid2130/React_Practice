import React, { useEffect, useState } from 'react'

export const count_change = () => {
 
  const [count, setCount] = useState(0)

  useEffect(function(){
    console.log("Count is changing");
    
  },[count])
 
  return (


    <div>

      Open console to see the result
      <br />
      
      <button onClick={()=>{
        setCount(count + 1)
      }}>
        ADD
      </button>

      <h1>
        {count}
      </h1>
    </div>
  )
}
export default count_change
