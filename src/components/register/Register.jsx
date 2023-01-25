import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import classes from "./Register.module.scss";
import Login from "../login/Login";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [error, setError]=useState("")
  const navigate = useNavigate();

  const data = {
    email: email,
    password: password,
    firstName: firstname,
    lastName: lastname,
  };

  async function Signup() {
   if(password.length<=7){
    setError("something wrong please check again")
   }else{
    await axios.post("http://localhost:3333/api/users/register", data);
    navigate("/");
   }
  }

  return (
    <>
    <div className={classes["register-display"]}> 
      <div className={classes["login-box"]}>
        <h2>Register</h2>
        <form>
          <div className={classes["user-box"]}></div>
          <div className={classes["user-box"]}>
            <input
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              type="text"
            />
            <label>FirstName</label>
          </div>
          <div className={classes["user-box"]}>
            <input
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
            />
            <label>LastName</label>
          </div>
          <div className={classes["user-box"]}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <label>email</label>
            <div className={classes["user-box"]}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <label>Password</label>
            </div>
            <span className={classes["error"]}>{error}</span>
          </div>

          <a onClick={Signup}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <br />
          <a
            onClick={() => {
              {
                navigate("/");
              }
            }}>
            Entrance
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
        </form>
      </div>
      </div>
    </>
  );
}

export default Register;
