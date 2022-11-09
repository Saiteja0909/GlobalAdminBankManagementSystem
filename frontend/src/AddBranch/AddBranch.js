import React,{Component} from "react";

//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ></link>
export default class Account extends Component{


    constructor(props) {
        super(props)
 
        this.state = {
          branchId: '',
          branchName:'',
          branchAddress: ''
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
        let user={
        branchId: this.state.branchId,
        branchName:this.state.branchName,
        branchAddress: this.state.branchAddress
       };
        
        let formRaw = [];
    formRaw.push(user)
        fetch ( "http://localhost:8081/api/v1/branches",
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
        alert("Added branch details successful");}
    ).catch(error => {
        alert("Added branch details failed")
     //this.setState({hasFailed: true});
        }
    ))
        //this.setState({showSuccessMessage: true});
        this.setState({
          branchId: '',
          branchName:'',
          branchAddress: ''});
    }

    render(){
        return(
            <div style={{
            marginLeft: "auto",marginRight: "auto"
              }}  >
        
                
                <div  id="list" className='branch'>
                    <form>
                        <br/><br/><br/><br/>
                       <h1>Add Branches</h1>
                    <div className='form-group'>
                        <label>Branch ID:</label>  
                        <input type="text" name="branchId"  value={this.state.branchId}
                        onChange={this.handleChange}  />
                    </div>
                    <div className='form-group' >
                    <label>Branch Name: </label>
                    <input type="text" name="branchName"  value={this.state.branchName}
                        onChange={this.handleChange}  />
                    </div>
                    <div className = "form-group" >
                    <label>Branch Address: </label>
                    <input type="text" name="branchAddress"  value={this.state.branchAddress}
                        onChange={this.handleChange}  />
                    </div>
                     <br/>
                  
                    <button className="btn btn-success" onClick={this.checkSubmit} disabled={!this.state.branchId}>Submit</button>
                    {this.state.hasFailed && <div className="alert alert-warning">Invalid Input</div>}
                    {this.state.showSuccessMessage && <div>Add or Create customer account details successful</div>}
                   
                    </form>
                </div>
            </div>
        );
    }
   
}

//<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>