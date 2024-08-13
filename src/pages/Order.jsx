import React, { useContext } from 'react'
import { MainContext } from '../context/MainContexts'
import { Link } from 'react-router-dom'

const Order = () => {
  const { state } = useContext(MainContext)
  if (state.cart.length == 0) {
    return (
      <div className="min-h-[60vh] w-[90%] lg:w-[85%] mx-auto my-0 text-center flex flex-col justify-center items-center mb-[20px] ">
        <img className="w-[350px]" src="https://www.omegafoods.in/images/emptycart2.jpg" alt="" />
        <p className="text-[16px] text-gray-500 mb-[10px] max-w-[80%] md:max-w-[40%]">Your Cart is empty! You have no items added in the cart.  Explore and add products you like!
        </p>
        <Link to={"/menu"}><button className='btn'>View menu</button></Link>
      </div>
    )
  }
  return (
    <div className="py-[30px] w-[90%] lg:w-[85%] mx-auto my-0">
      <form className='flex md:flex-row flex-col gap-[50px] '>
        <div className="flex-1 w-full flex flex-col gap-[10px]  ">
          <h2 className='text-[30px] mb-[20px] font-semibold '>Delivery Information</h2>
          <div className="flex gap-2 w-full">
            <input required className='w-full border-[1px] border-gray-400 rounded-md py-[5px] px-[12px]' type="text" placeholder='First name' />
            <input required className='w-full border-[1px] border-gray-400 rounded-md py-[5px] px-[12px]' type="text" placeholder='Last name' />
          </div>
          <input required className='border-[1px] w-full border-gray-400 rounded-md py-[5px] px-[12px]' type="email" placeholder='Email address' />
          <input required className='border-[1px] w-full border-gray-400 rounded-md py-[5px] px-[12px]' type="text" placeholder='Street' />
          <div className="flex gap-2">
            <input required className='w-full border-[1px] border-gray-400 rounded-md py-[5px] px-[12px]' type="text" placeholder='City' />
            <input required className='w-full border-[1px] border-gray-400 rounded-md py-[5px] px-[12px]' type="text" placeholder='State' />
          </div>
          <div className="flex gap-2">
            <input required className='w-full border-[1px] border-gray-400 rounded-md py-[5px] px-[12px]' type="text" placeholder='Zip code' />
            <input required className='w-full border-[1px] border-gray-400 rounded-md py-[5px] px-[12px]' type="text" placeholder='Country' />
          </div>
          <input required className='w-full border-[1px] border-gray-400 rounded-md py-[5px] px-[12px]' type="tel" placeholder='Phone' />
        </div>
        <div className="flex-1 flex flex-col gap-[10px]">
          <h2 className="text-[30px] mb-[20px] font-semibold" >Cart Totals</h2>
          <div className="">
            <div className=" flex justify-between">
              <p>Subtotal</p>
              <p>${state.totalAmount}</p>
            </div>
            <div className=" flex justify-between">
              <p>Delivery Fee</p>
              <p>${state.deliveryFee}</p>
            </div>
            <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-400' />
            <div className=" flex justify-between">
              <h4 className="text-black font-bold text-[18px]">Total</h4>
              <p>${state.totalAmount + state.deliveryFee}</p>
            </div>
          </div>
          <div className="w-full flex flex-col items-end">
            <button className="p-[10px] mt-[20px] rounded-md hover:bg-orange-500 text-white bg-orange-400 max-w-max">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Order