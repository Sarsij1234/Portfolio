import { useState } from 'react'
import Navbar from './components/Navbar'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1  className="text-3xl font-bold underline">Jai shree Ram</h1> */}
      <Home/>
      <Navbar/>
      <About/>
      <Portfolio/>
      <Experience/>
      
      <Form/>
       <Footer/>
    </>
  )
}

export default App
