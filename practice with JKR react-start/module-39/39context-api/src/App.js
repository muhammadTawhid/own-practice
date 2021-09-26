import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState("laptop");
  return (
    <CategoryContext.Provider value={[count, setCount]} className="App"> 
      <p>this is app.js count {count}</p>
      <Home count={count} setCount={setCount}/>
      <Header count={count} setCount={setCount}/>
      <Shipment />
    </CategoryContext.Provider>
  );
}

export default App;
