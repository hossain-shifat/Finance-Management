import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import { testValueType } from 'motion'

const MyTransaction = () => {

    const { user } = useContext(AuthContext)
    const [transactions, setTransactions] = useState([])
    const [type, setType] = useState('')
    const [category, setCategory] = useState('');
    const [selectedId, setSelectedId] = useState('')
    const updateRef = useRef(null)
    const categories = {
        income: ["Salary", "Freelance", "Business", "Investments", "Other Income"],
        expense: ["Food", "Transport", "Shopping", "Bills", "Health", "Entertainment", "Other Expense",],
    };

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-transaction?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setTransactions(data)
                })
        }
    }, [user])

    const handleUpdate = (e) => {
        e.preventDefault()
        const type = e.target.type.value
        const amount = e.target.amount.value
        const description = e.target.description.value
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        const updateTransaction = {
            type: type,
            category: category,
            amount: amount,
            description: description,
            date: date,
            time: time,
        }

        fetch(`http://localhost:3000/my-transaction/${selectedId}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTransaction)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Transaction updated successfully!')
                    updateRef.current.close()
                    e.target.reset()
                    setType('')
                    setCategory('')
                }
                setTransactions(prev => prev.map(transaction => transaction._id === selectedId ? { ...transaction, ...updateTransaction } : transaction))
            })
    }

    return (
        <div className="px-4 my-10">
            <h1 className="my-10 font-bold text-2xl">My Transaction</h1>

            <div className="overflow-x-auto">
                <table className="table w-auto mx-auto">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Type</th>
                            <th>Categoty</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Transaction Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((transaction, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.category}</td>
                                    <td className={`${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>{transaction.type === 'income' ? `+ $${transaction.amount}` : `- $${transaction.amount}`}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction._id}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button onClick={() => { setSelectedId(transaction._id); updateRef.current.showModal(); }} className="btn btn-outline btn-warning">Update</button>
                                            <button className="btn btn-outline btn-error">Delete</button>
                                            <button className="btn btn-outline btn-info">View</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}

                <dialog ref={updateRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    {/* <div className="flex justify-center items-center min-h-screen text-[#333] bg-base-200 dark:bg-base-100 select-none"> */}
                    <div className="mx-4">
                        <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-base-100 dark:bg-base-300 dark:border-base-200 text-base-content">
                            <h1 className="text-2xl font-bold text-center mb-5">Update</h1>
                            <form onSubmit={handleUpdate}>
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
                                    <div className="w-full">
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
                                    <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-[#333] my-2 placeholder:text-base-content dark:border-base-200" type="tel" placeholder="Amount" pattern="[0-9]*" name="amount" />
                                </div>
                                <div>
                                    <textarea cols="20" rows="4" className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-[#333] my-2 placeholder:text-base-content dark:border-base-200" placeholder='Description' name='description'></textarea>
                                </div>
                                <div className=" flex gap-4 justify-end">
                                    <button onClick={() => updateRef.current.close()} type='button' className="btn btn-outline my-4">Close</button>
                                    <button className="btn btn-primary  my-4">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* </div> */}
                </dialog>
            </div>


        </div>
    )
}

export default MyTransaction
