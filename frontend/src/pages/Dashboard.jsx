import React from 'react'
import Navbar from './components/Navbar'



const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className='flex flex-row justify-center'>
            <aside className='w-[20vw] h-[80vh] bg-blue-400 m-5 flex flex-col items-center rounded-2xl gap-15'>
                <h1 className='font-bold text-5xl my-6'>Dashboard</h1>
                <ul className='w-[100%] text-center text-2xl'>
                    <li className='py-3 shadow-2xl'>Overview</li>
                    <li className='py-3 shadow-2xl'>Users</li>
                    <li className='py-3 shadow-2xl'>Products</li>
                    <li className='py-3 shadow-2xl'>Sellers</li>
                    <li className='py-3 shadow-2xl'>Admins</li>
                </ul>
            </aside>
            <section className='w-[75vw] bg-blue-400 m-5 flex flex-col items-center rounded-2xl'>
                <h1>Super Admin Dashboard</h1>
                <div>
                    <h1>Overview</h1>
                    <article>
                        
                    </article>
                </div>
                {/* <div></div> */}
            </section>
        </div>
    </div>
  )
}

export default Dashboard