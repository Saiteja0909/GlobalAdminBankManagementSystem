import React, { Component, useRef, useState } from 'react';
// import Button from "react-bootstrap/Button";
import { render } from "@testing-library/react";


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ></link>

// import "./Login.css";

// class Login extends Component{
//     render(){
    function Login(){
        // const email=useRef()
        // const password=useRef()
        // const handleSubmit=()=>{
        //     if(email.current.value)
        // }
       
        return(
            <form>
           <div className='page'>
           <div className='cover'>
                <h1> LOGIN </h1>
                <div class="text-warning">
                Login to access the global bank
            </div>
                <input type = "text" placeholder=" Email id  "  required />
                <input type = "password" placeholder=" Password "  required />
                <div className='login-btn'>  Sign in </div>

                </div>
            </div>
            </form>
        )
    }


export default Login;

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>