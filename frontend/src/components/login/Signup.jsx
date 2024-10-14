import React, { useState } from "react";
import style from "./signup.module.css";
import axios from "axios";
const Signup = ({ close, login }) => {
  const [data, setdata] = useState({
    firstname: "",

    lastname: "",
    email: "",
  });
  function onChnageHandler(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function submitHandler() {
    axios
      .post("https://bigbasketbackend.herokuapp.com/login", {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
      })
      .then((r) => {
        localStorage.setItem("data", JSON.stringify(r.data));
      });
    login();
    close();
  }
  return (
    <div>
      <h3 className={style.heading}>
        <p>Almost There</p>
      </h3>
      <p className={style.psmall}>Help us to know you better!</p>
      <div className={style.form}>
        <div className={style.Namediv}>
          <input
            type="text"
            onChange={onChnageHandler}
            name="firstname"
            id=""
            placeholder="First Name"
          />
          <input
            type="text"
            onChange={onChnageHandler}
            name="lastname"
            id=""
            placeholder="Last Name"
          />
        </div>
        <div className={style.Emaildiv}>
          <input
            type="text"
            onChange={onChnageHandler}
            name="email"
            id=""
            placeholder="Email"
            className={style.einput}
          />
        </div>
        <button className={style.varbtn} onClick={submitHandler}>
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Signup;
