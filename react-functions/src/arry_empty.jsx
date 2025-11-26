import React, { useState } from "react";

export const App = () => {
  const [Arry, setArry] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const del = () => {
    setArry([]);
  };

  return (
    <div>
      <h1>Empting the array</h1>
      <button onClick={del}>Press to delete array</button>
      <h1>{Arry}</h1>
    </div>
  );
};
export default App;
