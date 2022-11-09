import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import './login/login.css';
import './Footer/footer.css';
import './BranchDetails/Branch.css';
import './CustomerDetails/Customer.css';
import './Menu/Menu.css';
import './Header/Header.css';
import Login from './login/login';
import AddCustomer from "./AddCustomer/AddCustomer";
import Menu from "./Menu/Menu";
import AddBranch from "./AddBranch/AddBranch";
import Branch from './BranchDetails/Branch';
import Customer from './CustomerDetails/Customer';
import Header from './Header/Header';
import Footer from './Footer/footer';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ></link>

function App() {

  
sessionStorage.setItem("authorized", false)
  return (
    <div className="App">


<Header />
<BrowserRouter>
<Routes >
  <Route index element={<Login />}/>
  <Route path = 'branch' element={<Branch/>}/>
  <Route path = 'displaycustomer' element={<Customer/>}/>
  <Route path = 'addcustomer' element={<AddCustomer/>}/>
  <Route path = 'addbranch' element={<AddBranch/>}/>
  <Route path = 'menu' element={<Menu/>}/>
</Routes>
</BrowserRouter>
{/* <Login /> */}
{/* <Branch /> */}
{/* <Customer /> */}

<Footer />
 

    </div>
  );
}

export default App;
