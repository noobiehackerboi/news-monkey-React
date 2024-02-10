import './App.css';
import Navbar from "./components/Navbar";
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <News pageSize={15} country="in" category="general"/>
    </div>
  );
}

export default App;
