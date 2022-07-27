import './App.css';
import Header from './components/Header/Header';
import Header1 from './styledComponent/Header1'; 
import Friends from './components/Friends/Friends';
import Footer from './components/Footer/Footer';
import Sass from './sass/Sass';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Friends/>
      <Footer/>
      <Header1/>
      <Sass/>
      <Home/>
    </div>
  );
}

export default App;
