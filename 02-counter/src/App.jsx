import { useState } from 'react'
import './App.css'

// using hooks

function App() {
  let [count, setCount] = useState(10)

  let increase = function(){
    for(let i=0;i<10;i++){
      setTimeout(()=>{

        setCount(++count)
      },i*500)
      
    }
  }
  let decrease = ()=>{
    if(count>0){
      setCount(--count)
    }
  }

  return (
    <>
      <h1>Hi there, this is magic </h1>
      <br />
      <h2>{count}</h2>
      <br />
      <button onClick={increase}>he he +1 kro in {count}</button>
      <br />
      <button onClick={decrease}>he he -1 kro in {count}</button>
      
    </>
  )
}

export default App
