import { useState,useCallback,useEffect ,useRef} from 'react'



function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed]=useState(false);
  const [charAllowed,setcharAllowed]=useState(false);
  const [password,setpassword]=useState("");
  const passwordRef= useRef(null)

  const passwordGenerator=useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +='0123456789'
    if(charAllowed) str +='!@#$%^&*()-_=+[]{}`~'
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length + 1)
      pass +=str.charAt(char)
    }
    setpassword(pass);
    
  
  },[length,numberAllowed,charAllowed,setpassword])

  const copypasswordToClipBoard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 '> 
        <h1 className='text-white text-center my-3'>password Generator</h1>
        <div className=' flex shadow rounded-lg overflow-hidden mb-4 bg-white text-black'>
          
          <input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copypasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-800 active:scale-95
             transition-all duration-150'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label >Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              setnumberAllowed((prev) =>!prev);
            }}
             />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=>{
              setcharAllowed((prev) =>!prev);
            }}
             />
            <label htmlFor="charInput">Charcters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
