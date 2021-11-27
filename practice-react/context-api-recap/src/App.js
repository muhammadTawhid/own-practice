import logo from './logo.svg';
import './App.css';
import Header from './component/Home/Header/Header';
import Home from './component/Home/Home';
import { createContext, useState } from 'react';
import Shipment from './component/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider  value="laptop" className="App">
      <h2>{count}</h2>
      <Header count = {count} setCount={setCount} />
      <Home/>
      <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;
