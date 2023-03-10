import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyWishlist from "../Pages/MyWishllist/MyWishlist";
import SignUp from "../Pages/SignUp/SignUp";

export const routers = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/category/:id', element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`https://rapid-reselling-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/blogs', element: <Blogs></Blogs>
            }
        ]
    },
    {
        path: '/dashboard', element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard', element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/wishlist', element: <MyWishlist></MyWishlist>
            },
            {
                path: '/dashboard/order', element: <MyOrder></MyOrder>
            }
        ]
    }
])