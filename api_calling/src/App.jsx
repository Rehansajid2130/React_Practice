import React from "react";
import axios from "axios";
import { useState } from "react";

export const App = () => {
  /*
 async function getData()
  {
   const data = await fetch('http://jsonplaceholder.typicode.com/users')
   const reponse = await data.json()
    console.log(reponse);
  }
  */
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showuser, setshowuser] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // const firs = reponse.data.slice(0,3)
      // setdata(firs);
      setdata(reponse.data);
      setshowuser(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const userData = () => {
    setshowuser(true);
  };

  return (
    <div>
      <button onClick={getData}> {loading ? "loading.." : "getData"}</button>

      {loading && (
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <progress style={{ width: "200px" }} />
          <span>Loading...</span>
        </div>
      )}
      <button onClick={userData} disabled={loading}>
        Get user
      </button>



      {/* 
      {!loading && (
        <div>
          {data.map(function (user, idx) {
            return (
              <h2 key={idx}>
                {" "}
                No.{user.id} {user.name} <br />
                Email {user.email}br Company name : {user.company.name}
              </h2>
            );
          })}
        </div>
      )}
    </div> */}

{!loading && showuser && (
        <div>
          {data.map(function (user) {
            return (
              <h2 key={user.id}>
                {" "}
                No.{user.id} {user.name} <br />
              </h2>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
