import { motion } from 'motion/react'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify'


const AddTransaction = () => {
    const { user } = useContext(AuthContext)
    const [type, setType] = useState('')
    const [category, setCategory] = useState("");


    const categories = {
        income: ["Salary", "Freelance", "Business", "Investments", "Other Income"],
        expense: ["Food", "Transport", "Shopping", "Bills", "Health", "Entertainment", "Other Expense",],
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const type = e.target.type.value
        const amount = e.target.amount.value
        const description = e.target.description.value
        const userEmail = e.target.email.value
        const userName = e.target.name.value
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        const newTransaction = {
            type: type,
            category: category,
            amount: amount,
            description: description,
            date: date,
            time: time,
            user_email: userEmail,
            user_name: userName
        }

        fetch('http://localhost:3000/add-transaction', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${user.accessToken}`

            },
            body: JSON.stringify(newTransaction)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    e.target.reset()
                    setType('')
                    setCategory('')
                    toast.success('Transaction Added')
                }
            })
    }

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex justify-center items-center min-h-screen text-base-content bg-base-200 dark:bg-base-100 my-10 select-none">
                <div className="mx-4">
                    <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-base-100 dark:bg-base-300 dark:border-base-200 text-base-content">
                        <h1 className="text-2xl font-bold text-center mb-5">Add Transaction</h1>
                        <form onSubmit={handleSubmit}>
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
                                        className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-base-content my-2 placeholder:text-base-content dark:border-base-200"
                                        required
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
                                <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-base-content my-2 placeholder:text-base-content dark:border-base-200" type="tel" required placeholder="Amount" pattern="[0-9]*" name="amount" />
                                <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-base-content my-2 placeholder:text-base-content dark:border-base-200" readOnly defaultValue={user.email} type="email" name='email' placeholder='Email' />
                                <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-base-content my-2 placeholder:text-base-content dark:border-base-200" readOnly defaultValue={user.displayName} type="text" name='name' placeholder='Name' />
                            </div>
                            <div>
                                <textarea cols="20" rows="4" className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] my-2 placeholder:text-base-content text-base-content dark:border-base-200" required placeholder='Description' name='description'></textarea>
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
