import React from 'react'
import { Link } from 'react-router-dom'

const HeaderBottom = () => {
  return (
    <div className="headerBottom w-[100%] min-h-[43vw] flex flex-col items-center justify-center text-center h-full w-full gap-[10px]">
      
        <h2 className='text-black  text-[5.5vw]  max-w-[40%] '>Best food for
        your taste</h2>
        <p className='text-[1.2vw] max-w-[30%] '>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
        <div className="">
          <Link to={"/menu"}><button className='btn'>Explore menu</button></Link>
          <Link to={"/about"}><button className='btn'>About Us</button></Link>
          
        </div>
    </div>
  )
}

export default HeaderBottom