import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full h-screen duration-200 bg-orange-600'></div>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl'>tailwind tttest</h1>
    </>
  )
}

export default App

