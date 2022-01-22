import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
