import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/addEvents">Add Events</Link>
      <Link to="/home">Home</Link>
    </div>
  );
}

export default App;
