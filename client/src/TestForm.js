import React, { useState } from "react";
import axios from "axios";
const TestForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    // console.log("Name:" + name);
    // console.log("Mobile:" + mobile);
    let person = {
      name: name,
      phoneNo: mobile,
    }
    //object is getting the values
    axios
      .post("http://localhost:8000/data", person)
      .then((response) => {

        console.log('ok');
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onNameChange = (e) => {
    setName(e.target.value);
    console.log("Name:" + name);
  };

  const onMobChange = (e) => {
    setMobile(e.target.value);
    console.log("Mobile:" + mobile);
  };

  return (
    <div className="container">
      <div className="form-container">
        <p>Register</p>
      </div>
      <form className="fields" onSubmit={onSubmit}>
        <div className="Name">
          <label id="nameId">Name:</label>
          <input
            id="nameIn"
            type="text"
            onChange={onNameChange}
            required
          ></input>
        </div>
        <div className="Mobile">
          <br></br>
          <label id="mobId">Mobile No:</label>
          <input
            type="tel"
            pattern="[0-9]{10}"
            onChange={onMobChange}
            required
          ></input>
        </div>
        <input type="submit" value="Submit" id="submitbtn"></input>
      </form>
    </div>
  );
};

export default TestForm;
