import React, { Component, useRef, useState } from 'react';
import { render } from "@testing-library/react";

class Menu extends Component{
     render(){
        return(
        <div className='menu'>
            <h1>Global Bank Admin Operations</h1>
            <div className='menu-btn'>


            <div class="menu_items">
                <div class="items">
                        <a href={"displaycustomer"} >
                        <img src="https://miro.medium.com/max/1200/1*q4JnGNGXarIQjxN4el1hWw.png" alt="" className='thumbnail'/>
                        <div class="caption">
                        <h2>Display Customers</h2>
                        <p>View the Global Bank Customer Details.</p>
                        </div>
                        </a>
                        </div>
        
                <div class="items">
                        <a href={"branch"} >
                        <img src="https://thumbs.dreamstime.com/b/vector-modern-bank-office-interior-employees-customers-characters-managers-cashiers-193608309.jpg" alt='' className='thumbnail'/>
                        <div className='caption'>
                        <h2>Display Branch Details</h2>
                        <p>View the Global Bank Branch Details.</p>
                        </div>
                        </a>
                        </div>
        
                <div class="items">
                        <a href={"addcustomer"} >
                        <img src="https://business.comcast.com/community/images/librariesprovider3/supporting/09_26_comcast_article_3_final-01-copy.png?sfvrsn=b9e83fd4_0" alt="" class="thumbnail"/>
                        <div class="caption">
                        <h2>Add Customer</h2>
                        <p>Add Customer details into global bank.</p>
                        </div>
                        </a>
                        </div>

             <div class="items">
                        <a href="addbranch" >
                        <img src="https://thumbs.dreamstime.com/b/interior-bank-office-isometric-view-vector-furniture-equipment-worker-client-people-illustration-95554221.jpg" alt="" class="thumbnail"/>
                        <div class="caption">
                        <h2>Add Branch</h2>
                        <p>Add a branch of bank into the portal.</p>
                        </div>
                        </a>
                        </div>

             <div class="items">
                        <a href="displaycustomer" >
                        <img src="https://img.freepik.com/premium-vector/clients-bank-customer-service-counter-with-people-finance-managers-bank-office-room-with-worker-credit-request-flat-vector-concept-employee-providing-help-man-woman_102902-4641.jpg?w=2000" alt="" class="thumbnail"/>
                        <div class="caption">
                        <h2>Delete Customer</h2>
                        <p>Delete the data of customers from the portal.</p>
                        </div>
                        </a>
                        </div>

                <div class="items">
                        <a href="branch" >
                        <img src="data:image/jpeg;base64,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" alt="" class="thumbnail"/>
                        <div class="caption">
                        <h2>Delete Branch</h2>
                        <p>Delete a branch of bank from the portal.</p>
                        </div>
                        </a>
        </div>
            <div class="clr"></div>

                       
                        </div>

                
            </div>
        </div>
  )
}
}


export default Menu;