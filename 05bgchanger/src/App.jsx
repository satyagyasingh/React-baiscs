import { useState } from 'react';

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div 
        className="flex justify-center w-full h-screen duration-500 bg-[rgb(140,48,97)] text-white"
        style={{ backgroundColor: color }}
      >
        <div className="flex space-x-7 fixed bottom-10 justify-center mb-6 border-4 rounded-lg p-4 border-black bg-[rgb(97,73,101)]">
          <div 
            className='rounded-lg border-4 border-black p-2 bg-green-300'
            onClick={() => setColor("rgb(72, 187, 120)")} 
          >
            Button
          </div>
          <div 
            className='rounded-lg border-4 border-black p-2 bg-purple-800'
            onClick={() => setColor("rgb(128, 0, 128)")} 
          >
            Button
          </div>
          <div 
            className='rounded-lg border-4 border-black p-2 bg-orange-400'
            onClick={() => setColor("rgb(255, 165, 0)")} 
          >
            Button
          </div>
          <div 
            className='rounded-lg border-4 border-black p-2 bg-slate-500'
            onClick={() => setColor("rgb(113, 128, 150)")} 
          >
            Button
          </div>
          <div 
            className='rounded-lg border-4 border-black p-2 bg-blue-950'
            onClick={() => setColor("rgb(1, 33, 105)")} 
          >
            Button
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
