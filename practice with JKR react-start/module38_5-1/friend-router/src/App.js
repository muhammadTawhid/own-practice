import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';

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
        <Route path="/friends/:friendId">
          <FriendsDetails/>
        </Route>
        <Route  path="*">
          <NotMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
