import axios from "axios";
import React from "react";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError]=useState("")
  const navigate = useNavigate();

  const formData = {
    email: email,
    password: password,
  };

  async function Signup() {
   if(password.length<=7){
    const { data } = await axios.post(
      "http://localhost:3333/api/users/login",
      formData
    ).catch(setError("Invalid login or Password"));
    localStorage.setItem("token", JSON.stringify(data.token));

   }else{
    const { data } = await axios.post(
      "http://localhost:3333/api/users/login",
      formData
    )
    localStorage.setItem("token", JSON.stringify(data.token));
    navigate("/upload");
   
  }
  }
  return (
    <>
    <div className={classes['login-display']}> 
      <div className={classes["login-box"]}>
        <h2>Login</h2>
        <form>
          <div className={classes["user-box"]}></div>
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
          <a
            onClick={() => {
              {
                navigate("/register");
              }
              
            }}
            >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Create a new accaunt
          </a>
        </form>
      </div>
      </div>
    </>
  );
}

export default Login;
