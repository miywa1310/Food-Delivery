import React from 'react'
import PlayStore from '../../images/play_store.png'
import AppStore from '../../images/app_store.png'

const MobileApp = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-[30px] my-[30px]' id='mobile-app'>
            <h2 className='text-[24px] sm:text-[32px] lg:text-[48px] w-[70%] text-center'>For Better Experince Download Just Eat App</h2>
            <div className="flex gap-[10px] justify-center items-center">
                <a href="https://play.google.com">
                    <img className='w-[130px] md:w-[200px]' src={PlayStore} alt="" />
                </a>
                <a href="https://www.apple.com/app-store"><img className='w-[130px] md:w-[200px]' src={AppStore} alt="" /></a>
            </div>
        </div>
    )
}

export default MobileApp