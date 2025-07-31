import { createBrowserRouter } from 'react-router-dom'
import Intro from './pages/Intro'
import Home from './pages/home/Home'
import About from './pages/Category/AboutUs'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Brands from './pages/Category/Brands'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import Category from './pages/Category/Category'
import Sale from './pages/Category/Sale'
import Trending from './pages/Category/Trending'
import ProductDetail from './pages/Products/ProductDetail'
import Zoho from './pages/Zoho'


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
            path: "/products/:id",
            element: <ProductDetail />
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
            path: "/profile",
            element: <Profile />
        },
        {
            path: "/product/category",
            element: <Category />
        },
        {
            path: "/product/brands",
            element: <Brands />
        },
        {
            path: "/product/trending",
            element: <Trending />
        },
        {
            path: "/product/sales",
            element: <Sale />
        },
        {
            path: "/zoho",
            element: <Zoho />
        },
        {
            path: "*",
            element: <PageNotFound />
        },
    ]
)

export default router;