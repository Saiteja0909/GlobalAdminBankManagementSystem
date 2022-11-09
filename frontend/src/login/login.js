import React, { Component, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Menu from '../Menu/Menu';
// import Button from "react-bootstrap/Button";
import { render } from "@testing-library/react";


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ></link>

// import "./Login.css";

// class Login extends Component{
//     render(){
    
    //var authorized = false;
    export default class Login extends Component{
        //const [authorized, setAuthorized] = useState(false);
         //const email=useRef()
         //const password=useRef()

         constructor(props){
            super(props);
            this.state={
                authorized: false,
                username: '',
                password: '',
            }
            this.handleChange=this.handleChange.bind(this);
            this.handleSubmit=this.handleSubmit.bind(this);
         }
          
         handleChange(event){
            this.setState(
                {
                    [event.target.name]
                        : event.target.value
                }
            )
         }
         handleSubmit(e){
            //if(email.current.value)
            //authorize user
            e.preventDefault()
            let inp = {username: this.state.username,
                       password: this.state.password}
            fetch ( "http://localhost:8081/api/v1/auth",
            {
                method: "POST",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(inp)
                
            }).then(resp => resp.json () .then (data => ({status: resp.status, body: data}))).
            then (resp_json => {
                console.log(resp_json)
            if (resp_json.status === 200) {
            if(resp_json.body){
                sessionStorage.setItem("authorized",true)
                this.setState({authorized:true});
            }
            else{
                sessionStorage.setItem("authorized",false)
                alert("Invalid username or password")
            }
            }}).catch(error => {
            alert(error)
            })
            
         }
       
         render()
         
         {return(
            <div>
            
            {(!this.state.authorized) && <form>
           <div className='page'>
           <div className='cover'>
                <h1> LOGIN </h1>
                <div className="text-warning">
                Login to access the global bank
            </div>
                <input type = "text" placeholder=" Email id  " name="username" onChange={this.handleChange} required />
                <input type = "password" placeholder=" Password " name="password" onChange={this.handleChange} required />
                <button className='login-btn' onClick={this.handleSubmit}>  Sign in </button>

                </div>
            </div>
            </form>}
            {(this.state.authorized) && <Navigate replace to='/menu'/>}
            </div>
        )}
        
    }



<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>