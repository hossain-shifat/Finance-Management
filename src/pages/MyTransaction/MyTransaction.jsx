import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const MyTransaction = () => {

    const { user } = useContext(AuthContext)
    const [transactions, setTransactions] = useState([])
    const updateRef = useRef(null)

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

    const handleUpdate = (id) =>{

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
                                            <button onClick={()=>updateRef.current.showModal()} className="btn btn-outline btn-warning">Update</button>
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
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>


        </div>
    )
}

export default MyTransaction
