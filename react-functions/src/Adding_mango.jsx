import React, { useState } from "react";

export const App = () => {

  const [fruits, setfruits] = useState(["Apple", "banana"])

  const mangoAdd = () => {

   const newfruits = [...fruits]
    
    newfruits.push("mango")
    
    setfruits(newfruits)
  };

  return (
    <div>
      <h1>Click to add Mango</h1>
      <button onClick={mangoAdd}>Add</button>
      <h1> 
          {fruits}        
      </h1>
    </div>
  );
};
export default App;
