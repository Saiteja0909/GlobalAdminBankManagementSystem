import React, { Component, useRef, useState } from 'react';
import { render } from "@testing-library/react";

class Customer extends Component{
     render(){
        return(
            <div className='customer'>
                <h1> Global Bank Customer Details </h1>
            <div className="App">
            <table>
              <tr>
                <th>Account No</th>
                <th>Customer No</th>
                <th>Branch id</th>
                <th>Balance</th>
                <th>Opening Date</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>Anom</td>
                <td>19</td>
                <td>Male</td>
                <td>Male</td>
                <td>Male</td>
                <td><a href='{login}'><button>Link</button><button>Delete</button></a></td>
              </tr>
              <tr>
                <td>Megha</td>
                <td>19</td>
                <td>Female</td>
                <td>Female</td>
                <td>Female</td>
                <td><a href=''><button>Link</button><button>Delete</button></a></td>
              </tr>
              <tr>
                <td>Subham</td>
                <td>25</td>
                <td>Male</td>
                <td>Female</td>
                <td>Female</td>
                <td><a href=''><button>  Link  </button><button>  Delete  </button></a></td>
              </tr>
            </table>
          </div>
          </div>
        )
    }
}


export default Customer;
