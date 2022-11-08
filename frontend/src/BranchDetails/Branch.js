import React, { Component, useRef, useState } from 'react';
import { render } from "@testing-library/react";

class Branch extends Component{
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
              <tr>
                <td>Anom</td>
                <td>19</td>
                <td>Male</td>
                <td><a href=''><button>Link</button><button>Delete</button></a></td>
              </tr>
              <tr>
                <td>Megha</td>
                <td>19</td>
                <td>Female</td>
                <td><a href=''><button>Link</button><button>Delete</button></a></td>
              </tr>
              <tr>
                <td>Subham</td>
                <td>25</td>
                <td>Male</td>
                <td><a href=''><button>  Link  </button><button>  Delete  </button></a></td>
              </tr>
            </table>
          </div>
          </div>
        )
    }
}


export default Branch;
