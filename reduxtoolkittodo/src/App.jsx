import { useState } from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className=' text-4xl text-center font-bold underline p-4 shadow rounded '>Learn About Redux-ToolKit </h1>
    <Addtodo />
    <Todos />
    </>
  )
}

export default App
