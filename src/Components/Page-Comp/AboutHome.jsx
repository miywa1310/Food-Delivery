import { GoLocation } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import React from 'react'
import HomeAboutImg from '../../images/Home-About.png'
import About from '../../images/About.svg'
import { BiPhone } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { Link, useLocation } from "react-router-dom";

const AboutHome = () => {
    const { pathname } = useLocation()
    return (
        <div className={`w-[90%] lg:w-[85%] mx-auto ${pathname=="/"&& "bg-[#fafafa]"}`}>
            <div className="flex gap-[20px] py-[30px] flex-col lg:flex-row ">
                <div className="flex-1  relative mb-[50px]">
                    <div className="z-0">
                        <img className="w-[350px] md:w-[500px] " src={pathname == "/" ? HomeAboutImg : About} />
                    </div>
                    <div className="absolute hidden top-[150px] left-[150px]  md:top-[290px] md:left-[250px] z-10 w-[230px] h-[200px] md:w-[300px] md:h-[230px]  bg-[#474747] p-[20px] rounded-md sm:flex gap-3 text-white flex-col ">
                        <h2 className="text-[20px] md:text-[24px] ">Come and visit us</h2>
                        <ul className='flex gap-[10px] md:gap-[15px] flex-col text-[16px] text-[#fafaf3d1]'>
                            <li><a href="tel:+1-212-4560-7890" className=' flex gap-[5px] items-center justify-start'> <BiPhone /><p>+1-212-4560-7890</p></a></li>
                            <li className=' flex gap-[5px] items-center justify-start'> <HiOutlineMail /> <p>justeat@gmail.com</p> </li>
                            <li className=' flex gap-[5px] items-center justify-start text-[14px]'><GoLocation className="text-[28px]" /> <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p> </li>
                        </ul>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-[20px] justify-center ">
                    <h2 className="text-[40px] md:text-[55px] font-semibold">We provide healthy food for your family.</h2>
                    <div className="text-[#2C2F24] text-[18px]"><p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p></div>
                    <div className="text-[#414536] text-[16px]"><span>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</span></div>
                    {
                        pathname == "/" &&
                            <Link to={'/about'}>
                                <button className="btn">More About Us</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutHome