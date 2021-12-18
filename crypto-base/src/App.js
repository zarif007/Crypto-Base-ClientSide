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
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
