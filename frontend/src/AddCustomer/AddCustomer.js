import React,{Component} from "react";
import { fetchCommon } from "./fetchCommon";
//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ></link>
export default class Account extends Component{

    componentDidMount(){
        console.log('hi')
        fetchCommon("#customerno", "customerNo", "customers/all")
        fetchCommon("#branchid", "branchId", "branches")
    }

    constructor(props) {
        super(props)
 
        this.state = {
            accountNo: '',
            customerNo: '',
            branchId: '',
            balance:'',
            type:'savings',
            status:'active',
            openingDate: '',
            hasFailed: false,
            showSuccessMessage: false
        }
        this.handleChange=this.handleChange.bind(this);
        this.checkSubmit=this.checkSubmit.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    checkSubmit(p){
        p.preventDefault();
        let user={accountNo: this.state.accountNo,
        customerNo: this.state.customerNo,
        branchId: this.state.branchId,
        balance:this.state.balance,
        openingDate: this.state.openingDate,
        type:this.state.type,
        status:this.state.status};
        if(this.state.balance<5000){
            alert("Please enter value equal or above 5000");
        }
        
        let formRaw = [];
    formRaw.push(user)
        fetch ( "http://localhost:8081/api/v1/accounts",
    {
        method: "POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(resp => resp.json ().
    then (resp_json => {
    //this.setState({showSuccessMessage: true});
        //alert(JSON.stringify(user));
        alert("Add or Create customer account details successful");}
    ).catch(error => {
        alert("Add or Create customer account details failed")
     //this.setState({hasFailed: true});
        }
    ))
        //this.setState({showSuccessMessage: true});
        this.setState({
            type:'savings',
            status:'active',
            accountNo: '',
            customerNo: '',
            branchId: '',
            balance:'',
            openingDate: ''});
    }

    render(){
        return(
            <div style={{
            marginLeft: "auto",marginRight: "auto"
              }}  >
        
                
                <div  id="list" className="branch">
                    <form>
                        <br/><br/>
                       <h1>Add Customers</h1>
                    <div className='form-group'>
                        <label>Account No:</label>  
                        <input type="text" name="accountNo"  value={this.state.accountNo}
                        onChange={this.handleChange}  />
                    </div>
                    <div className='form-group' >
                    <label>Customer No: </label>
                    <select id='customerno' name="customerNo"  value={this.state.customerNo}
                        onChange={this.handleChange}>
                        <option value="">---Select an option---</option>
                        </select>
                    </div>
                    <div className = "form-group" >
                    <label>Branch ID: </label>
                    <select id='branchid' name="branchId" value={this.state.branchId}
                        onChange={this.handleChange}>
                        <option value="">---Select an option---</option>
                        </select>
                    </div>
                    <div className = "form-group">
                    <label>&nbsp; Balance:</label>
                    <input type="number" name="balance"  value={this.state.balance}
                        onChange={this.handleChange} min="5000" />
                    </div>
                    <div className = "form-group">
                    <label>Opening Date: </label>
                    <input type="date" name="openingDate"  value={this.state.openingDate}
                        onChange={this.handleChange} />
                    </div>
                    <div className = "form-group">
                    <label>Account Type: </label>
                    <select  name="type"  value={this.state.type}
                        onChange={this.handleChange} >
                        <option value="savings">Savings</option>
                        <option value="current">Current</option>
                        </select>
                        </div>
                    <div className = "form-group"> 
                    <label>Account Status: </label>
                    <select  name="status"  value={this.state.status}
                        onChange={this.handleChange} >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        </select>   
                        </div>    <br/>
                  
                    <button className="btn btn-success" onClick={this.checkSubmit} disabled={(this.state.balance<5000) || (this.state.accountNo==='')}>Submit</button>
                    {this.state.hasFailed && <div className="alert alert-warning">Invalid Input</div>}
                    {this.state.showSuccessMessage && <div>Add or Create customer account details successful</div>}
                   
                    </form>
                </div>
            </div>
        );
    }
   
}

//<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>