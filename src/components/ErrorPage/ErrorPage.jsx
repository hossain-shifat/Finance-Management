import React from 'react'
import error from '../../assets/error.png'
import { Link } from 'react-router'
import { Undo2 } from 'lucide-react'

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
        <div className="space-y-3">
              <div className="text-center">
                  <h1 className="font-bold text-4xl">404</h1>
                  <h1 className="font-bold text-3xl tracking-wider">Oops!</h1>
              </div>
              <div className="relative">
                  <img src={error} className="w-[600px] " alt="" />
              </div>
              <div className="flex justify-center items-center mt-5">
                <Link to='/' className="btn btn-outline btn-accent hover:bg-transparent hover:text-accent"><Undo2 size={16} /> Return Home</Link>
              </div>
        </div>
    </div>
  )
}

export default ErrorPage
