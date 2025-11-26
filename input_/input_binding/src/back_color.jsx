import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [user_color, setUser_color] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container" style={{Color : user_color}}
>
      <h1>Enter a Color</h1>
      <form
        onSubmit={(e) => {
          submitHandler(e);
          setUser_color("")
        }}
      >
        <input
          type="text"
          placeholder="Enter a Color"
        value={user_color}

          onChange={(elem) => {
            setUser_color(elem.target.value)            
          }}
        />
        <button>
          Submit
        </button>
      </form>
      <div>

        <h2         style={{backgroundColor : user_color}}
        >
            {user_color}
        </h2>
      </div>
    </div>
  );
};
export default App;
