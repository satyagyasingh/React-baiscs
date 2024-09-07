import { useCallback, useState ,useEffect ,useRef} from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numsAllowed , setNumsAllowed] = useState(false);
  const [specialAllowed , setSpecialAllowed] = useState(false);
  const [password , setPassword] = useState("");

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);

  })

  const passwordGenerator =useCallback(()=>{
    let str = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numsAllowed){
      str+="0123456789";
    }
    if(specialAllowed){
      str+="@#$&*?";
    }
    let pass = "";
    let n=str.length

    for(let i=0;i<length;i++){
      let ind = Math.floor(Math.random()*n);
      pass += str.charAt(ind);
    }
    setPassword(pass);
    console.log(pass);
  },[length,numsAllowed,specialAllowed,setPassword])
 
  // passwordGenerator();
  useEffect(()=>{
    passwordGenerator()
  },[passwordGenerator]
  )


  return (
    <>

      <h1 className='text-4xl text-white text-center m-3 mb-3'>Password Genrator</h1>
      <div>
        <input  className='p-2 rounded' 
        type="text"  readOnly value={password} ref={passwordRef} placeholder='password'/>
        <button className='text-white bg-blue-900 px-3 py-2 rounded'
          onClick={copyToClipboard}
        >copy</button>
      </div>
      <div>
        <label className='text-white'>length*
        <input className='mt-3' 
        min={8}
        max={50}
        type="range" 
        value={length}
        onChange={(e) => setLength(Number(e.target.value))} 
        />
        {length}
        </label>

        <div>
        <label className='text-white' >
        <input type="checkbox" value={specialAllowed}
        onChange={() => setSpecialAllowed(numsAllowed => !numsAllowed)}/>
        SpecialChars?</label>
        </div>
        <div>
        <label className='text-white' >
        <input type="checkbox" value={specialAllowed}
        onChange={() => setNumsAllowed(numsAllowed => !numsAllowed)}/>
        NumsAllowed??</label>
        </div>
        
      </div>

    </>
    
  )
}

export default App
