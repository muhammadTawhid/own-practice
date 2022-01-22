import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
