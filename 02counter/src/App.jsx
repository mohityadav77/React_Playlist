import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter]= useState(5)
  // let counter=5
  const addvalue=() =>{
    // console.log('clicked',counter)
    if(counter<20 ){
      counter=counter+1;
      setCounter(counter)
    }
    
    
  }
  const removevalue=() =>{
    
    if(counter>0){
      counter=counter-1;
      setCounter(counter);
    }
    
    
  }
  

  return (
    <>
      
      <h1>mohit yadav</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
