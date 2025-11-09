import React, { useContext } from 'react'
import { Link } from 'react-router'
import { UserPen, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { AuthContext } from '../../context/AuthContext'

const MyProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex justify-center items-center min-h-screen bg-base-200 dark:bg-base-100 -mt-5">
                <div className="mx-3">
                    <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-xl bg-base-100 dark:border-base-200 dark:bg-base-200 text-base-content">
                        <div>
                            <Link to='/' className="flex justify-end cursor-pointer"><X /></Link>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-center mb-5">My Profile</h1>
                        </div>
                        <div className="my-5">
                            <img className="w-20 h-20 object-cover border-3 border-green-600 rounded-full mx-auto" src={user.photoURL} alt="" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between">
                                <h1>Name</h1>
                                <h1>{user.displayName}</h1>
                            </div>
                            <div className="flex justify-between gap-15">
                                <h1>Email</h1>
                                <h1>{user.email}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1>Phone</h1>
                                <h1>017xxxxxxxx</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1>Location</h1>
                                <h1>Bnagladesh</h1>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Link to='/update-profile' className="btn btn-primary flex justify-center items-center font-bold text-white w-full border-none outline-none mt-5"><UserPen size={20} /> Update Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default MyProfile
