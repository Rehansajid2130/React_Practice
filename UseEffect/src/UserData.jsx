import React, { useEffect, useState } from 'react'

import axios from 'axios'

export const UserData = () => {

  const [loadData, setloadData] = useState(false)

  const [UserData, setUserData] = useState([])

  useEffect( ()=>{

    async function Load_Data (){
      if(loadData)
        try
        {
          const response = await axios.get("https://jsonplaceholder.typicode.com/users")
          setUserData(response.data)
          console.log(response.data);
          
          setloadData(false)
        }
        catch(error){
          console.log("Error loading data " , error);
        }
        finally{
          console.log("Data is loaded successfully");
        }
    }
    Load_Data()
  },[loadData])

  return (
    <div>
      <button onClick={()=>{
        setloadData(true)
      }}>
        load Data
      </button>

     { UserData.map(function (UserData){

        return (<div key={UserData.id}>

                <h4>
                  No.{UserData.id} <br />
                  {UserData.name}
                  </h4>
              
        </div> )



      })}

    </div>
  )
}
export default UserData
