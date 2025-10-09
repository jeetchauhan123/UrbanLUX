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

// "Live the Lux.": is short, punchy, and implies a lifestyle of luxury.
// "Legacy of Luxury": speaks to the idea of creating a lasting impact and a life of enduring quality.
// "Refined Living.": emphasizes elegance and sophistication.
// "Beyond Ordinary.": highlights the desire to transcend the mundane.
// "The Art of Luxury.": suggests that luxury is more than just possessions, it's a way of life.
// "Quietly Luxurious.": or "Understated Luxury" focus on the idea of luxury without ostentation.
// "Invest in Experiences.": emphasizes the value of experiences over material possessions.
// "The Pursuit of Perfection.": speaks to the desire for excellence in all aspects of life.
// "Live the Lux." 
// "Legacy of Luxury"
// "Elevate. Experience. Exquisite." 

