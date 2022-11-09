import React, { Component, useRef, useState } from 'react';
import { render } from "@testing-library/react";

class Customer extends Component {

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
    let accountNo = e.currentTarget.getAttribute('data-column');
    console.log(accountNo)

    fetch("http://localhost:8081/api/v1/accounts/" + accountNo,
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
    fetch("http://localhost:8081/api/v1/accounts",
      {
        method: "GET"

      }).then(resp => resp.json().then(data => ({ status: resp.status, body: data }))).
      then(resp_json => {
        console.log(resp_json.body)
        if (resp_json.status === 200) {
          let parent_ele = document.getElementById('list');
          let ele = parent_ele.querySelector('table');
          for (let i = 0; i < resp_json.body.length; i++) {
            rows.push(
              <tr>
                <td> {resp_json.body[i]['accountNo']} </td>
                <td> {resp_json.body[i]['customerNo']}</td>
                <td> {resp_json.body[i]['branchId']} </td>
                <td> {resp_json.body[i]['balance']} </td>
                <td> {resp_json.body[i]['openingDate']} </td>
                <td> <button onClick={this.handleClick} data-column={resp_json.body[i]['accountNo']}>Delete</button></td>
              </tr>);
          }
          console.log(ele.innerHTML)
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

  render() {
    return (
      <div className='customer'>
        <h1> Global Bank Customer Details </h1>
        <div className="App" id='list'>
          <table id='table'>
            <tr>
              <th>Account No</th>
              <th>Customer No</th>
              <th>Branch id</th>
              <th>Balance</th>
              <th>Opening Date</th>
              <th>Action</th>
            </tr>
            {this.state.rows}
          </table>

        </div>
      </div>
    )
  }
}


export default Customer;
