import logo from './logo.svg';
import './App.css';
import { useState } from 'react/cjs/react.development';
import User from './components/User';

function App() {
  const [isfamiler , setIsfamiler ] = useState(false);
  return (
    <div className="App">
        <h2>Isfamiler: {isfamiler.toString()}</h2>
        <button onClick={() => setIsfamiler(!isfamiler)}>toggle</button>
        <User isfamiler={isfamiler}/>
    </div>
  );
}

export default App;
