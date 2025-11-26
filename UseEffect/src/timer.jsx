import React, { useEffect, useState } from "react";
import "./App.css"


export const timer = () => {
  
  // function timer () {
  //   useEffect(() => {
    //     const interval = setInterval(() => {
      //       setTime((prevTime) => prevTime + 1);
  //     }, 1000);
  
  //     return () => {
    //       clearInterval(interval);
    //     };
    //   }, []);
    // };
    
  
    const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false)


  useEffect(()=>{
    let interval = null 

    if(isRunning){
      interval = setInterval(() => {
        setTime((prevtime) => prevtime +1 )
      }, 1000);
    }
    return ()=>{
      if(interval){
        clearInterval(interval);
      }
    }
  }, [isRunning])


  const handleStartStop =()=>{
    setIsRunning(!isRunning)
  }

  const handleReset = ()=>{
    setTime(0)
    setIsRunning(false)
  }
  return (
    <div className="Timer_container">
      <h2>Timer : {time} seconds</h2>
      
      <button onClick={handleStartStop}>
        {isRunning ? "stop" : "Start" }
        </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default timer;
