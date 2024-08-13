import React from 'react'

const Contact = () => {
  return (
    <div className='w-[90%] lg:w-[85%] mx-auto my-[30px] flex flex-col gap-[20px]  pb-[40px] items-center justify-center ' >
      <div className="flex flex-col gap-[20px] text-center ">
        <h2 className='text-[45px] '>Contact Us</h2>
        <p className='text-[16px] text-gray-500'>We consider all the drivers of change gives you the components <br /> you need to change to create a truly happens..</p>
      </div>
      <div className="bg-white p-[20px] shadow-md rounded-md w-full md:w-[80%] border-[1px] ">
        <form className='flex flex-col gap-[30px]'>
          <div className="flex justify-between gap-3 flex-col lg:flex-row">
            <div className="flex-1 flex flex-col">
              <label className='text-[16px] font-medium ' htmlFor="username">Your name:</label>
              <input className='py-[7px] px-[15px] text-[16px] border-[2px] border-orange-300 focus:border-orange-500 outline-none rounded-md' type="text" id='username' placeholder='Your name' />
            </div>

            <div className="flex-1 flex flex-col">
              <label className='text-[16px] font-medium ' htmlFor="email">Email:</label>
              <input className='py-[7px] px-[15px] text-[16px] border-[2px] border-orange-300 focus:border-orange-500 outline-none rounded-md' type="email" id='email' placeholder='Your email' />
            </div>

          </div>
          <div className="flex flex-col">
            <label className='text-[16px] font-medium ' htmlFor="message">Message:</label>
            <textarea placeholder='Message...' maxLength={300} className='h-[200px] resize-none py-[7px] px-[15px] text-[16px] border-[2px] border-orange-300 focus:border-orange-500 outline-none rounded-md' id="message"></textarea>
          </div>
          <div className="flex justify-end">
            <button className='py-[7px] px-[15px] bg-orange-500 hover:bg-orange-600 active:scale-95 rounded-md text-[18px] text-white font-medium shadow-md '>Send Message</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact