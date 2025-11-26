import React, { createContext, useState } from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import UserData from "./components/UserData";
// import ColorChanger from "./components/colorChanger";
// export const themeContext = createContext()
// export const UserDataContext = createContext();
// export const color_change = createContext()

 import Theme_User from "./components/Theme_User";

 export const ThemeContext =createContext()

const App = () => {
  // const [UserData, setUserData] = useState({ Name: "Ali", age: 20, marks: 20 });
  // const [Color , setColor ] = useState("white")
  
  const [theme, setTheme] = useState("black")

  

  return (
    <div >
      
    <ThemeContext.Provider value={[theme , setTheme]}>
    <Theme_User />
    </ThemeContext.Provider>




      {/* <UserDataContext.Provider
      value={[UserData, setUserData]}
      >
      <themeContext.Provider value ="Blue">
      <h1>Users Data</h1>
      <UserData />
      </themeContext.Provider>
      </UserDataContext.Provider> */}
      {/* <color_change.Provider  value= {[Color , setColor]}>
        <ColorChanger />
      </color_change.Provider> */}

      


    </div>
  );
};

export default App;
