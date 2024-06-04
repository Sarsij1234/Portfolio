import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Form from './components/Form';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Form />
      <br /><br />
      <Footer />
    </div>
  );
}

export default App;
