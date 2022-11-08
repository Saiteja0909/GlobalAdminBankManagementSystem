import logo from './logo.svg';
import './App.css';
import './login/login.css';
import './Footer/footer.css';
import './BranchDetails/Branch.css';
import './CustomerDetails/Customer.css';
import './Menu/Menu.css';
import './Header/Header.css';
import Login from './login/login';
import Branch from './BranchDetails/Branch';
import Customer from './CustomerDetails/Customer';
import Menu from './Menu/Menu';
import Header from './Header/Header';
import Footer from './Footer/footer';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ></link>

function App() {
  return (
    <div className="App">


<Header />
{/* <Login /> */}
{/* <Branch /> */}
{/* <Customer /> */}
<Menu />
<Footer />
 

    </div>
  );
}

export default App;
