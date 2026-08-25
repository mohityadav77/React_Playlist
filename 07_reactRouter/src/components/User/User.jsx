import React from 'react'
import { useParams } from 'react-router-dom'

function user() {
    const {userId}=useParams()
  return (
    <div className='bg-gray-700 text-white text-4xl text-center'>user:{userId}</div>
  )
}

export default user