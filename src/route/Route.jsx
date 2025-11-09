import { createBrowserRouter } from 'react-router'
import Root from '../layout/Root'
import Home from '../pages/Home/Home'
import AddTransaction from '../pages/AddTransaction/AddTransaction'
import MyTransaction from '../pages/MyTransaction/MyTransaction'
import Reports from '../pages/Reports/Reports'
import Login from '../pages/Login/Login'
import Resister from '../pages/Resister/Resister'
import PrivateRoute from '../components/PriveteRoute/PrivateRoute'
import MyProfile from '../pages/MyProfile/MyProfile'



export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                index: true,
                Component: Home
            },
            {
                path: '/add-transaction',
                element: <PrivateRoute><AddTransaction/></PrivateRoute>
            },
            {
                path: '/my-transaction',
                element: <PrivateRoute><MyTransaction/></PrivateRoute>
            },
            {
                path: '/reports',
                element: <PrivateRoute><Reports/></PrivateRoute>
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/resister',
                Component: Resister
            },
            {
                path:'/my-profile',
                element: <PrivateRoute><MyProfile/></PrivateRoute>
            }
        ]
    }
])
