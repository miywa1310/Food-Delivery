import { MdOutlineShoppingCart } from "react-icons/md"; 
import { MdTurnedInNot } from "react-icons/md"; 
import { AiOutlineClockCircle } from "react-icons/ai"; 
import React from 'react'

const AboutVidios = () => {
    return (
        <div className=' w-full my-[30px]'>
            <div className="w-[90%] lg:w-[85%] mx-auto flex items-start lg:items-center gap-[30px] lg:flex-row flex-col">
                <div className="flex-[2]">
                    <video loop muted autoPlay className='w-[100%] h-auto rounded-md'>
                        <source type="video/mp4" src="https://videos.pexels.com/video-files/5498709/5498709-uhd_2560_1440_25fps.mp4" />
                    </video>
                </div>
                <div className="flex-1 flex flex-col gap-[20px] justify-start ">
                    <h2 className='text-[40px]'>Fastest Food Delivery in City</h2>
                    <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex gap-[10px] items-center text-[20px]">
                            <div className="w-[40px] h-[40px] flex items-center justify-center text-white text-[24px] rounded-full bg-red-700 text-bold"><AiOutlineClockCircle /></div>
                            <p>Delivery within 30 minutes</p>
                        </div>
                        <div className="flex gap-[10px] items-center text-[20px]">
                            <div className="w-[40px] h-[40px] flex items-center justify-center text-white text-[24px] rounded-full bg-red-700 text-bold"><MdTurnedInNot /></div>
                            <p>Best Offer & Prices</p>
                        </div>
                        <div className="flex gap-[10px] items-center text-[20px]">
                            <div className="w-[40px] h-[40px] flex items-center justify-center text-white text-[24px] rounded-full bg-red-700 text-bold"><MdOutlineShoppingCart /></div>
                            <p>Online Services Available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutVidios