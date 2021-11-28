import { Layout } from 'antd';
import { Route, Switch } from 'react-router';
import './App.css';
import { NavBar, HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from './Components'

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main">
        <Layout>
            <div className="routes">
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
                  <News/> 
                </Route>
              </Switch>
            </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
