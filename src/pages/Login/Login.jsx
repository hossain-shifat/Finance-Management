import { Eye, EyeClosed } from 'lucide-react'
import React, { useContext, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'
import { motion } from 'framer-motion'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signInUser, setUser, googleSingIn } = useContext(AuthContext)
    const emailRef = useRef()

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password)
            .then(result => {
                setUser(result.user)
                toast.success('Login Successfull')
                navigate(from, { replace: true })
                e.target.reset()
            })
            .catch(error => {
                toast.error(error.message || 'Login Faild')
            })
    }


    const handleLoginPopUp = () => {
        googleSingIn()
            .then(result => {
                setUser(result.user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                if (error.code === 'auth/invalid-credential') {
                    toast.error('Ivalid email or password')
                }
            })
    }


    return (
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="flex justify-center items-center min-h-screen text-base-content bg-base-200 dark:bg-base-100 -mt-5 select-none">
                <div className="mx-3">
                    <div className="w-full max-w-[450px] p-7 border border-gray-100 rounded-xl shadow-sm bg-base-100 dark:bg-base-300 dark:border-base-200 text-base-content">
                        <form onSubmit={handleLogin}>
                            <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
                            <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-base-content my-2 placeholder:text-base-content dark:border-base-200" type="email" name='email' ref={emailRef} placeholder='Email' />
                            <span className="relative w-full">
                                <input className="w-full p-3 rounded bg-base-200 border border-gray-100 outline-none text-[1rem] text-base-content my-2 placeholder:text-base-content dark:border-base-200" type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute cursor-pointer top-0 bottom-0 right-5">{showPassword ? <EyeClosed /> : <Eye />}</span>
                            </span>
                            <p className="text-blue-600 underline cursor-pointer">Forget Passowrd?</p>
                            <button className="btn btn-primary font-bold text-white w-full border-none outline-none mt-5">Login</button>
                            <p className="mt-2">Don't Have an Account <Link to='/resister' className="underline text-blue-600">Register</Link></p>
                        </form>
                        <div className="flex justify-center items-center mt-4">
                            <hr className="w-[45%]" />
                            <p className="px-1">Or</p>
                            <hr className="w-[45%]" />
                        </div>
                        <div className="mt-5">
                            <button onClick={handleLoginPopUp} className="btn bg-white text-black w-full border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg> Singin with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Login
