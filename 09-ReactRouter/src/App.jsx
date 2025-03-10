import { useState } from 'react'
import Header from './components/Header'
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Header/>
     <Home/>
      <Footer/>
     <h1>system</h1>
    </BrowserRouter>
  )
}

export default App
