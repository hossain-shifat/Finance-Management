import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { number } from 'motion'

ChartJS.register(ArcElement, Tooltip, Legend)

const Overview = () => {

    const [overview, setOverview] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/overview?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setOverview(data)
                })
        }
    }, [user])

    const incomeByCategory = overview
        .filter(t => t.type === 'income')
        .reduce((acc, t) => {
            acc[t.category] = (acc[t.category] || 0) + Number(t.amount)
            return acc
        },{})

    const totalIncome = overview
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const totalExpense = overview
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const totalBalance = totalIncome - totalExpense;

    console.log(totalIncome, totalExpense, totalBalance)


    const balanceData = {
        labels: ['Balance', 'Spent'],
        datasets: [
            {
                data: [totalBalance > 0 ? totalBalance : 0, totalExpense],
                backgroundColor: ['#3b82f6', '#bfdbfe'],
                borderWidth: 1
            }
        ]
    }

    const incomeData = {
        labels: Object.keys(incomeByCategory),
        datasets: [
            {
                data: Object.values(incomeByCategory),
                backgroundColor: [
                    '#4ade80', '#22c55e', '#16a34a', '#a7f3d0', '#bbf7d0'
                ],
                borderWidth: 1
            }
        ]
    }

    const expenseData = {
        labels: ['Expense', 'Remaining'],
        datasets: [
            {
                data: [totalExpense, totalIncome - totalExpense > 0 ? totalIncome - totalExpense : 0],
                backgroundColor: ['#f87171', '#fee2e2'],
                borderWidth: 1
            }
        ]
    }

    return (
        <div className="my-10 px-4">
            <div className="my-10">
                <h1 className="font-bold text-2xl">Overview</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-4 rounded-xl">
                <div className="border-2 flex flex-col md:flex-row justify-between items-center text-center p-4">
                    <div className="w-60 max-w-full">
                        <Pie data={balanceData} />
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg">Total Balance</h1>
                        <p>{totalBalance}</p>
                    </div>
                </div>
                <div className="border-2 flex flex-col md:flex-row justify-between items-center text-center p-4">
                    <div className="w-60 max-w-full">
                        <Pie data={incomeData} />
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg">Total Income</h1>
                        <p>{totalIncome}</p>
                    </div>
                </div>
                <div className="border-2 flex flex-col md:flex-row justify-between items-center text-center p-4">
                    <div className="w-60 max-w-full">
                        <Pie data={expenseData} />
                    </div>
                    <div>
                        <h1 className="font-semibold text-lg">Total Expense</h1>
                        <p>{totalExpense}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview
