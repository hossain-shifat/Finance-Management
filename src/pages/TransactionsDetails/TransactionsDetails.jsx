import { BadgeCheck, X } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import { Link, useLoaderData } from 'react-router'
import card from '../../assets/card.png'


const TransactionsDetails = () => {
    const transaction = useLoaderData()
    console.log(transaction)
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex justify-center items-center min-h-screen bg-base-200 dark:bg-base-100 -mt-5">
                <div className="mx-3">
                    <div className="w-full max-w-[750px] p-7 border border-gray-100 rounded-xl shadow-xl bg-base-100 dark:border-base-200 dark:bg-base-200 text-base-content">
                        <div className="flex justify-between ">
                            <h1 className="font-bold text-xl">Transaction Details</h1>
                            <Link><X /></Link>
                        </div>
                        <div className="flex justify-between items-center gap-10 py-5 border-b border-base-100">
                            <div className="flex justify-between items-center gap-2">
                                <div>
                                    <img src={card} className="w-15 h-10" alt="" />
                                </div>
                                <div>
                                    <h1>Account</h1>
                                    <p className="font-bold">Master Card</p>
                                </div>
                            </div>
                            <div>
                                <p className="flex gap-1"><span>{transaction.date}</span>, <span>{transaction.time}</span></p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-5 ">
                            <div>
                                <p className='font-bold text-3xl text-base-content'>{transaction.type === 'income' ? `+$${transaction.amount}` : `-$${transaction.amount}`}</p>
                                <p className='pl-4 text-base-content'>{transaction.type === 'income' ? `${transaction.category}` : `For ${transaction.category}`}</p>
                            </div>
                            <div>
                                <p className="flex gap-2 items-center px-2 rounded-full bg-green-400 text-white "><BadgeCheck size={16}/> Complete</p>
                            </div>
                        </div>
                        <div className="p-4 border bg-base-300 border-base-200 shadow-xl rounded-xl">
                            <div className="border-b border-base-100 py-2">
                                <h1 className="text-sm text-base-content/50">Transaction ID:</h1>
                                <p>{transaction._id}</p>
                            </div>
                            <div className="border-b border-base-100 py-2">
                                <h1 className="text-sm text-base-content/50">Description</h1>
                                <p>{transaction.description}</p>
                            </div>
                            <div className="py-2">
                                <h1 className="text-sm text-base-content/50">Type</h1>
                                <p>{transaction.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default TransactionsDetails
