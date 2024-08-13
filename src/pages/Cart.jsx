import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillMinusSquare } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContexts";
import { getFoodData } from "../Hooks/GetFoodData";


const Cart = () => {
  const { state, dispatch } = useContext(MainContext)
  const url = 'https://delivery-data-base.onrender.com/food_list'
  console.log(state);


  useEffect(() => {
    getFoodData(url, dispatch)
    dispatch({ type: "TOTAL_AMOUNT"})
  },[state.cartItems])

  if (state.cart.length ==0 ) {
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
    <div className='py-[30px] flex gap-[30px] md:flex-row flex-col  w-[90%] lg:w-[85%] mx-auto my-0'>
      <div className=" flex-1 flex flex-col w-full items-start gap-[10px] border-[1px] rounded-md p-[20px]">
        {
          state.cart.map(item => (
            <div key={item._id}>
              <div className="flex items-center justify-center  gap-4 w-full ">
                <div className="flex flex-1 items-center p-3 border rounded-lg">
                  <img className="rounded-md  " src={item.image} alt="" />
                </div>
                <div className="flex flex-[3] flex-col gap-[10px] w-full ">
                  <div className="flex w-full  justify-between">
                    <h4 className="text-[22px] font-bold ">{item.name}</h4>
                    <button onClick={() => dispatch({ type: "DELETE_FROM_CART", payload: item })} className="text-[24px] text-red-500 ">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                  <div className="text-[14px] text-gray-500">{item.description}</div>
                  <div className="flex w-full  justify-between">
                    <h4 className="text-[24px] text-orange-500 font-bold">${item.price}</h4>
                    <div className="flex gap-[20px] text-[18px] font-semibold rounded-[20px] px-[20px] py-[7px] bg-gray-200">
                      <div onClick={() => dispatch({ type: "MINUS_TO_CART", payload: item })} className="cursor-pointer">-</div>
                      <p>{state.cartItems[item._id]}</p>
                      <div onClick={() => dispatch({ type: "PLUS_TO_CART", payload: item })} className="cursor-pointer">+</div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className=" my-2 w-full bg-gray-200 border-[1px] dark:bg-gray-400" />
            </div>
          ))
        }


      </div>


      <div className="flex flex-1 flex-col w-full max-h-[400px] items-start gap-[10px] border-[1px] rounded-md p-[10px]">
        <div className=" flex flex-col gap-[10px] w-full">
          <h2 className="text-black font-bold text-[24px]" >Cart Totals</h2>
          <div className="flex flex-col gap-[10px] ">
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
        </div>
        <div className="w-full">
          <div className="w-full">
            <p className="mb-[10px]">If you have a promo code, Enter it here</p>
            <div className="w-full flex">
              <input className="rounded-md w-full p-[10px] px-[15px] bg-slate-100" type="text" placeholder="promo code" />
              <button className="px-[25px] rounded-md bg-black text-white" type="submit">Submit</button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-end">
          <Link to={"/order"}>
            <button className="p-[10px] text-[16px] mt-[20px] rounded-md hover:bg-orange-500 text-white bg-orange-400 max-w-max">PROCEED TO CHECKOUT</button>
          </Link>
        </div>

      </div>
    </div>
  )}


export default Cart