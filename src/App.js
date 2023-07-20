import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     
     {/* <h1 className='text-3xl font-bold underline'>hii shailja</h1> */}
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Work/>
     <Contact/>
    </div>
  );
}

export default App;
