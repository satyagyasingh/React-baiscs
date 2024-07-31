import { useState } from 'react'
import Box from './Box'


function App() {
  const handleSubmit = (e)=>{
    const form = e.target;
    form.preventdefault;
  }
  return (
    <>
      <form onSubmit={()=>handleSubmit(e)} className='min-h-lvh min-w-80  w-screen p-7 flex justify-center ' 
        style={{ backgroundColor: 'rgb(224, 241, 231)' }}>

        <div className='w-full sm:max-w-xl m-10  sm:grid-cols-2 p-6 rounded-xl grid grid-cols-1 gap-x-2 gap-y-2 '
          style={{backgroundColor:"white"}}>
          <h1 className='text-4xl font-semibold sm:col-span-2'>Contact us</h1>
          <Box name="First Name" rows="1"/>
          <Box name="Last Name" rows="1"/>
          <div className='sm:col-span-2'><Box name="EmailId" rows ="1"/></div>
          <h1 className="mb-1 sm:col-span-2">Query Type *</h1>
          <div className='border-2 border-black rounded hover:border-green-500 p-3 focus:bg-green-100 text-xl'><input required name='feed' type="radio" id='feedback'/>
          <label htmlFor="feedback">genral query</label></div>
          <div className='border-2 border-black rounded hover:border-green-500 p-3 focus:bg-green-100 text-xl' ><input required name='feed' type="radio" id='support'/>
          <label htmlFor="support">support</label></div>
          
          <div className='sm:col-span-2'><Box name="Message" rows="5"/></div>
          
          <div className='sm:col-span-2'><button className='w-full p-2 sm:border rounded font-semibold text-white'
            style={{backgroundColor :"rgb(12, 125, 105)"}}>Submit</button></div>
        </div>
        
      </form>
    </>
  )
}

export default App
