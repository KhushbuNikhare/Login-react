import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: preValue.lname,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fname,
          lname: value,
          email: preValue.email,
          phone: preValue.phone,
        };
      } else if (name === "email") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: value,
          phone: preValue.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preValue.fname,
          lname: preValue.lname,
          email: preValue.email,
          phone: value,
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>
            Hello {fullName.fname} {fullName.lname}
          </h1>
          <p>{fullName.email}</p>
          <p>{fullName.phone}</p>
          <input
            type="text"
            placeholder="Enter Name"
            name="fName"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lName"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
          />
          <br />
          <input
            type="number"
            placeholder="Enter Number"
            name="phone"
            onChange={inputEvent}
            value={fullName.phone}
          />
          <br />
          <button type="submit">Click Me</button>
        </div>
      </form>
    </>
  );
};

export default Login;
