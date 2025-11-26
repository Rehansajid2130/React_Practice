import React, { useState } from 'react'

export const App = () => {

  const [user, setuser] = useState({name: "ali" ,  age: 20})

  const age_add = () =>{
  
    setuser({...user , age: user.age +1})

  }

  return (
    <div>
    <h1>
      Name {user.name} <br />
     Age {user.age}
      </h1>
      <button onClick={age_add}>
        Click to increase age</button>    
    </div>
  )
}

export default App
