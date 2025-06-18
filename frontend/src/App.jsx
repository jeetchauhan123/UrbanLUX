import { useState } from 'react'
import './App.css'
import router from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  return (
    <div className='box-border overflow-hidden'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
