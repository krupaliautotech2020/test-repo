import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CcreateEmployee from './components/CcreateEmployee';
import EeditEmployee from './components/EeditEmployee';
import EemployeeList from './components/EemployeeList';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/CcreateEmployee'} className="nav-link">Add Employee</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/EemployeeList'} className="nav-link">Employee List</Link>
                </li>
              </ul>
            </div>
          </nav> <br />
          <Switch>
            <Route exact path='/CcreateEmployee' component={CcreateEmployee} />
            <Route path='/edit/:Id' component={EeditEmployee} />
            <Route path='/EemployeeList' component={EemployeeList} />
          </Switch>
        </div>
      </Router> 
      {/* <CcreateEmployee /> */}
    </div>
  );
}

export default App;
