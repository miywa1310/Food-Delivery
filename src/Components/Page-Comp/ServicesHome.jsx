import React from 'react'
import Img1 from '../../images/services-1.svg'
import Img2 from '../../images/services-2.svg'
import Img3 from '../../images/services-3.svg'
import Img4 from '../../images/services-4.svg'

const ServicesHome = () => {
  return (
    <div className='w-full '>
       <div className="w-[90%] lg:w-[85%] mx-auto my-0 py-[30px] md:py-[50px]flex flex-col gap-[30px]  ">
          <h2 className='text-[40px] md:text-[55px]'>We also offer unique <br /> services for your events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-[15px] justify-between mt-[50px] ">
            <div className="flex flex-col gap-[20px] ">
                <img src={Img1} alt="" />
                <h2 className='text-[24px] font-bold'>Caterings</h2>
                <div className="">In the new era of technology we look in the future with certainty for life.</div>
            </div>
            <div className="flex flex-col gap-[20px] ">
                <img src={Img2} alt="" />
                <h2 className='text-[24px] font-bold'>Birthdays</h2>
                <div className="">In the new era of technology we look in the future with certainty for life.</div>
            </div>
            <div className="flex flex-col gap-[20px] ">
                <img src={Img4} alt="" />
                <h2 className='text-[24px] font-bold'>Events</h2>
                <div className="">In the new era of technology we look in the future with certainty for life.</div>
            </div>
            <div className="flex flex-col gap-[20px] ">
                <img className='rounded-md' src={Img3} alt="" />
                <h2 className='text-[24px] font-bold'>Weddings</h2>
                <div className="">In the new era of technology we look in the future with certainty for life.</div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default ServicesHome