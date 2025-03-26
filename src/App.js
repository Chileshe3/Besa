import './styles/App.css';
import './styles/Nav.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <div className="nav-brand">Portfolio</div>
        <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-links">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </nav>
      <main className="main-content">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
