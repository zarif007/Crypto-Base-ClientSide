import { Layout } from 'antd';
import { Route, Switch } from 'react-router';
import './App.css';
import { NavBar } from './Components'

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

                </Route>
                <Route exact path='/exchanges'>

                </Route>
                <Route exact path='/cryptocurrencies'>

                </Route>
                <Route exact path='/crypto/:coinId'>

                </Route>
                <Route exact path='/news'>

                </Route>
              </Switch>
            </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
