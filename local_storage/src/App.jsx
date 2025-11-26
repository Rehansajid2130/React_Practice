import React from "react";

export const App = () => {
  /*
  localStorage.clear()
  localStorage.setItem("user", "USER")

  const user = localStorage.getItem("user")
  localStorage.removeItem("user")

  sessionStorage.clear()
  sessionStorage.setItem("user" , "USERING")
  const session_user = localStorage.getItem("user")
  console.log(session_user);
  sessionStorage.removeItem("user") 
  
*/
  const user = {
    name: " aaosd",
    age: 10,
  };
  localStorage.setItem("user", JSON.stringify(user));
  const user1 = localStorage.getItem("user");

  console.log(user1);
  return <div>App</div>;
};

export default App;
