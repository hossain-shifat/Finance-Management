import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router'
import { BookOpen, FilePenLine, Trash2 } from 'lucide-react'

const MyTransaction = () => {

    const { user, loading } = useContext(AuthContext)
    const [transactions, setTransactions] = useState([])
    const [selectedTransaction, setSelectedTransaction] = useState(null)
    const [type, setType] = useState('')
    const [category, setCategory] = useState('');
    const [selectedId, setSelectedId] = useState('')
    const updateRef = useRef(null)
    const navigate = useNavigate()

    const categories = {
        income: ["Salary", "Freelance", "Business", "Investments", "Other Income"],
        expense: ["Food", "Transport", "Shopping", "Bills", "Health", "Entertainment", "Other Expense",],
    };

    const styles = getComputedStyle(document.documentElement);
    const bgColor = styles.getPropertyValue("--color-base-100").trim();
    const textColor = styles.getPropertyValue("--color-base-content").trim();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-transaction?email=${user.email}`, {
                headers: {
                    authorization: `Bearer ${user.accessToken}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setTransactions(data)
                })
        }
    }, [user])

    const handleOpenModal = (transaction) => {
        setSelectedId(transaction._id)
        setSelectedTransaction(transaction)
        setType(transaction.type)
        setCategory(transaction.category)
        updateRef.current.showModal()
    }

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
                'content-type': 'application/json',
                authorization: `Bearer ${user.accessToken}`
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
                    navigate(`/transactions-details/${selectedId}`)

                }
                setTransactions(prev => prev.map(transaction => transaction._id === selectedId ? { ...transaction, ...updateTransaction } : transaction))
            })
    }

    if (loading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner text-primary"></span></div>;
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            background: bgColor,
            color: textColor
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/my-transaction/${id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                                background: bgColor,
                                color: textColor
                            });
                            const remainingTransaction = transactions.filter(transaction => transaction._id !== id)
                            setTransactions(remainingTransaction)
                        }
                    })
            }
        });
    }

    return (
        <div className="px-4 my-10">
            <div>
                <h1 className="my-10 font-bold text-2xl">My Transaction</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-auto mx-auto">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Type</th>
                            <th>Categoty</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Transaction Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((transaction, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="capitalize">{transaction.type}</td>
                                    <td>{transaction.category}</td>
                                    <td className={`${transaction.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>{transaction.type === 'income' ? `+$${transaction.amount}` : `-$${transaction.amount}`}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.time}</td>
                                    <td>{transaction._id}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <button onClick={() => handleOpenModal(transaction)} className="btn btn-outline btn-warning hover:bg-transparent hover:text-yellow-400"><FilePenLine size={16} /> Update</button>
                                            <button onClick={() => handleDelete(transaction._id)} className="btn btn-outline btn-error hover:bg-transparent hover:text-red-400"><Trash2 size={16} /> Delete</button>
                                            <Link to={`/transactions-details/${transaction._id}`} className="btn btn-outline btn-info hover:bg-transparent hover:text-blue-400"><BookOpen size={16} /> View</Link>
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
                    <div className="modal-box">
                        <h3 className="font-bold text-xl text-center py-5">Update</h3>
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
                                        onFocus={(e) => e.target.value = ''}
                                        onBlur={(e) => e.target.value = category}
                                        disabled={!type} />

                                    <datalist id="categoryList">
                                        {type &&
                                            categories[type]?.map((cate, index) => (
                                                <option key={index} value={cate} />
                                            ))}
                                    </datalist>
                                </div>
                            </div>
                            <div>
                                <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-base-content my-2 placeholder:text-base-content dark:border-base-200" type="tel" required placeholder="Amount" defaultValue={selectedTransaction?.amount || ''} pattern="[0-9]*" name="amount" />
                            </div>
                            <div>
                                <textarea cols="20" rows="4" className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-base-content my-2 placeholder:text-base-content dark:border-base-200" required placeholder='Description' defaultValue={selectedTransaction?.description || ''} name='description'></textarea>
                            </div>
                            <div className=" flex gap-4 justify-end">
                                <button onClick={() => updateRef.current.close()} type='button' className="btn btn-outline my-4">Close</button>
                                <button className="btn btn-primary  my-4"><FilePenLine size={16} /> Update</button>
                            </div>
                        </form>
                        {/* <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div> */}
                    </div>
                </dialog>
            </div>


        </div>
    )
}

export default MyTransaction
