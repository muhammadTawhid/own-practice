import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="">
      <Link className="me-5" to="/home">home</Link>
      <Link className="me-5" to="/addEvents">. add event</Link>
      <Link className="me-5" to="/Dashboard">. dashboard</Link>
      <Navbar/>
    </div>
  );
}

export default App;
