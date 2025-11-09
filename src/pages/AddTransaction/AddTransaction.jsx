import { motion } from 'motion/react'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'


const AddTransaction = () => {
    const { user } = useContext(AuthContext)
    const [type, setType] = useState('')
    const [category, setCategory] = useState("");


    const categories = {
        income: ["Salary", "Freelance", "Business", "Investments", "Other Income"],
        expense: ["Food", "Transport", "Shopping", "Bills", "Health", "Entertainment", "Other Expense",
        ],
    };
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex justify-center items-center min-h-screen text-[#333] bg-base-200 dark:bg-base-100 -mt-5 select-none">
                <div className="mx-4">
                    <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-base-100 dark:bg-base-300 dark:border-base-200 text-base-content">
                        <h1 className="text-2xl font-bold text-center mb-5">Add Transaction</h1>
                        <form>
                            <div className="space-y-3">
                                <div className="space-y-2 bg-base-200 w-full p-3 py-4 rounded-sm">
                                    <div>
                                        <h1 className="font-bold">Type:</h1>
                                    </div>
                                    <div className="w-full flex gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="type" value="income" checked={type === "income"} onChange={(e) => { setType(e.target.value); setCategory('') }} className="radio radio-primary" />
                                            <span>Income</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="type" value="expense" checked={type === "expense"} onChange={(e) => { setType(e.target.value); setCategory('') }} className="radio radio-primary" />
                                            <span>Expense</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-[#333] my-2 placeholder:text-base-content dark:border-base-200"
                                        placeholder={
                                            type
                                                ? "Select or type category"
                                                : "Select Type First (Income/Expense)"
                                        }
                                        list="categoryList"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        disabled={!type} />

                                    <datalist id="categoryList">
                                        {type &&
                                            categories[type]?.map((category, index) => (
                                                <option key={index} value={category} />
                                            ))}
                                    </datalist>
                                </div>
                            </div>
                            <div>
                                <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-[#333] my-2 placeholder:text-base-content dark:border-base-200" type="tel" placeholder="Amount" pattern="[0-9]*" title="" />
                                <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-[#333] my-2 placeholder:text-base-content dark:border-base-200" readOnly defaultValue={user.displayName} type="email" name='email' placeholder='Email' />
                                <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-[#333] my-2 placeholder:text-base-content dark:border-base-200" readOnly defaultValue={user.email} type="text" name='name' placeholder='Name' />
                            </div>
                            <div>
                                <textarea cols="20" rows="4" className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-[#333] my-2 placeholder:text-base-content dark:border-base-200" placeholder='Description'></textarea>
                            </div>
                            <div className="w-full">
                                <button className="btn btn-primary w-full my-4">Add Transaction</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default AddTransaction
