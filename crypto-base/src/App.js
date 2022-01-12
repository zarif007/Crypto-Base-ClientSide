import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { NavBar, HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from './Components'
import Navbar from './Components/NavBar/NavBar';
import LogIn from './Components/Authentication/LogIn/LogIn';
import Register from './Components/Authentication/Register/Register';
import DashboardNavBar from './Components/Dashboard/DashboardNavBar/DashboardNavBar';
import OwnedCurrencies from './Components/Dashboard/OwnedCurrencies/OwnedCurrencies';
import History from './Components/Dashboard/History/History';


function App() {
  return (
    <div style={{overflow: 'hidden'}}>
      <Router>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path='/'>
              <HomePage/>
            </Route>
            <Route exact path='/exchanges'>
              <Exchanges/>
            </Route>
            <Route exact path='/cryptocurrencies'>
              <CryptoCurrencies/>
            </Route>
            <Route exact path='/crypto/:coinId'>
              <CryptoDetails/>
            </Route>
            <Route exact path='/news'>
              <News /> 
            </Route>
            <Route exact path='/login'>
              <LogIn/>
            </Route>
            <Route exact path='/register'>
              <Register/>
            </Route>
          </Switch>
        </div>
        <Switch>
          <Route path='/dashboard'>
            <DashboardNavBar />
          </Route>
          <Route path='/ownedcurrencies'>
            <OwnedCurrencies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
