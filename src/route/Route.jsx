import { createBrowserRouter } from 'react-router'
import Root from '../layout/Root'
import Home from '../pages/Home/Home'
import Dashboard from '../pages/Payments/Dashboard'
import MyBankCards from '../pages/MyBankCards/MyBankCards'
import Transactions from '../pages/Transactions/Transactions'


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
                path: '/Dashboard',
                Component: Dashboard
            },
            {
                path: '/MyBankCards',
                Component: MyBankCards
            },
            {
                path: '/Transaction',
                Component: Transactions
            }
        ]
    }
])
