import { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './App.css'
import router from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {

  return (
    <div className='box-border'>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </div>
  )
}

export default App