import React, { Component } from 'react'





class Header extends Component{
    render(){
        return(
            <div>
    <header>
          <nav>
            <div className='logo'><p> WELLS FARGO </p></div>
            <ul>
                {/*<li class="active"><a href="#">Hi, Admin</a></li>*/}
                <li><a href={"http://localhost:3000" + "/"}><button>Logout</button></a></li>
            </ul>
        </nav>
          </header>
            </div>
           
        )
    }
}

export default Header;