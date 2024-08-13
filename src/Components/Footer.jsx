import { CgFacebook } from "react-icons/cg"; 
import { BsTwitter } from "react-icons/bs"; 
import { FaLinkedinIn } from "react-icons/fa"; 
import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className='w-ful bg-[#070300e3]' id='footer'>
      <div className="w-[85%] mx-auto my-0 flex flex-col gap-[30px] py-[50px] ">
        <div className=" flex flex-wrap gap-[30px] justify-between">
          <div className="flex flex-col gap-[20px]">
            <img className='w-[130px] sm:w-[150px]' src={logo} alt="" />
            <p className='max-w-[420px] text-[#fafaf3d1]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate sint cum corporis totam minima. Ipsa, omnis nesciunt dignissimos ipsum aliquid ratione a laborum minus esse nostrum eligendi non! </p>
            <div className="flex gap-[10px]">
              <a className='text-white text-[26px]' href="https://www.facebook.com"><CgFacebook /></a>
              <a className='text-white text-[26px]' href="https://twitter.com"><BsTwitter /></a>
              <a className='text-white text-[26px]' href="https://linkedin.com">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] text-white">
            <h2 className='text-[22px] sm:text-[26px] font-semibold '>COMPANY</h2>
            <ul className='flex flex-col gap-[5px]'>
              <li className=' text-[#fafaf3d1] text-[18px]'>Home</li>
              <li className=' text-[#fafaf3d1] text-[18px]'>About us</li>
              <li className=' text-[#fafaf3d1] text-[18px]'>Delivery</li>
              <li className=' text-[#fafaf3d1] text-[18px]'>Privacy policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[10px] text-white">
            <h2 className='text-[22px] sm:text-[26px] font-semibold '>GET IN TOUCH</h2>
            <ul className='flex flex-col gap-[5px]'>
              <li><a href="tel:+1-212-4560-7890" className='text-[#fafaf3d1] text-[18px]'>+1-212-4560-7890</a></li>
              <li className=' text-[#fafaf3d1] text-[18px]'>justeat@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="flex text-[16px] text-center justify-center items-center text-[#fafaf3d1] ">
           <p>Copyright 2024 ©️ JustEat.com - All right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer