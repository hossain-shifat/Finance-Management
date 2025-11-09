import { createBrowserRouter } from 'react-router'
import Root from '../layout/Root'
import Home from '../pages/Home/Home'
import AddTransaction from '../pages/AddTransaction/AddTransaction'
import MyTransaction from '../pages/MyTransaction/MyTransaction'
import Reports from '../pages/Reports/Reports'
import Login from '../pages/Login/Login'
import Resister from '../pages/Resister/Resister'



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
                Component: AddTransaction
            },
            {
                path: '/my-transaction',
                Component: MyTransaction
            },
            {
                path: '/reports',
                Component: Reports
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/resister',
                Component: Resister
            }
        ]
    }
])
