import { RxAvatar } from "react-icons/rx"; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md"; 
import { MdKeyboardArrowLeft } from "react-icons/md"; 
import React, { useContext, useEffect } from 'react'
import Slider from 'react-slick';
import { MainContext } from '../../context/MainContexts';
import { getFoodData } from '../../Hooks/GetFoodData';

const AboutComments = () => {
    const { state, dispatch } = useContext(MainContext)
    const url = `https://comments-date-base.onrender.com/comments`

    useEffect(() => {
        getFoodData(url, dispatch)
    }, [])

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={` rounded-md w-[30px] h-[30px] absolute top-[50%] translate-y-[-50%] right-[-30px] bg-orange-500 hover:bg-orange-600 active:scale-95 flex flex-col items-center justify-center text-[24px] text-white font-bold`} onClick={onClick}>
                <MdOutlineKeyboardArrowRight />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={` rounded-md w-[30px] h-[30px] absolute top-[50%] translate-y-[-50%] left-[-30px] bg-orange-500 hover:bg-orange-600 active:scale-95 flex flex-col items-center justify-center text-[24px] text-white font-bold`} onClick={onClick}>
                <MdKeyboardArrowLeft />
            </div>
        );

    }
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <div className='w-full bg-[#fafafa] py-[40px]'>
            <div className="w-[82%] lg:w-[80%] mx-auto">
                <div className="w-full text-center">
                    <h2 className='text-[45px]'>What Our Customers Say</h2>
                </div>
                <div className="my-[30px] mb-[50px] ">
                    <Slider {...settings}>
                        {
                            state.loadingFoods?
                            [1,2,3].map(item=>(
                                <div key={item} className="animate-pulse p-[10px] mt-[30px] border-[1px] rounded-md bg-[#F9F9F7] overflow-hidden shadow-md">
                                    <div className="h-[200px] flex flex-col justify-between flex flex-col gap-[20px]  ">
                                        <h3 className='text-[20px] animate-pulse font-semibold text-red-200 '>Loading...</h3>
                                        <div className="sm:max-h-[150px] sm:min-h-[50px] text-[16px] text-gray-300 overflow-y-auto flex">
                                            <p>comment...</p>
                                        </div>
                                        <hr className='border-[1px] text-gray-200 ' />
                                        <div className="flex gap-[20px] text-gray-400">
                                            <div className='rounded-full w-[70px] h-[70px] flex items-start justify-center text-[40px]'><RxAvatar /></div>
                                            <div className="flex flex-col gap-[5px]">
                                                <h3 className='text-[16px] font-semibold'>name...</h3>
                                                <p>loading...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :state.foodList.map(item => (
                                <div key={item._id} className=" p-[10px] mt-[30px] border-[1px] rounded-md bg-[#F9F9F7] overflow-hidden shadow-md">
                                    <div className="h-[320px] flex flex-col justify-between flex flex-col gap-[20px]  ">
                                        <h3 className='text-[24px] font-semibold text-[#AD343E] '>{item.title}</h3>
                                        <div className="sm:max-h-[150px] sm:min-h-[50px] text-[16px] overflow-y-auto flex">
                                            <p>{item.comment}</p>
                                        </div>
                                        <hr className='border-[1px] text-gray-200 ' />
                                        <div className="flex gap-[20px]">
                                            <img src={item.avatar} alt="" className='rounded-full w-[70px] h-[70px] ' />
                                            <div className="flex flex-col gap-[5px]">
                                                <h3 className='text-[16px] font-semibold'>{item.fullName}</h3>
                                                <p>{item.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default AboutComments