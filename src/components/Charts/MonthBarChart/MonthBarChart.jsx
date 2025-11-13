import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { AuthContext } from '../../../context/AuthContext';

const MonthBarChart = () => {
    const { user } = useContext(AuthContext)
    const [barData, SetBarData] = useState([])

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthlyData = {}

    const monthTickFormatter = (monthName) => monthName.slice(0, 3);
    const renderQuarterTick = (props) => {
        const { x, y, payload } = props
        return (
            <text x={x + 50} y={y + 15} textAnchor='middle' fill='#666' fontSize={12}>
                {payload.value.slice(0, 3)}
            </text>
        )
    }

    useEffect(() => {
        if (!user?.email) {
            return
        }

        fetch(`http://localhost:3000/my-transaction?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    const date = new Date(item.date)
                    const monthKey = `${date.getFullYear()}-${date.getMonth()}`
                    const amount = parseInt(item.amount) || 0

                    if (!monthlyData[monthKey]) {
                        monthlyData[monthKey] = { income: 0, expense: 0, monthName: monthNames[date.getMonth()] }
                    }

                    if (item.type === 'income') {
                        monthlyData[monthKey].income += amount
                    } else if (item.type === 'expense') {
                        monthlyData[monthKey].expense += amount
                    }
                })

                const monthArray = Object.keys(monthlyData).sort().map((key, index, arr) => {
                    const monthData = monthlyData[key]
                    const prevKey = arr[index - 1]
                    const prevData = prevKey ? monthlyData[prevKey] : { income: 0, expense: 0 }

                    return {
                        month_name: monthData.monthName,
                        this_month_income: monthData.income,
                        this_month_expense: monthData.expense,
                        prev_month_income: prevData.income,
                        prev_month_expense: prevData.expense,
                        total: monthData.income - monthData.expense
                    }
                })
                SetBarData(monthArray)
            })
    }, [user])


    console.log(barData)
    return (
        <div className="border bg-base-200 border-base-100 shadow-xl rounded-xl p-4">
            <div>
                <h1 className="font-bold pl-4">Month Total</h1>
            </div>
            {barData.length > 0 ? (
                <ResponsiveContainer width='100%' height='400'>
                    <BarChart data={barData} barCategoryGap={30} barGap={4} responsive margin={{ top: 25, right: 0, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='month_name' tickFormatter={monthTickFormatter} axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={20} scale='band' xAxisId="quarter" />
                        {/* <XAxis dataKey='month_name' tickFormatter={monthTickFormatter} axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={1} scale='band' xAxisId="quarter" /> */}
                        <YAxis width="auto" tickFormatter={(value) => {
                            if (value >= 1000000) {
                                return "$"+(value / 1000000) + 'M'
                            }
                            if (value >= 1000) {
                                return "$"+(value / 1000) + 'K'
                            }
                            return value
                        }} />
                        <Tooltip contentStyle={{
                            backgroundColor: "#E5E7EB", borderRadius: "10px", color: "var(--tw-text-base-content)", border: "none",
                        }} />
                        <Legend wrapperStyle={{ paddingTop: '1em' }} />
                        <Bar dataKey='this_month_income' fill='#8884d8' barSize={15} name='Current Month Income' />
                        <Bar dataKey='this_month_expense' fill='#82ca9d' barSize={15} name='Current Month Expense' />
                        {
                            barData.some(d => d.prev_month_income > 0) && (
                                <Bar dataKey='prev_month_income' fill='#FF8C00' barSize={15} name='Previous Month Income' />
                            )
                        }
                        {
                            barData.some(d => d.prev_month_expense > 0) && (
                                <Bar dataKey='prev_month_expense' fill='#33CCFF' barSize={15} name='Previous Month Expense' />
                            )
                        }
                    </BarChart>
                </ResponsiveContainer>
            )
                :
                (
                    <div className="flex justify-center items-center h-[400px] text-center">
                        <p>No Data Available</p>
                    </div>)

            }
        </div>
    )
}

export default MonthBarChart
