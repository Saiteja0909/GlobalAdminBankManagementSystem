import React, { Component, useRef, useState } from 'react';
import { render } from "@testing-library/react";

class Branch extends Component{

  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }

    this.handleClick = this.handleClick.bind(this);
    //this.fetchColumns = this.fetchColumns.bind(this);

  }

  handleClick(e) {
    e.preventDefault();
    let branchId = e.currentTarget.getAttribute('data-column');

    fetch("http://localhost:8081/api/v1/branches/" + branchId,
      {
        method: "DELETE"
      }).then(resp => resp.json().then(data => ({ status: resp.status, body: data }))).
      then(resp_json => {
        console.log(resp_json)
        if (resp_json.status === 200) {
          if (resp_json.body) {
            alert("Delete successful");
            window.location.reload();
          }
          else {
            alert("Delete unsuccessfull")
          }
        }
      }).catch(error => {
        alert(error)
      })

  }

  componentDidMount() {
    let rows = []
    fetch("http://localhost:8081/api/v1/branches",
      {
        method: "GET"

      }).then(resp => resp.json().then(data => ({ status: resp.status, body: data }))).
      then(resp_json => {
        console.log(resp_json.body)
        if (resp_json.status === 200) {
          for (let i = 0; i < resp_json.body.length; i++) {
            rows.push(
              <tr>
                <td> {resp_json.body[i]['branchId']} </td>
                <td> {resp_json.body[i]['branchName']}</td>
                <td> {resp_json.body[i]['branchAddress']} </td>
                <td> <button onClick={this.handleClick} data-column={resp_json.body[i]['branchId']}>Delete</button></td>
              </tr>);
          }
          this.setState({ rows: rows })
        }

        else {
          alert(resp_json.message)
          window.location.reload();
        }
      }).catch(error => {
        alert(error)
      })
  }

     render(){
        return(
            <div className='branch'>
                <h1> Global Bank Branch Details </h1>
            <div className="App">
            <table>
              <tr>
                <th>Branch id</th>
                <th>Branch Name</th>
                <th>Branch Address</th>
                <th>Action</th>
              </tr>
              {this.state.rows}
              </table>
          </div>
          </div>
        )
    }
}


export default Branch;
