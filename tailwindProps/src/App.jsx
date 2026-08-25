import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from'./components/Card'

function App() {
    let myObject ={
      username:'mohit',
      age:23

    } 
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-4xl mb-4'>tailwind test </h1>
      {/* <Card channel='mohit yadav' someobj={myObject}/> */}
      <Card username="Mohit yadav" btnText='click me'/>
      <Card username='Mohit yadav' />
      
       
    </>
  )
}

export default App
