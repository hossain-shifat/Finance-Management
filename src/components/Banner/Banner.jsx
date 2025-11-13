import React from 'react'
import bannerImg from '../../assets/bannerImg.png'
import { ArrowRight } from 'lucide-react'

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-between gap-4 bg-base-200 p-10 text-center md:m-4 md:rounded-2xl text-white">
            <div className="flex flex-col justify-center items-center gap-2 md:pl-5">
                <h1 className="font-bold text-base-content text-2xl">Consistency builds your path to success.</h1>
                <p className="text-base-content max-w-[450px]">Every small action today builds tomorrow. Consistency turns tiny steps into achievements. Push yourself now; your efforts create opportunities.</p>
                <button className="btn btn-primary ">Get Started <ArrowRight size={18} /></button>
            </div>
            <div className="">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    )
}

export default Banner
