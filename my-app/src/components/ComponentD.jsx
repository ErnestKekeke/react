import React, { useContext } from "react";
import { UserContext } from "../App";

function ComponentD(){
      const { username, age } = useContext(UserContext);

    return (
        <div className="box-div">
            <h3>ComponentD</h3>
            <p>My Name is  {username}</p>
            <p>Age: {age}</p>
        </div>
    )
}
export default ComponentD