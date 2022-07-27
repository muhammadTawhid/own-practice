import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import ExploreRef from './components/ExploreRef';
import ExploreUseReducer from './components/ExploreUseReducer';
import PatientManagement from './components/56-7patient-management/PatientManagement';

function App() {
  return (
    <div className="App">
      <PatientManagement/>
      <ExploreUseReducer/>
      <ExploreRef/>
      <Home/>
    </div>
  );
}

export default App;
