import React, { useState } from 'react'

export const App = () => {

  const [car, setCar] = useState( {brand: "toyota" , year:2001 })

  const modelAdd = () =>{

    setCar({...car , Model: "pak"})
  }

  return (
    <div>
      <h2>
        Car Specs
      </h2>
      <button onClick={modelAdd}>
        Add Model
      </button>
      <h2>
        {car.brand} , {car.year} , {car.Model}
      </h2>
    </div>
  )
}

export default App
