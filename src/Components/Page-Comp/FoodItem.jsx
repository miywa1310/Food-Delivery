import { FaSpinner } from "react-icons/fa"; 
import { BsArrowRightShort } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsCartPlus } from "react-icons/bs";
import React, { useContext } from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { MainContext } from '../../context/MainContexts';
import { Link } from "react-router-dom";

const FoodItem = ({ item }) => {

    const { state, dispatch } = useContext(MainContext)

    if (!item) {
        return (
            <div className="animate-pulse flex flex-col rounded-[12px] border-[1px] border-gray-100 gap-[10px] w-[270px] shadow-md pb-[10px] ">
                <div className="animate-pulse w-full h-[250px]  rounded-t-[12px] border-[1px] flex justify-center items-center text-[20px] ">
                    <FaSpinner  className="animate-spin"/>
                </div>

                <div className="px-[10px]">
                    <div className="flex justify-between items-center gap-[5px]">
                        <span className="text-[18px] animate-pulse">Loading...</span>
                        <div className="flex ">
                            <AiOutlineStar className="text-yellow-600" />
                            <AiOutlineStar className="text-yellow-600" />
                            <AiOutlineStar className="text-yellow-600" />
                            <AiOutlineStar className="text-yellow-600" />
                            <AiOutlineStar className="text-yellow-600" />
                        </div>
                    </div>
                    <span className="description text-gray-500 text-[14px] animate-pulse">description...</span>
                    <h3 className="text-[24px] text-orange-500 animate-pulse">price...</h3>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col rounded-[12px] border-[1px] border-gray-100 gap-[10px] w-[270px] shadow-md pb-[10px] ">
            <div className="relative">
                <img className="w-full h-[250px]  rounded-t-[12px]" src={item.image} alt="" />
                {
                    !state.cart.find(cartItem => item._id == cartItem._id) ? <button onClick={() => dispatch({ type: "ADD_CART_DATA", payload: item })} className="absolute w-[30px] h-[30px] bottom-[2px] right-[2px] cursor-pointer p-[5px]backdrop-blur-[3px] bg-black bg-opacity-60 rounded-md flex items-center justify-center text-[20px] text-white"><BsCartPlus /></button>
                        : <Link to={"/cart"}>
                            <div className="flex gap-[5px] items-center absolute  bottom-[2px] right-[2px] cursor-pointer h-[30px] max-w-max  p-[5px] backdrop-blur-[3px] bg-black bg-opacity-30 rounded-md text-[22px] text-green-500">
                                <button className=" "  ><BsCart /></button>
                                <span><BsArrowRightShort /></span>
                            </div>
                        </Link>
                }
            </div>

            <div className="px-[10px]">
                <div className="flex justify-between items-center gap-[5px]">
                    <span className="text-[18px]">{item.name}</span>
                    <div className="flex ">
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiFillStar className="text-yellow-600" />
                        <AiOutlineStar className="text-yellow-600" />
                    </div>
                </div>
                <span className="description text-gray-500 text-[14px]">{item.description}</span>
                <h3 className="text-[24px] text-orange-500">${item.price}</h3>
            </div>
        </div>
    )
}

export default FoodItem