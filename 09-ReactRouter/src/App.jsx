import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/header'
import Footer from "./components/footer"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
      <Footer/>
     <h1>system</h1>
    </>
  )
}

export default App
