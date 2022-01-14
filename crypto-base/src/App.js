import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import { NavBar, 
  HomePage, 
  Exchanges, 
  CryptoCurrencies, 
  CryptoDetails, 
  News, 
  LogIn, 
  Register, 
  DashboardNavBar, 
  TimeLine,
} from './Components'

import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div style={{overflow: 'hidden'}}>
      <Router>
        <NavBar />
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
          <PrivateRoute path='/dashboard'>
            <DashboardNavBar />
          </PrivateRoute>
          <PrivateRoute path='/timeline'>
            <TimeLine />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
