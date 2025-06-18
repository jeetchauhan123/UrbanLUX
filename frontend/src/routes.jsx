import Intro from './pages/Intro'
import Home from './pages/home/Home'
import About from './pages/Category/AboutUs'
import Products from './pages/Products/Products'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

import { createBrowserRouter } from 'react-router-dom'
import Brands from './pages/Category/Brands'
import Profile from './pages/Profile'



const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Intro />,
        },
        {
            path: "/intro",
            element: <Intro />,
        },
        {
            path: "/home",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "/log-in",
            element: <Login />
        },
        {
            path: "/sign-up",
            element: <Register />
        },
        {
            path: "/brands",
            element: <Brands />
        },
        {
            path: "/profile",
            element: <Profile />
        }
    ]
)

export default router;