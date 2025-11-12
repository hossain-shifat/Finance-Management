import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";


const CategoryPie = () => {
    const { user, loading } = useContext(AuthContext)
    const [pieData, setPieData] = useState([])

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A45EE5", "#FF6666", "#33CCFF"];


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
                const category = data.reduce((acc,item)=>{
                    const existing = acc.find(itm => itm.name === item.category)
                    if (existing) {
                        existing.value += Number(item.amount)
                    }else{
                        acc.push({name:item.category,value:Number(item.amount)})
                    }
                    return acc
                },[])
                setPieData(category)
            })
    }, [user])

    return (
        <div className="border bg-base-200 border-base-100 shadow-xl rounded-xl my-10 p-4">
            <h1 className="font-bold pl-4">Category-wise Summary</h1>
            {pieData.length > 0 ? (
                <ResponsiveContainer width='100%' height='400'>
                    <PieChart>
                        <Pie data={pieData} dataKey='value' dataName='name' cx='50%' cy='50%' outerRadius={130} fill='#8884d8' label={({ name, value }) => `${name}: ${value}`} >
                            {pieData.map((enty, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
                            contentStyle={{
                                backgroundColor: "#1E293B",
                                borderRadius: "10px",
                                color: "var(--tw-text-base-content)",
                                border: "none",
                            }}
                        />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            )
                :
                (
                <div className="flex justify-center items-center h-[400px] text-center">
                    <p>No Category Data Available</p>
                </div>)

            }

        </div>
    )
}

export default CategoryPie
