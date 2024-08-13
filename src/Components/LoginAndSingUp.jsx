import { BiX } from "react-icons/bi";
import React, { useState } from 'react'

const LoginAndSingUp = ({ setShowLogin }) => {
  const [state, setState] = useState("Sing up")
  return (
    <div className="w-[100%] h-[100vh] absolute bg-[#00000090] z-20 flex items-center justify-center ">
      <div className="w-[90%] lg:w-[85%] mx-auto flex items-center justify-center">
        <form action="" className="bg-white place-self-center flex flex-col gap-[15px] max-w-max border-[1px] shadow-md p-[20px] rounded-md">
          <div className="flex justify-between items center">
            <h2 className="text-[22px]">{state}</h2>
            <div onClick={() => setShowLogin(false)} className="text-[24px]"><BiX /></div>
          </div>
          <div className="flex flex-col gap-[10px]">
            {
              state === "Sing up" && <input className="w-full px-[10px] py-[5px] border-[1px] border-gray-400 rounded-md text-[14px]" type="text" placeholder="Enter your name" required />
            }
            <input className="w-full px-[10px] py-[5px] border-[1px] border-gray-400 rounded-md text-[14px]" type="email" placeholder="Enter your email" required />
            <input className="w-full px-[10px] py-[5px] border-[1px] border-gray-400 rounded-md text-[14px]" type="password" placeholder="Enter your password" required />
          </div>
          <button className="w-full py-[7px] flex justify-center items-center bg-orange-500  rounded-md text-[16px] text-white">{state === "Sing up" ? "Create account" : "Login"}</button>
          <div className=" flex gap-[10px] items-center justify-center">
            <input type="checkbox" name="" id="" />
            <small className="text-[14px] text-gray-500 mb-[10px]">By continuing, i agree to the terms of <br /> use & privacy policy</small>
          </div>
          {
            state === "Login" ? <p className="text-[16px] text-gray-500"> Create new account? <span className="cursor-pointer text-[16px] text-orange-500" onClick={() => setState("Sing up")}>Click here</span></p> :
              <p className="text-[16px] text-gray-500"> Already have an account? <span onClick={() => setState("Login")} className="cursor-pointer text-[16px] text-orange-500">Login here</span></p>
          }
        </form>
      </div>
    </div>
  )
}

export default LoginAndSingUp