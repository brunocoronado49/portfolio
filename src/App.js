import Navbar from './components/core/Navbar';
import Home from './components/Home';
import About from './components/About';
import ListProjects from './components/projects/ListProjects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar title="Portafolio"/>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <ListProjects /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
