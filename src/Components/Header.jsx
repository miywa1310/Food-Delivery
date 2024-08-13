import { HiOutlineMail } from "react-icons/hi";
import { BiPhone } from "react-icons/bi";
import { BsFillBasket2Fill, BsTwitter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
// import { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { MainContext } from "../context/MainContexts";
import logo from "../images/logo.png"
import { CgFacebook } from "react-icons/cg";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = ({ setShowLogin }) => {
    const [showmenu, setShowmenu] = useState(false)
    const { state } = useContext(MainContext)
    const { pathname } = useLocation()

    return (
        <div className="">
            <div className="bg-black w-full text-[#F9F9F7] py-[10px] ">
                <div className="w-[90%] lg:w-[85%] mx-auto my-0 flex justify-between items-center ">
                    <div className="">
                        <ul className='flex md:gap-[25px]'>
                            <li><a href="tel:+1-212-4560-7890" className='hidden text-[#fafaf3d1] text-[18px] md:flex gap-[5px] items-center justify-center'> <BiPhone /><p>+1-212-4560-7890</p></a></li>
                            <li><a href="#" className=' text-[#fafaf3d1] text-[18px] flex gap-[5px] items-center justify-center'> <HiOutlineMail /> <p>justeat@gmail.com</p> </a></li>
                        </ul>
                    </div>
                    <div className="flex gap-[10px]">
                        <a className='text-white text-[20px]' href="https://www.facebook.com"><CgFacebook /></a>
                        <a className='text-white text-[20px]' href="https://twitter.com"><BsTwitter /></a>
                        <a className='text-white text-[20px]' href="https://linkedin.com">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <div className=" bg-white z-6 w-full ">
                <div className="flex justify-between items-center   w-[90%] lg:w-[85%] mx-auto my-0  ">
                    <Link to={"/"}>
                        <div className="logo cursor-pointer">
                            <img src={logo} className='cursor-pointer w-[150px]' alt="" />
                        </div>
                    </Link>
                    <ul className="hidden md:flex justify-between gap-[15px] text-[18px]  items-center">
                        <Link to='/' className={`cursor-pointer ${pathname == "/" && "active"}`} >Home</Link>
                        <Link to={"/menu"} className={`cursor-pointer ${pathname == "/menu" && "active"}`} >Menu</Link>
                        <Link to={"/about"} className={`cursor-pointer ${pathname == "/about" && "active"}`} >About</Link>
                        <Link to={"/contact"} className={`cursor-pointer ${pathname == "/contact" && "active"}`} >Contact Us</Link>
                    </ul>
                    <div className="flex justify-between gap-[20px] items-center">
                        <div className="relative ">
                            <Link to='/cart'><BsFillBasket2Fill className="text-[24px] cursor-pointer " /></Link>
                            <span className="absolute w-[20px] h-[20px] flex text-[12px] justify-center items-center bg-orange-300 -top-3 -right-3 rounded-[20px]">{state.cart.length}</span>
                        </div>
                        <button onClick={() => setShowLogin(true)} className=" tex-[14px] md:text-[18px] border-[1px] border-orange-200 rounded-[40px] px-[15px] py-[5px] cursor-pointer hover:bg-orange-100 hover:border-gray-400 ">Sign In</button>
                        <div onClick={() => setShowmenu(prev => prev ? !prev : !prev)} className="text-[20px] block md:hidden cursor-pointer p-[5px] hover:bg-slate-200 rounded-md ">
                            {showmenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                        </div>
                    </div>
                    <div onClick={() => setShowmenu(prev => prev ? !prev : !prev)} className={`fixed bg-white duration-200 z-30  ${showmenu ? "left-0" : "left-[-100%]"} top-0 bottom-0 w-[250px] flex justify-center pt-[30px]`}>
                        <ul className=" flex flex-col gap-[15px] text-[18px]">
                            <Link to='/' className={`cursor-pointer ${pathname == "/" && "active"}`} >Home</Link>
                            <Link to={"/menu"} className={`cursor-pointer ${pathname == "/menu" && "active"}`} >Menu</Link>
                            <Link to={"/about"} className={`cursor-pointer ${pathname == "/about" && "active"}`} >About</Link>
                            <Link to={"/contact"} className={`cursor-pointer ${pathname == "/contact" && "active"}`} >Contact Us</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header