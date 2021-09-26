import logo from './logo.svg';
import './App.css';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { fontSize } from '@mui/system';

function App() {
  const [color, setColor] = useState("")

  const handleColor = () =>{
    const likeColor = color ? "" : "#61dafb";
    setColor(likeColor);
  }
  return (
    <div className="App">
      {/* <ThumbUpAltIcon></ThumbUpAltIcon> */}
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      <FontAwesomeIcon onClick={handleColor} style={{color:`${color}`, fontSize:"30px"}} icon={faThumbsUp} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
