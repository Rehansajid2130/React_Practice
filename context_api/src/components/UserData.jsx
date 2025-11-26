import React, { useContext, useState } from "react";
import { themeContext, UserDataContext } from "../App";

const UserData = () => {
  const [UserData, setUserData] = useContext(UserDataContext)
   const theme = useContext(themeContext)
  console.log(UserData);
  
  return (
    <div>
        <h1>{UserData.name } your theme is {theme}</h1>
      <h1>
        Name: {UserData.name}   <br />
        Age : {UserData.age}    <br />
        Marks: {UserData.marks}
      </h1>
    </div>
  );
};

export default UserData;
