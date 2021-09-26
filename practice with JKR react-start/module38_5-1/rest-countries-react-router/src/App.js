import './App.css';
import Home from './components/Home/Home';
import Notfound from './components/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/country/:countryName">
          <CountryDetails/>
        </Route>
        <Route path="*">
          <Notfound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
