import React, { useState } from "react";

export const Add_student = () => {
 
    const [Std_name, SetStd_name] = useState("")
    const [Std_age, setStd_age] = useState("")
    const [count, setCount] = useState(3)
    const [students, setStudents] = useState([{
        id: 1,
        name : "ALi" ,
        age: 30
    },
    {
        id: 2,
        name : "ahmad" ,
        age :20
    }
])
    const SubmitHandler =(e) =>{
        e.preventDefault()
        setStudents([...students , {id: count , name :Std_name , age: Std_age}])
        setCount(count+1)
        setStd_age("")
        SetStd_name("")
    }
  
  return (
    <div>
      <div>
        <h2>Students</h2>

          {students.map((std) => {
           return( <div key={std.id}>
              {std.id}, {std.name}, {std.age}
            </div>)
          })}
        
      </div>
      <div>

        <form className="_form" >
            <h4>
                Name
            </h4>
            <input type="text"
            placeholder="Enter Name" 
            value={Std_name}
            onChange={(elem)=>{
                SetStd_name(elem.target.value)
                
            }}/>

           <h4>
            Age
           </h4>
           <input type="Number" 
           placeholder="Enter Age"
           value={Std_age}
           onChange={(elem) =>{
            setStd_age(elem.target.value)

        }} />

        <button onSubmit={SubmitHandler}
        >Add Student</button>
        </form>


      </div>
    </div>
  );
};

export default Add_student;
