'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter()
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <div className='space-y-3 text-center'>
          <h1 className='text-9xl font-extrabold text-center'>404</h1>
          <p className='text-xl'>page not found</p>
          <button className='rounded-lg text-white text-center p-4 bg-blue-800' onClick={() => router.push("/home") } >Back to Home page</button>
      </div>
    </div>
  )
}

export default NotFound
