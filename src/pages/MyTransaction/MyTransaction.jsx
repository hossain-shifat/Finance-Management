import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'

const MyTransaction = () => {

    const { user } = useContext(AuthContext)
    const [transaction, setTransaction] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-transaction?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setTransaction(data)
                })
        }
    }, [user])

    return (
        <div className="px-4">
            <h1 className="my-10 font-bold text-2xl">My Transaction</h1>
        </div>
    )
}

export default MyTransaction
