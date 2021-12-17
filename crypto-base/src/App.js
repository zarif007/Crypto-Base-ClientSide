import { Layout } from 'antd';
import { Route, Switch } from 'react-router';
import './App.css';
import { NavBar, HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from './Components'
import Navbar from './Components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="routes container">
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
    </div>
  );
}

export default App;
