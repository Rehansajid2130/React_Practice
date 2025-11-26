import React, { useState } from 'react'

export const App = () => {

  const [count_num, setCount_num] = useState(0)

  function incre(){
    setCount_num(count_num+1)
  }
  function dec (){
    setCount_num(count_num-1)
  }
  function res(){
    setCount_num(0)
  }

  
  return (
    <div>
      <div>
        <h2>Count: {count_num}</h2>
      </div>
      <button onClick={incre}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={res}>Reset</button>
    </div>
  )
}

export default App
