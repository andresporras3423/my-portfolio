import './App.css';
import Footsection from './components/Footsection';
import Navigation from './components/Navigation';
import Presentation from './components/Presentation';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Presentation/>
      <Project/>
      <Footsection/>
      Hello world
    </div>
  );
}

export default App;
