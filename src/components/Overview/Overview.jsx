import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { motion } from 'motion/react'
import masterCardLogo from '../../assets/mastercard_icon.png'
import { ArrowRight, TrendingDown, TrendingUp } from 'lucide-react'
import { Link } from 'react-router'

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

    const totalIncome = overview
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const totalExpense = overview
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const totalBalance = totalIncome - totalExpense;

    return (
        <div className="my-10 px-4">
            <div className="my-10">
                <h1 className="font-bold text-2xl">Overview</h1>
            </div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
                <div className="grid md:grid-cols-3 gap-4 rounded-xl">
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <div className="p-4 border border-base-100 shadow-xl rounded-xl bg-base-100">
                            <div className="pb-5">
                                <h1 className="font-semibold text-lg">Total Balance</h1>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-2xl">${totalBalance}</h1>
                                    <p>All Accounts</p>
                                </div>
                                <div className="flex justify-between border border-[#299D91] shadow-xl my-5 rounded-xl bg-[#299D91] p-4">
                                    <div className="space-y-2 *:text-[#FFFFFF]">
                                        <p>Account Type</p>
                                        <h1 className="font-bold text-xl">Credit Card</h1>
                                        <p>**** **** **** 2598</p>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <img src={masterCardLogo} alt="" />
                                        </div>
                                        <div className="font-bold text-lg text-[#FFFFFF]">
                                            <h1>${totalBalance}</h1>
                                        </div>
                                    </div>
                                </div>
                                {/* <motion.div whileTap={{ scale: 0.9 }} className="flex justify-end px-1 cursor-pointer">
                                    <Link><ArrowRight /></Link>
                                </motion.div> */}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <div className="p-4 border border-base-100 shadow-xl rounded-xl bg-base-100">
                            <div className="pb-5">
                                <h1 className="font-semibold text-lg">Total Income</h1>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-2xl">${totalIncome}</h1>
                                    <p>All Income Types</p>
                                </div>
                                <div className="flex justify-between h-31 border border-blue-900 shadow-xl my-5 rounded-xl bg-blue-900 p-4">
                                    <div className="space-y-2 *:text-[#FFFFFF]">
                                        <p>This Month Income</p>
                                        <h1 className="font-bold text-xl">${totalIncome}</h1>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <TrendingUp stroke='white'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <div className="p-4 border border-base-100 shadow-xl rounded-xl bg-base-100">
                            <div className="pb-5">
                                <h1 className="font-semibold text-lg">Total Expense</h1>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold text-2xl">${totalExpense}</h1>
                                    <p>All Expense Types</p>
                                </div>
                                <div className="flex justify-between h-31 border border-base-100 bg-base-300 shadow-xl my-5 rounded-xl p-4">
                                    <div className="space-y-2 text-base-content">
                                        <p>This Month Expense</p>
                                        <h1 className="font-bold text-xl">${totalExpense}</h1>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <div className="text-base-content">
                                            <TrendingDown />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Overview
