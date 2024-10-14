import React from 'react'
import backgroundImage from './backgroundImage.avif'
import InputBox from './components/inputBox';

function App() {
    
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(${backgroundImage})`, // this is an immage saved in src folder
          }}
      >
            <div className="h-max relative flex flex-wrap justify-center items-center backdrop-filter backdrop-blur-md bg-white bg-opacity-30 rounded-lg shadow-lg p-6">
                    <InputBox/>
            </div>
      </div>
  );
}
export default App;